const calender = document.querySelector(".js-date");
const days = ["SUN", "MON", "TUE", "WED", "THR", "FRI", "SAT"];

function setCalender() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const date = today.getDate();
    const day = today.getDay();
    calender.innerHTML = `${year}.${month}.${date} ${days[day]}`;
}
setCalender();