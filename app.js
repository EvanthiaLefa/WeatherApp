
const temp =document.querySelector('#temp')
const feels =document.querySelector('#feels')
const humid =document.querySelector('#humid')
const wind =document.querySelector('#wind')
const btn = document.querySelector("button");
const input = document.querySelector("input");
const loc =document.querySelector('#loc')
const img = document.querySelector('img')
const p = document.querySelector("p");
const br = document.createElement('br')


let obj;
function getData() {
  console.log(input.value)
  fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input.value}?unitGroup=metric&key=HRXPKS4XW736F3L2KUP557UD4&contentType=json`)
    .then(res => res.json())
    .then(data => {
      obj = data;
      putData()
    })
    .catch(error => console.log('Something Went Wrong!', error));
}

function putData() {
  tempData = obj.currentConditions.temp;
  feelsData = obj.currentConditions.feelslike;
  humidityData = obj.currentConditions.humidity;
  windsData = obj.currentConditions.windspeed;
  conditions = obj.currentConditions.conditions;
  address = obj.address;
  console.log(conditions)

  temp.innerText = `${tempData}°C`
  feels.innerText = `Feelslike:${feelsData}`
  humid.innerText = `Humidity: ${humidityData}%`
  wind.innerText = `Windspeed: ${windsData}km/h`
  loc.innerText = address.toUpperCase()
  p.innerText = ""
  let hours = obj.days[0].hours
  for (let i = 0; i < hours.length; i++) {
    let newHour = [];
    let hour = `${hours[i].datetime}-${hours[i].temp}°C`
    p.innerText += "  " + hour
  }
  putIcons()
}

function putIcons(){
  if(conditions == 'Overcast'){
    img.src= './icon/cloudy.jpeg'
    img.style.display = 'block';
   } else if(conditions =='Clear'){
     img.src= './icon/clear.jpeg'
     img.style.display = 'block';
   }else if(conditions =='Partially cloudy'){
     img.src= './icon/partialCloudy.jpeg'
     img.style.display = 'block';
   }else if(conditions =='Snow, Overcast'){
     img.src= './icon/snow.jpeg'
     img.style.display = 'block';
   }else if(conditions =='Rain, Overcast'){
     img.src= './icon/rain.jpeg'
     img.style.display = 'block';
   }
}

btn.addEventListener("click", getData)





