const quizData = [
    {
        // 1
        q: "What is the output? \print(\"Hello\" * 3)",
        options: [
            "HelloHelloHello",
            "Hello 3",
            "Error",
            "Hello*3"
        ],
        answer: 2
    },
    {
        // 2

        q: "What is the main difference between a list and a tuple in Python?",
        options: [
            "Lists are faster than tuples",
            "Tuples are mutable, lists are immutable",
            "Lists are mutable, tuples are immutable",
            "There is no difference"
        ],
        answer: 2
    },
    {
        // 3

        q: "What does the is operator check?",
        options: [
            "Value equality",
            "Data type equality",
            "Object identity (memory location)",
            "Variable name"
        ],
        answer: 2
    },
    {
        // 4
        q: "What is a decorator in Python?",
        options: [
            "loop structure",
            "A function that modifies another function",
            "A class variable",
            "A built-in keyword"
        ],
        answer: 1
    },
    {
        // 5

        q: "What does finally do?",
        options: [
            " Runs only if error happens",
            " Runs only if no error",
            "Always runs",
            "Stops program"
        ],
        answer: 2
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
        q: "What is shallow copy?",
        options: [
            "Copies everything fully",
            "Copies only top object",
            "Deletes original data",
            "Creates empty object"
        ],
        answer: 1
    },
    {
        // 8
        q: " Why do we use list comprehension?",
        options: [
            "delete list",
            "create list in short way",
            "print list",
            "convert list"
        ],
        answer: 1
    },
    

    {
        // 9
        q: " What is a dictionary in Python??",
        options: [
            "Ordered collection of numbers",
            "Collection of key–value pairs",
            "Collection of only keys",
            "Collection of only values"
        ],
        answer: 1
    },
    {
        // 10
        q: "What is inheritance in Python?",
        options: [
            "Creating many objects ",
            "One class using properties of another class",
            "Deleting a class",
            "Copying a function"
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

