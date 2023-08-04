// Toggle Class Aktiv
const navbarNav = document.querySelector(".navbar-nav");

// Toggle ketika humberger menu di klik
document.querySelector("#humberger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// klik di luar sidebar untuk menghilangkan nav
const humberger = document.querySelector("#humberger-menu");

document.addEventListener("click", function (e) {
  if (!humberger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
