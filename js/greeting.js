// JS variable naming style --> camelCase
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginGreeting = document.querySelector("#login-greeting");
const loginBox = document.querySelector("#login-box")

// 반복되는 str변수는 uppercase로 변수 선언
const CLASS_HIDDEN = "hidden";
const KEY_USERNAME = "username";

const savedName = localStorage.getItem(KEY_USERNAME);

function onLoginFormSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(KEY_USERNAME,username);
    loginForm.classList.add(CLASS_HIDDEN);
    popGreeting(username);
}
function popGreeting(name) {
    loginGreeting.innerText = `Hello \n ${name} \n Keep going!`;
    loginGreeting.classList.remove(CLASS_HIDDEN);
    loginBox.classList.add("login-form__align")
}

if (savedName === null) {
    loginForm.classList.remove(CLASS_HIDDEN);
} else {
    popGreeting(savedName);
}

loginForm.addEventListener("submit", onLoginFormSubmit);