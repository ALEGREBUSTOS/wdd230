const apikey = 'e1e42164e352ebd9cd4ef6db70fe58bd';
const lat = '31.6333';
const lon = '-60.7000';
const apiurl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}`;

function background(description, elemclass) {
    const background = document.querySelector(elemclass);
    if (background) {
        const descriptioncontent = description.toLowerCase();
        if (descriptioncontent.includes('cloud')) {
            background.style.backgroundImage = "url('images/dayrain-smaill.webp')";
        }
        if (descriptioncontent.includes('sunny')) {
            background.style.backgroundImage = "url('images/sunnyday-small.webp')";
        }
        background.style.backdropFilter = "blur(100px)";
    }
}
// Ahora queda hacer que las letras se intenamos hace un blur pero no esta funcionando,
// Deberiamos agregar un desenfoque por background de parrafo sino
function wtrforecast(url, cityselector, degreesselectormin, degreesselectormax, descriptionselector, iconselector, index, elementclass) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const ncity = 'Santa Fe';
            const cityelement = document.querySelector(cityselector);
            const degreeselementmax = document.querySelector(degreesselectormax);
            const degreeselementmin = document.querySelector(degreesselectormin);
            const descriptionelement = document.querySelector(descriptionselector);
            const iconelement = document.querySelector(iconselector);

            cityelement.textContent = ncity;
            let degree_celsiusmin = (data.list[index].main.temp_min - 273.15).toFixed(0);
            let degree_celsiusmax = (data.list[index].main.temp_max - 273.15).toFixed(0);
            degreeselementmin.textContent = `${degree_celsiusmin} ℃`;
            degreeselementmax.textContent = `${degree_celsiusmax} ℃`;
            const iconimg = document.createElement('img');
            iconimg.src = `https://openweathermap.org/img/wn/${data.list[index].weather[0].icon}@2x.png`;
            iconimg.style.width = "50px";
            iconimg.style.height = "50px";
            iconelement.innerHTML = '';
            iconelement.appendChild(iconimg);
            const weatherdescription = data.list[index].weather[0].description.charAt(0).toUpperCase() + data.list[index].weather[0].description.slice(1);
            descriptionelement.textContent = weatherdescription;
            background(weatherdescription, elementclass);

            if (degree_celsiusmin >= 30 && degree_celsiusmax >= 30) {
                degreeselementmin.style.color = 'orange';
                degreeselementmax.style.color = 'orange';
            } else {
                degreeselementmin.style.color = 'lightgreen';
                degreeselementmax.style.color = 'lightgreen';
            }
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

wtrforecast(apiurl, "#city1", "#degreesmin1", "#degreesmax1", "#description1", "#icon1", 5, ".ctn-weather");
wtrforecast(apiurl, "#city2", "#degreesmin2", "#degreesmax2", "#description2", "#icon2", 9, ".ctn-weather2");
wtrforecast(apiurl, "#city3", "#degreesmin3", "#degreesmax3", "#description3", "#icon3", 14, ".ctn-weather3");
