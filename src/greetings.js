const loginForm = document.querySelector(".js-loginForm");
const greeting = document.querySelector(".js-greeting");
const userNameInput = loginForm.querySelector("input");
const afterLoginDiv = document.querySelector("#after-login");


const STORAGE_USERNAME_KEY = "name";

function showGreeting(userName) {
    afterLoginDiv.hidden = false;
    console.log('hi');
    greeting.innerHTML = `Hello, ${userName}!`;
    loginForm.classList.add("disappear");
    setTimeout(function(){loginForm.hidden=true;},1000);
    greeting.classList.add("appear");
    setTimeout(function(){greeting.hidden = false;},1000);
}
function newUser() {
    const userName = userNameInput.value;
    localStorage.setItem(STORAGE_USERNAME_KEY, userName);
    return userName;
}
function handleSubmit(event) {
    event.preventDefault();
    showGreeting(newUser());
    afterLoginDiv.classList.add("appear");
}
loginForm.addEventListener("submit", handleSubmit);
const currentUser = localStorage.getItem(STORAGE_USERNAME_KEY);
if (!currentUser) {
    greeting.hidden = true;
    loginForm.hidden = false;
    afterLoginDiv.hidden = true;
}
else {
    loginForm.hidden = true;
    showGreeting(currentUser);
    afterLoginDiv.hidden = false;
}