const hbgButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const templename = document.querySelector('.temple-name');

hbgButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hbgButton.classList.toggle('open');
    if (navigation.classList.contains('open')) {
        templename.style.position = 'absolute';
        templename.style.top = '710px';
    } else {
        templename.style.top = '460px';
    }
})