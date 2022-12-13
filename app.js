
const temp =document.querySelector('#temp')
const feels =document.querySelector('#feels')
const humid =document.querySelector('#humid')
const wind =document.querySelector('#wind')
const btn = document.querySelector("button");
const input = document.querySelector("input");
const loc =document.querySelector('#loc')
const img = document.querySelector('img')



function getData(){
  console.log(input.value)
  fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input.value}?unitGroup=metric&key=HRXPKS4XW736F3L2KUP557UD4&contentType=json`)
  .then(res => res.json())
  .then(data => { 
   tempData = data.currentConditions.temp;
   feelsData = data.currentConditions.feelslike;
   humidityData = data.currentConditions.humidity;
   windsData = data.currentConditions.windspeed;
   conditions = data.currentConditions.conditions;
   address = data.address;

   temp.innerText = `Temprature: ${tempData}`
   feels.innerText = `Feelslike: ${feelsData}`
   humid.innerText = `Humidity: ${humidityData}`
   wind.innerText = `Windspeed: ${windsData}`
   loc.innerText = address.toUpperCase()

   if(conditions == 'Overcast'){
   img.src= './icon/cloud.jpeg'
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
  }
  
  })
  .catch(error => console.log('Something Went Wrong!', error));
}

btn.addEventListener("click", getData)




