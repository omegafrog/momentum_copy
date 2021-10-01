const clock = document.querySelector(".js-clock");
function setClock() {
    const today = new Date();
    const hour = String(today.getHours()).padStart(2, "0");
    const minute = String(today.getMinutes()).padStart(2, "0");
    const second = String(today.getSeconds()).padStart(2, "0");
    clock.innerHTML = `${hour}:${minute}:${second}`;
}

setClock();
setInterval(setClock, 1000);