const weatherDiv = document.querySelector(".js-weather");
const weatherIcon = weatherDiv.querySelector("#weatherIcon");
const information = weatherDiv.querySelector("#information");

const API_KEY = "adb8b7f137fe259f1efa8e58cf5d00d6";
function geoLocSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=kr&appid=${API_KEY}`;
    fetch(url).then(function(response){
        return response.json();
    }).then(function(json){
        const city = json.name;
        const temp = json.main.temp;
        const weatherDescription = json.weather[0].description;
        const icon = String(json.weather[0].icon);
        weatherIcon.src = `./img/${icon}.png`;
        information.innerHTML = `${city}, ${temp} ${weatherDescription}`;
    })
}
function geoLocFail(position) {
    alert("cannot find your position.");
}
navigator.geolocation.getCurrentPosition(geoLocSuccess,geoLocFail);
