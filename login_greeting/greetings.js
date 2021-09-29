const loginForm = document.querySelector(".js-loginForm");
const greeting = document.querySelector(".js-greeting");
const userNameInput = loginForm.querySelector("input");

const STORAGE_USERNAME_KEY = "name";

function showGreeting(userName){
    greeting.innerHTML = `Hello, ${userName}!`;
    greeting.hidden = false;
    loginForm.hidden = true;
}
function newUser(){
    const userName = userNameInput.value;
    localStorage.setItem(STORAGE_USERNAME_KEY, userName);
    return userName;
}
function handleSubmit(event){
    event.preventDefault();
    showGreeting(newUser());
}
loginForm.addEventListener("submit", handleSubmit);
const currentUser = localStorage.getItem(STORAGE_USERNAME_KEY);
    if(!currentUser){
        greeting.hidden = true;
        loginForm.hidden = false;
    }
    else{
        showGreeting(currentUser);
    }