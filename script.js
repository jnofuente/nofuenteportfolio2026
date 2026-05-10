// Configuration
const textToType = "Former Content Moderator | Support Representative";
let index = 0;

// Typewriter Function
function typeEffect() {
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement && index < textToType.length) {
        typewriterElement.textContent += textToType.charAt(index);
        index++;
        setTimeout(typeEffect, 70);
    }
}

// Scroll Reveal Function
function revealSections() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            reveal.classList.add("active");
        }
    });
}

// Master Initialization
document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // 2. Start Animations
    typeEffect();
    revealSections();

    // 3. Form Handling
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Message sent! (Note: This is a placeholder alert).");
        });
    }
});

// Scroll Event
window.addEventListener("scroll", revealSections);
document.addEventListener("DOMContentLoaded", () => {
    // ... your existing code (typewriter, icons, etc.)

    const burgerBtn = document.getElementById('burger-btn');
    const closeBtn = document.getElementById('close-menu');
    const sideMenu = document.getElementById('side-menu');
    const overlay = document.getElementById('menu-overlay');
    const body = document.body;

    function toggleMenu() {
        sideMenu.classList.toggle('open');
        overlay.classList.toggle('hidden');
        // Small timeout to allow 'hidden' to be removed before changing opacity
        setTimeout(() => overlay.classList.toggle('show'), 10);
        body.classList.toggle('menu-open');
    }

    burgerBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // Close menu when clicking a navigation link inside it (if you add links later)
    const sideLinks = sideMenu.querySelectorAll('a');
    sideLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (sideMenu.classList.contains('open')) toggleMenu();
        });
    });
});
