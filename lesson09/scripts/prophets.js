const urldata = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        showprophets(data.prophets);
    } catch (error) {
        console.error('Error:', error);
    }
}


function showprophets(prophets) {
    prophets.forEach((prophet) => {

        let card = document.createElement('section');
        let prophetname = document.createElement('h1');
        let description = document.createElement('p')
        let box = document.createElement('img');


        prophetname.textContent = `${prophet.name} ${prophet.lastname}`;
        description.textContent = `- Day of birth: ${prophet.birthdate}
        - Place of birth: ${prophet.birthplace} -Day of death: ${prophet.death} - Number of childen: ${prophet.numofchildren}`
        description.style.whiteSpace = 'pre-line';
        description.style.textAlign = 'center';
        description.style.flexDirection = 'column';
        box.setAttribute('src', prophet.imageurl);
        box.setAttribute('alt', `This is ${prophet.name} ${prophet.lastname}`);
        box.setAttribute('loading', 'lazy');
        box.setAttribute('width', '540');
        box.setAttribute('height', '640');
        box.style.padding = "50px"


        card.appendChild(prophetname);
        card.appendChild(box);
        card.appendChild(description);
        cards.appendChild(card);
    });
}


getProphetData(urldata)
