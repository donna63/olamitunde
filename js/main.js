// js/main.js

const toggleBtn = document.getElementById("toggleDark");
const html = document.documentElement;

toggleBtn.addEventListener("click", () => {
  html.classList.toggle("dark");
  localStorage.theme = html.classList.contains("dark") ? "dark" : "light";
});

// Apply saved theme on load
if (localStorage.theme === "dark") {
  html.classList.add("dark");
}
