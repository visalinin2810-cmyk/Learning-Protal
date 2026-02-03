const quizData = [
    {
        q: "What is the purpose of the <meta> tag?",
        options: [
            "Add images",
            "Provide metadata",
            "Create links",
            "Add styles"
        ],
        answer: 1
    },
    {
        q: "Which attribute opens a link in a new tab?",
        options: [
            "href",
            "rel",
            "target='_blank'",
            "src"
        ],
        answer: 2
    },
    {
        q: "Which tag defines navigation links?",
        options: [
            "<header>",
            "<nav>",
            "<menu>",
            "<section>"
        ],
        answer: 1
    },
    {
        q: "Which input type is used for email validation?",
        options: [
            "text",
            "mail",
            "email",
            "validate"
        ],
        answer: 2
    },
    {
        q: "What does the 'required' attribute do?",
        options: [
            "Hides input",
            "Disables input",
            "Prevents empty submission",
            "Auto fills data"
        ],
        answer: 2
    },
    {
        q: "Which tag is semantic?",
        options: [
            "<div>",
            "<span>",
            "<section>",
            "<b>"
        ],
        answer: 2
    },
    {
        q: "Default display of <div>?",
        options: [
            "inline",
            "block",
            "inline-block",
            "none"
        ],
        answer: 1
    },
    {
        q: "Which attribute improves image accessibility?",
        options: [
            "src",
            "title",
            "alt",
            "width"
        ],
        answer: 2
    },
    {
        q: "Which tag embeds video in HTML5?",
        options: [
            "<media>",
            "<embed>",
            "<movie>",
            "<video>"
        ],
        answer: 3
    },
    {
        q: "Which tag is used for form grouping?",
        options: [
            "<group>",
            "<fieldset>",
            "<section>",
            "<legend>"
        ],
        answer: 1
    }
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const options = document.querySelectorAll(".option");
const scoreEl = document.getElementById("score");
const progressEl = document.getElementById("progress");

function loadQuestion() {
    let q = quizData[current];
    questionEl.textContent = q.q;
    options.forEach((btn, i) => {
        btn.textContent = q.options[i];
    });
    progressEl.textContent = `Question ${current + 1} of 10`;
}

function checkAnswer(choice) {
    if (choice === quizData[current].answer) {
        score++;
    }

    current++;

    if (current < quizData.length) {
        loadQuestion();
    } else {
        questionEl.textContent = "Quiz Completed!";
        document.getElementById("options").innerHTML = "";
        progressEl.textContent = "";
        scoreEl.textContent = `Final Score: ${score} / 10`;
    }

    scoreEl.textContent = `Score: ${score}`;
}

loadQuestion();

