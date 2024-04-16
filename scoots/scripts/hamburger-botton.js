const hbgButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav-bar');
const htmlname = document.URL.substring(document.URL.lastIndexOf("/") + 1)

hbgButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hbgButton.classList.toggle('open');
});

// if (htmlname == "index.html") {

// var video = document.querySelector('.hero-img');

// video.addEventListener('error', function (event) {
//     console.error('Error during video playback:', event.message);
// });

// video.play()
//     .then(() => {
//         console.log('Video playback started successfully.');
//     })
//     .catch(error => {
//         console.error('Error starting video playback:', error.message);
//     });

// }

if (htmlname == "reservation.html") {
    const bttnsubmit = document.querySelector("#btnsubmit");
    const form = document.querySelector(".wf1");

    function datetime() {
        const time = new Date();
        const formattedTime = `last modified in ${padZero(time.getDate())}/${padZero(time.getMonth() + 1)}/${time.getFullYear()} - ${time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })}`;
        const showtime = document.querySelector("#timerecord");
        showtime.type = 'text';
        showtime.style.textAlign = "center";
        showtime.value = formattedTime;
    }

    function padZero(number) {
        return number < 10 ? '0' + number : number;
    }

    function validateform() {
        var requiredfields = document.querySelectorAll('.wf1 [required]');
        var isvalid = true;

        requiredfields.forEach(function (field) {
            if (!field.value.trim()) {
                isvalid = false;
            }
        });

        var errormessage = document.querySelector('#error-message');
        if (!isvalid) {
            errormessage.style.display = 'block';
        } else {
            errormessage.style.display = 'none';
            window.location.href = 'thanksyou.html';
        }
    }

    bttnsubmit.addEventListener('click', function (event) {
        event.preventDefault();
        validateform();
        
    });

    form.addEventListener('load', function () {
        datetime();
    });

    form.addEventListener('change', function () {
        datetime();
    });
}

if (htmlname == "index.html") {
    const reservationbttn = document.querySelector(".bttn-joinus");

    function redirect() {

        window.location.href = "reservation.html";


    }
}