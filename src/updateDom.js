import {data} from './apiCaller'
const city =  document.querySelector('.city');
const sky =  document.querySelector('.sky');
const date =  document.querySelector('.date');
const temperature =  document.querySelector('.temperature');
const feelsLike = document.querySelector('.feelsLike');
const humidity = document.querySelector('.humidity');
const uv = document.querySelector('.uv');
const windSpeed = document.querySelector('.windSpeed')
const country = document.querySelector('.country');
export function updateDom(){
    city.innerHTML =   data.location.name ;
    date.innerHTML =   data.location.localtime;
    sky.innerHTML =  data.current.condition.text;
    temperature.innerHTML =   data.current.temp_c + '°C';
    feelsLike.innerHTML = 'Feels like: ' + data.current.feelslike_c + '°C';
    humidity.innerHTML = 'Humidity: ' + data.current.humidity + '%';
    uv.innerHTML = 'UV: ' +data.current.uv;
    windSpeed.innerHTML = 'Wind speed: ' + data.current.wind_kph + ' km/h';
    country.innerHTML = data.location.country;
}


 