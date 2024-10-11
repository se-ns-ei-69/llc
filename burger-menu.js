const burgerMenu = document.getElementById('burger-menu');
const navigation = document.getElementById('nav');
const body = document.body;

burgerMenu.addEventListener('click', function () {
    navigation.classList.toggle('open');
    burgerMenu.classList.toggle('open');

    if (burgerMenu.classList.contains('open')) {
        body.classList.add('disable-scroll');
    } else {
        body.classList.remove('disable-scroll');
    }
});

const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        navigation.classList.remove('open');
        burgerMenu.classList.remove('open');
        body.classList.remove('disable-scroll');
    });
});
