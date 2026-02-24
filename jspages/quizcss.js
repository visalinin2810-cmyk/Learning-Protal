const quizData = [
    {
        // 1
        q: "Which CSS property controls the space between grid items?",
        options: [
            "margin",
            "padding",
            "gap",
            "spacing"
        ],
        answer: 2
    },
    {
        // 2
        q: "What happens when display: none is applied to an element?",
        options: [
            "The element is hidden",
            "The element is moved to the bottom",
            "The element is made invisible",
            "The element is removed from the DOM"
        ],
        answer: 0
    },
    {
        // 3

        q: "Which position value makes an element stick while scrolling?",
        options: [
            "static",
            "sticky",
            "relative",
            "absolute"
        ],
        answer: 1
    },
    {
        // 4
        q: "Which selector has the highest specificity?",
        options: [
            "Element selector",
            "Class selector",
            "ID selector",
            "Universal selector"
        ],
        answer: 2
    },
    {
        // 5

        q: "What is the default value of position in CSS?",
        options: [
            "relative",
            "static",
            "absolute",
            "fixed"
        ],
        answer: 1
    },
    {
        // 6

        q: "Which property is used to control the stacking order of elements?",
        options: [
            "float",
            "z-index",
            "overflow",
            "display"
        ],
        answer: 1
    },
    {
        // 7
 
        q: "Which unit is relative to the root element’s font size?",
        options: [
            "em",
            "rem",
            "px",
            "%"
        ],
        answer: 1
    },
    {
        // 8

        q: "Which CSS layout is best for two-dimensional layouts?",
        options: [
            "Float",
            "Flexbox",
            "Grid",
            "Inline-block"
        ],
        answer: 2
    },
    

    {
        // 9

        q: "Which property prevents an image from stretching and keeps its aspect ratio?",
        options: [
            "background-size",
            "object-fit",
            "overflow",
            "image-rendering"
        ],
        answer: 1
    },
    {
        // 10
        q: " What does overflow: hidden do?",
        options: [
            "Adds scrollbars",
            "Shows overflow content",
            "Hides overflow content",
            "Resizes the element"
        ],
        answer: 2
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

