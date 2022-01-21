 
  //Global Variables
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

  const sections = document.querySelectorAll("section");
function createNavLink(section) {
    const li = document.createElement("li");
    const aElem = document.createElement("a");
    const link = `#${section.id}`;
    const name = section.getAttribute("data-nav");

    aElem.setAttribute("href", link);
    aElem.setAttribute("class", `menu__link ${section.id}`);

    aElem.textContent = name;
    li.appendChild(aElem);
    return li;
}
// build the nav
function buildNavMenu() {
  const nav = document.getElementById("navbar__list");

  for (section of sections) {
    const linkElement = createNavLink(section);
    nav.appendChild(linkElement);
  }
}

// Add class 'active' to section when near top of viewport
function makeActive() {
  for (const section of sections) {
    const box = section.getBoundingClientRect();
    // console.log(section.getAttribute("id"));
    // console.log("rect", box);

    if (box.top <= 150 && box.bottom >= 150) {
      const liName = section.getAttribute("id");
      document.querySelector(`.${liName}`).classList.add("active");
      section.classList.add("your-active-class");
    } else {
      const liName = section.getAttribute("id");
      document.querySelector(`.${liName}`).classList.remove("active");
      section.classList.remove("your-active-class");
    }
  }
}

// Build menu
document.addEventListener("DOMContentLoaded", function() {
  //Build navigation menu based on no of section
  buildNavMenuMenu();

  // Scroll to specific section on clicking the link
  const lis = document.querySelectorAll(".menu__link");

  lis.forEach(function(li) {
    li.addEventListener("click", function(event) {
      event.preventDefault();
      // Scroll to anchor ID using scrollTO event
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  // Make sections active
  document.addEventListener("scroll", function() {
    makeActive();
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
 










