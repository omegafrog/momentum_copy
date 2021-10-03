const bgs = ["./src/img/0.jpg","./src/img/1.jpg","./src/img/2.jpg","./src/img/3.jpg","./src/img/4.jpg","./src/img/5.jpg","./src/img/6.jpg","./src/img/7.jpg","./src/img/8.jpg","./src/img/9.jpg"];
const bgNames = ["libertby Bridge, Budapest", "parthenon, acropolis,Athens", "whitby abbey, england","jinshanling, china","Roman theater, Rome","colosseum, Rome","Pyramid, Egypt", "moai, Easter island","Epel tower, France", "Neuschwanstein Castle, Germany"];
const backgroundLocation = document.querySelector(".background-location");

function changeBg(){
    const bgIndex = Math.ceil(Math.random()*(bgs.length-1));
    const bg = document.querySelector(".background");
    bg.src=bgs[bgIndex];
    bg.id = bgIndex;
    console.log(bgNames[bgIndex]);
    console.log(backgroundLocation);
    backgroundLocation.innerHTML = bgNames[bgIndex];
}
changeBg();
setInterval(changeBg,1000*60*1);
