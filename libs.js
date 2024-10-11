window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    document.querySelector('.parallax-image').style.transform = `translateY(${scrolled * 0.5}px)`;
});

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

