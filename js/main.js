// #region =====  action  icon and visibile navbar and hidden navbar =====
let controls = document.querySelector(".controls");
let bars = document.querySelector(".fa-bars");
let xmark = document.querySelector(".fa-xmark");
let navbar = document.querySelector(".navbar");


controls.addEventListener('click',()=>{
bars.classList.toggle("active_navbar")
xmark.classList.toggle("active_navbar")
navbar.classList.toggle("active_menu")

})
// #endregion =====  action  icon and visibile navbar and hidden navbar ===== 



// #region ================== Scroll reveal animation ==================
const revealElements = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    } 
    // لو مش عايزها تختفي لما تطلع من الشاشة، سيب الشرط التاني فاضي
    else {
      el.classList.remove("active");
    }
  });
});
// #endregion ================== Scroll reveal animation ==================


// #region ================== explore More controls items links ==================

// Hide  and  Show cards
function showProdectGrid(num) {
  // Hide all the cards
  document.querySelectorAll(".prodect-grid").forEach(function (grid) {
    grid.classList.remove("prodect-grid_active");
  });
  // Show the required card
  document.getElementById("content" + num).classList.add("prodect-grid_active");
}


// #endregion ================== explore More controls items links ==================