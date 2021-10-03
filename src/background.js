const bgs = ["./src/img/0.jpg","./src/img/1.jpg","./src/img/2.jpg","./src/img/3.jpg","./src/img/4.jpg","./src/img/5.jpg","./src/img/6.jpg","./src/img/7.jpg","./src/img/8.jpg","./src/img/9.jpg"];
function changeBg(){
    const bgIndex = Math.ceil(Math.random()*(bgs.length-1));
    const bg = document.querySelector(".background");
    bg.classList.add("appear");
    bg.src=bgs[bgIndex];
    bg.id = bgIndex;
    
}
changeBg();
setInterval(changeBg,1000*60*1);