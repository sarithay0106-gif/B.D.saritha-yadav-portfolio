const typingElement = document.getElementById("typing");
const words = [
  "B.Com Computer Applications Student",
  "Business & Technology Enthusiast",
  "AI & Data Analytics Learner"
];
let wordIndex = 0, charIndex = 0, deleting = false;

function typeEffect() {
  const word = words[wordIndex];
  typingElement.textContent = deleting ? word.substring(0, charIndex--) : word.substring(0, charIndex++);
  let delay = deleting ? 45 : 85;
  if (!deleting && charIndex > word.length) { delay = 1300; deleting = true; }
  else if (deleting && charIndex < 0) { deleting = false; wordIndex = (wordIndex + 1) % words.length; charIndex = 0; delay = 350; }
  setTimeout(typeEffect, delay);
}
typeEffect();

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
  menuToggle.textContent = open ? "✕" : "☰";
});
document.querySelectorAll(".nav-links a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.textContent = "☰";
  menuToggle.setAttribute("aria-expanded", "false");
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
  topBtn.classList.toggle("show", window.scrollY > 500);
});
topBtn.addEventListener("click", () => window.scrollTo({top: 0, behavior: "smooth"}));

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll("[data-demo]").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Pattern Master is currently a project showcase. Add your live game URL here when it is published.");
  });
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const body = `Hello Saritha,%0D%0A%0D%0AName: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0A%0D%0A${encodeURIComponent(message)}`;
  window.location.href = `mailto:sarithay0106@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
});
