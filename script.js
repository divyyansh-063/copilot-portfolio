const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const toast = document.querySelector(".toast");
const resumeButton = document.querySelector(".resume-button");

// Restore the visitor's theme choice, while respecting their OS preference initially.
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "light" || (!savedTheme && window.matchMedia("(prefers-color-scheme: light)").matches)) {
  root.classList.add("light-theme");
}

function updateThemeButton() {
  const isLight = root.classList.contains("light-theme");
  themeIcon.textContent = isLight ? "☾" : "☼";
  themeToggle.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
}

// Toggle and persist the color theme without requiring a framework or build step.
themeToggle.addEventListener("click", () => {
  root.classList.toggle("light-theme");
  localStorage.setItem("portfolio-theme", root.classList.contains("light-theme") ? "light" : "dark");
  updateThemeButton();
});

menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Keep the current section highlighted as the visitor scrolls through the page.
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-link");
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });
sections.forEach((section) => sectionObserver.observe(section));

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 4200);
}

// Avoid inventing a resume file; this gives a clear next step until a real PDF is added.
resumeButton.addEventListener("click", () => {
  showToast("Add your resume PDF as “resume.pdf” and link it from this button when ready.");
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
updateThemeButton();
