const todoForm =document.querySelector("#todo-form");
const todoInput =document.querySelector("#todo_input");
const taskList=document.querySelector("#tasks");

todoForm.addEventListener("submit",function(e) {
    e.preventDefault();
    if(todoInput.value==""){
        alert("please enter ");
        return;
    }
    const task=document.createElement("li");
    task.innerText=todoInput.Value;
    taskList.appendChild(task);
    todoInput.value="";
})