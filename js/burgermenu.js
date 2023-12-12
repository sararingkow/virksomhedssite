const navToggleBtn = document.getElementById("nav_toggle_btn");
const header = document.getElementById("header");

navToggleBtn.addEventListener("click", toggleNavBar);

function toggleNavBar() {
  navToggleBtn.classList.toggle("active");
  header.classList.toggle("active");
}
