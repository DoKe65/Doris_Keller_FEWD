// Variables
const home = document.getElementById("top");
const nav  = document.getElementById("top-nav");
const mobileNav = document.getElementById("hamburger");
const navItems = nav.getElementsByTagName("li");
const profile = document.getElementById("profile");
const about = document.getElementById("about");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");

const moreMob = document.getElementById("moreMobile");
const more = document.getElementById("more");


// ==============
// Navigation
// ==============

// Mobile Navigation

home.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-bars")) {
    if (nav.style.display === "flex") {
      nav.style.display = "none";
    } else {
      nav.style.display = "flex";
    }
  }
});

// Desktop Navigation
// Set Navigation Items to active when clicked
function setToActive() {
  // const navItems = nav.getElementsByTagName("li");
  for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", function() {
      let current = nav.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].classList.remove("active");
      }
      this.classList += "active";
    });
  }
}

setToActive();

// Set to active on scroll
// Thanks to https://css-tricks.com/sticky-smooth-active-nav/, Chris Coyler

let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("body section");

let lastId;
let cur = [];

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY + 100;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    let li = link.parentNode;
    let sectionId = section.getAttribute("id");

    if (sectionId !== "contact") {
      if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
        li.classList.add("active");
      } else {
        li.classList.remove("active");
      }
    } else {
      if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight + 50 > fromTop || (window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        li.classList.add("active");
        } else {
        li.classList.remove("active");
      }
    }

  });
});

// Jump without covering section title

const shiftWindow = function() {
  scrollBy(0, -100);
};
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);

// ===================
// About me extension
// ===================

// Mobile
profile.addEventListener("touchstart", (e) => {

  if (e.target === moreMob) {

    if (about.style.display === "none") {
      about.style.display = "block";
      moreMob.innerHTML = "less";
    } else {
      about.style.display = "none";
      moreMob.innerHTML = "more";
    }
  }
});

// Desktop

more.addEventListener("click", (e) => {
  if (e.target === more) {
    if (about.style.display !== "none") {
      about.style.display = "none";
      more.innerHTML = "more";
      window.scrollTo(0, 0);
    } else {
      about.style.display = "inline-block";
      more.innerHTML = "less";
    }
  }
});

document.addEventListener("click", (e) => {
  if (e.target !== about && e.target !== more && e.target !== moreMob) {
    about.style.display = "none";
    more.innerHTML = "more";
  }
});

// ================================
// Skills section
// ================================

// Show skills detailed description on click on skill icon

skills.addEventListener("click", (e) => {
  if (e.target.classList.contains("fab") || e.target.classList.contains("fas")) {
    let span = e.target.firstChild;
    if (span.style.visibility  === "visible") {
      span.style.visibility = "hidden";
    } else {
      span.style.visibility = "visible";
    }
  }
});

// Hide skills detailed description on click outside skill icon
document.addEventListener("click", (e) => {
    let skillsDetails = document.getElementsByClassName("skill");
    Array.prototype.forEach.call(skillsDetails, skill => {
      if (skill.style.visibility === "visible") {
        if (!e.target.classList.contains("fab") && !e.target.classList.contains("fas")) {
        skill.style.visibility = "hidden";
      }
    }
  });
});

// =====================
// Project section
// =====================

// Set the <details> tag to open by clicking on the project image

projects.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    let eFigure = e.target.parentNode;
    let currentDetails = eFigure.getElementsByTagName("details");
      currentDetails[0].open = true;

      // Close it by clicking onto the details text
      eFigure.addEventListener("click", (e) => {
        currentDetails[0].open = false;
      });
  }
});
