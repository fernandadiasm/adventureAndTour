const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
hamburger.onclick = function() {
    nav.classList.toggle("active");
}