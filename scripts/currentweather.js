const apiKey = 'e1e42164e352ebd9cd4ef6db70fe58bd';
const city = 'Santa Fe, AR';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {

        const city = document.getElementById('city');
        const degrees = document.getElementById('degrees');
        const description = document.getElementById('description');
        city.textContent = data.name;
        let degree_celsius=(data.main.temp - 273.15).toFixed(0)
        degrees.textContent = `${degree_celsius} ℃`;
        description.textContent = data.weather[0].description;
        if (degree_celsius >= 30 ){
            degrees.style.color='orange'
        }else{

            degrees.style.color='lightgreen'

            
        }
    })
    .catch(error => console.error('Error fetching weather data:', error));