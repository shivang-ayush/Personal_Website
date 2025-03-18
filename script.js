document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    // Smooth scrolling
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: "smooth"
            });
        });
    });

    // Dark Mode Toggle with Local Storage
    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        localStorage.setItem("dark-mode", body.classList.contains("dark-mode"));
        darkModeToggle.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });

    // Load Dark Mode Preference
    if (localStorage.getItem("dark-mode") === "true") {
        body.classList.add("dark-mode");
        darkModeToggle.textContent = "☀️";
    }

    // Fade-in effect
    const fadeElements = document.querySelectorAll(".fade-in");
    function fadeInOnScroll() {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();

    // Typing animation
    const text = "Shivang Ayush";
    let index = 0;
    function typeEffect() {
        if (index < text.length) {
            document.querySelector(".typing").textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 150);
        }
    }
    document.querySelector(".typing").textContent = "";
    typeEffect();
});
