const hbgButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav-bar');
const htmlname = document.URL.substring(document.URL.lastIndexOf("/") + 1)

hbgButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hbgButton.classList.toggle('open');
});

if (htmlname == "index.html") {

var video = document.querySelector('.hero-img');

video.addEventListener('error', function (event) {
    console.error('Error during video playback:', event.message);
});

video.play()
    .then(() => {
        console.log('Video playback started successfully.');
    })
    .catch(error => {
        console.error('Error starting video playback:', error.message);
    });

}

if (htmlname == "join.html") {

    const npmembership = document.querySelector('#np-membership');
    const bmembership = document.querySelector('#b-pmembership');
    const smembership = document.querySelector('#s-membership');
    const gmembership = document.querySelector('#g-membership');
    const bttnsubmit = document.querySelector("#btnsubmit")
    const form = document.querySelector(".wf1")



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



    function datetime() {

        const time = new Date();
        const formattedTime = `last modified in ${padZero(time.getDate())}/${padZero(time.getMonth() + 1)}/${time.getFullYear()} - ${time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })}`;
        const showtime = document.querySelector("#timerecord");
        showtime.type = 'text';
        showtime.style.textAlign = "center"
        showtime.value = formattedTime;
    }

    function padZero(number) {
        return number < 10 ? '0' + number : number;
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


    form.addEventListener('load', function () {


        datetime();

    });


    form.addEventListener('change', function () {


        datetime();

    });

}    