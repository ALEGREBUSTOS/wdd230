const apikey = 'e1e42164e352ebd9cd4ef6db70fe58bd';
const lat = '20.4225';
const lon = '86.9223';
const apiurl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}`;

function background(description, elemclass) {
    const background = document.querySelector(elemclass);
    if (background) {
        const descriptioncontent = description.toLowerCase();
        if (descriptioncontent.includes('cloud') || descriptioncontent.includes('rain')) {
            background.style.background = 'linear-gradient(to bottom, rgba(128, 128, 128, 0.6), rgba(138, 43, 226, 0.6), rgba(128, 128, 128, 0.6))';

        }
        if (descriptioncontent.includes('sunny')) {
            background.style.background = "linear-gradient(to bottom, rgba(217, 247, 249, 0.6), rgba(247, 123, 46, 0.6), rgba(217, 247, 249, 0.6))";

        }
        if (descriptioncontent.includes('clear sky')) {
            background.style.background = "linear-gradient(to bottom, rgba(254, 255, 255, 0.6), rgba(180, 231, 255, 0.6), rgba(89, 176, 252, 0.6))";

        }
    }
}

var banner = document.querySelector(".maxtemp");

function closeBanner() {
    banner.style.display = "none";
}

function temptoday(max_temp) {
    var info = document.createElement("h4");
    info.textContent = `The maximun tempeture for today is ${max_temp} ℃`;
    banner.appendChild(info);
    banner.style.display = "block";


}


function wtrforecast(url, cityselector, degreesselectormin, degreesselectormax, humedity, descriptionselector, iconselector, index, elementclass, idday) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const ncity = 'Cozumel';
            const cityelement = document.querySelector(cityselector);
            const degreeselementmax = document.querySelector(degreesselectormax);
            const degreeselementmin = document.querySelector(degreesselectormin);
            const humedityelement = document.querySelector(humedity);
            const descriptionelement = document.querySelector(descriptionselector);
            const iconelement = document.querySelector(iconselector);
            const titleday = document.querySelector(idday);

            var today = new Date();
            var tomorrow = new Date(today);
            tomorrow.setDate(today.getDate() + 1);
            var afterTomorrow = new Date(today);
            afterTomorrow.setDate(today.getDate() + 2);

            var options = { day: '2-digit', weekday: 'short' };
            var formatter = new Intl.DateTimeFormat('en-US', options);

            if (idday === "#d1") {
                var todayForecast = formatter.format(today);
                var [day, number] = todayForecast.split(' ');
                titleday.textContent = `${day} ${number}`;
            }
            if (idday === "#d2") {
                var tomorrowForecast = formatter.format(tomorrow);
                var [day, number] = tomorrowForecast.split(' ');
                titleday.textContent = `${day} ${number}`;
            }
            if (idday === "#d3") {
                var afterTomorrowForecast = formatter.format(afterTomorrow);
                var [day, number] = afterTomorrowForecast.split(' ');
                titleday.textContent = `${day} ${number}`;
            }




            cityelement.textContent = ncity;
            let degree_celsiusmin = (data.list[index].main.temp_min - 273.15).toFixed(0);
            let degree_celsiusmax = (data.list[index].main.temp_max - 273.15).toFixed(0);
            if (index == 5){temptoday(degree_celsiusmax)};
            degreeselementmin.textContent = `Min ${degree_celsiusmin} ℃`;
            degreeselementmax.textContent = `Max ${degree_celsiusmax} ℃`;
            humedityelement.textContent = `Humidity  ${data.list[index].main.humidity}%`;;
            iconelement.src = `https://openweathermap.org/img/wn/${data.list[index].weather[0].icon}@2x.png`;
            iconelement.style.width = "50px";
            iconelement.style.height = "50px";
            const weatherdescription = data.list[index].weather[0].description.charAt(0).toUpperCase() + data.list[index].weather[0].description.slice(1);
            descriptionelement.textContent = weatherdescription;
            background(weatherdescription, elementclass);

            if (degree_celsiusmin >= 30 && degree_celsiusmax >= 30) {
                degreeselementmin.style.color = 'orange';
                degreeselementmax.style.color = 'orange';
            } else {
                degreeselementmin.style.color = 'black';
                degreeselementmax.style.color = 'black';
            }
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

wtrforecast(apiurl, "#city1", "#degreesmin1", "#degreesmax1", "#humedtity1", "#description1", "#icon1", 5, ".ctn-weather", "#d1");
wtrforecast(apiurl, "#city2", "#degreesmin2", "#degreesmax2", "#humedtity2", "#description2", "#icon2", 9, ".ctn-weather2", "#d2");
wtrforecast(apiurl, "#city3", "#degreesmin3", "#degreesmax3", "#humedtity3", "#description3", "#icon3", 14, ".ctn-weather3", "#d3");
