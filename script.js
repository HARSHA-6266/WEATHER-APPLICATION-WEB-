
const apiurl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const apikey = "fc9f33587d218545f233988966ed103d";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.setAttribute("src","weather_images\\clouds.png");
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.setAttribute("src","weather_images\\clear.png");
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.setAttribute("src","weather_images\\drizzle.png");
    } 
   else if(data.weather[0].main == "Rain"){
    weatherIcon.setAttribute("src","weather_images\\rain.png");
    }
   else if(data.weather[0].main == "Mist"){
    weatherIcon.setAttribute("src","weather_images\\mist.png");
    }
    

} 


searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})

