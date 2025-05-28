function addTodo() {
    const input = document.getElementById("todo-input");
    const taskText = input.value.trim();

   if (taskText === "") return;

    const li = document.createElement("li");

    li.innerHTML=`
    <span onclick ="toggleComplete(this)">${taskText}</span>
    <button onclick = "deleteTodo(this)">Delete</button>
    `;

    document.getElementById("todo-list").appendChild(li);
    input.value ="";
}
function deleteTodo(button){
    const li = button.parentElement;
    li.remove();
}

function toggleComplete(span){
    span.parentElement.classList.toggle("completed");
}