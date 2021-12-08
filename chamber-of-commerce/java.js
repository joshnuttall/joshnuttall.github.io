const url = 'https://joshnuttall.github.io/chamber-of-commerce/directory.json';

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
        let name = document.createElement('p');
        let address = document.createElement('p');
        let contact = document.createElement('p');
        let image = document.createElement('img');
        image.setAttribute('src','https://joshnuttall.github.io/chamber-of-commerce/king-soopers1.jpg');
        name.textContent = jsonObject.business[i].name;
        address.textContent = jsonObject.business[i].address;
        contact.textContent = jsonObject.business[i].contact;
    card.setAttribute('class','cardz')
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(contact);
    card.appendChild(image);
    document.querySelector('main#card-box').appendChild(card);
    
}
console.log(jsonObject);

    })

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