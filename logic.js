const todoList = document.querySelector("ul");
const inputTask = document.getElementById("inputTask");
const inputButton = document.getElementById("inputButton");
const deleteAllButton = document.getElementById("deleteAllButton");

inputButton.addEventListener("click", addTask);
todoList.addEventListener("click", (element) => removeTask(element), false);
deleteAllButton.addEventListener("click", deleteAllTasks);


function addTask(){
    const li = document.createElement("li");
    li.textContent = inputTask.value;
    todoList.appendChild(li);

    const deleteButton = document.createElement("i");
    deleteButton.className = "fa fa-trash-o";
    li.appendChild(deleteButton);

    inputTask.value = "";
    
    saveTodoList();
}

function removeTask(element){
    if(element.target.tagName === "I"){
        element.target.parentElement.remove();
        saveTodoList();
    }
}

function saveTodoList(){
    localStorage.setItem("todoList", todoList.innerHTML);
}

function showSavedTodoList(){
    todoList.innerHTML = localStorage.getItem("todoList");
}

function deleteAllTasks(){
    Array.from(todoList.childNodes).forEach(element => element.remove());
    saveTodoList();
}


showSavedTodoList();


