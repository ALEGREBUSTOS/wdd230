const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const header = document.querySelector("header");
const main = document.querySelector("main")
const h3titles=document.querySelectorAll("h3")
const navbarelemnts= document.querySelectorAll('.nav-bar a')
const form= document.querySelector(".wf1")
const legend = document.querySelector(".wf1 legend")
const htmlnamee = document.URL.substring(document.URL.lastIndexOf("/") + 1)


modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🌑")) {
        main.style.background = "#283618";
        main.style.color = "#FEFAE0";
        body.style.background = "#283618";
        body.style.color = "#FEFAE0";
        header.style.background = "#283618";
        header.style.color = "#FEFAE0";
        if(htmlnamee == "join.html"){
            form.style.background = "#283618";
            form.style.color = "#FEFAE0";
            legend.style.background = "#283618";
            legend.style.color = "#FEFAE0";
        }
 
        navbarelemnts.forEach(function(a) {
            a.style.color = "#FEFAE0"; 
            a.style.background = "#283618";
        });
        h3titles.forEach(function(h3) {
            h3.style.borderBottomColor = "#FEFAE0"; 
        });
        modeButton.textContent = "☀️";
    } else {
        main.style.background = "#FEFAE0";
        main.style.color = "#283618";
        body.style.background = "#FEFAE0";
        body.style.color = "#283618";
        header.style.background = "#FEFAE0";
        header.style.color = "#283618";
        if(htmlnamee == "join.html"){
            form.style.background = "#FEFAE0";
            form.style.color = "#283618";
            legend.style.background = "#FEFAE0";
            legend.style.color = "#283618";
        }
        navbarelemnts.forEach(function(a) {
            a.style.color = "#283618"; 
            a.style.background = "#FEFAE0";
        });
        h3titles.forEach(function(h3) {
            h3.style.borderBottomColor = "#283618"; 
        })
        modeButton.textContent = "🌑";
    }
});


