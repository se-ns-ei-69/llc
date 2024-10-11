let translations = {};

function switchCardsLang(lang) {
    const cardsContainer= document.getElementById('gallery_products');
    const cards = cardsContainer.querySelectorAll('.catalog-card')

    // cardsContentArray[lang].forEach((rowData, rowIndex) => {
    //     const cells = cards[rowIndex].querySelectorAll('h3');
    //     rowData.forEach((cellData, cellIndex) => {
    //         cells[cellIndex].textContent = cellData;
    //     });
    // });
}

export function loadTranslations() {
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
    // const table = document.getElementById('products_tbody');
    // const rows = table.querySelectorAll('tr');

    // tableContentArray[lang].forEach((rowData, rowIndex) => {
    //     const cells = rows[rowIndex].querySelectorAll('td');
    //     rowData.forEach((cellData, cellIndex) => {
    //         cells[cellIndex].textContent = cellData;
    //     });
    // });

    document.getElementById('switch-to-ua').classList.remove('active');
    document.getElementById('switch-to-en').classList.remove('active');
    if (translations[lang]) {
        document.getElementById('menu-item-contacts').textContent = translations[lang].menu.contacts;
        document.getElementById('menu-item-products').textContent = translations[lang].menu.products;
        document.getElementById('menu-item-about-company').textContent = translations[lang].menu.about_company;

        document.getElementById('hero_header').textContent = translations[lang].name;
        document.getElementById('partners_header').textContent = translations[lang].subheaders.partners;

        document.getElementById('about_us_header').textContent = translations[lang].subheaders.about.label;
        document.querySelectorAll('.about_description').forEach(node => node.textContent = translations[lang].subheaders.about.description)
        document.getElementById('about-text-part1').textContent = translations[lang].hero_text.about.part1;
        document.getElementById('about-text-part2').textContent = translations[lang].hero_text.about.part2;

        document.getElementById('products_description').textContent = translations[lang].subheaders.products.description;
        document.getElementById('products_header').textContent = translations[lang].subheaders.products.label;

        document.querySelectorAll('.contacts_header').forEach(node => node.textContent = translations[lang].subheaders.contacts.label );
        document.getElementById('contacts_description').textContent = translations[lang].subheaders.contacts.description;
        document.querySelectorAll('.sales_label').forEach(node => node.textContent = translations[lang].contacts.staff.sales.label)
        document.querySelectorAll('.sales_name').forEach(node => node.textContent = translations[lang].contacts.staff.sales.name)

        document.querySelectorAll('.supply_label').forEach(node => node.textContent = translations[lang].contacts.staff.supply.label)
        document.querySelectorAll('.supply_name').forEach(node => node.textContent = translations[lang].contacts.staff.supply.name)

        document.getElementById('commercial_label').textContent = translations[lang].contacts.staff.commercial.label;
        document.getElementById('commercial_name').textContent = translations[lang].contacts.staff.commercial.name;

        document.getElementById('director_label').textContent = translations[lang].contacts.staff.director.label;
        document.getElementById('director_name').textContent = translations[lang].contacts.staff.director.name;

        document.getElementById('tHeader_number').textContent = translations[lang].table.thNumber;
        document.getElementById('tHeader_name').textContent = translations[lang].table.thName;
        document.getElementById('tHeader_size').textContent = translations[lang].table.thSize;

        document.getElementById('pdfButton').textContent = translations[lang].pdfButton.label;

        document.getElementById('label1').textContent = translations[lang].address.label1;
        document.getElementById('label2').textContent = translations[lang].address.label2;

        document.getElementById('field1').textContent = translations[lang].address.field1;
        document.getElementById('field2').textContent = translations[lang].address.field2;

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
