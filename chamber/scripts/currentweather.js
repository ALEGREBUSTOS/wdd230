const apiKey = 'e1e42164e352ebd9cd4ef6db70fe58bd';
const lat = '31.6333';
const lon = '-60.7000';
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

function wtrforecast(url,citySelector, degreesSelectormin,degreesSelectormax, descriptionSelector, iconSelector, index) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const ncity = 'Santa Fe' 
            const cityElement = document.querySelector(citySelector);
            const degreesElementmax = document.querySelector(degreesSelectormax);
            const degreesElementmin = document.querySelector(degreesSelectormin);
            const descriptionElement = document.querySelector(descriptionSelector);
            const iconElement = document.querySelector(iconSelector);

            cityElement.textContent = ncity;
            let degree_celsiusmin = (data.list[index].main.temp_min - 273.15).toFixed(0);
            let degree_celsiusmax = (data.list[index].main.temp_max - 273.15).toFixed(0);
            degreesElementmin.textContent = `${degree_celsiusmin} ℃`;
            degreesElementmax.textContent = `${degree_celsiusmax} ℃`;
            const iconimg = document.createElement('img');
            iconimg.src = `https://openweathermap.org/img/wn/${data.list[index].weather[0].icon}@2x.png`;
            iconimg.style.width = "50px";
            iconimg.style.height = "50px";
            iconElement.innerHTML = '';
            iconElement.appendChild(iconimg);
            descriptionElement.textContent = data.list[index].weather[0].description.charAt(0).toUpperCase() + data.list[index].weather[0].description.slice(1); 

            if (degree_celsiusmin >= 30 && degree_celsiusmax >= 30) {
                degreesElementmin.style.color = 'orange';
                degreesElementmax.style.color = 'orange';
            } else {
                degreesElementmin.style.color = 'lightgreen';
                degreesElementmax.style.color = 'lightgreen';
            }
            
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

wtrforecast(apiUrl,"#city1","#degreesmin1", "#degreesmax1","#description1","#icon1", 5);
wtrforecast(apiUrl,"#city2","#degreesmin2", "#degreesmax2","#description2","#icon2", 9);
wtrforecast(apiUrl,"#city3","#degreesmin3", "#degreesmax3","#description3","#icon3", 14);