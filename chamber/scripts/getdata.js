const giturl = "https://alegrebustos.github.io/wdd230/chamber/data/membership.json";
const htmlnam = document.URL.substring(document.URL.lastIndexOf("/") + 1);

async function getdata() {
    const response = await fetch(giturl);
    const data = await response.json();
    displaymembers(data.companies);
}

function displaymembers(companies) {
    const cards = document.querySelector("#direc-main");

    companies.forEach((company) => {
        let card = document.createElement('section');
        let img = document.createElement('img');
        let companyname = document.createElement('h3');
        let address = document.createElement('p')
        let website = document.createElement('a');
        let phone = document.createElement('p')
        let aditionalinfor = document.createElement('p')

        companyname.textContent = `Company: ${company.name}`;
        address.textContent = `${company.address}`;
        website.href = company.website;
        website.textContent = company.name;
        website.style.color = "#283618"
        website.style.transition = "color 0.3s ease";
        // website.style.textDecoration = "none";
        website.addEventListener("mouseover", () => {
            website.style.color = "#BC6C25";
        });
        website.addEventListener("mouseout", () => {
            website.style.color = "#283618"
        });
        phone.textContent = `Tel: ${company.phone}`;
        aditionalinfor.textContent = `Additional information: ${company.additional_info}`;
        aditionalinfor.style.textAlign = 'center';
        img.setAttribute('src', company.image);
        img.setAttribute('alt', `This is ${company.name}`);
        if (company.name = "Tech Innovators Inc.") {
            img.setAttribute('loading', 'edge');
        } else {
            img.setAttribute('loading', 'lazy');
        }
        img.setAttribute('width', '240');
        img.setAttribute('height', '240');
        img.style.padding = "50px";

        card.appendChild(companyname);
        card.appendChild(img);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(aditionalinfor);

        card.style.display = "grid";
        card.style.justifyItems = "center";
        card.style.alignItemsItems = "center";
        card.style.textAlign = "center";
        card.classList = "cardm";
        card.style.boxShadow = "5px 5px 5px 5px rgba(0, 0, 0, 0.3)";
        cards.appendChild(card);
    });

}

async function getdata2() {
    const response = await fetch(giturl);
    const data = await response.json();
    displaymembersrandom(data.companies[rnum1], ".img1", ".companyname1", ".url1", ".address1",".s1",".s12");
    displaymembersrandom(data.companies[rnum2], ".img2", ".companyname2", ".url2", ".address2",".s2",".s22");
    displaymembersrandom(data.companies[rnum3], ".img3", ".companyname3", ".url3", ".address3",".s3",".s32");
}

function randomnumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const rnum1 = randomnumber(0, 6);
const rnum2 = randomnumber(0, 6);
const rnum3 = randomnumber(0, 6);

function displaymembersrandom(company, classimg, classh4, classa, classaddress,src1,src2) {

    let img = document.querySelector(classimg);
    let companyname = document.querySelector(classh4);
    let address = document.querySelector(classaddress);
    let website = document.querySelector(classa);
    let srcsource1 = document.querySelector(src1);
    let srcsource2 = document.querySelector(src2);

    companyname.textContent = `Company: ${company.name}`;
    address.textContent = company.address;
    website.href = company.website;
    website.textContent = company.name;
    website.style.color = "white"
    img.setAttribute('src', company.image);
    img.setAttribute('alt', `This is ${company.name}`);
    srcsource1.setAttribute('srcset', company.image);
    srcsource2.setAttribute('srcset', company.image);

}

if (htmlnam == "directory.html") {
    getdata();
} else if (htmlnam == "index.html") {

    getdata2();
}
