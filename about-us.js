window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    document.querySelector('.parallax-image').style.transform = `translateY(${scrolled * 0.5}px)`;
});

function switchCardsLang(lang) {
    const cardsContainer= document.getElementById('gallery_products');
    const cards = cardsContainer.querySelectorAll('.catalog-card')

    cardsContentArray[lang].forEach((rowData, rowIndex) => {
        const cells = cards[rowIndex].querySelectorAll('h3');
        rowData.forEach((cellData, cellIndex) => {
            cells[cellIndex].textContent = cellData;
        });
    });
}

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

        document.getElementById('about_us_header').textContent = translations[lang].subheaders.about.label;
        document.querySelectorAll('.about_description').forEach(node => node.textContent = translations[lang].subheaders.about.description)
        document.getElementById('about-text-part1').textContent = translations[lang].hero_text.about.part1;
        document.getElementById('about-text-part2').textContent = translations[lang].hero_text.about.part2;
        document.getElementById('pdfButton').textContent = translations[lang].pdfButton.label;

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
