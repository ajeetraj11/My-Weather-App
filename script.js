
const search = document.querySelector('.search input');
const btn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');
const weather = document.querySelector('.weather');

const apiKey = "9cb3485cc45ed4e4c2fa9dff407733bd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    
    if(response.status== 404){
        document.querySelector('.error').style.display="block";
        weather.style.display="none";
    }
    else{
        const data = await response.json();
    
        document.querySelector('.city').innerHTML=data.name;
        document.querySelector('.temp').innerHTML=Math.round(data.main.temp) + "°C";
        document.querySelector('.humidity').innerHTML=data.main.humidity + "%";
        document.querySelector('.Wind').innerHTML=data.wind.speed + " km/h";
    
        if (data.weather[0].main=="Clouds"){
            weatherIcon.src="images/clouds.png"
        }
        
        else if (data.weather[0].main=="Clear"){
            weatherIcon.src="images/clear.png"
        }
        
        else if (data.weather[0].main=="Drizzle"){      
           weatherIcon.src="images/drizzle.png"
        }
        
        else if (data.weather[0].main=="Mist"){
            weatherIcon.src="images/mist.png"
        }
        else if (data.weather[0].main=="Rain"){
            weatherIcon.src="images/rain.png"
        }
        
        else if (data.weather[0].main=="Snow"){
            weatherIcon.src="images/snow.png"
        }
        
        weather.style.display="block";
        document.querySelector('.error').style.display="none";
    }

    
}

btn.addEventListener("click",()=>{
    checkWeather(search.value);
})


