const quizData = [
    {
        //1
        q: " What is Java?",
        options: [
            "Database",
            "Programming language",
            "Operating system",
            "Browser"
        ],
        answer: 1
    },
    {
        //2

        q: "Which keyword is used to create a class in Java?",
        options: [
            "function",
            "class",
            "define",
            "object"
        ],
        answer: 1
    },
    {
        //3
        q: "Which method is the entry point of a Java program?",
        options: [
            "start()",
            "main()",
            "run()",
            "init()"
        ],
        answer: 1
    },
    {
        //4

        q: "Which symbol is used to end a statement in Java?",
        options: [
            ":",
            ".",
            ";",
            ","
        ],
        answer: 2
    },
    {
        //5
        q: "Which data type is used to store numbers?",
        options: [
            "String",
            "int",
            "boolean",
            "char"
        ],
        answer: 1
    },
    {
        //6 
        q: "How do you print in Java?",
        options: [
            "print()",
            "console.log()",
            "System.out.println()",
            "echo()"
        ],
        answer: 2
    },
    {
        //7
        q: " Which concept allows one class to inherit another?",
        options: [
            "Encapsulation",
            "Abstraction",
            "Inheritance",
            "Polymorphism"
        ],
        answer: 2
    },
    {
        //8
        q: "What is method overloading?",
        options: [
            "Same method name with different parameters",
            "Different method names",
            "Same parameters in different classes",
            "Calling constructor twice"
        ],
        answer: 0
    },
    {
        //9
        q: " Which keyword is used to inherit a class?",
        options: [
            "implement",
            "inherit",
            "extends",
            "super"
        ],
        answer: 2
    },
    {
        //10
 
        q: " Which keyword is used to handle exceptions?",
        options: [
            "error",
            "try",
            "check",
            "final"
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

