// Variables
const home = document.getElementById("top");
const nav  = document.getElementById("top-nav");
const profile = document.getElementById("profile");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");

// ==============
// Navigation
// ==============

// Jump without covering section title

const shiftWindow = function() { scrollBy(0, -100) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);
