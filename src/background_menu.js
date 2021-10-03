const backgroundMenu = document.querySelector(".js-background-menu ul");
const backgrounds = ["./src/img/0.jpg","./src/img/1.jpg","./src/img/2.jpg","./src/img/3.jpg","./src/img/4.jpg","./src/img/5.jpg","./src/img/6.jpg","./src/img/7.jpg","./src/img/8.jpg","./src/img/9.jpg"];
const currentBg = document.querySelector(".background");
const button = document.querySelector("#backgroundFold");

backgrounds.forEach(function(bg){
    const li = document.createElement("li");
    const img = document.createElement("img");
    const button = document.createElement("button");
    img.src = bg;
    button.appendChild(img);
    if(String(`./src/img/${currentBg.id}.jpg`) === bg){
        li.classList.add("selected");
    }
    backgroundMenu.appendChild(li);
    li.appendChild(button);
    
    button.addEventListener("click", function(event){
        currentBg.src = event.target.src;
        const beforeBg = document.querySelector(".selected");
        beforeBg.classList.remove("selected");
        this.parentElement.classList.add("selected");
        backgroundLocation.innerHTML = bgNames[parseInt(currentBg.id)];
    })
    
});

button.addEventListener("click", function(){
    if(backgroundMenu.hidden === true){
        backgroundMenu.hidden = false;
    }else{
        backgroundMenu.hidden = true;
    }

});	
