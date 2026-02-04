
// Mobile menu toggle
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

animation: {
  slideUp: 'slideUp 0.8s ease-out forwards'
}

