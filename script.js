// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});

// Responsive Navigation Menu Toggle
const menuToggle = document.createElement("div");
menuToggle.className = "menu-toggle";
menuToggle.innerHTML = "&#9776;"; // Hamburger icon
document.querySelector("header").appendChild(menuToggle);

const nav = document.querySelector("nav ul");
menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

