const hbgButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav-bar');

hbgButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hbgButton.classList.toggle('open');
});


