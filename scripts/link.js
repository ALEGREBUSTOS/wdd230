const giturl = "https://alegrebustos.github.io/wdd230/data/links.json";

async function getlinks() {
    const response = await fetch(giturl);
    const data = await response.json();
    displaylinks(data.lessons);
}

function displaylinks(lessons) {
    const ul = document.querySelector('ul');

    lessons.forEach((lesson) => {
        lesson.links.forEach((link) => {

            const a = document.createElement('a');

            a.href = link.url;
            a.textContent = link.title;
            a.style.color = "white"
            a.style.transition = "color 0.3s ease";
            a.style.textDecoration = "none";
            a.addEventListener("mouseover", () => {
                a.style.color = " #ffdf00";
            });
            a.addEventListener("mouseout", () => {
                a.style.color = "white"
            });

            const listitem = document.createElement('li');
            listitem.style.listStyleType = "none";
            listitem.appendChild(a);

            ul.appendChild(listitem);
            ul.style.textAlign = "center"
        });
    });
}

getlinks();
