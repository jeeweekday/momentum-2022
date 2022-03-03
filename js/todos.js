const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");
const toDoDelete = document.querySelector("#todo-list button");

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    // this.parentElement.remove();
    // this를 이용하면 fx를 부른 주최? button을 가르켜서 같은 결과를 도출할수있음.
}

function paintToDo(toDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = toDo;
    const button = document.createElement("button");
    button.innerText = "❌";
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    button.addEventListener("click", deleteToDo);
}

function onToDoSubmit(event) {
    event.preventDefault();
    const toDo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(toDo);
}

toDoForm.addEventListener("submit", onToDoSubmit);