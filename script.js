const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
if (window.scrollY > 50) {
header.classList.add("scrolled");
} else {
header.classList.remove("scrolled");
}
});


/* ================== menu hamburguesa ================== */
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
navLinks.classList.toggle("active");
});
navLinks.querySelectorAll("a").forEach(link => {
link.addEventListener("click", () => {
navLinks.classList.remove("active");
});
});