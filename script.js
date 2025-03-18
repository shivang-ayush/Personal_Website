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

    // Cursor Particle Effect
    const canvas = document.getElementById("particleCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particles = [];

    document.addEventListener("mousemove", function (event) {
        particles.push({
            x: event.clientX,
            y: event.clientY,
            size: Math.random() * 5 + 1,
            life: 30
        });
    });

    function updateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p, i) => {
            p.life--;
            if (p.life <= 0) {
                particles.splice(i, 1);
            } else {
                ctx.fillStyle = "#FFD700";
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            }
        });
        requestAnimationFrame(updateParticles);
    }

    updateParticles();
});
