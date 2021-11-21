const weatherId = 5604473;
const apiKey = "7f09a0a170c211455e98942cb47fb75b";
const prestonPath = `https://api.openweathermap.org/data/2.5/weather?id=${weatherId}&appid=${apiKey}&units=imperial`;

fetch(prestonPath)
    .then(function(response) {
        if(response.ok){
            return response.json();
        }
    throw new Error('Network Response was not ok');
})
.then(function(jsonObject) {
console.log(jsonObject);
console.log(jsonObject.main.temp);

let currently = document.createElement('h2');

currently.textContent = Math.round(jsonObject.main.temp) +"\u00B0" + "F";
console.log(currently.textContent);

document.querySelector('div.results').appendChild(currently);


})





