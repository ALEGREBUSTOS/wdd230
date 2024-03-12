const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const header = document.querySelector("header");
const eventweatherbox = document.querySelector(".event-weather-box");
const eventbox = document.querySelector(".event");
const weatherbox = document.querySelector(".weather");
const advertisementbox = document.querySelector(".advertisement-box");
const advertisementboxes = document.querySelectorAll(".advertisement-box > div");
const h4Element1 = document.querySelector('.advertisement-1 h4');
const aElement1 = document.querySelector('.advertisement-1 a');
const h4Element2 = document.querySelector('.advertisement-2 h4');
const aElement2 = document.querySelector('.advertisement-2 a');
const h4Element3 = document.querySelector('.advertisement-3 h4');
const aElement3 = document.querySelector('.advertisement-3 a');
const navbarelemnts = document.querySelectorAll('.nav-bar a')
const htmlnamee = document.URL.substring(document.URL.lastIndexOf("/") + 1)




modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🌑")) {
        body.style.background = "#283618";
        body.style.color = "#FEFAE0";
        header.style.background = "#283618";
        header.style.color = "#FEFAE0";
        if (htmlnamee == "index.html") {
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
        h4Element1.style.color = "#FEFAE0";
        aElement1.style.color = "#FEFAE0";
        h4Element2.style.color = "#FEFAE0";
        aElement2.style.color = "#FEFAE0";
        h4Element3.style.color = "#FEFAE0";
        aElement3.style.color = "#FEFAE0";
        }
        if (htmlnamee == "join.html") {
            const mform = document.querySelector(".wf1");
            const legend = document.querySelector(".wf1 legend");
            mform.style.background = "#283618";
            mform.style.color = "#FEFAE0";
            legend.style.background = "#283618";
            legend.style.color = "#FEFAE0";
        }

        if (htmlnamee == "thanks.html") {
            const tmain = document.querySelector(".thkmain");
            const h3 = document.querySelector(".thkmain h3");
            const p = document.querySelector(".thkmain p");
            tmain.style.background = "#283618";
            tmain.style.color = "#FEFAE0";
            h3.style.background = "#283618";
            h3.style.color = "#FEFAE0";
            p.style.background = "#283618";
            p.style.color = "#FEFAE0";
        }

        if (htmlnamee == "discover.html") {
            const main = document.querySelector("main")
            const h3titles = document.querySelectorAll("h3")
            main.style.background = "#283618";
            main.style.color = "#FEFAE0";
            h3titles.forEach(function (h3) {
                h3.style.borderBottomColor = "#FEFAE0";
            });
        }

        navbarelemnts.forEach(function (a) {
            a.style.color = "#FEFAE0";
            a.style.background = "#283618";
        });
        modeButton.textContent = "☀️";
    } else {
        body.style.background = "#FEFAE0";
        body.style.color = "#283618";
        header.style.background = "#FEFAE0";
        header.style.color = "#283618";
        if (htmlnamee == "index.html") {
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
        h4Element1.style.color = "#283618";
        aElement1.style.color = "#283618";
        h4Element2.style.color = "#283618";
        aElement2.style.color = "#283618";
        h4Element3.style.color = "#283618";
        aElement3.style.color = "#283618";
        }
        if (htmlnamee == "join.html") {
            const mform = document.querySelector(".wf1");
            const legend = document.querySelector(".wf1 legend");
            mform.style.background = "#FEFAE0";
            mform.style.color = "#283618";
            legend.style.background = "#FEFAE0";
            legend.style.color = "#283618";
        }
        if (htmlnamee == "thanks.html") {
            const tmain = document.querySelector(".thkmain");
            const h3 = document.querySelector(".thkmain h3");
            const p = document.querySelector(".thkmain p");
            tmain.style.background = "#FEFAE0";
            tmain.style.color = "#283618";
            h3.style.background = "#FEFAE0";
            h3.style.color = "#283618";
            p.style.background = "#FEFAE0";
            p.style.color = "#283618";
        }
        if (htmlnamee == "discover.html") {
            const main = document.querySelector("main")
            const h3titles = document.querySelectorAll("h3")
            main.style.background = "#FEFAE0";
            main.style.color = "#283618";
            h3titles.forEach(function (h3) {
                h3.style.borderBottomColor = "#283618";
            })
        }
        navbarelemnts.forEach(function (a) {
            a.style.color = "#283618";
            a.style.background = "#FEFAE0";
        });
   
        modeButton.textContent = "🌑";
    }
});
