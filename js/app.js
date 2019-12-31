// Variables
const home = document.getElementById("top");
const nav  = document.getElementById("top-nav");
const profile = document.getElementById("profile");
const about = document.getElementById("about");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");

const btnAbout = document.getElementById("more");


// ==============
// Navigation
// ==============

// Mobile Navigation

// Desktop Navigation
// Set Navigation Items to active when clicked
function setToActive() {
  const navItems = nav.getElementsByTagName("li");
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
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight + 105 > fromTop
      ) {
        li.classList.add("active");
      } else {
        li.classList.remove("active");
      }
    } else {
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight + 50 > fromTop ||
        (window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        li.classList.add("active");
      } else {
        li.classList.remove("active");
      }
    }

  });
});


// Jump without covering section title

const shiftWindow = function() { scrollBy(0, -100) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);

// ===================
// About me extension
// ===================

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
  if (e.target !== about && e.target !== more) {
    about.style.display = "none";
    more.innerHTML = "more";
  }
});

// ================================
// Skills section
// ================================

const skillsDescription = document.querySelectorAll("i span");

skills.addEventListener("click", (e) => {
  if (e.target.classList.contains("fab") || e.target.classList.contains("fas")) {
    let span = e.target.firstChild;
    span.style.visibility = "visible";
  }
});

skills.addEventListener("click", (e) => {
  if (e.target.tagName === "SPAN") {
    let span = e.target;
    span.style.visibility = "hidden";
  }
});
