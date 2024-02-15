const hbgButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hbgButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hbgButton.classList.toggle('open');
});