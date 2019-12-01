let main;
let sections;
let header;
let nav;
let navItems;
let navLinks;
let counter = 0;

document.addEventListener('DOMContentLoaded', () => {
    buildInitalNav();
    navItems = document.querySelectorAll('.nav-item');
    /* Loop through navigation links and add click handlers */
    navItems.forEach(element => {
        element.addEventListener('click', function (e) {
            counter += 1;
            /* Handle 1st instance differently than subsequent */
            if (counter > 1) {
                document.querySelector('.active').classList.remove('active');
            }
            /* Retrieve ID for anchor tag scroll reference */
            let sectionId = e.target.getAttribute('href').substr(1);
            document.getElementById(sectionId).scrollIntoView(true);
            /* Add 'active' class to the navigation link that was clicked */
            e.target.classList.add('active')
        })
    })
});

let buildInitalNav = function () {
    let navText;
    let navId;
    let navLinks;
    let navbarList = document.getElementById('navbar__list');
    header = document.querySelector('header');
    nav = header.querySelector('nav');
    main = document.querySelector('main');
    sections = main.querySelectorAll('section');
    /* Loop through sections and retrieve properties for nav display */
    sections.forEach(element => {
        navText = element.dataset.nav;
        navId = element.id;
        navLinks = `<li class="nav-item"><a href=#${navId}>${navText}</a></li>`
        navbarList.insertAdjacentHTML('beforeend', navLinks);
    });
}
