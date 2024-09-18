let translations = {};

function loadTranslations() {
    fetch('translations.json')
        .then(response => response.json())
        .then(data => {
            translations = data;
            switchLanguage('en');
        })
        .catch(error => console.error('Error loading translations:', error));
}

function switchLanguage(lang) {
    document.getElementById('switch-to-ua').classList.remove('active');
    document.getElementById('switch-to-en').classList.remove('active');
    if (translations[lang]) {
        document.getElementById('menu-item-contacts').textContent = translations[lang].menu.contacts;
        document.getElementById('menu-item-products').textContent = translations[lang].menu.products;
        document.getElementById('menu-item-about-company').textContent = translations[lang].menu.about_company;
        document.getElementById('about-text-part1').textContent = translations[lang].hero_text.about.part1;
        document.getElementById('about-text-part2').textContent = translations[lang].hero_text.about.part2;
        document.getElementById('hero_header').textContent = translations[lang].name;
        document.getElementById('products_description').textContent = translations[lang].subheaders.products.description;
        document.getElementById('products_header').textContent = translations[lang].subheaders.products.label;

        if (lang === 'ua') {
            document.getElementById('switch-to-ua').classList.add('active');
        } else {
            document.getElementById('switch-to-en').classList.add('active');
        }
    } else {
        console.warn('Language not found:', lang);
    }
}

document.addEventListener('DOMContentLoaded', loadTranslations);

const carousels = document.querySelectorAll('.carousel');

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    carousels.forEach(carousel => {
        carousel.setAttribute('data-animated', true);
        const carouselTrack = document.querySelector('.carousel-track');
        const carouselContent = Array.from(carouselTrack.children);
        carouselContent.forEach((item) => {
            const copy = item.cloneNode(true);
            copy.setAttribute('aria-hidden', true)
            carouselTrack.appendChild(copy)
        })
    })
}
