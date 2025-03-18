document.addEventListener("DOMContentLoaded", function () {
    // Custom Cursor
    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    document.querySelectorAll("a, button, .cta").forEach((elem) => {
        elem.addEventListener("mouseover", () => cursor.classList.add("cursor-hover"));
        elem.addEventListener("mouseleave", () => cursor.classList.remove("cursor-hover"));
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(link => {
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

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;
    
    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        darkModeToggle.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });

    // Typing Animation
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
