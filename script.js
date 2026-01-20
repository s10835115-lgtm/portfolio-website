// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handling (basic)
const contactForm = document.querySelector('.contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Basic validation
        if(!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // In a real application, you would send this data to a server
        // For now, just show a success message
        alert(`Thank you ${name}! Your message has been sent. I'll get back to you soon.`);
        
        // Reset form
        this.reset();
    });
}

// Add animation to skill bars when they come into view
const skillBars = document.querySelectorAll('.skill-level');

const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });
};

// Animate skill bars when skills section is in view
const skillsSection = document.querySelector('.skills');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            animateSkillBars();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if(skillsSection) {
    observer.observe(skillsSection);
}

// Update year in footer
const currentYear = new Date().getFullYear();
const footerParagraphs = document.querySelectorAll('footer p');
if(footerParagraphs.length > 0) {
    footerParagraphs[0].innerHTML = footerParagraphs[0].innerHTML.replace('2024', currentYear);
}