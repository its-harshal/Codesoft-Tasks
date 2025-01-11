// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    alert('Message sent! (This is a demo)');
    this.reset();
});

// Resume download handler
document.getElementById('downloadResume').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Resume download started! (This is a demo)');
});

// Animate skill bars on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.getAttribute('data-width');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.progress').forEach(bar => {
    observer.observe(bar);
});