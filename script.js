window.onload = function() {
    const logo = document.getElementById('logo-el');
    const status = document.getElementById('status-text');
    const btn = document.getElementById('enter-btn');
    const overlay = document.getElementById('intro-overlay');
    const dashboard = document.getElementById('interface');
    const navbar = document.querySelector('.navbar');

    // 1. Simulate Scan
    setTimeout(() => {
        logo.style.opacity = '1';
        logo.style.filter = 'grayscale(0%) drop-shadow(0 0 15px #8b5cf6)'; // Violet
        status.innerHTML = "IDENTITY VERIFIED";
        status.style.color = "#8b5cf6";
        
        // 2. Show Button
        setTimeout(() => {
            btn.style.opacity = '1';
            btn.style.transform = 'translateY(0)';
        }, 500);
    }, 1000);

    // 3. Click to Enter
    btn.addEventListener('click', () => {
        overlay.style.transform = 'translateY(-100%)';
        setTimeout(() => {
            dashboard.style.opacity = '1';
            dashboard.style.transform = 'scale(1)';
            navbar.style.transform = 'translateY(0)';
        }, 500);
    });
};

/* Mobile Menu Logic */
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('change', function() {
    if(this.checked) mobileMenu.classList.add('active');
    else mobileMenu.classList.remove('active');
});

function closeMenu() {
    menuBtn.checked = false;
    mobileMenu.classList.remove('active');
}

/* --- 3D HOLOGRAPHIC TILT EFFECT --- */
const interfaceContainer = document.getElementById("interface");
const panels = document.querySelectorAll(".hud-panel");

interfaceContainer.addEventListener("mousemove", (e) => {
    panels.forEach((panel) => {
        const rect = panel.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // 1. Update Glow
        panel.style.setProperty("--mouse-x", `${x}px`);
        panel.style.setProperty("--mouse-y", `${y}px`);

        // 2. Calculate Tilt
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const percentX = (x - centerX) / centerX;
        const percentY = (y - centerY) / centerY;

        const rotateX = percentY * -2; // Tilt intensity
        const rotateY = percentX * 2;

        panel.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
});

interfaceContainer.addEventListener("mouseleave", () => {
    panels.forEach((panel) => {
        panel.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
    });
});