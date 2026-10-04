/* =========================================================
   SAHAAYA
   Social Support & Welfare Navigator
   Prototype Matching Engine
   ========================================================= */


/* =========================================================
   APPLICATION STATE
   ========================================================= */

const state = {
    currentQuestion: 0,

    answers: {
        gender: null,
        lifeStage: null,
        income: null,
        occupation: null,
        situation: null,
        priority: null
    },

    history: [],

    results: [],

    saved: false
};


/* =========================================================
   PROTOTYPE SUPPORT DATABASE
   =========================================================
   
   IMPORTANT:
   These are prototype records for demonstration.
   Government eligibility and benefit values must be
   verified from official sources before real application.
   ========================================================= */

const supportDatabase = [

    {
        id: "S001",

        name: "Women & Family Support",

        category: "Women & Family",

        description:
            "Prototype support pathway for women seeking financial, family or social assistance.",

        benefit: 12000,

        gender: ["woman"],

        lifeStage: [
            "young-adult",
            "mother",
            "caregiver",
            "general"
        ],

        income: [
            "low",
            "lower-middle"
        ],

        occupation: [
            "unemployed",
            "self-employed",
            "informal",
            "student",
            "homemaker"
        ],

        situation: [
            "financial",
            "family",
            "general"
        ],

        priority: [
            "financial",
            "family",
            "general"
        ],

        documents: [
            "Identity proof",
            "Address proof",
            "Income certificate",
            "Bank account details"
        ],

        status: "Prototype",

        officialUrl: null
    },


    {
        id: "S002",

        name: "Education & Skill Support",

        category: "Education",

        description:
            "Prototype pathway for students and young adults looking for education or skill-development support.",

        benefit: 15000,

        gender: [
            "woman",
            "man",
            "other"
        ],

        lifeStage: [
            "student",
            "young-adult"
        ],

        income: [
            "low",
            "lower-middle",
            "middle"
        ],

        occupation: [
            "student",
            "unemployed"
        ],

        situation: [
            "education",
            "employment",
            "general"
        ],

        priority: [
            "education",
            "employment"
        ],

        documents: [
            "Identity proof",
            "Educational certificate",
            "Address proof",
            "Bank account details"
        ],

        status: "Prototype",

        officialUrl: null
    },


    {
        id: "S003",

        name: "Livelihood & Self-Employment Support",

        category: "Livelihood",

        description:
            "Prototype pathway for people seeking livelihood, self-employment or small-business assistance.",

        benefit: 25000,

        gender: [
            "woman",
            "man",
            "other"
        ],

        lifeStage: [
            "young-adult",
            "working-age",
            "caregiver",
            "general"
        ],

        income: [
            "low",
            "lower-middle"
        ],

        occupation: [
            "self-employed",
            "informal",
            "unemployed"
        ],

        situation: [
            "employment",
            "financial",
            "business"
        ],

        priority: [
            "employment",
            "business",
            "financial"
        ],

        documents: [
            "Identity proof",
            "Address proof",
            "Bank account details",
            "Income certificate"
        ],

        status: "Prototype",

        officialUrl: null
    },


    {
        id: "S004",

        name: "Family & Child Support",

        category: "Family",

        description:
            "Prototype pathway for parents and caregivers seeking family or child-related assistance.",

        benefit: 18000,

        gender: [
            "woman",
            "man",
            "other"
        ],

        lifeStage: [
            "mother",
            "caregiver",
            "working-age"
        ],

        income: [
            "low",
            "lower-middle"
        ],

        occupation: [
            "homemaker",
            "self-employed",
            "informal",
            "unemployed",
            "working"
        ],

        situation: [
            "family",
            "financial"
        ],

        priority: [
            "family",
            "financial"
        ],

        documents: [
            "Identity proof",
            "Address proof",
            "Child/family documents",
            "Bank account details"
        ],

        status: "Prototype",

        officialUrl: null
    },


    {
        id: "S005",

        name: "Employment & Job-Seeking Support",

        category: "Employment",

        description:
            "Prototype pathway for unemployed or job-seeking users looking for employment support.",

        benefit: 10000,

        gender: [
            "woman",
            "man",
            "other"
        ],

        lifeStage: [
            "young-adult",
            "working-age",
            "general"
        ],

        income: [
            "low",
            "lower-middle",
            "middle"
        ],

        occupation: [
            "unemployed"
        ],

        situation: [
            "employment",
            "financial"
        ],

        priority: [
            "employment",
            "financial"
        ],

        documents: [
            "Identity proof",
            "Address proof",
            "Educational certificate",
            "Bank account details"
        ],

        status: "Prototype",

        officialUrl: null
    },


    {
        id: "S006",

        name: "Basic Needs & Financial Support",

        category: "Financial Assistance",

        description:
            "Prototype pathway for households experiencing financial difficulty and basic-needs challenges.",

        benefit: 20000,

        gender: [
            "woman",
            "man",
            "other"
        ],

        lifeStage: [
            "general",
            "working-age",
            "caregiver",
            "mother"
        ],

        income: [
            "low"
        ],

        occupation: [
            "unemployed",
            "informal",
            "self-employed",
            "homemaker"
        ],

        situation: [
            "financial",
            "housing"
        ],

        priority: [
            "financial",
            "housing"
        ],

        documents: [
            "Identity proof",
            "Address proof",
            "Income certificate",
            "Bank account details"
        ],

        status: "Prototype",

        officialUrl: null
    }

];


/* =========================================================
   QUESTIONS
   ========================================================= */

const questions = [

    {
        key: "gender",

        category: "PROFILE",

        title: "What best describes you?",

        description:
            "This helps SAHAAYA identify support pathways that may apply to your profile.",

        options: [
            {
                value: "woman",
                icon: "♀",
                title: "Woman",
                description: "I am seeking support for myself"
            },

            {
                value: "man",
                icon: "♂",
                title: "Man",
                description: "I am seeking support for myself"
            },

            {
                value: "family",
                icon: "♡",
                title: "Family / Caregiver",
                description: "I am seeking support for my family"
            },

            {
                value: "other",
                icon: "•",
                title: "Other",
                description: "I need help understanding my options"
            }
        ]
    },


    {
        key: "lifeStage",

        category: "LIFE STAGE",

        title: "What is your current life stage?",

        description:
            "Life-stage information helps us identify more relevant support pathways.",

        options: [
            {
                value: "student",
                icon: "◆",
                title: "Student",
                description: "Currently studying"
            },

            {
                value: "young-adult",
                icon: "↗",
                title: "Young Adult",
                description: "Starting my career or independent life"
            },

            {
                value: "working-age",
                icon: "▣",
                title: "Working Age",
                description: "Currently working or seeking work"
            },

            {
                value: "mother",
                icon: "♡",
                title: "Parent / Mother",
                description: "Caring for a child or family"
            },

            {
                value: "caregiver",
                icon: "♧",
                title: "Caregiver",
                description: "Responsible for another family member"
            },

            {
                value: "general",
                icon: "•",
                title: "Other",
                description: "None of the above"
            }
        ]
    },


    {
        key: "income",

        category: "HOUSEHOLD",

        title: "What is your approximate household income level?",

        description:
            "You can choose the closest category. Exact eligibility would be verified later.",

        options: [
            {
                value: "low",
                icon: "₹",
                title: "Low",
                description: "Limited household income"
            },

            {
                value: "lower-middle",
                icon: "₹",
                title: "Lower Middle",
                description: "Some regular household income"
            },

            {
                value: "middle",
                icon: "₹",
                title: "Middle",
                description: "Stable household income"
            },

            {
                value: "high",
                icon: "₹",
                title: "Higher Income",
                description: "Relatively higher household income"
            }
        ]
    },


    {
        key: "occupation",

        category: "LIVELIHOOD",

        title: "What best describes your current work situation?",

        description:
            "This helps identify livelihood, employment and financial support pathways.",

        options: [
            {
                value: "student",
                icon: "◆",
                title: "Student",
                description: "Currently studying"
            },

            {
                value: "employed",
                icon: "▣",
                title: "Employed",
                description: "Working in a regular job"
            },

            {
                value: "self-employed",
                icon: "◈",
                title: "Self-Employed",
                description: "Running my own work or business"
            },

            {
                value: "informal",
                icon: "◇",
                title: "Informal Work",
                description: "Daily wage / informal livelihood"
            },

            {
                value: "unemployed",
                icon: "○",
                title: "Currently Unemployed",
                description: "Looking for work"
            },

            {
                value: "homemaker",
                icon: "♡",
                title: "Homemaker",
                description: "Primarily managing household responsibilities"
            }
        ]
    },


    {
        key: "situation",

        category: "CURRENT NEED",

        title: "What is your main situation right now?",

        description:
            "Choose the issue where you need the most support.",

        options: [
            {
                value: "financial",
                icon: "₹",
                title: "Financial Difficulty",
                description: "I need financial assistance"
            },

            {
                value: "education",
                icon: "◆",
                title: "Education",
                description: "I need education or skill support"
            },

            {
                value: "employment",
                icon: "▣",
                title: "Employment",
                description: "I need help finding work"
            },

            {
                value: "family",
                icon: "♡",
                title: "Family / Child",
                description: "I need family-related support"
            },

            {
                value: "business",
                icon: "◈",
                title: "Business / Livelihood",
                description: "I want to start or improve livelihood"
            },

            {
                value: "housing",
                icon: "⌂",
                title: "Housing / Basic Needs",
                description: "I need help with basic needs"
            }
        ]
    },


    {
        key: "priority",

        category: "PRIORITY",

        title: "What would help you most right now?",

        description:
            "This final answer helps SAHAAYA rank the most relevant matches.",

        options: [
            {
                value: "financial",
                icon: "₹",
                title: "Financial Support",
                description: "Reduce immediate financial pressure"
            },

            {
                value: "education",
                icon: "◆",
                title: "Education / Skills",
                description: "Improve learning or skills"
            },

            {
                value: "employment",
                icon: "▣",
                title: "Employment",
                description: "Find work or livelihood"
            },

            {
                value: "family",
                icon: "♡",
                title: "Family Support",
                description: "Support my family responsibilities"
            },

            {
                value: "business",
                icon: "◈",
                title: "Start / Grow Business",
                description: "Build a livelihood"
            },

            {
                value: "housing",
                icon: "⌂",
                title: "Basic Needs",
                description: "Improve essential living conditions"
            }
        ]
    }

];


/* =========================================================
   DOM REFERENCES
   ========================================================= */

const navButtons =
    document.querySelectorAll(".nav-btn");

const sections =
    document.querySelectorAll(".section");

const startBtn =
    document.getElementById("startBtn");

const exploreBtn =
    document.getElementById("exploreBtn");

const dashboardStartBtn =
    document.getElementById("dashboardStartBtn");

const answerOptions =
    document.getElementById("answerOptions");

const questionCategory =
    document.getElementById("questionCategory");

const questionTitle =
    document.getElementById("questionTitle");

const questionDescription =
    document.getElementById("questionDescription");

const questionProgress =
    document.getElementById("questionProgress");

const progressPercent =
    document.getElementById("progressPercent");

const progressFill =
    document.getElementById("progressFill");

const backBtn =
    document.getElementById("backBtn");

const schemeResults =
    document.getElementById("schemeResults");

const documentList =
    document.getElementById("documentList");

const matchCount =
    document.getElementById("matchCount");

const benefitTotal =
    document.getElementById("benefitTotal");

const documentCount =
    document.getElementById("documentCount");

const overallScore =
    document.getElementById("overallScore");

const restartBtn =
    document.getElementById("restartBtn");

const dashboardBtn =
    document.getElementById("dashboardBtn");

const savedSupport =
    document.getElementById("savedSupport");


/* =========================================================
   NAVIGATION
   ========================================================= */

function showSection(sectionId) {

    sections.forEach(section => {

        section.classList.remove("active-section");

    });

    const target =
        document.getElementById(sectionId);

    if (target) {

        target.classList.add("active-section");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    navButtons.forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.section === sectionId
        );

    });
}


navButtons.forEach(button => {

    button.addEventListener("click", () => {

        showSection(button.dataset.section);

    });

});


/* =========================================================
   START ELIGIBILITY
   ========================================================= */

function startEligibility() {

    state.currentQuestion = 0;

    state.history = [];

    state.answers = {
        gender: null,
        lifeStage: null,
        income: null,
        occupation: null,
        situation: null,
        priority: null
    };

    state.results = [];

    showSection("check");

    renderQuestion();

}


startBtn.addEventListener(
    "click",
    startEligibility
);


exploreBtn.addEventListener(
    "click",
    () => {

        showSection("check");

        renderQuestion();

    }
);


dashboardStartBtn.addEventListener(
    "click",
    startEligibility
);


/* =========================================================
   RENDER QUESTION
   ========================================================= */

function renderQuestion() {

    const question =
        questions[state.currentQuestion];

    if (!question) {

        generateResults();

        return;
    }


    const questionNumber =
        state.currentQuestion + 1;

    const totalQuestions =
        questions.length;

    const percentage =
        Math.round(
            (questionNumber / totalQuestions) * 100
        );


    questionCategory.textContent =
        question.category;

    questionTitle.textContent =
        question.title;

    questionDescription.textContent =
        question.description;

    questionProgress.textContent =
        `Question ${questionNumber} of ${totalQuestions}`;

    progressPercent.textContent =
        `${percentage}%`;

    progressFill.style.width =
        `${percentage}%`;


    answerOptions.innerHTML = "";


    question.options.forEach(option => {

        const button =
            document.createElement("button");

        button.className =
            "answer-option";

        button.dataset.value =
            option.value;


        button.innerHTML = `

            <span class="option-icon">
                ${option.icon}
            </span>

            <span>
                <strong>
                    ${option.title}
                </strong>

                <small>
                    ${option.description}
                </small>
            </span>

            <span class="option-arrow">
                →
            </span>

        `;


        button.addEventListener(
            "click",
            () => selectAnswer(option.value)
        );


        answerOptions.appendChild(button);

    });


    backBtn.classList.toggle(
        "hidden",
        state.currentQuestion === 0
    );

}


/* =========================================================
   SELECT ANSWER
   ========================================================= */

function selectAnswer(value) {

    const question =
        questions[state.currentQuestion];

    state.answers[question.key] =
        value;


    state.history[state.currentQuestion] =
        value;


    if (
        state.currentQuestion <
        questions.length - 1
    ) {

        state.currentQuestion++;

        renderQuestion();

    } else {

        generateResults();

    }

}


/* =========================================================
   PREVIOUS QUESTION
   ========================================================= */

backBtn.addEventListener(
    "click",
    () => {

        if (state.currentQuestion > 0) {

            state.currentQuestion--;

            renderQuestion();

        }

    }
);


/* =========================================================
   MATCHING ENGINE
   ========================================================= */

function calculateMatch(scheme) {

    let score = 0;

    let possibleScore = 0;


    /*
       Each matching dimension receives points.
       This is intentionally transparent so the prototype
       can demonstrate explainable matching.
    */


    // Gender
    possibleScore += 15;

    if (
        scheme.gender.includes(
            state.answers.gender
        )
    ) {

        score += 15;

    } else if (
        state.answers.gender === "family" &&
        scheme.gender.includes("other")
    ) {

        score += 8;

    }


    // Life stage
    possibleScore += 20;

    if (
        scheme.lifeStage.includes(
            state.answers.lifeStage
        )
    ) {

        score += 20;

    }


    // Income
    possibleScore += 20;

    if (
        scheme.income.includes(
            state.answers.income
        )
    ) {

        score += 20;

    }


    // Occupation
    possibleScore += 15;

    if (
        scheme.occupation.includes(
            state.answers.occupation
        )
    ) {

        score += 15;

    }


    // Current situation
    possibleScore += 15;

    if (
        scheme.situation.includes(
            state.answers.situation
        )
    ) {

        score += 15;

    }


    // Priority
    possibleScore += 15;

    if (
        scheme.priority.includes(
            state.answers.priority
        )
    ) {

        score += 15;

    }


    return Math.round(
        (score / possibleScore) * 100
    );

}


/* =========================================================
   GENERATE RESULTS
   ========================================================= */

function generateResults() {

    state.results =
        supportDatabase
            .map(scheme => {

                return {

                    ...scheme,

                    matchScore:
                        calculateMatch(scheme)

                };

            })
            .filter(
                scheme =>
                    scheme.matchScore >= 35
            )
            .sort(
                (a, b) =>
                    b.matchScore -
                    a.matchScore
            );


    if (state.results.length === 0) {

        state.results =
            supportDatabase
                .map(scheme => {

                    return {

                        ...scheme,

                        matchScore:
                            calculateMatch(scheme)

                    };

                })
                .sort(
                    (a, b) =>
                        b.matchScore -
                        a.matchScore
                )
                .slice(0, 2);

    }


    renderResults();

    showSection("results");

}


/* =========================================================
   CONFIDENCE LEVEL
   ========================================================= */

function getConfidence(score) {

    if (score >= 75) {

        return "High confidence";

    }

    if (score >= 55) {

        return "Medium confidence";

    }

    return "Low confidence";

}


/* =========================================================
   RENDER RESULTS
   ========================================================= */

function renderResults() {

    schemeResults.innerHTML = "";

    documentList.innerHTML = "";


    const matches =
        state.results;


    const totalBenefits =
        matches.reduce(
            (total, scheme) =>
                total + scheme.benefit,
            0
        );


    const documents =
        new Set();


    matches.forEach(
        scheme => {

            scheme.documents.forEach(
                document =>
                    documents.add(document)
            );

        }
    );


    const averageScore =
        matches.length > 0

            ? Math.round(
                matches.reduce(
                    (total, scheme) =>
                        total +
                        scheme.matchScore,
                    0
                ) / matches.length
            )

            : 0;


    matchCount.textContent =
        matches.length;

    benefitTotal.textContent =
        formatCurrency(totalBenefits);

    documentCount.textContent =
        documents.size;

    overallScore.textContent =
        `${averageScore}%`;


    matches.forEach(
        scheme => {

            const card =
                document.createElement("article");

            card.className =
                "scheme-card";


            const confidence =
                getConfidence(
                    scheme.matchScore
                );


            card.innerHTML = `

                <div class="scheme-top">

                    <div>

                        <h4>
                            ${scheme.name}
                        </h4>

                        <p>
                            ${scheme.description}
                        </p>

                    </div>

                    <span class="confidence">
                        ${confidence}
                    </span>

                </div>


                <div class="scheme-meta">

                    <span class="scheme-tag">
                        ${scheme.category}
                    </span>

                    <span class="scheme-tag">
                        ${scheme.matchScore}% match
                    </span>

                    <span class="scheme-tag">
                        ${scheme.status}
                    </span>

                </div>


                <div class="scheme-actions">

                    <span class="benefit">
                        Prototype value:
                        ${formatCurrency(scheme.benefit)}
                    </span>

                    <button
                        class="apply-btn"
                        data-scheme="${scheme.id}"
                    >
                        View next step →
                    </button>

                </div>

            `;


            schemeResults.appendChild(card);

        }
    );


    documents.forEach(
        document => {

            const li =
                documentList.appendChild(
                    document.createElement("li")
                );

            li.textContent =
                document;

        }
    );


    document
        .querySelectorAll(".apply-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const scheme =
                        supportDatabase.find(
                            item =>
                                item.id ===
                                button.dataset.scheme
                        );

                    showNextStep(scheme);

                }
            );

        });

}


/* =========================================================
   NEXT STEP
   ========================================================= */

function showNextStep(scheme) {

    if (!scheme) {
        return;
    }


    alert(

        `${scheme.name}\n\n` +

        `Match confidence: ` +
        `${getConfidence(scheme.matchScore)}\n\n` +

        `Next step:\n` +

        `1. Review the eligibility conditions.\n` +
        `2. Prepare the listed documents.\n` +
        `3. Verify the information through the official government source.\n` +
        `4. Apply only through an official portal.\n\n` +

        `SAHAAYA Prototype Notice:\n` +
        `This recommendation is for demonstration and is not an official eligibility decision.`

    );

}


/* =========================================================
   CURRENCY FORMAT
   ========================================================= */

function formatCurrency(value) {

    return new Intl.NumberFormat(
        "en-IN",
        {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }
    ).format(value);

}


/* =========================================================
   SAVE TO DASHBOARD
   ========================================================= */

dashboardBtn.addEventListener(
    "click",
    saveSupport
);


function saveSupport() {

    if (
        state.results.length === 0
    ) {

        return;

    }


    const savedData = {

        answers:
            state.answers,

        results:
            state.results,

        savedAt:
            new Date().toISOString()

    };


    localStorage.setItem(
        "sahaayaSavedSupport",
        JSON.stringify(savedData)
    );


    state.saved = true;

    renderDashboard();

    showSection("dashboard");

}


/* =========================================================
   LOAD SAVED DATA
   ========================================================= */

function loadSavedData() {

    const saved =
        localStorage.getItem(
            "sahaayaSavedSupport"
        );


    if (!saved) {

        return;

    }


    try {

        const data =
            JSON.parse(saved);


        if (
            data &&
            Array.isArray(data.results)
        ) {

            state.results =
                data.results;

            state.answers =
                data.answers || state.answers;

            state.saved = true;

        }


    } catch (error) {

        console.error(
            "Unable to load saved SAHAAYA data:",
            error
        );

    }

}


/* =========================================================
   RENDER DASHBOARD
   ========================================================= */

function renderDashboard() {

    if (
        !state.saved ||
        state.results.length === 0
    ) {

        savedSupport.innerHTML = `

            <div class="empty-dashboard">

                <div class="empty-icon">
                    S
                </div>

                <h3>
                    Nothing saved yet
                </h3>

                <p>
                    Complete the eligibility check
                    to save potential support options here.
                </p>

                <button
                    class="primary-btn"
                    id="dashboardStartBtn2"
                >
                    Check Eligibility →
                </button>

            </div>

        `;


        document
            .getElementById("dashboardStartBtn2")
            .addEventListener(
                "click",
                startEligibility
            );


        return;

    }


    const savedCards =
        state.results
            .slice(0, 4)
            .map(
                scheme => `

                    <div class="saved-list">

                        <div class="scheme-card">

                            <div class="scheme-top">

                                <div>

                                    <h4>
                                        ${scheme.name}
                                    </h4>

                                    <p>
                                        ${scheme.description}
                                    </p>

                                </div>

                                <span class="confidence">
                                    ${getConfidence(
                                        scheme.matchScore
                                    )}
                                </span>

                            </div>


                            <div class="scheme-meta">

                                <span class="scheme-tag">
                                    ${scheme.category}
                                </span>

                                <span class="scheme-tag">
                                    ${scheme.matchScore}% match
                                </span>

                            </div>

                        </div>

                    </div>

                `
            )
            .join("");


    savedSupport.innerHTML = `

        <div class="saved-card">

            <span class="eyebrow">
                SAVED RECOMMENDATIONS
            </span>

            <h3>
                Your potential support options
            </h3>

            <p>
                These results are stored locally on this
                device for prototype demonstration.
            </p>

            ${savedCards}

        </div>

    `;

}


/* =========================================================
   RESTART
   ========================================================= */

restartBtn.addEventListener(
    "click",
    startEligibility
);


/* =========================================================
   INITIALIZE
   ========================================================= */

loadSavedData();

renderDashboard();

showSection("home");


console.log(
    "SAHAAYA prototype initialized successfully."
);
