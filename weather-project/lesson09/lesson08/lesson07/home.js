const requestURL = 'https://joshnuttall.github.io/weather-project/lesson09/towndata.json'

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
        let townName = document.createElement('h1');
        let townMotto = document.createElement('h2');    
        let yearFounded = document.createElement('p');
        let population = document.createElement('p');
        let rainFall = document.createElement('p');


        townName.textContent = towns[i].name;
        townMotto.textContent = towns[i].motto;
        yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
        population.textContent = 'Population: ' + towns[i].currentPopulation;
        rainFall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;


        townSection.appendChild(townName);
        townSection.appendChild(townMotto);
        townSection.appendChild(yearFounded);
        townSection.appendChild(population);
        townSection.appendChild(rainFall);
        document.querySelector('div.towns').appendChild(townSection);
    }

}) 