const button=document.getElementById('get-location-button');

async function getData(lat,long) {

    const promise = await fetch(

        `http://api.weatherapi.com/v1/current.json?key=d030b2bb87fe4e5b96961628241605&q=${lat},${long}&aqi=yes`
        
        );
return await promise.json()
}

async function getLocation(position){

const result = await getData(position.coords.latitude, position.coords.longitude);

const locationDiv = document.getElementById('location');
const temperatureDiv = document.getElementById('temperature');
const feellikeDiv = document.getElementById('temperature-feel-like');

locationDiv.textContent = `Location: ${result.location.name}, ${result.location.region}, ${result.location.country}`;
temperatureDiv.textContent = `Temperature: ${result.current.temp_c} °C`;
feellikeDiv.textContent = `Temperature-Feel-like: ${result.current.feelslike_c} °C`;

console.log(result);

}

function failLocation(position){

    console.log('there is some issue')
    
}

button.addEventListener("click",async ()=> {

navigator.geolocation.getCurrentPosition(getLocation, failLocation)

})

function updateClock() {
    const clockDiv = document.getElementById('clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockDiv.textContent = `Current Time: ${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();