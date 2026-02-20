/* =========================================
   MOBILE MENU LOGIC
   Handles opening/closing of the mobile nav
========================================== */

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

// 1. Toggle Menu Open/Close
menuBtn.addEventListener('change', function() {
    if(this.checked) {
        mobileMenu.classList.add('active');
        // Prevent scrolling background when menu is open
        document.body.style.overflow = 'hidden'; 
    } else {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// 2. Close menu automatically when a link is clicked
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.checked = false;
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});
