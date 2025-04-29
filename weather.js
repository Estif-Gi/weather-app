const apiKey ="e951690b9f2175383bbf585a5f9f90b6";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let searchInput = document.querySelector("#search-input");
let searchButton = document.querySelector("#search-button");
let temp = document.querySelector("#temp");
let city = document.querySelector("#city");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let error = document.querySelector(".error");
searchButton.addEventListener("click", ()=>{
    async function watchWeather(){
        const response = await fetch(apiUrl + `${searchInput.value}&appid=${apiKey}`);
        if(response.status == 404){
            error.style.display = "block"
        }
        let data = await response.json();
        city.innerHTML = data.name;
        temp.innerHTML = Math.round(data.main.temp) + "°C";
        humidity.innerHTML =data.main.humidity +"%";
        wind.innerHTML=data.wind.speed + "Km/h";
        searchInput.value = "";
        console.log(data);
        
        if(data.weather[0].main == "Clouds")
        {
            let img1 = document.querySelector("#img1");
            img1.src = "./images/cloudy.png";
        }
        if(data.weather[0].main == "Clear")
        {
            let img1 = document.querySelector("#img1");
            img1.src = "./images/suny.png";
        }
        if(data.weather[0].main == "Mist")
        {
            let img1 = document.querySelector("#img1");
            img1.src = "./images/mist.png";
        }
        if(data.weather[0].main == "Snow")
        {
            let img1 = document.querySelector("#img1");
            img1.src = "./images/snow.png";
        }
        if(data.weather[0].main == "Rain")
        {
            let img1 = document.querySelector("#img1");
            img1.src = "./images/cloud-rain.png";
        }
        if(data.weather[0].main == "Drizzle")
        {
            let img1 = document.querySelector("#img1");
            img1.src = "./images/Drizzle.png";
        }
        document.querySelector("#content").style.display = "block";
        error.style.display = "none";


    }
    watchWeather();
});
