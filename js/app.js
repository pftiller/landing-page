let main;
let sections;
let header;
let nav;
let navItems;
let navLinks;

document.addEventListener('DOMContentLoaded', () => {
    buildInitalNav();
    navItems = document.querySelectorAll('.nav-item');
    /* Loop through navigation links and add click handlers */
    navItems.forEach(element => {
        element.addEventListener('click', function (e) {
            /* Remove 'active' classes from all nav items */
            document.querySelector('.active').classList.remove('active');
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
    sections.forEach((element, index) => {
        navText = element.dataset.nav;
        navId = element.id;
        /* Apply default active class to only first item */
        if (index == 0) {
            navLinks = `<li class="nav-item"><a class="active" href=#${navId}>${navText}</a></li>`
            navbarList.insertAdjacentHTML('beforeend', navLinks);
        } else {
            navLinks = `<li class="nav-item"><a href=#${navId}>${navText}</a></li>`
            navbarList.insertAdjacentHTML('beforeend', navLinks);
        }
    });
}
