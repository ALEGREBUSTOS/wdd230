function lastmodification() {

    const doc = document;

    doc.lastModified;

    return doc.lastModified;

}

function currentyear() {
    let today = new Date();

    let currentyr = today.getFullYear();

    return currentyr;
}

function updatefooter(lastmodification, currentyear) {

    const doc = document;
    doc.querySelector('#lastModified').textContent = `Last modification ${lastmodification}`;
    doc.querySelector('#current-year').textContent = `© ${currentyear} Alejo Alegre Bustos  - Argentina `;
}

function isGridDisplayed(element) {
    const styles = window.getComputedStyle(element);
    return styles.getPropertyValue('display') === 'grid';
}

function changeviewlist() {
    const htmlnamee = document.URL.substring(document.URL.lastIndexOf("/") + 1)
    if (htmlnamee == "directory.html"){
    const bttnh = document.querySelector("#hbl");
    const bttnv = document.querySelector("#vbl");
    const main = document.querySelector("#direc-main");

    bttnh.addEventListener('click', function () {
        if (window.getComputedStyle(main).getPropertyValue('display') === 'grid') {
            main.style.display = "flex";
            main.style.flexDirection = "row";
            main.style.flexWrap = "no wrap";
            main.style.justifyContent = "center";
        }else {
            main.style.display = "grid";
            main.style.gridTemplateColumns = "1fr";
            main.style.gridTemplateRows = "1fr 1fr 1fr 1fr 1fr 1fr 1fr";
        }
    });

    bttnv.addEventListener('click', function () {
        if (window.getComputedStyle(main).getPropertyValue('display') === 'flex') {
            main.style.display = "grid";
            main.style.gridTemplateColumns = "1fr";
            main.style.gridTemplateRows = "1fr 1fr 1fr 1fr 1fr 1fr 1fr";
        }else {
            main.style.display = "flex";
            main.style.flexDirection = "row";
            main.style.flexWrap = "wrap";
            main.style.justifyContent = "center";
        }

    });
}}


updatefooter(lastmodification(), currentyear());
changeviewlist();