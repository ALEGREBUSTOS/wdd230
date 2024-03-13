const apiKey = 'e1e42164e352ebd9cd4ef6db70fe58bd';
const city = 'Santa Fe, AR';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const city = document.querySelector('#city');
        const degrees = document.querySelector('#degrees');
        const description = document.querySelector('#description');
        const icon = document.querySelector('#icon');

        city.textContent = data.name;
        let degree_celsius = (data.main.temp - 273.15).toFixed(0);
        degrees.textContent = `${degree_celsius} ℃`;
        const iconimg = document.createElement('img');
        iconimg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        iconimg.style.width = "50px";
        iconimg.style.height = "50px";
        icon.innerHTML = '';
        icon.appendChild(iconimg);
        description.textContent = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1); // Capitalize first letter of description

        if (degree_celsius >= 30) {
            degrees.style.color = 'orange';
        } else {
            degrees.style.color = 'lightgreen';
        }
    })
    .catch(error => console.error('Error fetching weather data:', error));
