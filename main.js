
let menuBtn = document.getElementById("menuBtn");
let navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
});

let links = document.querySelectorAll(".navbar a");

links.forEach(function (link) {

    link.addEventListener("click", function () {
        navbar.classList.remove("active");
    });

});