const addButton = document.getElementsByTagName("button")[0];
const taskInput = document.getElementById("task-message");
const taskBar = document.getElementsByClassName("task-bar")[0];
// taskBar.className = "task-bar";

function addTaskScreen() {
    const taskText = taskInput.value;
    if (taskText.trim() !== "") {
        const taskMsg = document.createElement("form");
        const radioInput = document.createElement("input");
        radioInput.type = "checkbox"; //We should set like this

        const taskPara = document.createElement('p');
        taskPara.textContent = taskText;
        taskMsg.className = "task";

        taskMsg.append(radioInput, taskPara);
        taskInput.value = '';
        taskBar.appendChild(taskMsg);
    }

    else {
        alert("Please enter a task.");
    }
}

function addTaskKey(event) {
    if (event.key === "Enter") {
        const taskText = taskInput.value;
        if (taskText.trim() !== "") {
            const taskMsg = document.createElement("form");
            const radioInput = document.createElement("input");
            radioInput.type = "checkbox"; //We should set like this

            const taskPara = document.createElement('p');
            taskPara.textContent = taskText;
            taskMsg.className = "task";

            taskMsg.append(radioInput, taskPara);
            taskInput.value = '';
            taskBar.appendChild(taskMsg);
        }

        else {
            alert("Please enter a task.");
        }
    }
}

addButton.addEventListener('click', addTaskScreen);
document.addEventListener("keydown", addTaskKey);