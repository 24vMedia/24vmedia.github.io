// Wait until the page loads
window.addEventListener("load", () => {
const loader = document.querySelector(".loader");

if (loader) {
loader.classList.add("hidden");
}
});

// Back To Top Button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

if (window.scrollY > 300) {
backToTop.style.display = "block";
} else {
backToTop.style.display = "none";
}

});

backToTop?.addEventListener("click", () => {

window.scrollTo({
top: 0,
behavior: "smooth"
});

});

// Scroll Reveal Animation
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

const windowHeight = window.innerHeight;

reveals.forEach((element) => {

const elementTop = element.getBoundingClientRect().top;

if (elementTop < windowHeight - 100) {
element.classList.add("active");
}

});

}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// FAQ
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

const question = item.querySelector(".faq-question");

question.addEventListener("click", () => {

item.classList.toggle("active");

});

});