/* MathSphere Past Papers
   DATA SECTION: add/edit years here without touching UI logic.
   PDF_BASE_PATH is the only path setting you normally need to change. */
const PDF_BASE_PATH = "papers";

const FBISE_PAPER_DATA = {

    /* ========================================================
       CLASS 9
    ======================================================== */

    "9": {

        /* ----------------------------------------------------
           2021
        ---------------------------------------------------- */

        "2021": {
            available: false,
            title: "Class 9th Mathematics FBISE 2021",
            message: "Coming Soon"
        },


        /* ----------------------------------------------------
           2022
        ---------------------------------------------------- */

        "2022": {

            available: true,

            title: "Class 9th Mathematics FBISE Past Paper 2022",

            paperType: "Mathematics SSC-I (Science Group)",

            totalMarks: "75",

            sections: {

                A: {

                    title: "SECTION - A",

                    marks: 15,

                    questions: [

                        {
                            number: 1,
                            question:
                                "What is the value of x if the determinant |2 6; 3 x| = 0?",
                            options: [
                                "9",
                                "-9",
                                "6",
                                "-6"
                            ]
                        },

                        {
                            number: 2,
                            question:
                                "What equals i⁴ in the following options?",
                            options: [
                                "1",
                                "i",
                                "-1",
                                "-i"
                            ]
                        },

                        {
                            number: 3,
                            question:
                                "If log₃ 1 = x then the value of x is:",
                            options: [
                                "-1",
                                "0",
                                "1",
                                "3"
                            ]
                        },

                        {
                            number: 4,
                            question:
                                "If ∛64 = 2ˣ, then the value of x is:",
                            options: [
                                "0",
                                "1",
                                "2",
                                "6"
                            ]
                        },

                        {
                            number: 5,
                            question:
                                "Factorization of x² + 2 + 1/x² is:",
                            options: [
                                "(x + 1/x)²",
                                "(x - 1/x)(x + 1/x)",
                                "(x - 1/x)²",
                                "(x - 2)(x + 1/x)"
                            ]
                        },

                        {
                            number: 6,
                            question:
                                "What is the HCF of -2xy³, 4x³y, 6x²y³?",
                            options: [
                                "-2xy",
                                "2xy",
                                "2x³y³",
                                "4x³y"
                            ]
                        },

                        {
                            number: 7,
                            question:
                                "The solution set of |x| + 9 = 5 is:",
                            options: [
                                "{±4}",
                                "{4}",
                                "{-4}",
                                "{}"
                            ]
                        },

                        {
                            number: 8,
                            question:
                                "The lines x = 5 and y = -4 intersect each other at:",
                            options: [
                                "(-5, 4)",
                                "(5, -4)",
                                "(5, 0)",
                                "(0, -4)"
                            ]
                        },

                        {
                            number: 9,
                            question:
                                "Measure of an exterior angle of an equilateral triangle is:",
                            options: [
                                "60°",
                                "120°",
                                "180°",
                                "360°"
                            ]
                        },

                        {
                            number: 10,
                            question:
                                "In ΔABC if ∠A = 60° and ∠B = 45°, the angle bisector of the three sides lies:",
                            options: [
                                "Inside the triangle",
                                "Outside the triangle",
                                "At the vertex",
                                "At the mid of the shortest side"
                            ]
                        },

                        {
                            number: 11,
                            question:
                                "In ΔABC if ∠A = 80°, ∠B = 40° and ∠C = 60°, then the longest segment is:",
                            options: [
                                "AB",
                                "BC",
                                "AC",
                                "Median"
                            ]
                        },

                        {
                            number: 12,
                            question:
                                "What is the value of x in the given circular figure?",
                            options: [
                                "25",
                                "7",
                                "√7",
                                "5"
                            ]
                        },

                        {
                            number: 13,
                            question:
                                "Which triplet of the following are the side measures of a right triangle?",
                            options: [
                                "1, √3, 4",
                                "1, 2, √3",
                                "1, 2, 3",
                                "1, 1, 1"
                            ]
                        },

                        {
                            number: 14,
                            question:
                                "Medians of a triangle intersect each other in ratio:",
                            options: [
                                "1:2",
                                "2:1",
                                "2:3",
                                "3:2"
                            ]
                        },

                        {
                            number: 15,
                            question:
                                "What is the midpoint of the line segment joining (-4, 2) and (-4, 2)?",
                            options: [
                                "(2,2)",
                                "(-4,4)",
                                "(0,2)",
                                "(0,1)"
                            ]
                        }

                    ]

                },


                B: {

                    title: "SECTION - B",

                    marks: 36,

                    instruction:
                        "Attempt any NINE parts. All parts carry equal marks.",

                    questions: [

                        "Find the values of x and y from the given matrix equation.",

                        "Simplify 3 + 2i / 3 + i and write the answer in the form a + bi.",

                        "Simplify the given expression involving powers.",

                        "Find x if log₃(x³ + 1) = 2.",

                        "If x = 2 + √3, find the values of x + 1/x and x - 1/x.",

                        "Factorize the expression p² - x² + 2x - 1.",

                        "Find the HCF of the given polynomials by factorization.",

                        "Solve the given inequality where y ∈ Z.",

                        "Solve the given linear equation.",

                        "Draw the graph of 4x - 2y + 6 = 0 by taking at least four ordered pairs.",

                        "Using distance formula, show that the given points are collinear.",

                        "Any point on the bisector of an angle is equidistant from its arms. Prove it.",

                        "In triangle ABC, use the angle bisector theorem to find x.",

                        "In triangle ABC with DE || AB and DE = 1/2 AB, find x and y."

                    ]

                },


                C: {

                    title: "SECTION - C",

                    marks: 24,

                    instruction:
                        "Attempt any THREE questions.",

                    questions: [

                        "Solve the system of linear equations by using the matrix inversion method.",

                        "Show that the given points are the vertices of a parallelogram.",

                        "Solve the system of linear equations by using the graphical method.",

                        "If two angles of a triangle are congruent, prove that the sides opposite to them are also congruent.",

                        "From the given data construct triangle ABC and draw two perpendicular bisectors. Write the construction steps."

                    ]

                }

            }

        },


        /* ----------------------------------------------------
           2023
        ---------------------------------------------------- */

        "2023": {

            available: true,

            title: "Class 9th Mathematics FBISE Past Paper 2023",

            paperType: "Mathematics SSC-I (Science Group)",

            totalMarks: "75",

            sections: {

                A: {

                    title: "SECTION - A",

                    marks: 15,

                    questions: [

                        {
                            number: 1,
                            question:
                                "If A and B are matrices each of order 2 × 5 then order of matrix A − B is:",
                            options: [
                                "2 × 5",
                                "10 × 10",
                                "4 × 10",
                                "7 × 7"
                            ]
                        },

                        {
                            number: 2,
                            question:
                                "If n = 8 and 16 × 2ⁿ = 4⁻ᵐ then value of m is:",
                            options: [
                                "-4",
                                "-2",
                                "0",
                                "8"
                            ]
                        },

                        {
                            number: 3,
                            question:
                                "The logarithm of e to the base e is equal to:",
                            options: [
                                "1",
                                "10",
                                "e",
                                "0"
                            ]
                        },

                        {
                            number: 4,
                            question:
                                "If ⁸√81 = 3²ˣ, the value of x is:",
                            options: [
                                "2",
                                "6",
                                "1/2",
                                "1/4"
                            ]
                        },

                        {
                            number: 5,
                            question:
                                "Find the value of m so that x² + 4x + m becomes a perfect square.",
                            options: [
                                "8",
                                "-8",
                                "4",
                                "16"
                            ]
                        },

                        {
                            number: 6,
                            question:
                                "LCM of (a − b)⁴ and (a − b)³ is equal to:",
                            options: [
                                "(a − b)",
                                "(a − b)³",
                                "(a − b)⁴",
                                "(a − b)⁷"
                            ]
                        },

                        {
                            number: 7,
                            question:
                                "The lines x = 5 and y + 1 = -4 intersect each other at:",
                            options: [
                                "(5,-4)",
                                "(6,-5)",
                                "(-1,1)",
                                "(-5,4)"
                            ]
                        },

                        {
                            number: 8,
                            question:
                                "If capacity c of an elevator is at most 1600 pounds, then:",
                            options: [
                                "c < 1600",
                                "c ≥ 1600",
                                "c ≤ 1600",
                                "c > 1600"
                            ]
                        },

                        {
                            number: 9,
                            question:
                                "The term used for a triangle having all sides different is:",
                            options: [
                                "Isosceles",
                                "Scalene",
                                "Equilateral",
                                "Right angled"
                            ]
                        },

                        {
                            number: 10,
                            question:
                                "In parallelogram LMNP the value of x is:",
                            options: [
                                "5",
                                "10",
                                "6",
                                "3"
                            ]
                        },

                        {
                            number: 11,
                            question:
                                "In the given figure, m∠PLB will be shortest distance if:",
                            options: [
                                "80°",
                                "90°",
                                "100°",
                                "110°"
                            ]
                        },

                        {
                            number: 12,
                            question:
                                "In given triangle ABC, the value of x is:",
                            options: [
                                "10.4",
                                "12.4",
                                "13.5",
                                "15.5"
                            ]
                        },

                        {
                            number: 13,
                            question:
                                "Area of the given figure is:",
                            options: [
                                "26",
                                "80",
                                "160",
                                "320"
                            ]
                        },

                        {
                            number: 14,
                            question:
                                "Given √10 · √10 is:",
                            options: [
                                "Irrational",
                                "Real",
                                "Complex",
                                "Imaginary"
                            ]
                        },

                        {
                            number: 15,
                            question:
                                "The degree of polynomial 4x³ + 2x²y² + 11x is:",
                            options: [
                                "1",
                                "2",
                                "3",
                                "4"
                            ]
                        }

                    ]

                },


                B: {

                    title: "SECTION - B",

                    marks: 36,

                    questions: [

                        "Simplify the given expression involving powers.",

                        "Solve log₅(5x + 1) = 2.",

                        "Simplify the given radical expression.",

                        "If a + 1/a = 2, find a⁴ + 1/a⁴.",

                        "Find the area of a rectangle x² + 13x − 90 and find its sides and perimeter.",

                        "Factorize x² − x² − 22x + 40 by factor theorem.",

                        "Find square root of x(x+1)(x+2)(x+3) by factorization.",

                        "Find the solution set of the given rational equation.",

                        "Find values of m and c by comparing y = mx + c with 2x + 5y − 1 = 0.",

                        "If a circle passes through P(1,3) and has centre at C(−3,6), find its radius and diameter.",

                        "Prove that angle bisectors of a triangle are concurrent.",

                        "In the given figure prove the required relation using angle/side properties.",

                        "In ΔLMN, LA bisects ∠L. Given MN, LM and LN, find MA and AN.",

                        "Find x in the shown right triangle using (Hypotenuse)² = (Base)² + (Perpendicular)²."

                    ]

                },


                C: {

                    title: "SECTION - C",

                    marks: 24,

                    questions: [

                        "The length of a rectangle is 6 cm less than three times its width. Its perimeter is 140 cm. Find its dimensions.",

                        "If in correspondence of two right-angled triangles the hypotenuse and one side of one triangle are congruent to the hypotenuse and corresponding side of the other, prove the triangles congruent.",

                        "If the square of one side of a triangle is equal to the sum of squares of the other two sides, prove that the triangle is right angled.",

                        "Prove that the line segment joining the midpoints of two sides of a triangle is parallel to the third side and equal to one half of its length.",

                        "Construct triangle XYZ with given side lengths, draw altitude and find its area."

                    ]

                }

            }

        },


        /* ----------------------------------------------------
           2024
        ---------------------------------------------------- */

        "2024": {

            available: true,

            title: "Class 9th Mathematics FBISE Past Paper 2024",

            paperType: "Mathematics SSC-I (Science Group)",

            totalMarks: "75",

            sections: {

                A: {

                    title: "SECTION - A",

                    marks: 15,

                    questions: [

                        {
                            number: 1,
                            question:
                                "If A = [3 2; 4 3], then A⁻¹ = ?",
                            options: [
                                "[-3 2; 4 -3]",
                                "[3 -2; -4 3]",
                                "[3 4; 2 3]",
                                "[3 -4; -2 3]"
                            ]
                        },

                        {
                            number: 2,
                            question:
                                "If 3i(2i + 1) = x + 3i then x = ?",
                            options: [
                                "-6",
                                "6",
                                "3",
                                "-3"
                            ]
                        },

                        {
                            number: 3,
                            question:
                                "If log₅(1/√5) = x, then value of x is:",
                            options: [
                                "-1",
                                "1",
                                "1/2",
                                "-1/2"
                            ]
                        },

                        {
                            number: 4,
                            question:
                                "For which of the following is a+b NOT a factor?",
                            options: [
                                "a³+b³",
                                "a²-b²",
                                "a³+b³",
                                "a²+b²"
                            ]
                        },

                        {
                            number: 5,
                            question:
                                "Simplified form of 1/(a-b) + b/(a²-b²) is:",
                            options: [
                                "(1+b)/(a²-b²)",
                                "a/(a²-b²)",
                                "b/(a²-b²)",
                                "(a+2b)/(a²-b²)"
                            ]
                        },

                        {
                            number: 6,
                            question:
                                "LCM of (a-b)⁴ and (a-b)³ is:",
                            options: [
                                "(a-b)",
                                "(a-b)³",
                                "(a-b)⁴",
                                "(a-b)⁷"
                            ]
                        },

                        {
                            number: 7,
                            question:
                                "The solution of |3x| = 2 is:",
                            options: [
                                "{2/3}",
                                "{-3/2}",
                                "{3/2}",
                                "{-2/3, 2/3}"
                            ]
                        },

                        {
                            number: 8,
                            question:
                                "The point (3,-4) lies in quadrant:",
                            options: [
                                "I",
                                "II",
                                "III",
                                "IV"
                            ]
                        },

                        {
                            number: 9,
                            question:
                                "Which point lies on both axes (x and y)?",
                            options: [
                                "(-1,0)",
                                "(1,0)",
                                "(0,1)",
                                "(0,0)"
                            ]
                        },

                        {
                            number: 10,
                            question:
                                "The diagonal of a parallelogram does not divide it into two:",
                            options: [
                                "Square",
                                "Rectangle",
                                "Parallelogram",
                                "Trapezium"
                            ]
                        },

                        {
                            number: 11,
                            question:
                                "In ΔABC, D and E are midpoints of AB and BC. If DE || AC, then x = ?",
                            options: [
                                "5",
                                "10",
                                "15",
                                "2.5"
                            ]
                        },

                        {
                            number: 12,
                            question:
                                "The length of AB in the given figure is:",
                            options: [
                                "1",
                                "2",
                                "3",
                                "-1"
                            ]
                        },

                        {
                            number: 13,
                            question:
                                "Which of the following are the sides of a triangle?",
                            options: [
                                "3,4 and 8",
                                "3,4 and 5",
                                "3,4 and 7",
                                "3,5 and 1"
                            ]
                        },

                        {
                            number: 14,
                            question:
                                "If DE || AB and the given lengths are AD=x, DC=6, BE=2 and EC=4, find x.",
                            options: [
                                "2",
                                "3",
                                "7",
                                "9"
                            ]
                        },

                        {
                            number: 15,
                            question:
                                "Area of the given figure is:",
                            options: [
                                "14",
                                "24",
                                "48",
                                "7"
                            ]
                        }

                    ]

                },


                B: {

                    title: "SECTION - B",

                    marks: 36,

                    questions: [

                        "Given matrices A and B, find X when X + 4A = 7B.",

                        "Solve the given logarithm expression.",

                        "Simplify the given expression involving powers.",

                        "Find x when log₂(x² − 1) = 3.",

                        "If a = √10 + 3, find the required expressions involving a and 1/a.",

                        "Use factor theorem to factorize x³ + 8x² + 19x + 12.",

                        "Find HCF by division method of the given polynomials.",

                        "Write the given equation in y = mx + c form and find values of m and c.",

                        "Find values related to the given parallelogram PQRS.",

                        "For the given sets find X × X, relation R and its domain/range.",

                        "Prove that the given point on the angle bisector is equidistant from its arms.",

                        "Verify that the given points are collinear.",

                        "In ΔABC, LM || BC. Given AL, LB and MC, find AM.",

                        "Use the given figure to find x and related lengths."

                    ]

                },


                C: {

                    title: "SECTION - C",

                    marks: 24,

                    questions: [

                        "Use matrix inversion method to solve the system of linear equations x + y = 5 and 2x − y = 7.",

                        "Prove that in a right angled triangle, square of hypotenuse equals the sum of squares of the other two sides.",

                        "Construct triangle PQR, draw altitudes and verify concurrency. Write construction steps.",

                        "Prove that if two sides of a triangle are unequal, the longer side has an angle of greater measure opposite to it.",

                        "Prove that parallelograms on equal bases and having equal altitudes are equal in area.",

                        "Simplify the given algebraic expression."

                    ]

                }

            }

        },


        /* ----------------------------------------------------
           2025
        ---------------------------------------------------- */

        "2025": {

            available: true,

            title: "Class 9th Mathematics FBISE Past Paper 2025",

            paperType: "Mathematics SSC-I (Science Group)",

            totalMarks: "75",

            sections: {

                A: {

                    title: "SECTION - A",

                    marks: 15,

                    questions: [

                        {
                            number: 1,
                            question:
                                "(1/4)^(-1/2) = ?",
                            options: [
                                "1/2",
                                "2",
                                "√2",
                                "16"
                            ]
                        },

                        {
                            number: 2,
                            question:
                                "The scientific notation of 345.6 is:",
                            options: [
                                "3.456 × 10²",
                                "3.456 × 10³",
                                "3.456 × 10⁻²",
                                "3.456 × 10⁻³"
                            ]
                        },

                        {
                            number: 3,
                            question:
                                "Given relation R is a subset of X × X. Which of the following represents the relation?",
                            options: [
                                "X × X",
                                "X × Y",
                                "Y × X",
                                "Y × Y"
                            ]
                        },

                        {
                            number: 4,
                            question:
                                "What statement does the shaded region represent in the given Venn diagram?",
                            options: [
                                "A ∩ B ∩ C",
                                "(A ∩ B) ∩ C",
                                "B ∩ C",
                                "A ∪ C"
                            ]
                        },

                        {
                            number: 5,
                            question:
                                "Factorization of 49a² − 28ab + 4b² is:",
                            options: [
                                "(7a+2b)²",
                                "(7a−4b)²",
                                "(7a−2b)²",
                                "(7a−28b)²"
                            ]
                        },

                        {
                            number: 6,
                            question:
                                "If x is smaller than 10, which statement is true?",
                            options: [
                                "x ≥ 20",
                                "x ≤ 10",
                                "x < 10",
                                "x > 10"
                            ]
                        },

                        {
                            number: 7,
                            question:
                                "Slope of a line passing through two points (3,5) and (9,11) is:",
                            options: [
                                "8/3",
                                "4/3",
                                "6/6",
                                "8/4"
                            ]
                        },

                        {
                            number: 8,
                            question:
                                "At what angle do the given lines intersect each other?",
                            options: [
                                "0°",
                                "45°",
                                "90°",
                                "180°"
                            ]
                        },

                        {
                            number: 9,
                            question:
                                "What is the value of x in the given similar triangles?",
                            options: [
                                "1",
                                "2",
                                "3",
                                "6"
                            ]
                        },

                        {
                            number: 10,
                            question:
                                "What is the value of measure angle C in the given right triangle?",
                            options: [
                                "29.1°",
                                "60.94°",
                                "56.25°",
                                "33.75°"
                            ]
                        },

                        {
                            number: 11,
                            question:
                                "The bearing of A from O is:",
                            options: [
                                "035°",
                                "055°",
                                "125°",
                                "305°"
                            ]
                        },

                        {
                            number: 12,
                            question:
                                "The three medians of any triangle are:",
                            options: [
                                "Concurrent inside",
                                "Concurrent outside",
                                "Collinear",
                                "Mutually perpendicular"
                            ]
                        },

                        {
                            number: 13,
                            question:
                                "The median of the given data 77, 79, 82, 86, 90, 92, 93 is:",
                            options: [
                                "79",
                                "82",
                                "86",
                                "88"
                            ]
                        },

                        {
                            number: 14,
                            question:
                                "What is the probability of getting Tail if a fair coin is tossed once?",
                            options: [
                                "0",
                                "1/2",
                                "1",
                                "2"
                            ]
                        },

                        {
                            number: 15,
                            question:
                                "A die was rolled 50 times and number 4 appeared 15 times. What is the relative frequency of rolling a 4?",
                            options: [
                                "0.15",
                                "0.30",
                                "0.20",
                                "0.25"
                            ]
                        }

                    ]

                },


                B: {

                    title: "SECTION - B",

                    marks: 36,

                    questions: [

                        "Simplify the given expression involving powers.",

                        "On what bearing should a ship be sailing if it is heading toward a given direction?",

                        "A radioactive substance decays according to M = M₀(1/2)^(t/T). Express t in terms of M and M₀ using logarithms.",

                        "Solve the equation and represent the solution on a real number line.",

                        "Prove the given trigonometric identity.",

                        "A 10-meter-long ladder makes an angle with the ground. Find its height and angle.",

                        "A company wants to install a new cell phone tower equidistant from two existing towers. Find the required location.",

                        "Two similar triangles have areas in ratio 25:49. If the corresponding side of smaller triangle is 15 cm, find corresponding height of larger triangle.",

                        "Solve the given inequality and represent its solution on real number line.",

                        "Verify the given set relation using a Venn diagram.",

                        "For the given sets find Cartesian product and list ordered pairs.",

                        "Find square root of the given polynomial.",

                        "Factorize the given polynomial.",

                        "Calculate mean weight from the given grouped distribution."

                    ]

                },


                C: {

                    title: "SECTION - C",

                    marks: 24,

                    questions: [

                        "Find HCF and LCM in simplified form using factorization method.",

                        "Use the Venn diagram to find the required elements using set operations.",

                        "Construct a triangle with given side measurements and write the construction steps.",

                        "Find slopes, interior angles and other properties of the given triangle.",

                        "Find angles and lengths in the given regular hexagonal figure.",

                        "Calculate the median marks from the given grouped data."

                    ]

                }

            }

        }

    },



    /* ========================================================
       CLASS 11
       PDF-only entries for now.
       Future Class 11 years/questions can be added here.
    ======================================================== */

    "11": {

        "2023": {
            available: true,
            title: "Class 11th Mathematics FBISE Past Paper 2023",
            paperType: "Mathematics HSSC-I",
            totalMarks: "100",
            pdf: "class 11th math 2023.pdf",
            sections: {
                A: {
                    title: "SECTION - A",
                    marks: 20,
                    instruction: "Section A is compulsory. All parts carry equal marks.",
                    questions: [
                        {number:1, question:"The multiplicative inverse of −i is:", options:["i","1","−i","−1"]},
                        {number:2, question:"What is the modulus of a complex number (8 − 15i)?", options:["8 + 15i","17","√161","−15"]},
                        {number:3, question:"The contrapositive of a conditional p → q is:", options:["q → p","¬q → ¬p","¬q → p","¬p → q"]},
                        {number:4, question:"Which structure in the following is true for the set of natural numbers under multiplication?", options:["Groupoid","Semi group","Monoid","Group"]},
                        {number:5, question:"Which one of the following matrices is singular?", options:["[1 −4; 2 8]","[1 4; √4 8]","[1 −4; √2 −8]","[−1 4; 2 8]"]},
                        {number:6, question:"Rank of matrix [−2; 0; −1] is:", options:["0","1","2","3"]},
                        {number:7, question:"For what value of k, roots of 2x² − 12x + 4 = 0 are equal?", options:["9","−9","9.5","18"]},
                        {number:8, question:"One of the multiplicative factors of (x⁴ − 5x² + 4) is:", options:["x + 2","x − 3","x + 3","x + 4"]},
                        {number:9, question:"Which of the following represents (x³ + 2x² + 3)/(x² + 1)(x + 4)?", options:["Proper fraction","Improper fraction","Cubic polynomial","Polynomial"]},
                        {number:10, question:"For what value of x, the numbers 1/2, 1/5, 1/x are in harmonic progression?", options:["−10","−8","8","10"]},
                        {number:11, question:"If C(n,8) = C(n,12), then value of n is:", options:["4","8","12","20"]},
                        {number:12, question:"The probability of getting same upper face on throwing two dice is:", options:["1/12","1/6","1/4","1/2"]},
                        {number:13, question:"The coefficient of third term in the expansion of (x − 1/x)⁸ is:", options:["⁸C₀","⁸C₁","⁸C₂","⁸C₃"]},
                        {number:14, question:"In which quadrant, terminal side of the angle −510° lies?", options:["1st","2nd","3rd","4th"]},
                        {number:15, question:"(Sin 5x + Sin 7x) is expressed in product form as:", options:["2Sin6xCosx","2Cos6xSinx","2Sin6xSinx","2Cos6xCosx"]},
                        {number:16, question:"The value of Cos(x + 60°) + Cos(x − 60°) is:", options:["Cos x","√3 Cos x","Cos 2x","0"]},
                        {number:17, question:"The period of (8/7) Sec(x − π) is:", options:["−π","π","3π","8π/7"]},
                        {number:18, question:"What is the area of a triangle ABC, if a = 10, b = 20 and γ = 30°?", options:["25√2","50√3","50","100/√3"]},
                        {number:19, question:"The value of Cos[π/6 + Cos⁻¹(−1/2)] is:", options:["1/2","−1/2","√3/2","−√3/2"]},
                        {number:20, question:"The solution of a trigonometric equation (Sin x + Cos x = 0) is:", options:["−30°","−120°","45°","135°"]}
                    ]
                },
                B: {
                    title:"SECTION - B", marks:48,
                    instruction:"Attempt any TWELVE parts. All parts carry equal marks.",
                    questions:[
                        "If Z₁ = 2 + 3i and Z₂ = 4 + 2i, then show that (Z̄₁Z̄₂ + Z₁Z₂) is a real number.",
                        "Construct a truth table of a logical statement (p ↔ q) ∧ (p → q).",
                        "Solve for x: |x − 1, 0, −3; 5, 1 − x, 1; 1, 3, x − 5| = 0.",
                        "If α, β are the roots of x² + px + q = 0, find the quadratic equation whose roots are α/β and β/α.",
                        "Using properties of the cube roots of unity, verify that (1 + ω) + (1 + ω²) + (1 + ω³) = 2ω.",
                        "Express (125 + 4x − 9x²)/((x − 1)(x + 3)(x + 4)) in partial fractions.",
                        "Second term of a geometric sequence is 9 and its fourth term is 1. Find sum to infinity.",
                        "Insert six arithmetic means between 15 and −13.",
                        "Prove that Sine is a periodic function and its period is 2π.",
                        "A die is thrown twice. Find the probability that sum of the upper face numbers is a prime number or an odd number.",
                        "Find the value of k, if the constant term in the expansion of (2x² + k/x)⁶ is 960.",
                        "If Cosθ = √10/10 with 2π < θ < 5π/2, then find values of the remaining five trigonometric ratios.",
                        "Verify that: Cos4x·Cosx − Sin6x·Sin3x = Cos7x·Cos2x.",
                        "In an oblique triangle ABC with usual notations, a = 6, c = 12 and β = 124°. Apply law of cosines and law of sines to find b, α and γ.",
                        "Verify that: 2tan⁻¹(1/2) + tan⁻¹(1/7) = tan⁻¹(31/17).",
                        "Solve the trigonometric equation Cos5θ + Cosθ = Cos3θ where θ ∈ [0, π]."
                    ]
                },
                C: {
                    title:"SECTION - C", marks:32,
                    instruction:"Attempt any FOUR questions. All questions carry equal marks.",
                    questions:[
                        "Use Cramer’s rule to solve the system of linear equations x + y − z = 3; 2x − y − z = 1; 3x + y + 2z = 4.",
                        "If three consecutive numbers in an arithmetic progression are increased by 1, 2 and 3 respectively, the resulting numbers are in geometric progression. Find the original numbers if their sum is 12.",
                        "If y = 1/4 + 1.3/4.8 + 1.3.5/(4.8.12) + ... then prove that y² + 2y − 1 = 0.",
                        "Without using calculator, prove that Cos10°·Cos30°·Cos50°·Cos70° = 3/16.",
                        "Solve the following system of equations: 5x² − 14xy + 9y² = 0; 4x² − 3xy − 16 = 0.",
                        "Solve triangle ABC with usual notations if (a) α = 60°, β = 15°, and b = 33; (b) b = 23, c = 24 and α = 75°."
                    ]
                }
            }
        },

        "2024": {
            available: true,
            title: "Class 11th Mathematics FBISE Past Paper 2024",
            paperType: "Mathematics HSSC-I",
            totalMarks: "100",
            pdf: "class 11th math 2024.pdf",
            sections: {
                A: {
                    title:"SECTION - A", marks:20,
                    instruction:"Section A is compulsory. All parts carry equal marks.",
                    questions:[
                        {number:1,question:"What is the period of 3Sin(x/5)?",options:["10π","30π","π/5","5π"]},
                        {number:2,question:"Which of the given options states the solution of Sin x + Cos x = 0?",options:["π/6","2π/3","π/4","3π/4"]},
                        {number:3,question:"What is the multiplicative inverse of −i?",options:["1","−1","i","−i"]},
                        {number:4,question:"The real part of (1 + 7i)/(3 − 4i) is:",options:["1/2","1","−1/2","−1"]},
                        {number:5,question:"If A is a matrix of order 3×2, then the order of A′A is:",options:["3×2","3×3","2×2","2×3"]},
                        {number:6,question:"If A = [i 0 0; 0 0 i; 0 0 i], then which one in the options is A³?",options:["−iA","iA","−A","A"]},
                        {number:7,question:"What is the projection of a along b if a = 3i + j − k and b = i?",options:["3/√1","3/√1 i","3/√11","3/√11 i"]},
                        {number:8,question:"For what value of α, vectors 4i + 16j + αk and 2i + 8j − 4k are perpendicular?",options:["34","92","−8","2"]},
                        {number:9,question:"If x − 3, 6, y + 3 are in A.P. the value of x + y is:",options:["12","18","0","6"]},
                        {number:10,question:"The nth term of a series 3x¹⁵ + 5x² + 7x³ + ... is:",options:["(2n−1)n²","(2n+1)(n+1)²","(2n+1)n","(2n+1)n²"]},
                        {number:11,question:"In how many ways 5 persons can be seated at a round table?",options:["4!","1/2(4!)","5!","1/2(5!)"]},
                        {number:12,question:"What is the probability of drawing a King from a well shuffled pack of 52 playing cards?",options:["13/52","4/52","1/52","2/52"]},
                        {number:13,question:"What is the coefficient of 3rd term in the expansion of (x − 1/x)⁸?",options:["⁸C₃","⁸C₄","1","⁸C₂"]},
                        {number:14,question:"Which one in the given options is true if 2ⁿ > 2(n+1), ∀n ∈ Z?",options:["n < 3","n > 3","n < 2","n > 2"]},
                        {number:15,question:"The graph of y = x⁴ is symmetrical about:",options:["x-axis","y-axis","Origin","y = x"]},
                        {number:16,question:"(−1, −1) is a solution of the inequality:",options:["2x + y < −1","4x + 3y > 0","−x − 2y < 0","2x − y > 1"]},
                        {number:17,question:"Which of the following options equates Cos16°?",options:["Sin16°","−Sin16°","Cos16°","−Cos16°"]},
                        {number:18,question:"If Cos β = 3/4 then the value of Cos 2β is:",options:["3√7/8","−3√7/8","1/8","−1/8"]},
                        {number:19,question:"Area of a triangle ABC with usual notations, a = 2, b = √3 and γ = π/3 is:",options:["3/2","3","2","√3/2"]},
                        {number:20,question:"What is the shadow length of a √3m tree if sun’s elevation is 45°?",options:["1/√2 m","√3m","1m","1/√3m"]}
                    ]
                },
                B: {
                    title:"SECTION - B", marks:48,
                    instruction:"Attempt any TWELVE parts. All parts carry equal marks.",
                    questions:[
                        "Simplify z = (3+i)/(3−i) in the form a+ib where i=√−1 and find the value of |z|.",
                        "Solve the system of linear equations (3−2i)x + (1+2i)y − 1 = 0 and (3+2i)x − (1−i)y − 1 = 0.",
                        "If A = [5 9 2; 4 8 1; 3 7 0], then show that (A + Aᵀ) is symmetric.",
                        "Find the volume of a tetrahedron with vertices A(1,2,2), B(2,1,1), C(3,3,4) and D(0,1,5).",
                        "If 2nd and 6th terms of a GP are 3 and 3/4 respectively, find its 16th term.",
                        "How many 7-digit different numbers can be formed from the digits 5,6,6,9,9,9 using all and how many of these begin and end with 0?",
                        "For a real valued function f(x) = (5x−2)/(x+2), x ≠ −2, find f⁻¹(x) and determine its domain and range.",
                        "State number of diagonals of an n-sided polygon and find number of diagonals of a nine sided polygon.",
                        "Find the equation of a parabola y = ax² + bx + c that cuts x-axis at points (−4,0),(4,0) and passes through a point (0,8).",
                        "Verify that Cos⁴θ = 1/8(3 + 4Cos2θ + Cos4θ).",
                        "Find radii of the escribed circles of triangle ABC opposite to the largest and smallest sides, when a=13, b=10 and c=7.",
                        "Verify that 2S = 8R Cos(A/2) Sin(B/2) Cos(C/2).",
                        "Find row rank of [1 2 3; 4 2 1; 5 2 −2]. OR find values of p if vectors 3p i + 11j − 5k and 2pi + pj + 2k are perpendicular.",
                        "Insert four A.Ms between 5 and 25. OR sum to n-terms the series 1.5 + 2.6 + 3.7 + 4.8 + … .",
                        "Sum to n-terms the series 1.5 + 2.6 + 3.7 + 4.8 + … . OR prove that 1+4+7+…+(3n−2)=n(3n−1)/2 using mathematical induction.",
                        "Prove that 1+4+7+…+(3n−2)=n(3n−1)/2 using mathematical induction. OR If Cos α=3/5, Sin β=5/13 with π<β<π and 3π/2<α<2π, find Sin(α+β).",
                        "If Cos α=3/5 and Sin β=5/13 with π<β<π and 3π/2<α<2π, find Sin(α+β). OR prove that Sin2θ + Sin4θ + Sin6θ + Sin8θ = 4Sin5θ Cos2θ Cosθ.",
                        "Prove that Sin2θ + Sin4θ + Sin6θ + Sin8θ = 4Sin5θ Cos2θ Cosθ. OR solve triangle ABC with α=31°5′, β=50°55′ and c=13 cm using usual notations.",
                        "A pair of dice is thrown. Number of dots on the top are added. What is the probability of getting a sum greater than 9 on a sum divisible by 4? OR solve triangle ABC with α=31°5′, β=50°55′ and c=13 cm.",
                        "Verify that Cos⁴θ = 1/8(3 + 4Cos2θ + Cos4θ) and solve the related trigonometric identity."
                    ]
                },
                C: {
                    title:"SECTION - C", marks:32,
                    instruction:"Attempt any FOUR questions. All questions carry equal marks.",
                    questions:[
                        "Find inverse of the matrix [1 1 2; 3 −1 1; −1 3 4]. OR find a vector of magnitude 14 units orthogonal to vectors a = i + 3j and b = i + 2k; also find angle between a and b.",
                        "Use Gauss-Jordan method to solve the system of linear equations −2y + z = 3, 3x + 5y = 11, 4y + 3z = 13. OR find the point of intersection graphically from f(x)=x−4 and g(x)=x²−3x+1.",
                        "Find point of intersection of the functions f(x)=−x+6 and g(x)=x³−4x+6 graphically. OR find general solution of trigonometric equation 3Cosx+3 = 2Sin²x.",
                        "Find maximum and minimum values of a function f(x,y)=2x+3y subject to x+2y≤10, 3x+y≤9, 9x+8y≤72, x≥0,y≥0. OR sketch graph of y=2Cos²θ, −π≤θ≤π."
                    ]
                }
            }
        }

    },

    /* ========================================================
       CLASS 10
    ======================================================== */

    "10": {

        "2021": {

            available: false,

            title: "Class 10th Mathematics FBISE 2021",

            message: "Coming Soon"

        },


        /* ----------------------------------------------------
           2022
        ---------------------------------------------------- */

        "2022": {

            available: true,

            title: "Class 10th Mathematics FBISE Past Paper 2022",

            paperType: "Mathematics SSC-II (Science Group)",

            totalMarks: "75",

            sections: {

                A: {

                    title: "SECTION - A",

                    marks: 15,

                    questions: [

                        {
                            number: 1,
                            question:
                                "The values of x from quadratic equation (x−4)(x+1)=0 are:",
                            options: [
                                "−4,1",
                                "4,−1",
                                "0,−5",
                                "0,−3"
                            ]
                        },

                        {
                            number: 2,
                            question:
                                "If roots of equation px² + qx + 2 = 0 are reciprocal of each other, then value of p is:",
                            options: [
                                "0",
                                "-2",
                                "3",
                                "2"
                            ]
                        },

                        {
                            number: 3,
                            question:
                                "If discriminant of a quadratic equation is positive but not a perfect square, then roots are:",
                            options: [
                                "Complex",
                                "Rational",
                                "Irrational",
                                "Equal"
                            ]
                        },

                        {
                            number: 4,
                            question:
                                "In which situation x varies directly as y?",
                            options: [
                                "x = 4/y",
                                "xy = 6",
                                "x = xy",
                                "x = 7/16"
                            ]
                        },

                        {
                            number: 5,
                            question:
                                "The identity (5x+4)² = 25x² + 40x + 16 is true for:",
                            options: [
                                "Only one value of x",
                                "Only two values of x",
                                "Only three values of x",
                                "All values of x"
                            ]
                        },

                        {
                            number: 6,
                            question:
                                "If number of elements in set X is 3 and in set Y is 2, number of binary relations in X × Y are:",
                            options: [
                                "2³",
                                "2²",
                                "2⁶",
                                "2⁵"
                            ]
                        },

                        {
                            number: 7,
                            question:
                                "If x = 10, Σx = 7 + 9k and n = 7, then value of k is:",
                            options: [
                                "9",
                                "7",
                                "9 1/3",
                                "-7"
                            ]
                        },

                        {
                            number: 8,
                            question:
                                "The value of Cosec θ Tan θ is equal to:",
                            options: [
                                "Sin θ",
                                "Cos θ",
                                "Cosec θ",
                                "Sec θ"
                            ]
                        },

                        {
                            number: 9,
                            question:
                                "In the given circular figure the length of chord is:",
                            options: [
                                "4cm",
                                "6cm",
                                "7cm",
                                "9cm"
                            ]
                        },

                        {
                            number: 10,
                            question:
                                "A line which has two points in common with a circle is called:",
                            options: [
                                "Sine of a circle",
                                "Cosine of a circle",
                                "Tangent of a circle",
                                "Secant of a circle"
                            ]
                        },

                        {
                            number: 11,
                            question:
                                "If m∠AOB = 130°, then the value of m∠ADB is:",
                            options: [
                                "130°",
                                "65°",
                                "60°",
                                "120°"
                            ]
                        },

                        {
                            number: 12,
                            question:
                                "In the given figure, find the value of x:",
                            options: [
                                "60°",
                                "120°",
                                "150°",
                                "90°"
                            ]
                        },

                        {
                            number: 13,
                            question:
                                "The tangents drawn at the endpoints of a diameter of a circle are:",
                            options: [
                                "Parallel",
                                "Perpendicular",
                                "Intersecting",
                                "Overlapping"
                            ]
                        },

                        {
                            number: 14,
                            question:
                                "The triangle with sides 8cm, 15cm and 17cm is:",
                            options: [
                                "Acute angled",
                                "Obtuse angled",
                                "Right angled",
                                "Equiangular"
                            ]
                        },

                        {
                            number: 15,
                            question:
                                "If g : X → Y, then which one of the following represents the given mapping?",
                            options: [
                                "Injective function",
                                "Surjective function",
                                "Bijective function",
                                "Not a function"
                            ]
                        }

                    ]

                },


                B: {

                    title: "SECTION - B",

                    marks: 36,

                    questions: [

                        "Solve the equation (x+1)/x + x/(x+1) = 25/12.",

                        "Solve the given exponential equation.",

                        "Show that the given quadratic equation has equal roots under the stated condition.",

                        "If w varies inversely as z and given values of w and z, find the constant and required value.",

                        "If a/b = b/c = c/d, prove the given relation using k-method.",

                        "Resolve 3x−2 / (2x²−x) into partial fractions.",

                        "For given sets U, A and B, find A′, B′ and verify De Morgan's law.",

                        "For X and Y given as sets, find X×Y and relation R.",

                        "Find arithmetic/geometric mean from the given frequency table.",

                        "Verify the given trigonometric identity.",

                        "In triangle ABC, calculate BC using the cosine rule.",

                        "Prove that two tangents drawn to a circle from a point outside it are equal in length.",

                        "In the given circle find the required length and angle.",

                        "Describe a circle of given radius passing through two given points."

                    ]

                },


                C: {

                    title: "SECTION - C",

                    marks: 24,

                    questions: [

                        "The sum of squares of two digits of a positive integral number is 65 and the number is 9 times the sum of its digits. Find the number.",

                        "Resolve the given rational expression into partial fractions.",

                        "A lighthouse is 300m above sea level. Angles of depression of two boats are 30° and 45°. Find distance between boats.",

                        "Prove that two chords of a circle are congruent, then they will be equidistant from the centre.",

                        "Prove that the measure of a central angle of a minor arc is double the angle subtended by corresponding major arc."

                    ]

                }

            }

        },


        /* ----------------------------------------------------
           2023
        ---------------------------------------------------- */

        "2023": {

            available: true,

            title: "Class 10th Mathematics FBISE Past Paper 2023",

            paperType: "Mathematics SSC-II (Science Group)",

            totalMarks: "75",

            sections: {

                A: {

                    title: "SECTION - A",

                    marks: 15,

                    questions: [

                        {
                            number: 1,
                            question:
                                "If x² − 1/9 = 0 then the solution set is:",
                            options: [
                                "1/3",
                                "-1/3",
                                "{±1/3}",
                                "{±3}"
                            ]
                        },

                        {
                            number: 2,
                            question:
                                "The discriminant of x² − x − 1 = 0 is:",
                            options: [
                                "√5",
                                "±√5",
                                "5",
                                "±5"
                            ]
                        },

                        {
                            number: 3,
                            question:
                                "ω⁰ = ?",
                            options: [
                                "1",
                                "0",
                                "ω",
                                "ω²"
                            ]
                        },

                        {
                            number: 4,
                            question:
                                "If 3n:4m = 3p:4q, alternendo property is:",
                            options: [
                                "3n/3p = 4m/4q",
                                "4m/3n = 4q/3p",
                                "3p/3n = 4m/4q",
                                "3n+4m / 3p+4q"
                            ]
                        },

                        {
                            number: 5,
                            question:
                                "If α, β are roots of 3x²−5x−2=0 then product of roots is:",
                            options: [
                                "2/3",
                                "-2/3",
                                "3/2",
                                "-3/2"
                            ]
                        },

                        {
                            number: 6,
                            question:
                                "In (2x+1)=A(x−1)+B(x−2), the value of A is:",
                            options: [
                                "1",
                                "5",
                                "3",
                                "0"
                            ]
                        },

                        {
                            number: 7,
                            question:
                                "Which type of function is represented by the given mapping?",
                            options: [
                                "Not a function",
                                "Bijective function",
                                "Injective function",
                                "Surjective function"
                            ]
                        },

                        {
                            number: 8,
                            question:
                                "If Σx²=32688, Σx=568, n=10 then standard deviation is:",
                            options: [
                                "6.36",
                                "6.6",
                                "6.44",
                                "6.52"
                            ]
                        },

                        {
                            number: 9,
                            question:
                                "If A ⊂ B then A ∪ B =",
                            options: [
                                "A",
                                "B",
                                "φ",
                                "U"
                            ]
                        },

                        {
                            number: 10,
                            question:
                                "In which quadrant only tan θ and cot θ are positive?",
                            options: [
                                "I",
                                "II",
                                "III",
                                "IV"
                            ]
                        },

                        {
                            number: 11,
                            question:
                                "In the given figure, the length of chord AB is:",
                            options: [
                                "4cm",
                                "9cm",
                                "7cm",
                                "6cm"
                            ]
                        },

                        {
                            number: 12,
                            question:
                                "If a,b,c are sides of a triangle with c>b>a and c²>a²+b² then triangle is:",
                            options: [
                                "Acute angled",
                                "Obtuse angled",
                                "Right angled",
                                "Equilateral"
                            ]
                        },

                        {
                            number: 13,
                            question:
                                "Two tangents drawn to a circle from a point outside are:",
                            options: [
                                "Parallel",
                                "Equal in length",
                                "Not equal in length",
                                "Perpendicular to diameter"
                            ]
                        },

                        {
                            number: 14,
                            question:
                                "A 4cm long chord subtends a central angle of 60°. The radius of the circle is:",
                            options: [
                                "1cm",
                                "2cm",
                                "3cm",
                                "4cm"
                            ]
                        },

                        {
                            number: 15,
                            question:
                                "In the figure, O is centre of circle, find angle x:",
                            options: [
                                "55°",
                                "110°",
                                "220°",
                                "125°"
                            ]
                        }

                    ]

                },


                B: {

                    title: "SECTION - B",

                    marks: 36,

                    questions: [

                        "For the given quadratic equation 3(x²−1)=4x+4, write standard form, find a,b,c and solve using quadratic formula.",

                        "Solve 4.4^(?) + 4/4^(?) = 10.",

                        "If α,β are roots of 3x²−4x+6=0, find α+β, αβ and 1/α² + 1/β².",

                        "Prove the given identity involving ω.",

                        "If a:b=c:d then prove the given relation using k-method.",

                        "The current I in a wire varies directly as electromotive force E and inversely as resistance R. Find I for the given values.",

                        "Find the partial fractions of x² / ((x+2)(x²+4)).",

                        "Given data represent ages of different people. Find arithmetic mean taking A=25.",

                        "Find the length of chord AB in the given figure.",

                        "For X={1,2,3,4}, find X×X, relation R and domain/range.",

                        "Prove the given trigonometric identity.",

                        "In triangle ABC calculate BC using the cosine rule.",

                        "Prove that two tangents drawn to a circle from a point outside are equal in length.",

                        "Circumscribe a circle of radius 5cm passing through points A and B 6cm apart."

                    ]

                },


                C: {

                    title: "SECTION - C",

                    marks: 24,

                    questions: [

                        "Solve the system of equations x²+y²+6x=1 and x²+y²+2x+2y=3.",

                        "Two men are standing on the same side of a 100m high tower. Angles of elevation are 20° and 30°. Find distance between them.",

                        "For U, A and B given as sets, prove De Morgan's laws.",

                        "Prove that if two chords of a circle are congruent then they are equidistant from the centre.",

                        "Prove that the measure of a central angle of a minor arc is double the angle subtended by the corresponding major arc."

                    ]

                }

            }

        },


        /* ----------------------------------------------------
           2024
        ---------------------------------------------------- */

        "2024": {

            available: true,

            title: "Class 10th Mathematics FBISE Past Paper 2024",

            paperType: "Mathematics SSC-II (Science Group)",

            totalMarks: "75",

            sections: {

                A: {

                    title: "SECTION - A",

                    marks: 15,

                    questions: [

                        {
                            number: 1,
                            question:
                                "What is the solution set of √(x+3) = −5?",
                            options: [
                                "φ",
                                "{−22}",
                                "{−28}",
                                "{75.4}"
                            ]
                        },

                        {
                            number: 2,
                            question:
                                "Roots of x²−5x+5=0 are:",
                            options: [
                                "Irrational and unequal",
                                "Imaginary and equal",
                                "Rational and equal",
                                "Rational and unequal"
                            ]
                        },

                        {
                            number: 3,
                            question:
                                "For what value of x, x+13:x+7 = 4:5?",
                            options: [
                                "37",
                                "17",
                                "-37",
                                "-17"
                            ]
                        },

                        {
                            number: 4,
                            question:
                                "Partial fractions of (x+2)/((x+1)(x²+2)) are of the form:",
                            options: [
                                "A/(x+1) + B/(x²+2)",
                                "A/(x+1) + (Bx+C)/(x²+2)",
                                "A/(x²+2) + (Bx+C)/(x+1)",
                                "A/(x+1) + Bx/(x²+2)"
                            ]
                        },

                        {
                            number: 5,
                            question:
                                "Median of the given data 12,14,24,15,19 is:",
                            options: [
                                "15",
                                "17",
                                "19",
                                "34"
                            ]
                        },

                        {
                            number: 6,
                            question:
                                "What is the area of a circular sector having central angle π/3 and radius 3?",
                            options: [
                                "π/2",
                                "3π/2",
                                "6π",
                                "9π/2"
                            ]
                        },

                        {
                            number: 7,
                            question:
                                "In a right triangle projection of perpendicular upon base is:",
                            options: [
                                "Base",
                                "Perpendicular",
                                "Hypotenuse",
                                "Zero"
                            ]
                        },

                        {
                            number: 8,
                            question:
                                "What is the length of chord AB intercepted 4cm away from centre of circle having radius 5cm?",
                            options: [
                                "3cm",
                                "6cm",
                                "7cm",
                                "9cm"
                            ]
                        },

                        {
                            number: 9,
                            question:
                                "If two circles each of radius 5cm touch internally, distance between their centres is:",
                            options: [
                                "0cm",
                                "5cm",
                                "10cm",
                                "25cm"
                            ]
                        },

                        {
                            number: 10,
                            question:
                                "What is the diameter of the circle in the given figure?",
                            options: [
                                "2",
                                "3",
                                "6",
                                "√41"
                            ]
                        },

                        {
                            number: 11,
                            question:
                                "If circular arc subtends a central angle 40°, corresponding chord subtends a central angle:",
                            options: [
                                "20°",
                                "40°",
                                "60°",
                                "80°"
                            ]
                        },

                        {
                            number: 12,
                            question:
                                "What is the value of x in the given figure?",
                            options: [
                                "116°",
                                "128°",
                                "84°",
                                "64°"
                            ]
                        },

                        {
                            number: 13,
                            question:
                                "What is the radius of a circle inscribed in a square of side 4cm?",
                            options: [
                                "2cm",
                                "4cm",
                                "6cm",
                                "√8cm"
                            ]
                        },

                        {
                            number: 14,
                            question:
                                "The shown Venn diagram represents a/an:",
                            options: [
                                "Into function",
                                "Bijective function",
                                "Onto function",
                                "Not a function"
                            ]
                        },

                        {
                            number: 15,
                            question:
                                "Simplified form of (7+5ω+5ω²)² is:",
                            options: [
                                "4",
                                "12",
                                "49",
                                "144"
                            ]
                        }

                    ]

                },


                B: {

                    title: "SECTION - B",

                    marks: 36,

                    questions: [

                        "Reduce the equation 5x − 8/x + 6 = 0 to quadratic form and solve.",

                        "Find the value of p if roots α,β satisfy the given relation.",

                        "If (x+1) and (x−1) are factors of x³+3px²+qx−1, use synthetic division to find p and q.",

                        "Solve the radical equation √(x−3)+5=x.",

                        "If x/p = y/q = z/r, show the required algebraic relation.",

                        "For the given sets U, P and Q verify the De Morgan law.",

                        "Resolve (x²−2)/((x−1)(x+1)²) into partial fractions.",

                        "Find arithmetic mean from the given grouped data.",

                        "Prove that perpendicular from the centre of a circle on a chord bisects it.",

                        "Calculate the length of a chord when its distance from centre and radius are given.",

                        "If a line is drawn perpendicular to a radial segment at its outer end point, prove that it is tangent to the circle.",

                        "Given chord AB and radius, find radius of concentric circle passing through midpoint M.",

                        "In triangle ABC calculate projection length of AC on BA.",

                        "Draw a circle that touches both arms of an angle of 60°."

                    ]

                },


                C: {

                    title: "SECTION - C",

                    marks: 24,

                    questions: [

                        "Using Componendo-Dividendo theorem prove the given relation.",

                        "Determine variance and standard deviation from the given frequency distribution.",

                        "Find height of a tree if its shadow decreases by 10m when angle of depression changes from 30° to 45°.",

                        "If two arcs of a circle (or congruent circles) are intercepted by corresponding chords that are equal, prove the required result.",

                        "Prove that the measure of a central angle of a minor arc is double the angle subtended by the corresponding major arc.",

                        "Circumscribe a square about a circle of radius 5cm and write down construction steps."

                    ]

                }

            }

        },


        /* ----------------------------------------------------
           2025
        ---------------------------------------------------- */

        "2025": {

            available: true,

            title: "Class 10th Mathematics FBISE Past Paper 2025",

            paperType: "Mathematics SSC-II (Science Group)",

            totalMarks: "75",

            sections: {

                A: {

                    title: "SECTION - A",

                    marks: 15,

                    questions: [

                        {
                            number: 1,
                            question:
                                "Which of the following is a radical equation?",
                            options: [
                                "√(3x+1)=0",
                                "√3x+√2=0",
                                "2x+√3=0",
                                "√(2x+3)=0"
                            ]
                        },

                        {
                            number: 2,
                            question:
                                "If α and β are roots of 4x²−3x+7=0, then value of 1/(αβ) is:",
                            options: [
                                "-3/4",
                                "3/7",
                                "-3/7",
                                "4/7"
                            ]
                        },

                        {
                            number: 3,
                            question:
                                "If 2a+1:21::4:7 then a =",
                            options: [
                                "13/2",
                                "1/2",
                                "10",
                                "9/2"
                            ]
                        },

                        {
                            number: 4,
                            question:
                                "The simplified form of 1/(x²−1) is:",
                            options: [
                                "1/(x+1) + 1/(x−1)",
                                "1/(x+1) + 1/(x−1)",
                                "1/(x−1) − 1/(x+1)",
                                "1/(x−1) + 1/(x+1)"
                            ]
                        },

                        {
                            number: 5,
                            question:
                                "From the given mapping g:X→Y, the function is:",
                            options: [
                                "Into function",
                                "Onto function",
                                "Bijective function",
                                "Not a function"
                            ]
                        },

                        {
                            number: 6,
                            question:
                                "If n(X)=n then number of binary relations in X×X is:",
                            options: [
                                "2n",
                                "n²",
                                "2ⁿ",
                                "2n²"
                            ]
                        },

                        {
                            number: 7,
                            question:
                                "Σf(X−X̄)² / Σf represents:",
                            options: [
                                "Range",
                                "Median",
                                "Standard deviation",
                                "Variance"
                            ]
                        },

                        {
                            number: 8,
                            question:
                                "If X̄=32.5, ΣX=1300, then Σf = ?",
                            options: [
                                "40",
                                "80",
                                "160",
                                "400"
                            ]
                        },

                        {
                            number: 9,
                            question:
                                "The central angle of a quadrant of a circle is:",
                            options: [
                                "30°",
                                "45°",
                                "60°",
                                "90°"
                            ]
                        },

                        {
                            number: 10,
                            question:
                                "In the given figure, if OL ⟂ MK and CK=2x+3, CM=4x, find x.",
                            options: [
                                "3/2",
                                "2/3",
                                "-3/2",
                                "-2/3"
                            ]
                        },

                        {
                            number: 11,
                            question:
                                "In the figure chord AB=4cm and central angle is 60°, what is measure of radial segment?",
                            options: [
                                "1",
                                "2",
                                "3",
                                "4"
                            ]
                        },

                        {
                            number: 12,
                            question:
                                "Central angle of minor arc of a circle is always:",
                            options: [
                                "<90°",
                                "<180°",
                                ">90°",
                                ">180°"
                            ]
                        },

                        {
                            number: 13,
                            question:
                                "Interior angle of a regular hexagon is:",
                            options: [
                                "90°",
                                "108°",
                                "120°",
                                "135°"
                            ]
                        },

                        {
                            number: 14,
                            question:
                                "The roots of equation x²−8x+16=0 are:",
                            options: [
                                "Rational and unequal",
                                "Rational and equal",
                                "Imaginary and equal",
                                "Irrational and equal"
                            ]
                        },

                        {
                            number: 15,
                            question:
                                "In the given figure, the angle x is:",
                            options: [
                                "150°",
                                "100°",
                                "75°",
                                "50°"
                            ]
                        }

                    ]

                },


                B: {

                    title: "SECTION - B",

                    marks: 36,

                    questions: [

                        "Solve the given quadratic equation using quadratic formula.",

                        "For given sets verify the required set relation.",

                        "Resolve the given rational expression into partial fractions.",

                        "Compute arithmetic mean from the given grouped data.",

                        "Prove that if angles subtended by two chords of a circle at the centre are equal, the chords are equal.",

                        "Solve the given exponential equation.",

                        "If terminal arm of θ lies in the fourth quadrant and sin θ = -2/3, find remaining trigonometric ratios.",

                        "Find standard deviation by direct method from the given data.",

                        "Prove that any two angles in the same segment of a circle are equal.",

                        "Show that the given set relation is valid.",

                        "Find the length of chord AB in the given circle.",

                        "Prove that a straight line drawn from centre of circle to bisect a chord is perpendicular to chord.",

                        "Find harmonic mean from the given frequency table."

                    ]

                },


                C: {

                    title: "SECTION - C",

                    marks: 24,

                    questions: [

                        "Verify De Morgan's laws for the given sets.",

                        "Solve simultaneous equations x²+y²=20 and 6x²+xy−y²=0.",

                        "Prove the theorem involving square of a side of a triangle and projections.",

                        "Construct two intersecting circles of given radii and draw their direct common tangents. Write construction steps.",

                        "A man standing on a bridge 40m above water observes a boat. Given angles of elevation/depression, find required distance."

                    ]

                }

            }

        }

    }

};


