const giturl = "https://alegrebustos.github.io/wdd230/chamber/data/membership.json";

async function getdata() {
    const response = await fetch(giturl);
    const data = await response.json();
    displaymembers(data.companies);
}

function displaymembers(companies) {
    const cards = document.querySelector(".direc-main");
    
    companies.forEach((company) => {
        let card = document.createElement('section');
        let img = document.createElement('img');
        let companyname = document.createElement('h1');
        let address = document.createElement('p')
        let website =  document.createElement('a');
        let phone = document.createElement('p')
        let aditionalinfor = document.createElement('p')

        companyname.textContent = `Company: ${company.name}`;
        address.textContent = `${company.address}`;
        website.href = company.website;
        website.textContent = company.name;
        website.style.color = "#283618"
        website.style.transition = "color 0.3s ease";
        website.style.textDecoration = "none";
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
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '540');
        img.setAttribute('height', '640');
        img.style.padding = "50px";

        card.appendChild(address);
        card.appendChild(img);
        card.appendChild(website);
        card.appendChild(companyname);
        card.appendChild(aditionalinfor);
        cards.appendChild(card);
    });
}

getdata();
