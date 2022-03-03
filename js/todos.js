const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const KEY_TODOS = "todos"

let toDos = [];
// toDos를 새로고침마다 다시 덮어쓰기 때문에 const가 아닌 let으로 선언
const parsedToDos = JSON.parse(localStorage.getItem(KEY_TODOS));

function storeToDos() {
    localStorage.setItem(KEY_TODOS,JSON.stringify(toDos));
}
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
    storeToDos();
}
function onToDoSubmit(event) {
    event.preventDefault();
    const toDo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(toDo);
    paintToDo(toDo);
}

if(parsedToDos !== null) {
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

toDoForm.addEventListener("submit", onToDoSubmit);