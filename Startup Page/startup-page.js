let navBar = document.getElementById('navBar');
let threeLineLink = document.getElementById("threeLineLink");
let crossLink = document.getElementById("crossLink");
let navLinks = document.getElementById("navLinks");

threeLineLink.addEventListener("click", function() {
    threeLineLink.classList.toggle("threeLineLink");
    crossLink.classList.toggle("crosslink");
    navLinks.classList.toggle("navlinks");
});

crossLink.addEventListener("click", function() {
    threeLineLink.classList.toggle("threeLineLink");
    crossLink.classList.toggle("crosslink");
    navLinks.classList.toggle("navlinks");
});
