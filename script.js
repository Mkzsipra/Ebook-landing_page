

let menuBtn = document.getElementById("menu-btn");
let navLinks = document.getElementById("navlinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

let li = document.querySelectorAll('li');
li.forEach((li)=>{
  li.addEventListener('click', ()=>{
    // console.log("yes");
    navLinks.classList.toggle("active");
  })
})
