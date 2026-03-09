

let tasksState = {
    pending: [],
    finished: []
};


async function loadTasks() {
    const user = auth.currentUser;
    if (!user) return;

    try {
        const docRef = db.collection("users").doc(user.uid).collection("globals").doc("todolist");
        const doc = await docRef.get();

        if (doc.exists) {
            tasksState = doc.data() || { pending: [], finished: [] };
        } else {
            tasksState = { pending: [], finished: [] };
        }
        renderAllTasks();
    } catch (error) {
        console.error("Error loading tasks:", error);
    }
}

/**
 * Saves tasks to Firestore.
 */
async function saveTasks() {
    const user = auth.currentUser;
    if (!user) return;

    try {
        const docRef = db.collection("users").doc(user.uid).collection("globals").doc("todolist");
        await docRef.set(tasksState);
        console.log("Tasks saved to Firebase.");
    } catch (error) {
        console.error("Error saving tasks:", error);
    }
}

function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Enter a task");
        return;
    }

    tasksState.pending.push(taskText);
    input.value = "";
    renderAllTasks();
    saveTasks();
}

function finishTask(index) {
    const task = tasksState.pending.splice(index, 1)[0];
    tasksState.finished.push(task);
    renderAllTasks();
    saveTasks();
}

function deleteTask(index, listType) {
    if (listType === 'pending') {
        tasksState.pending.splice(index, 1);
    } else {
        tasksState.finished.splice(index, 1);
    }
    renderAllTasks();
    saveTasks();
}

function editTask(index) {
    const oldText = tasksState.pending[index];
    const newText = prompt("Edit your task", oldText);
    if (newText !== null && newText.trim() !== "") {
        tasksState.pending[index] = newText.trim();
        renderAllTasks();
        saveTasks();
    }
}

/**
 * Renders all tasks from the state.
 */
function renderAllTasks() {
    const taskList = document.getElementById("taskList");
    const finishedList = document.getElementById("finishedList");

    if (!taskList || !finishedList) return;

    taskList.innerHTML = "";
    finishedList.innerHTML = "";

    // Render Pending
    tasksState.pending.forEach((text, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${text}</span>
            <div class="buttons">
                <button class="finish-btn" onclick="finishTask(${index})">Finish</button>
                <button class="edit-btn" onclick="editTask(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteTask(${index}, 'pending')">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });

    // Render Finished
    tasksState.finished.forEach((text, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${text}</span>
            <div class="buttons">
                <button class="delete-btn" onclick="deleteTask(${index}, 'finished')">Delete</button>
            </div>
        `;
        finishedList.appendChild(li);
    });
}

// Global scope functions for HTML onclick
window.addTask = addTask;
window.finishTask = finishTask;
window.deleteTask = deleteTask;
window.editTask = editTask;

// Auth listener
auth.onAuthStateChanged(user => {
    if (user) {
        loadTasks();
    } else {
        // Clear UI if logged out
        tasksState = { pending: [], finished: [] };
        renderAllTasks();
    }
});