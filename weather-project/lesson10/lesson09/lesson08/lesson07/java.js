const weatherId = 5604473;
const apiKey = "7f09a0a170c211455e98942cb47fb75b";
const prestonPath = `https://api.openweathermap.org/data/2.5/weather?id=${weatherId}&appid=${apiKey}&units=imperial`;
const fiveDayPreston = `https://api.openweathermap.org/data/2.5/forecast?id=${weatherId}&appid=${apiKey}&units=imperial`;


fetch(fiveDayPreston)
    .then(function(response) {
        if(response.ok){
            return response.json();
        }
    throw new Error('Network Response was not ok');
})
.then(function(jsonObject) {


var x = new Date();
let z = x.getDay();
let g = z + 1;

    for(i = 1;i<6;i++)
    {   
        
        if(g == 7)
        {
            g = 0;
        }

        else
        {

        }
        
        switch(g)
        {
            case 0:
                string = "Sun"
            break;
            case 1:
                 string = "Mon"
            break;
            case 2:
                string = "Tue"   
            break;
            case 3:
                string = "Wed"
            break;
            case 4:
                string = "Thu"
            break;
            case 5:
                string = "Fri"
            break;
            case 6:
                string = "Sat"
            break;
        }

        let o = document.createElement('p');
        o.textContent = string;
        document.querySelector('div#day' + i).appendChild(o);



        if(g == 6)
        {
            g = 0;
        }

        else
        {

        }

        

        

        g += 1;
    }


console.log(jsonObject);
let count = 0;

for(i=0;i<jsonObject.list.length;i++)
    
    if(jsonObject.list[i].dt_txt.substr(jsonObject.list[i].dt_txt.length- 8,8) == '18:00:00')
        
        {   let id = jsonObject.list[i].weather[0].icon;
            Math.round(jsonObject.list[i].main.temp) + "\u00B0" + "F";
            count += 1;
            let pTemp = document.createElement('p');
            let image = document.createElement('img');
            image.setAttribute('src',`http://openweathermap.org/img/wn/${id}@2x.png`);
            image.setAttribute('alt',jsonObject.list[i].weather[0].description);
            pTemp.textContent = Math.round(jsonObject.list[i].main.temp) + "\u00B0" + "F";
            pTemp.textContent;
        
            document.querySelector('div#pic-box-' + count).appendChild(image);
            document.querySelector('div#pic-box-' + count).appendChild(pTemp);
               
        }
    
    

})


fetch(prestonPath)
    .then(function(response) {
        if(response.ok){
            return response.json();
        }
    throw new Error('Network Response was not ok');
})
.then(function(jsonObject) {
console.log(jsonObject);

let temp =jsonObject.main.temp ;
let speed =jsonObject.wind.speed; ;
let wcTemp = document.getElementById('wind-chill-span');
wcTemp.innerHTML = buildWC(speed,temp);

let currently = document.createElement('span');
let random = document.createElement('span');
let humidity = document.createElement('span');
let windSpeed = document.createElement('span');
currently.textContent = Math.round(jsonObject.main.temp) +"\u00B0" + "F";
random.textContent = jsonObject.weather[0].description;
humidity.textContent = jsonObject.main.humidity + "%";
windSpeed.textContent = jsonObject.wind.speed + " mph";

windSpeed.setAttribute('id','wind-speed-span');
currently.setAttribute('id','temp-span');

document.querySelector('p#temp').appendChild(currently);
document.querySelector('p#current').appendChild(random);
document.querySelector('p#humid').appendChild(humidity);
document.querySelector('p#wind-speed').appendChild(windSpeed);
})

function buildWC(speed, temp)
                {
                    
                    let wc = 35.74 + .6215 * temp - 35.75 * Math.pow(speed,.16) +.4275 * temp * Math.pow(speed,.16);
                    wc = Math.floor(wc);
                    wc = (wc > temp)?temp:wc;
                    wc = " " + Math.round(wc) + '°F';
                    return wc;
                    
                }








const requestURL = 'towndata.json'

fetch(requestURL)
    .then(function(response) {
        if(response.ok){
            return response.json();
        }
    throw new Error('Network Response was not ok');
})
.then(function(jsonObject) {
console.table(jsonObject);
const towns = jsonObject['towns'];
for(let i=0;i<towns.length;i++)
{
    let townSection = document.createElement('section');
    let imageSection = document.createElement('section');
    let townName = document.createElement('h1');
    let townMotto = document.createElement('h2');    
    let yearFounded = document.createElement('p');
    let population = document.createElement('p');
    let rainFall = document.createElement('p');
    let image = document.createElement('img');


    townName.textContent = towns[i].name;
    townMotto.textContent = towns[i].motto;
    yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
    population.textContent = 'Population: ' + towns[i].currentPopulation;
    rainFall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
    townMotto.setAttribute('class','town-h2');
    townName.setAttribute('class','towns-h1');
    townSection.setAttribute('class','townsection');
    image.setAttribute('src',towns[i].photo);
    image.setAttribute('alt',towns[i].name + ' picture');
    image.setAttribute('class','towns-sec')
    townSection.setAttribute('id','townsec' + i);

    if(i == 0 || i % 2 == 0)
    {
        imageSection.setAttribute('class', 'special');
        townSection.setAttribute('class','townsection special2')
    }


    imageSection.appendChild(image);
    townSection.appendChild(townName);
    townSection.appendChild(townMotto);
    townSection.appendChild(yearFounded);
    townSection.appendChild(population);
    townSection.appendChild(rainFall);
    document.querySelector('div.towns').appendChild(imageSection);
    document.querySelector('div.towns').appendChild(townSection);
}

}) 


function adjustRating(rating)
{
    document.getElementById("ratingvalue").innerHTML = rating;
}



function years()
            {
                let output = new Date();
                let something = output.getFullYear();
                document.getElementById("copyyear").innerHTML = something;
            }
        
        function year()
            {
                let string = document.lastModified;
                document.getElementById("year").innerHTML = string;


            }

           

            function date()
            {
                let day = new Date(document.lastModified);
                let daye = day.getDay();
                let month = day.getMonth();
                
                switch(month)
                {
                    case 0:
                        months = "January"
                    break;

                    case 1:
                        months = "February"
                    break;

                    case 2:
                        months = "March"
                    break;

                    case 3:
                        months = "April"
                    break;

                    case 4:
                        months = "May"
                    break;

                    case 5:
                        months = "June"
                    break;

                    case 6:
                        months = "July"
                    break;
                    
                    case 7:
                        months = "August"
                    break;

                    case 8:
                        months = "September"
                    break;

                    case 9:
                        months = "October"
                    break;

                    case 10:
                        months = "November"
                    break;

                    case 11:
                        months = "December"
                    break;
                
                
                
                
                }
                switch(daye)
                {
                    case 0:
                        days = "Sunday"
                    break;

                    case 1:
                        days = "Monday"
                    break;

                    case 2:
                        days = "Tuesday"
                    break;

                    case 3:
                        days = "Wednesday"
                    break;

                    case 4:
                        days = "Thursday" 
                    break;

                    case 5:
                        days = "Friday"
                    break;

                    case 6:
                        days = "Saturday"
                    break;
                }
                
                document.getElementById("day").innerHTML = days + ", " + day.getDate() + " " + months + " " + day.getFullYear();
            
            }
            
            function toggleMenu()
            {
                document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
                
            }

function pancakeBanner()
    {
    
    var days = new Date();
    var day = days.getDay();
    
    if(day != 5)
    {
        document.getElementById("p-banner").classList.add("pancake");
    }
}

           
            
        
                let imagesToLoad = document.querySelectorAll("img[data-src]");

                const imgOptions = {
                    threshold: 0.1
                  }
                  const loadImages = (image) => {
                    image.setAttribute('src', image.getAttribute("data-src"));
                    image.onload = () => {
                      image.removeAttribute('data-src');
                    };
                  };
                  
                  if ("IntersectionObserver" in window) {
                    const observer = new IntersectionObserver((items, observer) => {
                      items.forEach((item) => {
                        if (item.isIntersecting) {
                          loadImages(item.target);
                          observer.unobserve(item.target);
                        }
                      });
                    }, imgOptions);
                  
                    imagesToLoad.forEach((img) => {
                      observer.observe(img);
                    });
                  } else {
                    imagesToLoad.forEach((img) => {
                      loadImages(img);
                    });
                  }
            
