

let menuBtn = document.getElementById("menu-btn");
let navLinks = document.getElementById("navlinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
