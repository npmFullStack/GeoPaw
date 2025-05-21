document.addEventListener('DOMContentLoaded', function() {
    // Video sound control
    const video = document.getElementById('adVideo');
    const soundBtn = document.getElementById('soundBtn');
    
    video.muted = true; // Start muted to allow autoplay
    
    soundBtn.addEventListener('click', function() {
        if (video.muted) {
            video.muted = false;
            soundBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        } else {
            video.muted = true;
            soundBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        }
    });
    
    // Burger menu functionality
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('show');
        hamburger.innerHTML = navMenu.classList.contains('show') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('#navMenu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // Try to unmute after user interaction
    document.addEventListener('click', function() {
        if (video.muted) {
            video.play().catch(error => {
                console.log('Autoplay with sound was prevented:', error);
            });
        }
    }, { once: true });
    
    // Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
});