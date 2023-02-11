const temp = document.querySelector('#temp')
const feels = document.querySelector('#feels')
const humid = document.querySelector('#humid')
const wind = document.querySelector('#wind')
const condition = document.querySelector('#condition')
const btn = document.querySelector("button");
const input = document.querySelector("input");
const loc = document.querySelector('#loc')
const img = document.querySelector('img')
const p = document.querySelector("p");
const br = document.createElement('br');
const ulDaily = document.querySelector('#ulDaily');


let obj;
function getData() {
  console.log(input.value)
  fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input.value}?unitGroup=metric&key=HRXPKS4XW736F3L2KUP557UD4&contentType=json`)
    .then(res => res.json())
    .then(data => {
      obj = data;
      console.log(obj)
      putData()
      getDailyForecast()
    })
    .catch(error => console.log('Something Went Wrong!', error));
}

function getDailyForecast() {
  ulDaily.innerHTML = "";
  // HERE I TAKE THE FIRST 5 DAYS OF THE ARRAY FOR THE DAILY FORECAST
  const dailyForecast = obj.days.slice(0, 5);
  dailyForecast.forEach((el) => {
    const newLi = document.createElement("li")
    newLi.innerHTML = ` Date: ${el.datetime} , Temp: ${el.temp} , Max: ${el.tempmax} , Min: ${el.tempmin}`;
    ulDaily.append(newLi)
  })
}

function putData() {
  tempData = obj.currentConditions.temp;
  feelsData = obj.currentConditions.feelslike;
  humidityData = obj.currentConditions.humidity;
  windsData = obj.currentConditions.windspeed;
  conditions = obj.currentConditions.conditions;
  address = obj.address;
  console.log(obj.currentConditions.conditions)

  temp.innerText = `${tempData}°C`
  feels.innerText = `Feelslike:${feelsData}`
  humid.innerText = `Humidity: ${humidityData}%`
  wind.innerText = `Windspeed: ${windsData}km/h`
  condition.innerText = `Conditions: ${conditions}`
  loc.innerText = address.toUpperCase()
  putIcons()
}

function putIcons() {
  img.src = `./iconSet/${obj.currentConditions.icon}.png`
  img.style.display = 'block';
}

btn.addEventListener("click", getData)





