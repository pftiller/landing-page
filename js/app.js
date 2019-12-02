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
            /* Remove 'selected' classes from all nav items */
            document.querySelector('.selected').classList.remove('selected');
            /* Remove 'active' classes from all sections */
            document.querySelector('.active').classList.remove('active');
            /* Retrieve ID for anchor tag scroll reference */
            let sectionId = e.target.getAttribute('href').substr(1);
            console.log('this is sectionId', sectionId);
            let selectedSection = document.getElementById(sectionId);
            console.log('this is selectedSection', selectedSection);
            selectedSection.scrollIntoView(true);
            /* Add 'active' class to the proper section */
            console.log(selectedSection.firstElementChild)
            selectedSection.firstElementChild.classList.add('active')
            /* Add 'selected' class to the navigation link that was clicked */
            e.target.classList.add('selected')
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
        /* Apply default selected class to only first item */
        if (index == 0) {
            navLinks = `<li class="nav-item"><a class="selected" href=#${navId}>${navText}</a></li>`
            navbarList.insertAdjacentHTML('beforeend', navLinks);
        } else {
            navLinks = `<li class="nav-item"><a href=#${navId}>${navText}</a></li>`
            navbarList.insertAdjacentHTML('beforeend', navLinks);
        }
    });
}
