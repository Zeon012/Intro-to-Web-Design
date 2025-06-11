// Toggle navigation menu visibility
function toggleMenu() {
    const nav = document.querySelector('.nav-menu');
    nav.classList.toggle('active');
}
document.querySelector('.hamburger').addEventListener('click', toggleMenu);

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Filter projects by category
function filterProjects(category) {
    document.querySelectorAll('.project').forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = '';
        } else {
            project.style.display = 'none';
        }
    });
}
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        filterProjects(this.dataset.category);
    });
});

// Lightbox effect for project images
function openLightbox(imgSrc) {
    const modal = document.querySelector('.lightbox-modal');
    const modalImg = modal.querySelector('img');
    modalImg.src = imgSrc;
    modal.classList.add('show');
    modal.style.display = 'flex';
}
document.querySelectorAll('article img').forEach(img => {
    img.addEventListener('click', function() {
        openLightbox(this.src);
    });
});
document.querySelector('.lightbox-modal .close').addEventListener('click', function() {
    const modal = document.querySelector('.lightbox-modal');
    modal.classList.remove('show');
    modal.style.display = 'none';
});

// Contact form validation
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let valid = true;
        const name = contactForm.querySelector('[name="name"]');
        const email = contactForm.querySelector('[name="email"]');
        const message = contactForm.querySelector('[name="message"]');
        // Simple validation
        if (!name.value.trim()) {
            valid = false;
            name.classList.add('error');
        } else {
            name.classList.remove('error');
        }
        if (!email.value.match(/^[^@]+@[^@]+\.[^@]+$/)) {
            valid = false;
            email.classList.add('error');
        } else {
            email.classList.remove('error');
        }
        if (!message.value.trim()) {
            valid = false;
            message.classList.add('error');
        } else {
            message.classList.remove('error');
        }
        if (valid) {
            // Show success feedback (customize as needed)
            alert('Thank you for your message!');
            contactForm.reset();
        }
    });

    // Real-time feedback
    contactForm.querySelectorAll('input, textarea').forEach(field => {
        field.addEventListener('input', function() {
            if (this.value.trim()) {
                this.classList.remove('error');
            }
        });
    });
}

// Debugging: Add console logs as needed
// Example: console.log('Script loaded');