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

    let apiKey = "44f618d99f8a16c0a9a9065877f062b1"
    let apiUrl = 'https://.openweathermap.org/map/{layer}/{z}/{x}/{y}.png?appid={44f618d99f8a16c0a9a9065877f062b1}'

    axions.get(apiUrl).then  (displayTemperature);
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
let currentDate =new date();