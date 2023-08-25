document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");

    navbar.addEventListener("mouseover", function() {
        navbar.classList.toggle("open");
    });

    window.addEventListener("mouseover", function() {
        if (window.scrollY > 100) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});
