/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sectionsSelector = document.getElementsByTagName('section');
const navbarList = document.getElementById('navbar__list');
const sectionsData = [];
const goToTop = document.getElementById('go-to-top');

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

// get sections data
for (i = 0; i < sectionsSelector.length; i++) {
    const dataItem = sectionsSelector.item(i).dataset.nav;
    sectionsData.push(dataItem);
}

// go to top
const scrollToTop = () => {
    goToTop.addEventListener('click', () => {
        window.scrollTo({top: 0});
    });
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const buildNavbar = () => {
    const listItems = sectionsData.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a class="menu__link" href="#section${sectionsData.indexOf(item) + 1}">${item}</a>`;
        navbarList.appendChild(listItem);
    })
}


// Add class 'active' to section when near top of viewport

const toggleActiveClass = () => {document.addEventListener("scroll", () => {
    for (section of sectionsSelector) {
        let location = section.getBoundingClientRect();
        if (location.top >= 0 && location.top < 720) {
            section.classList.add('active-section');
        } else {
            section.classList.remove('active-section');
        }
    }
})}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNavbar();

// Scroll to section on link click

// Set sections as active
toggleActiveClass();

// scroll page to top
scrollToTop();