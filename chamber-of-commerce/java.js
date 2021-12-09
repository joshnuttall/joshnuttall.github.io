
const url = 'https://joshnuttall.github.io/chamber-of-commerce/directory.json';
const apiKeey = "7f09a0a170c211455e98942cb47fb75b";
const lat = 39.71;
const lon = -104.81;
const webAdd = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKeey}&units=imperial`;

fetch(webAdd)
    .then(function(response){
        if(response.ok){
            return response.json();
        }
    throw new Error('Network Response was not ok');
    
    })

    .then(function(jsonObject){
        let div = document.createElement('div');
        let h1 = document.createElement('h1');
        let currentTemp = document.createElement('p');
        let description = document.createElement('p');
        let humidity = document.createElement('p');
        div.setAttribute('class','current-weather')
        h1.textContent = "Current Weather";
        currentTemp.textContent = "Current Temperature: " + Math.round(jsonObject.current.temp) + "°F";
        description.textContent = "Current Condition: " + jsonObject.current.weather[0].description
        humidity.textContent = "Humidity: " + Math.round(jsonObject.current.humidity,1) + "%";
        console.log(jsonObject);
        div.appendChild(h1);
        div.appendChild(currentTemp);
        div.appendChild(description);
        div.appendChild(humidity);
        document.querySelector('#main-home').appendChild(div);
          
    })



fetch(url)
    .then(function(response){
        if(response.ok){
            return response.json();
        }
    throw new Error('Network Response was not ok');

    })
    .then(function(jsonObject){
        const business = jsonObject['business'];
        for(i=0;i<business.length;i++){
        let card = document.createElement('div');
        let name = document.createElement('h1');
        let address = document.createElement('h1');
        let contact = document.createElement('h1');
        let image = document.createElement('img');
        image.setAttribute('src',jsonObject.business[i].logo);
        card.setAttribute('class','pic-grid')
        card.setAttribute('id','pic-' + i)
        name.textContent = jsonObject.business[i].name;
        address.textContent = jsonObject.business[i].address;
        contact.textContent = jsonObject.business[i].contact;
    card.setAttribute('class','cardz')
    image.setAttribute('alt',name.textContent)
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(contact);
    card.appendChild(image);
    document.querySelector('main#card-box').appendChild(card);
    
}


    })

function grid(){ 
    document.querySelector('#card-box').setAttribute('class','single')
        
}



function single(){ 
    for(i=0;i<8;i++){
    document.querySelector('#card-box').removeAttribute('class');
    document.querySelector('#card-box').setAttribute('class','grido');
        
}}

function currYear()
{
    let year = new Date;
    let currentYear = year.getFullYear();
    document.getElementById("currentYear").innerHTML = currentYear;
}

function lastMod()
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

    document.getElementById("fp5").innerHTML = days + ", " + day.getDate() + " " + months + " " + day.getFullYear();

}