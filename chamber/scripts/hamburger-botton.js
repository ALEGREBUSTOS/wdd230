const hbgButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav-bar');

hbgButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hbgButton.classList.toggle('open');
});

var video = document.querySelector('.hero-img');

video.addEventListener('loadedmetadata', function() {

    video.play();
});