const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const KEY_TODOS = "todos"

let toDos = [];
// toDos를 새로고침마다 다시 덮어쓰기 때문에 const가 아닌 let으로 선언

function storeToDos() {
    localStorage.setItem(KEY_TODOS,JSON.stringify(toDos));
}
function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    // this.parentElement.remove();
    // this를 이용하면 fx를 부른 주최? button을 가르켜서 같은 결과를 도출할수있음.
    // function abc(x) {return x.id !== parseInt(li.id)}; // parseInt!! 둘 데이터 타입 같아야함
    // toDos = toDos.filter(abc); // 더쉽게 표현가능 아래!
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
    storeToDos();
}
function paintToDo(toDo) {
    const li = document.createElement("li");
    li.id = toDo.id; // 아이디를 이렇게 쉽게 넣어줄수 있구나. id는 only one!?
    const span = document.createElement("span");
    span.innerText = toDo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    button.addEventListener("click", deleteToDo);
    // 이부분 ?? -> 함수 내에서 이벤트리스너가 실행 된것인데... 그렇다면 이벤트가 발생하기 전까지 이함수는 종료한게 아닌것인가?
    storeToDos();
}
function onToDoSubmit(event) {
    event.preventDefault();
    const toDo = toDoInput.value;
    const toDoObj = {
        text : toDo,
        id : Date.now(), // 랜덤 숫자 부여 가능한 팁
    }
    toDoInput.value = "";
    toDos.push(toDoObj);
    paintToDo(toDoObj);
}

const parsedToDos = JSON.parse(localStorage.getItem(KEY_TODOS));

if(parsedToDos !== null) {
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

toDoForm.addEventListener("submit", onToDoSubmit);