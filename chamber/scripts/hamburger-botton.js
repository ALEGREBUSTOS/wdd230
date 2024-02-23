const hbgButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav-bar');

hbgButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hbgButton.classList.toggle('open');
});

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
