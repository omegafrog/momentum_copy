const bgs = ["./img/0.jpg","./img/1.jpg","./img/2.jpg","./img/3.jpg","./img/4.jpg","./img/5.jpg","./img/6.jpg","./img/7.jpg","./img/8.jpg","./img/9.jpg"]
function changeBg(){
    const bgIndex = Math.ceil(Math.random()*(bgs.length-1));
    const bg = document.createElement('img');
    bg.src=bgs[bgIndex];
    document.body.appendChild(bg);
}
changeBg();
setInterval(changeBg,1000*60*1);