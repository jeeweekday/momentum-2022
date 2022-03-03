// JS variable naming style --> camelCase
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button");
const loginGreeting = document.querySelector("#login-greeting");
// 반복되는 str변수는 uppercase로 변수 선언
const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

const savedName = localStorage.getItem(USERNAME_KEY);

function onLoginFormSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    loginForm.classList.add(HIDDEN_CLASS);
    popGreeting(username);
}
function popGreeting(name) {
    loginGreeting.innerText = `Hello ${name} !`;
    loginGreeting.classList.remove(HIDDEN_CLASS);
}
if (savedName === null) {
    loginForm.classList.remove(HIDDEN_CLASS);
} else {
    popGreeting(savedName);
}
// 왜 loginForm을 적지 않아도 실행되는거지 ?_?
addEventListener("submit", onLoginFormSubmit);