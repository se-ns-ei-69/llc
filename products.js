window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    document.querySelector('.parallax-image').style.transform = `translateY(${scrolled * 0.5}px)`;
});

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
        ['15', 'Жерстяна Кришка 83,4', 'Кришка Ø83,4 мм'],
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
        ['15', 'Tin Lid 83,4', 'Lid Ø83,4 mm'],
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
        ['Банка №12', 'з літографією “Добре Поїсти”'],
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
        ['Can №12', 'with lithography “Добре Поїсти”'],
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
        document.getElementById('menu-item-contacts').textContent = translations[lang].menu.contacts;
        document.getElementById('menu-item-products').textContent = translations[lang].menu.products;
        document.getElementById('menu-item-about-company').textContent = translations[lang].menu.about_company;

        document.getElementById('products_header').textContent = translations[lang].subheaders.products.label;

        document.getElementById('tHeader_number').textContent = translations[lang].table.thNumber;
        document.getElementById('tHeader_name').textContent = translations[lang].table.thName;
        document.getElementById('tHeader_size').textContent = translations[lang].table.thSize;

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
