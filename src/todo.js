const todoList = document.querySelector(".js-todo ul");
const userTodo = document.querySelector(".js-todo input");
const submitBtn = document.querySelector(".js-todo #submit");

const TODOLIST_KEY = "todoList";

let todos = [];
function saveTodo() {
    localStorage.setItem(TODOLIST_KEY, JSON.stringify(todos));
}
function del() {

    const selectedTodo = event.target.parentElement;
    function predicate(todo) {
        return todo.id !== parseInt(selectedTodo.id);
    }
    todos = todos.filter(predicate);
    selectedTodo.remove();
    saveTodo();
}
function addTodo() {
    if (userTodo.value !== "") {
        const newTodo = {
            id: Date.now(),
            text: userTodo.value
        };
        userTodo.value = "";

        todos.push(newTodo);
        saveTodo();
        printTodo(newTodo);
    }
}

function printTodo(newTodo) {
    const newLi = document.createElement('li');
    newLi.id = newTodo.id;
    const newSpan = document.createElement('span');
    newSpan.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "✔️";
    button.addEventListener("click", del);
    newLi.appendChild(newSpan);
    newLi.appendChild(button);
    todoList.appendChild(newLi);
}
submitBtn.addEventListener("click", addTodo);
const parsedItem = localStorage.getItem(TODOLIST_KEY);
if (parsedItem !== null) {
    const parsedToDos = JSON.parse(parsedItem);
    todos = parsedToDos;
    parsedToDos.forEach(printTodo);
}