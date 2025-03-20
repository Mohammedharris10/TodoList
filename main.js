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


        
        const deleteButton = document.createElement('i');
        // deleteButton.textContent = "X";
        deleteButton.classList.add("delete-btn", "bi", "bi-x-lg");

        taskMsg.append(radioInput, taskPara, deleteButton);
        taskInput.value = '';
        taskBar.appendChild(taskMsg);

        function finishTask(event) {
            if (radioInput.checked) {
                taskPara.style.textDecoration = 'line-through';
            } else {
                taskPara.style.textDecoration = 'none';
            }
        }

        radioInput.addEventListener("click", finishTask);
            

            deleteButton.addEventListener("click",function (event){
                    event.currentTarget.parentNode.remove();
            });
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

            const deleteButton = document.createElement('i');
            deleteButton.classList.add("delete-btn", "bi", "bi-x-lg");


            taskMsg.append(radioInput, taskPara,deleteButton);
            taskInput.value = '';
            taskBar.appendChild(taskMsg);

            function finishTask(event) {
                if (radioInput.checked) {
                    taskPara.style.textDecoration = 'line-through';
                } else {
                    
                    taskPara.style.textDecoration = 'none'; 
                    // My learning: Mostly avoid to use htmlinner for style like this taskPara.innerHTML = `<del>${taskPara.innerHTML}</del>
                }
            }

            radioInput.addEventListener("click", finishTask);
            // console.log(String(taskText)); 
            console.log(taskMsg);
            

            deleteButton.addEventListener("click",function (event){
                    event.currentTarget.parentNode.remove();
            });
        
        }

        else {
            alert("Please enter a task.");
        }
    }
}


addButton.addEventListener('click', addTaskScreen);
document.addEventListener("keydown", addTaskKey);