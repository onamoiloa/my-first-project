function displayTemperature(response)  {
    let temperatureElement=document.querySelector("#current-temperature");
    let temperature = Math.round(response.data.temperature.current);
    let cityElement = document.querySelector("#current-city");
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = temperature;
}
function search(event){
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");
    let city = searchInputElement.ariaValueMax;

    let apiKey = "dc010eb1e73f4228b30225823252501"
    let apiUrl = 'http://api.weatherapi.com/v1/current.json?key=dc010eb1e73f4228b30228b30225823252501'
}
function formtDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let day = date.getDay();

    if (minutes <10){
        minutes='0${minutes}';
    }
    
    if (hours <10) {
        hours = '0${hours}';
    }

    let days =[
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednsday",
        "Thursay",
        "Friday",
        "Saturday"
    ];
    let formatedDay = days[day];
    return '${formatedDay} ${hours}:${minutes}';
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateElement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateElement.innerHTML = formtDate(currentDate);