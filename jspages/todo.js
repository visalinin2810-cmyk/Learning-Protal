let tasksState = {
    pending: [],
    finished: []
};

// firebase la irukura task a eduthu screen la show pannum

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
        if (error.code === 'permission-denied') {
            console.error("Firestore Permission Denied for To-Do List. Please update your Rules.");
        }
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
        if (error.code === 'permission-denied') {
            alert("To-Do List Error: Missing Firestore Permissions. Check your Security Rules.");
        }
        console.error("Error saving tasks:", error);
    }
}
// task add pandrathukaga use pandrom add pannathuku apram save aaganum and render aaganum

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
 * Renders all tasks from the state. ellathaiyum ui la show pannum
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

    // finished task a ui la show pannum
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

// on click work aaga function global al irukanum so attach to window
window.addTask = addTask;
window.finishTask = finishTask;
window.deleteTask = deleteTask;
window.editTask = editTask;

// Auth listener
auth.onAuthStateChanged(user => {
    if (user) {
        loadTasks();
    } else {
        tasksState = { pending: [], finished: [] };
        renderAllTasks();
    }
});