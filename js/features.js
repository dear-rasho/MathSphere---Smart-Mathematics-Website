
 (function () {
    "use strict";

    const $ = (selector, root = document) =>
        root.querySelector(selector);

    const $$ = (selector, root = document) =>
        [...root.querySelectorAll(selector)];

    const toast = (message) => {
        if (
            window.MathSphere &&
            typeof window.MathSphere.toast === "function"
        ) {
            window.MathSphere.toast(message);
        } else {
            alert(message);
        }
    };
const GEMINI_API_KEY = "";

    const GEMINI_API_URL ="https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent";

    const SYSTEM_PROMPT = `
You are MathSphere AI, a professional mathematics tutor.

Understand the user's question and answer exactly according to the user's request.

You can solve:
- Mathematics questions
- Equations
- Algebra
- Geometry
- Trigonometry
- Statistics
- Probability
- Calculus
- Word problems
- Mathematical concepts
- Formulas
- Step-by-step solutions

Rules:
1. Give mathematically correct answers.
2. Follow the user's requested answer style.
3. If the user asks for only the answer, keep it concise.
4. If the user asks for explanation, explain clearly.
5. If the user asks for steps, show the steps.
6. For equations, show algebraic transformations.
7. For geometry, use the correct formula or theorem.
8. For trigonometry, use the correct identity or formula.
9. For statistics and probability, show calculations when useful.
10. For calculus, show the required mathematical steps.
11. For word problems, identify important values before solving.
12. Never invent missing information.
13. If the question is unclear, ask for clarification.
14. Use simple student-friendly language.
15. Follow any specific format requested by the user.
16. Keep answers focused.
17. Use Markdown mathematical notation when useful.
18. Use LaTeX for mathematical expressions.

Examples of mathematical notation:
$ x^2 + 5x + 6 $
$$
x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}
$$

Do not put the entire answer inside a code block.
`;

    function escapeHTML(value) {
        const div = document.createElement("div");
        div.textContent = String(value ?? "");
        return div.innerHTML;
    }

    function loadMathJax() {
        if (window.MathJax && window.MathJax.typesetPromise) {
            return Promise.resolve();
        }

        if (window.__mathJaxLoading) {
            return window.__mathJaxLoading;
        }

        window.MathJax = {
            tex: {
                inlineMath: [
                    ["\\(", "\\)"],
                    ["$", "$"]
                ],
                displayMath: [
                    ["\\[", "\\]"],
                    ["$$", "$$"]
                ]
            },
            options: {
                skipHtmlTags: [
                    "script",
                    "noscript",
                    "style",
                    "textarea",
                    "pre",
                    "code"
                ]
            }
        };

        window.__mathJaxLoading = new Promise(
            (resolve, reject) => {
                const script =
                    document.createElement("script");

                script.src =
                    "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";

                script.async = true;

                script.onload = () => resolve();
                script.onerror = () =>
                    reject(
                        new Error(
                            "Math renderer could not be loaded."
                        )
                    );

                document.head.appendChild(script);
            }
        );

        return window.__mathJaxLoading;
    }

    function formatAIResponse(text) {
        if (!text) {
            return "";
        }

        let result = escapeHTML(text);

        result = result.replace(
            /```(?:markdown|text)?\s*([\s\S]*?)```/gi,
            "<pre class=\"ai-code\">$1</pre>"
        );

        result = result.replace(
            /`([^`]+)`/g,
            "<code>$1</code>"
        );

        result = result.replace(
            /^###\s+(.*)$/gm,
            "<h4>$1</h4>"
        );

        result = result.replace(
            /^##\s+(.*)$/gm,
            "<h3>$1</h3>"
        );

        result = result.replace(
            /^#\s+(.*)$/gm,
            "<h2>$1</h2>"
        );

        result = result.replace(
            /^\*\*(.*?)\*\*$/gm,
            "<strong>$1</strong>"
        );

        result = result.replace(
            /\*\*(.*?)\*\*/g,
            "<strong>$1</strong>"
        );

        result = result.replace(
            /^\*(.*?)\*$/gm,
            "<em>$1</em>"
        );

        result = result.replace(
            /^(\d+)\.\s+(.*)$/gm,
            '<div class="ai-step"><strong>$1.</strong> $2</div>'
        );

        result = result.replace(
            /^[•]\s+(.*)$/gm,
            '<div class="ai-bullet">• $1</div>'
        );

        result = result.replace(
            /^[-*]\s+(?!\*)(.*)$/gm,
            '<div class="ai-bullet">• $1</div>'
        );

        result = result.replace(
            /\n{3,}/g,
            "\n\n"
        );

        result = result.replace(
            /\n\n/g,
            "<br><br>"
        );

        result = result.replace(
            /\n/g,
            "<br>"
        );

        return result;
    }

    function showAILoading() {
        const solution = $("#aiSolution");

        if (!solution) {
            return;
        }

        solution.innerHTML = `
            <div class="ai-loading">
                <div class="ai-loading-spinner"></div>
                <strong>MathSphere AI is solving...</strong>
                <p>Please wait...</p>
            </div>
        `;
    }

    function showAIError(message) {
        const solution = $("#aiSolution");

        if (!solution) {
            return;
        }

        solution.innerHTML = `
            <div class="ai-error">
                <strong>AI Solver Error</strong>
                <p>${escapeHTML(message)}</p>
            </div>
        `;
    }

    async function askGemini(question) {
        if (
            !GEMINI_API_KEY ||
            GEMINI_API_KEY ===
                "PASTE_YOUR_NEW_GEMINI_API_KEY_HERE"
        ) {
            throw new Error(
                "Gemini API key is not configured."
            );
        }

        const url =
            `${GEMINI_API_URL}?key=${encodeURIComponent(
                GEMINI_API_KEY
            )}`;

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                system_instruction: {
                    parts: [
                        {
                            text: SYSTEM_PROMPT
                        }
                    ]
                },
                contents: [
                    {
                        role: "user",
                        parts: [
                            {
                                text: question
                            }
                        ]
                    }
                ],
                generationConfig: {
                    temperature: 0.2,
                    maxOutputTokens: 3000
                }
            })
        });

        let data;

        try {
            data = await response.json();
        } catch {
            throw new Error(
                "Invalid response received from Gemini."
            );
        }

        if (!response.ok) {
            const message =
                data?.error?.message ||
                `Gemini request failed (${response.status}).`;

            throw new Error(message);
        }

        const answer =
            data?.candidates?.[0]?.content?.parts
                ?.map(part => part?.text || "")
                .join("")
                .trim();

        if (!answer) {
            const finishReason =
                data?.candidates?.[0]?.finishReason;

            if (finishReason) {
                throw new Error(
                    `Gemini did not return an answer. Reason: ${finishReason}`
                );
            }

            throw new Error(
                "Gemini returned an empty answer."
            );
        }

        return answer;
    }

    async function renderAIAnswer(solution, answer) {
        solution.innerHTML = `
            <div class="ai-answer">
                <div class="ai-answer-header">
                    <span>🤖</span>
                    <strong>MathSphere AI Solution</strong>
                </div>

                <div class="ai-answer-content">
                    ${formatAIResponse(answer)}
                </div>
            </div>
        `;

        try {
            await loadMathJax();

            if (
                window.MathJax &&
                typeof window.MathJax.typesetPromise ===
                    "function"
            ) {
                await window.MathJax.typesetPromise([
                    solution
                ]);
            }
        } catch (error) {
            console.error(
                "Math renderer error:",
                error
            );
        }
    }

    async function solveWithAI() {
        const input = $("#aiQuestion");
        const solution = $("#aiSolution");
        const button = $("#solveWithAI");

        if (!input || !solution) {
            return;
        }

        const question = input.value.trim();

        if (!question) {
            solution.innerHTML = `
                <div class="ai-warning">
                    <strong>Please enter a question.</strong>
                    <p>Example: Solve 2x + 5 = 15</p>
                </div>
            `;

            input.focus();
            return;
        }

        if (button) {
            button.disabled = true;
            button.dataset.originalText =
                button.textContent;
            button.textContent = "Solving...";
        }

        showAILoading();

        try {
            const answer =
                await askGemini(question);

            await renderAIAnswer(
                solution,
                answer
            );
        } catch (error) {
            console.error(
                "MathSphere AI Error:",
                error
            );

            showAIError(
                error?.message ||
                "Unable to get an answer from Gemini."
            );
        } finally {
            if (button) {
                button.disabled = false;
                button.textContent =
                    button.dataset.originalText ||
                    "Solve Question";
            }
        }
    }

    function setupAIInput() {
        const input = $("#aiQuestion");

        if (!input) {
            return;
        }

        input.addEventListener(
            "keydown",
            event => {
                if (
                    event.key === "Enter" &&
                    !event.shiftKey
                ) {
                    event.preventDefault();
                    solveWithAI();
                }
            }
        );
    }

    function setupAIButton() {
        const button = $("#solveWithAI");

        if (!button) {
            return;
        }

        button.addEventListener(
            "click",
            solveWithAI
        );
    }

    function solveMathQuestion(raw) {
        const q = raw
            .trim()
            .replace(/−/g, "-");

        if (!q) {
            return (
                "<strong>Please enter a mathematical question.</strong>"
            );
        }

        try {
            if (
                /^[0-9+\-*/().\s%^πe]+$/i.test(q)
            ) {
                if (
                    window.MathSphere &&
                    typeof window.MathSphere.evaluate ===
                        "function"
                ) {
                    const result =
                        window.MathSphere.evaluate(q);

                    return `
                        <strong>Answer:</strong>
                        ${escapeHTML(result)}
                    `;
                }
            }
        } catch {}

        const linear = q.match(
            /^\s*([+-]?\d*\.?\d*)x\s*([+-]\s*\d*\.?\d+)\s*=\s*([+-]?\d*\.?\d+)\s*$/i
        );

        if (linear) {
            const a = Number(
                linear[1] === ""
                    ? 1
                    : linear[1] === "-"
                        ? -1
                        : linear[1]
            );

            const b = Number(
                linear[2].replace(/\s/g, "")
            );

            const c = Number(
                linear[3]
            );

            if (a === 0) {
                return (
                    "<strong>Invalid equation.</strong>"
                );
            }

            const x =
                (c - b) / a;

            return `
                <strong>Step 1:</strong>
                ${a}x ${b >= 0 ? "+" : "-"} ${Math.abs(b)} = ${c}
                <br><br>
                <strong>Step 2:</strong>
                ${a}x = ${c - b}
                <br><br>
                <strong>Step 3:</strong>
                x = ${Number(x.toFixed(6))}
            `;
        }

        const quadratic = q.match(
            /^\s*([+-]?\d*\.?\d*)x\^2\s*([+-]\s*\d*\.?\d+)x\s*([+-]\s*\d*\.?\d+)\s*=\s*0\s*$/i
        );

        if (quadratic) {
            const a = Number(
                quadratic[1] || 1
            );

            const b = Number(
                quadratic[2].replace(/\s/g, "")
            );

            const c = Number(
                quadratic[3].replace(/\s/g, "")
            );

            const discriminant =
                b * b - 4 * a * c;

            if (discriminant < 0) {
                return `
                    <strong>Discriminant:</strong>
                    ${discriminant}
                    <br><br>
                    The equation has no real roots.
                `;
            }

            const x1 =
                (-b + Math.sqrt(discriminant)) /
                (2 * a);

            const x2 =
                (-b - Math.sqrt(discriminant)) /
                (2 * a);

            return `
                <strong>Step 1:</strong>
                a = ${a}, b = ${b}, c = ${c}
                <br><br>
                <strong>Step 2:</strong>
                Discriminant = b² − 4ac = ${discriminant}
                <br><br>
                <strong>Step 3:</strong>
                x₁ = ${Number(x1.toFixed(6))}
                <br>
                x₂ = ${Number(x2.toFixed(6))}
            `;
        }

        return null;
    }

    const importantQuestions = [
        "Solve 2x + 5 = 15",
        "Find the HCF of 24 and 36",
        "What is the quadratic formula?",
        "Find the area of a circle with radius 7",
        "Explain Pythagoras theorem"
    ];

    const syllabusData = {
        "Class 9": [
            "Matrices and Determinants",
            "Real and Complex Numbers",
            "Logarithms",
            "Algebraic Expressions",
            "Linear Equations",
            "Geometry",
            "Coordinate Geometry",
            "Trigonometry",
            "Statistics"
        ],
        "Class 10": [
            "Quadratic Equations",
            "Theory of Quadratic Equations",
            "Variations",
            "Partial Fractions",
            "Sets and Functions",
            "Geometry",
            "Trigonometry",
            "Statistics"
        ],
        "Class 11": [
            "Number Systems",
            "Matrices",
            "Sequences and Series",
            "Permutations and Combinations",
            "Probability",
            "Functions",
            "Trigonometry"
        ],
        "Class 12": [
            "Functions and Limits",
            "Differentiation",
            "Integration",
            "Analytical Geometry",
            "Vectors",
            "Probability",
            "Statistics"
        ]
    };

    function renderSyllabus() {
        const container =
            $("#syllabusContent");

        if (!container) {
            return;
        }

        let html = "";

        Object.entries(
            syllabusData
        ).forEach(
            ([className, topics]) => {
                html += `
                    <div class="syllabus-class">
                        <h3>
                            ${escapeHTML(className)}
                        </h3>
                        <ul>
                `;

                topics.forEach(topic => {
                    html += `
                        <li>
                            ${escapeHTML(topic)}
                        </li>
                    `;
                });

                html += `
                        </ul>
                    </div>
                `;
            }
        );

        container.innerHTML = html;
    }

    function setupFeatureButtons() {
        $$(".feature-button").forEach(
            button => {
                button.addEventListener(
                    "click",
                    function (event) {
                        const target =
                            this.getAttribute(
                                "href"
                            );

                        if (!target) {
                            return;
                        }

                        const section =
                            document.querySelector(
                                target
                            );

                        if (section) {
                            event.preventDefault();

                            section.scrollIntoView({
                                behavior:
                                    "smooth"
                            });
                        }
                    }
                );
            }
        );
    }

    function setupGlobalSearch() {
        const input =
            $("#globalSearch");

        const button =
            $("#searchButton");

        if (!input || !button) {
            return;
        }

        function performSearch() {
            const query =
                input.value.trim();

            if (!query) {
                toast(
                    "Please enter something to search."
                );
                return;
            }

            const aiInput =
                $("#aiQuestion");

            if (aiInput) {
                aiInput.value = query;

                const aiSection =
                    $("#ai-solver");

                if (aiSection) {
                    aiSection.scrollIntoView({
                        behavior:
                            "smooth"
                    });
                }

                setTimeout(
                    solveWithAI,
                    400
                );
            }
        }

        button.addEventListener(
            "click",
            performSearch
        );

        input.addEventListener(
            "keydown",
            event => {
                if (event.key === "Enter") {
                    event.preventDefault();
                    performSearch();
                }
            }
        );
    }

    function setupPracticeTests() {
        const startButton =
            $("#startPractice");

        const practiceClass =
            $("#practiceClass");

        const practiceTest =
            $("#practiceTest");

        if (
            !startButton ||
            !practiceClass ||
            !practiceTest
        ) {
            return;
        }

        startButton.addEventListener(
            "click",
            function () {
                const selectedClass =
                    practiceClass.value;

                if (!selectedClass) {
                    toast(
                        "Please select a class first."
                    );
                    return;
                }

                practiceTest.innerHTML = `
                    <div class="practice-question">
                        <h3>
                            Practice Test - Class
                            ${escapeHTML(
                                selectedClass
                            )}
                        </h3>

                        <p>
                            Ask a mathematics question
                            in the AI Solver to practice.
                        </p>

                        <button
                            type="button"
                            id="openAISolver"
                        >
                            Open AI Solver
                        </button>
                    </div>
                `;

                $("#openAISolver")?.addEventListener(
                    "click",
                    () => {
                        $("#ai-solver")?.scrollIntoView({
                            behavior:
                                "smooth"
                        });
                    }
                );
            }
        );
    }

    function setupAdvancedTools() {
        $$(".tools-grid button").forEach(
            button => {
                button.addEventListener(
                    "click",
                    function () {
                        const name =
                            this.textContent.trim();

                        if (
                            name ===
                                "Algebra Solver" ||
                            name ===
                                "Equation Solver" ||
                            name ===
                                "Quadratic Solver" ||
                            name ===
                                "Geometry Solver" ||
                            name ===
                                "Trigonometry" ||
                            name ===
                                "Calculus"
                        ) {
                            const question =
                                prompt(
                                    "Enter your mathematics problem:"
                                );

                            if (!question) {
                                return;
                            }

                            const aiInput =
                                $("#aiQuestion");

                            if (!aiInput) {
                                return;
                            }

                            aiInput.value =
                                question;

                            $("#ai-solver")?.scrollIntoView({
                                behavior:
                                    "smooth"
                            });

                            setTimeout(
                                solveWithAI,
                                300
                            );
                        } else if (
                            name === "Statistics"
                        ) {
                            const values =
                                prompt(
                                    "Enter numbers separated by commas:"
                                );

                            if (!values) {
                                return;
                            }

                            const nums =
                                values
                                    .split(",")
                                    .map(Number)
                                    .filter(
                                        Number.isFinite
                                    );

                            if (!nums.length) {
                                toast(
                                    "No valid numbers entered."
                                );
                                return;
                            }

                            const mean =
                                nums.reduce(
                                    (a, b) =>
                                        a + b,
                                    0
                                ) /
                                nums.length;

                            alert(
                                `Mean = ${mean}\n` +
                                `Min = ${Math.min(...nums)}\n` +
                                `Max = ${Math.max(...nums)}`
                            );
                        } else if (
                            name ===
                            "Probability"
                        ) {
                            const favourable =
                                Number(
                                    prompt(
                                        "Favourable outcomes:"
                                    )
                                );

                            const total =
                                Number(
                                    prompt(
                                        "Total outcomes:"
                                    )
                                );

                            if (
                                Number.isFinite(
                                    favourable
                                ) &&
                                Number.isFinite(
                                    total
                                ) &&
                                total !== 0
                            ) {
                                alert(
                                    `Probability = ${
                                        favourable /
                                        total
                                    }`
                                );
                            }
                        } else if (
                            name ===
                            "Unit Converter"
                        ) {
                            const km =
                                Number(
                                    prompt(
                                        "Kilometers to convert to meters:"
                                    )
                                );

                            if (
                                Number.isFinite(
                                    km
                                )
                            ) {
                                alert(
                                    `${km} km = ${
                                        km * 1000
                                    } m`
                                );
                            }
                        } else if (
                            name ===
                                "Matrix Calculator" ||
                            name ===
                                "Graphing Calculator" ||
                            name ===
                                "Percentage Calculator"
                        ) {
                            const question =
                                prompt(
                                    "Enter your mathematics problem:"
                                );

                            if (!question) {
                                return;
                            }

                            const aiInput =
                                $("#aiQuestion");

                            if (!aiInput) {
                                return;
                            }

                            aiInput.value =
                                question;

                            $("#ai-solver")?.scrollIntoView({
                                behavior:
                                    "smooth"
                            });

                            setTimeout(
                                solveWithAI,
                                300
                            );
                        } else {
                            toast(
                                `${name} is ready for a dedicated solver module.`
                            );
                        }
                    }
                );
            }
        );
    }

    function setupCBSELink() {
        const link =
            $("#cbseDriveLink");

        if (!link) {
            return;
        }

        link.addEventListener(
            "click",
            function (event) {
                if (
                    this.getAttribute(
                        "href"
                    ) === "#"
                ) {
                    event.preventDefault();

                    toast(
                        "Add your CBSE URL to cbseDriveLink in HTML."
                    );
                }
            }
        );
    }

    function initializeFeatures() {
        setupAIButton();
        setupAIInput();
        setupFeatureButtons();
        setupGlobalSearch();
        setupPracticeTests();
        setupAdvancedTools();
        setupCBSELink();
        renderSyllabus();

        console.log(
            "MathSphere Features loaded."
        );
    }

    if (
        document.readyState ===
        "loading"
    ) {
        document.addEventListener(
            "DOMContentLoaded",
            initializeFeatures
        );
    } else {
        initializeFeatures();
    }

    window.MathSphere =
        window.MathSphere || {};

    window.MathSphere.solveWithAI =
        solveWithAI;

    window.MathSphere.askGemini =
        askGemini;

    window.MathSphere.solveMathQuestion =
        solveMathQuestion;

    window.MathSphere.importantQuestions =
        importantQuestions;

    window.MathSphere.syllabusData =
        syllabusData;
})();   