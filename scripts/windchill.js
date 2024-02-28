// WCF= 35.74 + 0.6215 × T − 35.75 × VS ∧ 0.16 + 0.4275 × T × VS ∧ 0.16
const button = document.querySelector('#calculate');
button.addEventListener('click', function () {
    const temperature = document.querySelector("#weather").value;
    const windspeed = document.querySelector('#windspeed').value;
    const card = document.querySelector(".card2")
    function calculateWindChill(temperature, windSpeed) {

        if (temperature < 50 && windSpeed > 3.0) {

            var windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
            return windChill.toFixed(2);
        } else {

            return "the values are not apropiated for our carculations";
        }
    }
    const existingParagraph = document.querySelector('.newp');

    if (!existingParagraph) {
        const newParagraph = document.createElement('p');
        newParagraph.classList.add('newp');
        newParagraph.textContent = calculateWindChill(temperature, windspeed);
        newParagraph.style.color = 'white';
        card.append(newParagraph);
    } else {
        existingParagraph.textContent = calculateWindChill(temperature, windspeed);
    }

});


