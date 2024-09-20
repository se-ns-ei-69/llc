let translations = {};

const tableContentArray = {
    ua:[
        ['1', 'Жерстяна Банка №49', 'Зварна банка Ø83,4 мм H не більше ніж 85 мм'],
        ['2', 'Жерстяна Банка №8', 'Зварна банка Ø99 мм H не більше ніж 52 мм'],
        ['3', 'Жерстяна Банка №12', 'Зварна банка Ø99 мм H не більше ніж 82 мм'],
        ['4', 'Жерстяна Банка №61', 'Зварна банка Ø99 мм H не більше ніж 82 мм'],
        ['5', 'Жерстяна Банка №66', 'Зварна банка Ø73 мм H не більше ніж 66 мм'],
        ['6', 'Жерстяна Банка №9', 'Зварна банка C Ø73 мм H не більше ніж 95 мм'],
        ['7', 'Жерстяна Банка №5', 'Зварна банка Ø83,4 мм H не більше ніж 52 мм'],
        ['8', 'Жерстяна Банка №38', 'Зварна банка C Ø83,4 мм H не більше ніж 46 мм'],
        ['9', 'Жерстяна Банка №1', 'Зварна банка Ø73 мм H не більше ніж 31 мм'],
        ['10', 'Жерстяна Банка №1', 'Зварна банка C Ø73 мм H не більше ніж 32 мм'],
        ['11', 'Жерстяна Банка №5', 'Тягнута банка C Ø83,4 мм H не більше ніж 52 мм'],
        ['12', 'Жерстяна Банка №3', 'Тягнута банка C Ø99 мм H не більше ніж 38,5 мм'],
        ['13', 'Жерстяна Банка №3', 'Тягнута банка C Ø99 H не більше ніж 28 мм'],
        ['14', 'Жерстяна Кришка 99', 'Кришка Ø83,4 мм'],
        ['15', 'Жерстяна Кришка EOE 83,4', 'Кришка Ø83,4 мм'],
        ['16', 'Жерстяна Кришка EOE 73', 'Кришка EOE Ø73 мм'],
        ['17', 'Жерстяна Кришка EOE 83,4', 'Кришка EOE Ø83,4 мм'],
        ['18', 'Жерстяна Кришка EOE 99', 'Кришка EOE Ø99 мм'],
    ],
    en:[
        ['1', 'Tin Can №49', '3 piece can Ø83,4 mm H no more than 85 mm'],
        ['2', 'Tin Can №8', '3 piece can Ø99 mm H no more than 52 mm'],
        ['3', 'Tin Can №12', '3 piece can Ø99 mm H no more than 82 mm'],
        ['4', 'Tin Can №61', '3 piece can Ø99 mm H no more than 61 mm'],
        ['5', 'Tin Can №66', '3 piece can Ø73 mm H no more than 66 mm'],
        ['6', 'Tin Can №9', '3 piece can Ø73 mm H no more than 95 mm'],
        ['7', 'Tin Can №5', '3 piece can Ø83,4 mm H no more than 52 mm'],
        ['8', 'Tin Can №38', '3 piece can Ø83,4 mm H no more than 46 mm'],
        ['9', 'Tin Can №1', '3 piece can C Ø73 mm H no more than 31 mm'],
        ['10', 'Tin Can №1', '3 piece can C Ø73 mm H no more than 32 mm'],
        ['11', 'Tin Can №5', '2 piece can C Ø83,4 mm H no more than 52 mm'],
        ['12', 'Tin Can №3', '2 piece can C Ø99 mm H no more than 38,5 mm'],
        ['13', 'Tin Can №2', '2 piece can C Ø99 H no more than 28 mm'],
        ['14', 'Tin Lid 99', 'Lid Ø99 mm'],
        ['15', 'Tin Lid EOE 83,4', 'Lid Ø83,4 mm'],
        ['16', 'Tin Lid EOE 73', 'Lid EOE Ø73 mm'],
        ['17', 'Tin Lid EOE 83,4', 'Lid EOE Ø83,4 mm'],
        ['18', 'Tin Lid EOE 99', 'Lid EOE Ø99 mm']
    ],
}

const cardsContentArray = {
    ua:[
        ['Жерстяна Банка №8'],
        ['Жерстяна Банка №3'],
        ['Жерстяна Банка №1'],
        ['Жерстяна Банка №5'],
        ['Жерстяна Банка №9'],
        ['Жерстяна Банка №49'],
        ['Жерстяна Банка №12'],
        ['Жерстяна Банка №2'],
        ['Банка №5'],
        ['Банка №12 б', 'з літографією “Добре Поїсти”'],
        ['Банка №1', 'з літографією “Екватор”'],
        ['Банка №1', 'з літографією “Veladis”'],
        ['Жерстяна кришка та EOE 83,4'],
        ['Жерстяна кришка та EOE 99'],
        ['Жерстяна кришка та EOE 73']
    ],
    en:[
        ['Tin Can №8'],
        ['Tin Can №3'],
        ['Tin Can №1'],
        ['Tin Can №5'],
        ['Tin Can №9'],
        ['Tin Can №49'],
        ['Tin Can №12'],
        ['Tin Can №2'],
        ['Can №5', 'with lithography “BiG BOB”'],
        ['Can №12 b', 'with lithography “Добре Поїсти”'],
        ['Can №1', 'with lithography “Екватор”'],
        ['Can №1', 'with lithography “Veladis”'],
        ['Tin Lid and EOE 83,4'],
        ['Tin Lid and EOE 99'],
        ['Tin Lid and EOE 73']
    ],
}

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
    switchCardsLang(lang)
    const table = document.getElementById('products_tbody');
    const rows = table.querySelectorAll('tr');

    tableContentArray[lang].forEach((rowData, rowIndex) => {
        const cells = rows[rowIndex].querySelectorAll('td');
        rowData.forEach((cellData, cellIndex) => {
            cells[cellIndex].textContent = cellData;
        });
    });
    document.getElementById('switch-to-ua').classList.remove('active');
    document.getElementById('switch-to-en').classList.remove('active');
    if (translations[lang]) {
//menu links
        document.getElementById('menu-item-contacts').textContent = translations[lang].menu.contacts;
        document.getElementById('menu-item-products').textContent = translations[lang].menu.products;
        document.getElementById('menu-item-about-company').textContent = translations[lang].menu.about_company;

        document.getElementById('hero_header').textContent = translations[lang].name;
        document.getElementById('partners_header').textContent = translations[lang].subheaders.partners;

        document.getElementById('about_us_header').textContent = translations[lang].subheaders.about;
        document.getElementById('about-text-part1').textContent = translations[lang].hero_text.about.part1;
        document.getElementById('about-text-part2').textContent = translations[lang].hero_text.about.part2;

        document.getElementById('products_description').textContent = translations[lang].subheaders.products.description;
        document.getElementById('products_header').textContent = translations[lang].subheaders.products.label;

        document.querySelectorAll('.contacts_header').forEach(node => node.textContent = translations[lang].subheaders.contacts.label );
        document.getElementById('contacts_description').textContent = translations[lang].subheaders.contacts.description;
//contacts
        document.querySelectorAll('.sales_label').forEach(node => node.textContent = translations[lang].contacts.staff.sales.label)
        document.querySelectorAll('.sales_name').forEach(node => node.textContent = translations[lang].contacts.staff.sales.name)

        document.querySelectorAll('.supply_label').forEach(node => node.textContent = translations[lang].contacts.staff.supply.label)
        document.querySelectorAll('.supply_name').forEach(node => node.textContent = translations[lang].contacts.staff.supply.name)

        document.getElementById('commercial_label').textContent = translations[lang].contacts.staff.commercial.label;
        document.getElementById('commercial_name').textContent = translations[lang].contacts.staff.commercial.name;

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

// function changeLanguage(lang) {
//     const table = document.getElementById('products_tbody');
//     const rows = table.querySelectorAll('tr');
//
//     tableContentArray[lang].forEach((rowData, rowIndex) => {
//         const cells = rows[rowIndex].querySelectorAll('td');
//         rowData.forEach((cellData, cellIndex) => {
//             cells[cellIndex].textContent = cellData;
//         });
//     });
// }

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
