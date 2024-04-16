const giturl = "https://alegrebustos.github.io/wdd230/scoots/data/rentalprices.json";
const htmlnam = document.URL.substring(document.URL.lastIndexOf("/") + 1);

async function getdata() {
    const response = await fetch(giturl);
    const data = await response.json();
    generatetablerows(data);
}

function generatetablerows(jsondata) {
    var tablebody = document.querySelector(".bodytable");

    jsondata.rentals.forEach(function(rental) {
        var row = document.createElement("tr");

        var rentaltypecell = document.createElement("td");
        rentaltypecell.textContent = rental.vehicle;
        row.appendChild(rentaltypecell);

        var maxpersonscell = document.createElement("td");
        maxpersonscell.textContent = rental.max_persons;
        row.appendChild(maxpersonscell);

        var halfday3hrscell = document.createElement("td");
        halfday3hrscell.textContent = rental.half_day_price_3_hrs;
        row.appendChild(halfday3hrscell);

        var fulldaycell = document.createElement("td");
        fulldaycell.textContent = rental.full_day_price;
        row.appendChild(fulldaycell);

        var halfday6hrscell = document.createElement("td");
        halfday6hrscell.textContent = rental.half_day_price_6_hrs;
        row.appendChild(halfday6hrscell);

        var fullday6hrscell = document.createElement("td");
        fullday6hrscell.textContent = rental.full_day_price_6_hrs;
        row.appendChild(fullday6hrscell);

        tablebody.appendChild(row);
    });
}

if (htmlnam == "rentals.html") {
    getdata();
}
