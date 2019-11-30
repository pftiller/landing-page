let main;
let sections;
let header;
let nav;
let navItems;
let navLinks;

document.addEventListener('DOMContentLoaded', () => {
    buildInitalNav();
    navItems = document.querySelector('.nav-item');
    navLinks = navItems.querySelector('a');
    navLinks.addEventListener('click', function(e){
        for (var i = 0; i < navItems.length; i++) {
            navLinks.classList.remove('active');
         }
            e.target.classList.add('active');

    })
});

/**
 * Define Global Variables
 * 
*/

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
let buildInitalNav = function () {
    let navText;
    let navId;
    let navLinks;
    let navbarList = document.getElementById('navbar__list');
    header = document.querySelector('header');
    nav = header.querySelector('nav');
    main = document.querySelector('main');
    sections = main.querySelectorAll('section');
    console.log(sections);
    sections.forEach(element => {
        navText = element.dataset.nav;
        navId = element.id;
            navLinks =`<li class="nav-item"><a href=#${navId}>${navText}</a></li>`
            navbarList.insertAdjacentHTML('beforeend', navLinks);   
    });
    console.log(navbarList);
}
// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

