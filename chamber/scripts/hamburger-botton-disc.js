const hbgButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav-bar');
const bttnsubmit = document.querySelector("#btnsubmit")
const htmlname = document.URL.substring(document.URL.lastIndexOf("/") + 1)

hbgButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hbgButton.classList.toggle('open');
});

if (htmlname == "join.html") {

    const npmembership = document.querySelector('#np-membership');
    const bmembership = document.querySelector('#b-pmembership');
    const smembership = document.querySelector('#s-membership');
    const gmembership = document.querySelector('#g-membership');




    function showbenefits() {
        const bnpmem = document.querySelector("#bnpmem");
        const bmem = document.querySelector("#bmem");
        const smem = document.querySelector("#smem");
        const gmem = document.querySelector("#gmem");

        bnpmem.style.display = "none";
        bmem.style.display = "none";
        smem.style.display = "none";
        gmem.style.display = "none";

        const npmembership = document.getElementById('np-membership').checked;
        const bmembership = document.getElementById('b-pmembership').checked;
        const smembership = document.getElementById('s-membership').checked;
        const gmembership = document.getElementById('g-membership').checked;

        if (npmembership) {
            bmem.style.display = "none";
            smem.style.display = "none";
            gmem.style.display = "none";
            bnpmem.style.display = "grid";
            bnpmem.style.gridRow = "8";
        } else if (bmembership) {
            bnpmem.style.display = "none";
            smem.style.display = "none";
            gmem.style.display = "none";
            bmem.style.display = "grid";
            bmem.style.gridRow = "9";
        } else if (smembership) {
            gmem.style.display = "none";
            bnpmem.style.display = "none";
            bmem.style.display = "none";
            smem.style.display = "grid";
            smem.style.gridRow = "10";
        } else if (gmembership) {
            bnpmem.style.display = "none";
            bmem.style.display = "none";
            smem.style.display = "none";
            gmem.style.display = "grid";
            gmem.style.gridRow = "11";
        }
    }



    npmembership.addEventListener("change", function () {

        showbenefits()
    });
    bmembership.addEventListener("change", function () {

        showbenefits()
    });
    smembership.addEventListener("change", function () {

        showbenefits()
    });
    gmembership.addEventListener("change", function () {

        showbenefits()
    });



    bttnsubmit.addEventListener('click', function (event) {

        event.preventDefault();
        window.location.href = 'thanks.html';
    });

}