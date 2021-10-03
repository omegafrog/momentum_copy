const backgroundMenu = document.querySelector(".js-background-menu ul");
const backgrounds = ["./img/0.jpg","./img/1.jpg","./img/2.jpg","./img/3.jpg","./img/4.jpg","./img/5.jpg","./img/6.jpg","./img/7.jpg","./img/8.jpg","./img/9.jpg"];
const bgNames = ["liberty Bridge, Budapest", "parthenon, acropolis,Athens", ""]
const currentBg = document.querySelector(".background");
const button = document.querySelector("#backgroundFold");

backgrounds.forEach(function(bg){
    const li = document.createElement("li");
    const img = document.createElement("img");
    const button = document.createElement("button");
    img.src = bg;
    button.appendChild(img);
    if(String(`./img/${currentBg.id}.jpg`) === bg){
        li.classList.add("selected");
    }
    backgroundMenu.appendChild(li);
    li.appendChild(button);

    
});

