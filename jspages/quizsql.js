const quizData = [
    {
        // 1
        q: " What does SQL stand for?",
        options: [
            "Structured Question Language",
            "Simple Query Language",
            "Structured Query Language",
            "System Query Language"
        ],
        answer: 2
    },
    {
        // 2
        q: "Which command is used to retrieve data from a table?",
        options: [
            "GET",
            "SELECT",
            "FETCH",
            "OPEN"
        ],
        answer: 1
    },
    {
        // 3
        q: "Which SQL statement is used to insert new data?",
        options: [
            "ADD",
            "INSERT INTO",
            "UPDATE",
            "CREATE"
        ],
        answer: 1
    },
    {
        // 4
        q: "Which clause is used to filter records?",
        options: [
            "filter",
            "SORT",
            "WHERE",
            "Group"
        ],
        answer: 2
    },
    {
        // 5
        q: " Which command is used to delete a table completely?",
        options: [
            "DELETE",
            "REMOVE",
            "DROP",
            "CLEAR"
        ],
        answer: 2
    },
    {
        // 6
        q: " Which SQL statement is used to update existing records?",
        options: [
            "MODIFY",
            "CHANGE",
            "UPDATE",
            "SET"
        ],
        answer: 2
    },
    {
        // 7
        q: "What is a primary key?",
        options: [
            "duplicate key",
            "key that uniquely identifies each record",
            "foreign key",
            "normal column"
        ],
        answer: 1
    },
    {
        // 8
        q: "What is a foreign key?",
        options: [
            "key from another database",
            "key that links two tables",
            "duplicate key",
            "temporary key"
        ],
        answer: 1
    },
    

    {
        // 9
        q: " Which clause is used to group rows with the same values?",
        options: [
            "ORDER BY",
            "WHERE",
            "GROUP BY",
            "HAVING"
        ],
        answer: 2
    },
    {
        // 10
        q: "What is the purpose of the HAVING clause?",
        options: [
            "Filter rows before grouping",
            "Filter grouped data",
            "Sort data",
            "Delete data"
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

