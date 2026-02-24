const quizData = [
    {
        // 1

        q: "What is JavaScript mainly used for?",
        options: [
            "Styling web pages",
            "Structuring web pages",
            "Making web pages interactive",
            "Creating databases"
        ],
        answer: 2
    },
    {
        // 2

        q: "How do you print something in the console?",
        options: [
            "print()",
            "console.log()",
            "echo()",
            "write()"
        ],
        answer: 1
    },
    {
        // 3
        q: "Which keyword is used to declare a variable?",
        options: [
            "int",
            "var",
            "string",
            "define"
        ],
        answer: 1
    },
    {
        // 4
        q: " What is the output? console.log(5 + 5);",
        options: [
            "10",
            "55",
            "10",
            "Error"
        ],
        answer: 0
    },
    {
        // 5

        q: "Which of the following is a string?",
        options: [
            "10",
            "\"hello\"",
            "true",
            "null"
        ],
        answer: 1
    },
    {
        // 6
        q: "How do you create an array?",
        options: [
            "ler arr = {1,2,3}",
            "let arr = [1,2,3]",
            "let arr = (1,2,3)",
            "let arr = <1,2,3>"
        ],
        answer: 1
    },
    {
        // 7
 
        q: "How do you call a function named test?",
        options: [
            "call test;",
            "test[]",
            "test();",
            "run test();"
        ],
        answer: 2
    },
    {
        // 8
        q: " Which method adds an element to the end of an array?",
        options: [
            "shift()",
            "unshift()",
            "push()",
            "pop()"
        ],
        answer: 2
    },
    

    {
        // 9

        q: "Which keyword creates a block-scoped variable?",
        options: [
            "var",
            "let",
            "const",
            "Both B and C"
        ],
        answer: 3
    },
    {
        // 10
        q: " Which method is used to select an HTML element?",
        options: [
            "getElementById()",
            "querySelector()",
            "getElementsByClassName()",
            "All of the above"
        ],
        answer: 3
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

