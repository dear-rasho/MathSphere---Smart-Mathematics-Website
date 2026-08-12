/* MathSphere core: Home + Calculator + Learning */
(function () {
    "use strict";

    const $ = (selector, root = document) => root.querySelector(selector);
    const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

    function toast(message) {
        const old = $(".app-toast");
        if (old) old.remove();
        const el = document.createElement("div");
        el.className = "app-toast";
        el.textContent = message;
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 2600);
    }

    function openModal(title, html) {
        const backdrop = document.createElement("div");
        backdrop.className = "app-modal-backdrop";
        backdrop.innerHTML = `
            <div class="app-modal" role="dialog" aria-modal="true">
                <button class="app-modal-close" type="button" aria-label="Close">×</button>
                <h3>${title}</h3>
                <div>${html}</div>
            </div>`;
        const close = () => backdrop.remove();
        backdrop.addEventListener("click", e => { if (e.target === backdrop) close(); });
        $(".app-modal-close", backdrop).addEventListener("click", close);
        document.body.appendChild(backdrop);
    }

    // ---------- Navigation / Home ----------
    const menuButton = $("#menuButton");
    const navigation = $("#mainNavigation");
    if (menuButton && navigation) {
        menuButton.addEventListener("click", () => navigation.classList.toggle("is-open"));
        $$("#mainNavigation a").forEach(a => a.addEventListener("click", () => navigation.classList.remove("is-open")));
    }

    $$("a[href^='#']").forEach(link => {
        link.addEventListener("click", e => {
            const id = link.getAttribute("href");
            if (!id || id === "#") return;
            const target = $(id);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth", block: "start" });
                history.replaceState(null, "", id);
            }
        });
    });

    const globalSearch = $("#globalSearch");
    const searchButton = $("#searchButton");
    function runGlobalSearch() {
        const query = (globalSearch?.value || "").trim().toLowerCase();
        if (!query) { toast("Type something to search."); return; }
        const sections = $$("main .page-section");
        let found = null;
        sections.forEach(section => {
            section.classList.remove("search-highlight");
            if (!found && section.textContent.toLowerCase().includes(query)) found = section;
        });
        if (found) {
            found.classList.add("search-highlight");
            found.scrollIntoView({ behavior: "smooth", block: "start" });
            setTimeout(() => found.classList.remove("search-highlight"), 2200);
            toast(`Found results in ${found.id.replaceAll("-", " ")}.`);
        } else toast("No matching mathematics content found.");
    }
    searchButton?.addEventListener("click", runGlobalSearch);
    globalSearch?.addEventListener("keydown", e => { if (e.key === "Enter") runGlobalSearch(); });

    // ---------- Calculator ----------
    const display = $("#calculatorDisplay");
    const history = $("#calculatorHistory");
    let calculatorMode = "basic";
    let lastAnswer = 0;

    function factorial(n) {
        n = Number(n);
        if (!Number.isFinite(n) || n < 0 || !Number.isInteger(n) || n > 170) throw new Error("Invalid factorial");
        let result = 1;
        for (let i = 2; i <= n; i++) result *= i;
        return result;
    }

    function evaluateExpression(input) {
        let expr = String(input).trim();
        if (!expr) return 0;
        expr = expr.replaceAll("×", "*").replaceAll("÷", "/").replaceAll("−", "-").replaceAll("π", "Math.PI");
        expr = expr.replace(/\be\b/g, "Math.E");
        expr = expr.replace(/(\d+(?:\.\d+)?)%/g, "($1/100)");
        expr = expr.replace(/(\d+(?:\.\d+)?)\^/g, "$1**");
        expr = expr.replace(/(\([^()]+\)|\d+(?:\.\d+)?)²/g, "($1)**2");
        expr = expr.replace(/(\d+(?:\.\d+)?|\([^()]+\))!/g, "factorial($1)");
        // Scientific functions use degree mode, which is friendlier for school math.
        expr = expr.replace(/sin\(/g, "sin(").replace(/cos\(/g, "cos(").replace(/tan\(/g, "tan(");
        expr = expr.replace(/log\(/g, "log10(").replace(/ln\(/g, "ln(").replace(/sqrt\(/g, "sqrt(");
        if (!/^[0-9+\-*/%().,\sA-Za-z_*]+$/.test(expr)) throw new Error("Unsupported expression");
        const sin = x => Math.sin(Number(x) * Math.PI / 180);
        const cos = x => Math.cos(Number(x) * Math.PI / 180);
        const tan = x => Math.tan(Number(x) * Math.PI / 180);
        const log10 = x => Math.log10(Number(x));
        const ln = x => Math.log(Number(x));
        const sqrt = x => Math.sqrt(Number(x));
        const value = Function("factorial", "sin", "cos", "tan", "log10", "ln", "sqrt", `"use strict"; return (${expr});`)(factorial, sin, cos, tan, log10, ln, sqrt);
        if (!Number.isFinite(value)) throw new Error("Math error");
        return value;
    }

    function setDisplay(value) { if (display) display.value = String(value); }
    function appendValue(value) {
        if (!display) return;
        const current = display.value;
        if (["+", "-", "*", "/"].includes(value) && /[+\-*/]$/.test(current)) return;
        display.value += value;
    }
    function calculate() {
        if (!display) return;
        try {
            const expression = display.value;
            const result = evaluateExpression(expression);
            if (history) history.textContent = expression + " =";
            lastAnswer = result;
            setDisplay(Number.isInteger(result) ? result : Number(result.toFixed(12)));
        } catch (err) { toast("Invalid mathematical expression."); }
    }

    $$(".calculator-keypad button").forEach(button => {
        button.addEventListener("click", () => {
            const action = button.dataset.action;
            const value = button.dataset.value;
            if (action === "clear") { setDisplay(""); if (history) history.textContent = ""; return; }
            if (action === "delete") { if (display) display.value = display.value.slice(0, -1); return; }
            if (action === "calculate") { calculate(); return; }
            if (value != null) appendValue(value);
        });
    });

    $$(".scientific-functions button").forEach(button => {
        button.addEventListener("click", () => {
            const fn = button.dataset.function;
            if (!display) return;
            if (fn === "pi") return appendValue("π");
            if (fn === "e") return appendValue("e");
            if (fn === "square") {
                const value = display.value.trim();
                if (!value) return;
                display.value = `(${value})²`;
                return;
            }
            if (fn === "factorial") {
                const value = display.value.trim();
                if (!value) return;
                display.value = `(${value})!`;
                return;
            }
            if (fn === "power") return appendValue("^");
            appendValue(`${fn}(`);
        });
    });

    $$(".calculator-modes button").forEach(button => {
        button.addEventListener("click", () => {
            calculatorMode = button.dataset.mode || button.textContent.trim().toLowerCase();
            $$(".calculator-modes button").forEach(b => b.classList.toggle("active-mode", b === button));
            const scientific = $(".scientific-functions");
            if (scientific) scientific.classList.toggle("is-hidden", calculatorMode === "basic");
            toast(`${calculatorMode[0].toUpperCase() + calculatorMode.slice(1)} mode selected.`);
        });
    });
    $$(".calculator-modes button").forEach((b, i) => b.classList.toggle("active-mode", i === 0));

    document.addEventListener("keydown", e => {
        if (!display || document.activeElement === globalSearch) return;
        if (/^[0-9.]$/.test(e.key) || ["+", "-", "*", "/", "(", ")", "%"].includes(e.key)) appendValue(e.key);
        else if (e.key === "Enter") calculate();
        else if (e.key === "Backspace") display.value = display.value.slice(0, -1);
        else if (e.key === "Escape") { display.value = ""; if (history) history.textContent = ""; }
    });

    // ---------- Learning ----------
    const learningData = {
        Arithmetic: ["Fractions", "Percentages", "Ratios", "Integers"],
        Algebra: ["Linear equations", "Polynomials", "Factorization", "Quadratic equations"],
        Geometry: ["Angles", "Triangles", "Circles", "Areas and volumes"],
        Trigonometry: ["Sin, cos and tan", "Identities", "Heights and distances", "Bearings"],
        Calculus: ["Limits", "Differentiation", "Integration", "Applications"],
        Statistics: ["Mean", "Median", "Probability", "Data analysis"]
    };
    $$(".learning-grid .learning-card").forEach(card => {
        card.addEventListener("click", () => {
            const title = $("h3", card)?.textContent.trim() || "Mathematics";
            const topics = learningData[title] || [];
            openModal(title, `<p>${$("p", card)?.textContent || "Learn this topic step by step."}</p><h4>Topics</h4><ul>${topics.map(t => `<li>${t}</li>`).join("")}</ul>`);
        });
    });

    // Expose a tiny utility for other modules without polluting many globals.
    window.MathSphere = window.MathSphere || {};
    window.MathSphere.toast = toast;
    window.MathSphere.modal = openModal;
    window.MathSphere.evaluate = evaluateExpression;
    window.MathSphere.lastAnswer = () => lastAnswer;
})();

