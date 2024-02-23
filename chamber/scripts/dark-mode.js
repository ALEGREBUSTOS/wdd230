const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const header = document.querySelector("header");
const eventweatherbox = document.querySelector(".event-weather-box");
const eventbox = document.querySelector(".event");
const weatherbox = document.querySelector(".weather");
const advertisementbox = document.querySelector(".advertisement-box");
const advertisementboxes = document.querySelectorAll(".advertisement-box > div");
const h4Elements = document.querySelectorAll('.advertisement-box1 h4');
const aElements = document.querySelectorAll('.advertisement-box1 a');


modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🌑")) {
        body.style.background = "#283618";
        body.style.color = "#FEFAE0";
        header.style.background = "#283618";
        header.style.color = "#FEFAE0";
        eventweatherbox.style.background = "#283618";
        eventweatherbox.style.color = "#FEFAE0";
        eventbox.style.background = "#283618";
        eventbox.style.color = "#FEFAE0";
        weatherbox.style.background = "#283618";
        weatherbox.style.color = "#FEFAE0";
        advertisementbox.style.background = "#283618";
        advertisementbox.style.color = "#FEFAE0";
        advertisementboxes[0].style.background = "#283618";
        advertisementboxes[0].style.color = "#FEFAE0";
        advertisementboxes[1].style.background = "#283618";
        advertisementboxes[1].style.color = "#FEFAE0";
        advertisementboxes[2].style.background = "#283618";
        advertisementboxes[2].style.color = "#FEFAE0";
        h4Elements.style.color="#FEFAE0";
        aElements.style.color="#FEFAE0";
        modeButton.textContent = "☀️";
    } else {
        body.style.background = "#FEFAE0";
        body.style.color = "#283618";
        header.style.background = "#FEFAE0";
        header.style.color = "#283618";
        eventweatherbox.style.background = "#FEFAE0";
        eventweatherbox.style.color = "#283618";
        eventbox.style.background = "#FEFAE0";
        eventbox.style.color = "#283618";
        weatherbox.style.background = "#FEFAE0";
        weatherbox.style.color = "#283618";
        advertisementbox.style.background = "#FEFAE0";
        advertisementbox.style.color = "#283618";
        advertisementboxes[0].style.background = "#FEFAE0";
        advertisementboxes[0].style.color = "#283618";
        advertisementboxes[1].style.background = "#FEFAE0";
        advertisementboxes[1].style.color = "#283618";
        advertisementboxes[2].style.background = "#FEFAE0";
        advertisementboxes[2].style.color = "#283618";
        h4Elements.style.color="#283618";
        aElements.style.color="#283618";
        modeButton.textContent = "🌑";
    }
});
