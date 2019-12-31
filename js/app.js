let main;
let sections;
let header;
let nav;
let navItems;
let navLinks;
let scrollHeight;
let coordinates = [];

document.addEventListener('DOMContentLoaded', () => {
    buildInitalNav();
    navItems = document.querySelectorAll('.nav-item');
    /* Loop through navigation links and add click handlers */
    navItems.forEach(element => {
        element.addEventListener('click', function (e) {
            let currentlyActive = document.querySelector('.active');
            currentlyActive.classList.remove('active');
            let sectionId = e.target.getAttribute('href').substr(1);
            determineSelectedDiv(sectionId);
        })
    });

})
document.addEventListener('scroll', () => {
    handleScroll()
})

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
        coordinates[index] = element.getBoundingClientRect();
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
let handleScroll = function () {
    coordinates.forEach((coordinate, index) => {
        if (coordinate.top <= document.documentElement.scrollTop && coordinate.bottom >= document.documentElement.scrollTop) {
            let sectionId = `section${index+1}`;
            determineSelectedDiv(sectionId);
        }
    })
}
let determineSelectedDiv = function (sectId) {
    /* Remove 'active' classes from all sections if it exists */
    if (document.querySelector('.active')) {
        document.querySelector('.active').classList.remove('active')
    }
    let selectedSection = document.getElementById(sectId);
    /* Add 'active' class to proper section */
    selectedSection.firstElementChild.classList.add('active')
    navItems.forEach(element => {
        let compareThis = element.firstElementChild.getAttribute('href').substr(1);
        if (compareThis == selectedSection.id) {
            /* Remove 'selected' classes from all nav items */
            document.querySelector('.selected').classList.remove('selected');
            /* Add 'selected' class to the proper navigation item */
            element.firstElementChild.classList.add('selected');
        }
    })
}