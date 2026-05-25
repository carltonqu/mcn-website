// MCN Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80; // Account for fixed navbar
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
        } else {
            navbar.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });

    // Contact form handling
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Show success message (placeholder)
            alert('Thank you for your message! We\'ll get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }

    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.about-card, .service-item, .creator-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state for animated elements
    const animatedElements = document.querySelectorAll('.about-card, .service-item, .creator-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Run animation on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);

    // Button click handlers for CTAs without specific actions
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary, .cta-button');
    
    ctaButtons.forEach(button => {
        if (!button.closest('form') && !button.closest('a')) {
            button.addEventListener('click', function() {
                // Scroll to contact section for generic CTAs
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                    const offset = 80;
                    const targetPosition = contactSection.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        }
    });

    // Hero Grid Line Effect on Hover
    const hero = document.querySelector('.hero');
    const heroGridLines = document.querySelector('.hero-grid-lines');
    
    if (hero && heroGridLines) {
        // Create horizontal and vertical lines
        const gridSize = 60; // matches CSS background-size
        const heroRect = hero.getBoundingClientRect();
        const numHorizontal = Math.ceil(heroRect.height / gridSize);
        const numVertical = Math.ceil(heroRect.width / gridSize);
        
        // Create horizontal lines
        for (let i = 0; i <= numHorizontal; i++) {
            const line = document.createElement('div');
            line.className = 'grid-line-h';
            line.style.top = (i * gridSize) + 'px';
            heroGridLines.appendChild(line);
        }
        
        // Create vertical lines
        for (let i = 0; i <= numVertical; i++) {
            const line = document.createElement('div');
            line.className = 'grid-line-v';
            line.style.left = (i * gridSize) + 'px';
            heroGridLines.appendChild(line);
        }
        
        // Mouse move effect - highlight lines near cursor
        hero.addEventListener('mousemove', function(e) {
            const rect = hero.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const linesH = heroGridLines.querySelectorAll('.grid-line-h');
            const linesV = heroGridLines.querySelectorAll('.grid-line-v');
            
            linesH.forEach(line => {
                const lineY = parseInt(line.style.top);
                const distance = Math.abs(y - lineY);
                if (distance < 100) {
                    const opacity = 1 - (distance / 100);
                    line.style.background = `rgba(212, 168, 83, ${opacity * 0.4})`;
                    line.style.boxShadow = `0 0 ${opacity * 20}px rgba(212, 168, 83, ${opacity * 0.6})`;
                } else {
                    line.style.background = 'transparent';
                    line.style.boxShadow = 'none';
                }
            });
            
            linesV.forEach(line => {
                const lineX = parseInt(line.style.left);
                const distance = Math.abs(x - lineX);
                if (distance < 100) {
                    const opacity = 1 - (distance / 100);
                    line.style.background = `rgba(212, 168, 83, ${opacity * 0.4})`;
                    line.style.boxShadow = `0 0 ${opacity * 20}px rgba(212, 168, 83, ${opacity * 0.6})`;
                } else {
                    line.style.background = 'transparent';
                    line.style.boxShadow = 'none';
                }
            });
        });
        
        // Reset on mouse leave
        hero.addEventListener('mouseleave', function() {
            const lines = heroGridLines.querySelectorAll('.grid-line-h, .grid-line-v');
            lines.forEach(line => {
                line.style.background = 'transparent';
                line.style.boxShadow = 'none';
            });
        });
    }

    // Challenges Section Grid Line Effect
    const challengesHero = document.querySelector('.challenges-hero');
    const challengesGridLines = document.querySelector('.challenges-grid-lines');
    
    if (challengesHero && challengesGridLines) {
        const gridSize = 40;
        const heroRect = challengesHero.getBoundingClientRect();
        const numHorizontal = Math.ceil(heroRect.height / gridSize);
        const numVertical = Math.ceil(heroRect.width / gridSize);
        
        for (let i = 0; i <= numHorizontal; i++) {
            const line = document.createElement('div');
            line.className = 'challenges-line-h';
            line.style.top = (i * gridSize) + 'px';
            challengesGridLines.appendChild(line);
        }
        
        for (let i = 0; i <= numVertical; i++) {
            const line = document.createElement('div');
            line.className = 'challenges-line-v';
            line.style.left = (i * gridSize) + 'px';
            challengesGridLines.appendChild(line);
        }
        
        challengesHero.addEventListener('mousemove', function(e) {
            const rect = challengesHero.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const linesH = challengesGridLines.querySelectorAll('.challenges-line-h');
            const linesV = challengesGridLines.querySelectorAll('.challenges-line-v');
            
            linesH.forEach(line => {
                const lineY = parseInt(line.style.top);
                const distance = Math.abs(y - lineY);
                if (distance < 80) {
                    const opacity = 1 - (distance / 80);
                    line.style.background = `rgba(212, 168, 83, ${opacity * 0.5})`;
                    line.style.boxShadow = `0 0 ${opacity * 15}px rgba(212, 168, 83, ${opacity * 0.8})`;
                } else {
                    line.style.background = 'transparent';
                    line.style.boxShadow = 'none';
                }
            });
            
            linesV.forEach(line => {
                const lineX = parseInt(line.style.left);
                const distance = Math.abs(x - lineX);
                if (distance < 80) {
                    const opacity = 1 - (distance / 80);
                    line.style.background = `rgba(212, 168, 83, ${opacity * 0.5})`;
                    line.style.boxShadow = `0 0 ${opacity * 15}px rgba(212, 168, 83, ${opacity * 0.8})`;
                } else {
                    line.style.background = 'transparent';
                    line.style.boxShadow = 'none';
                }
            });
        });
        
        challengesHero.addEventListener('mouseleave', function() {
            const lines = challengesGridLines.querySelectorAll('.challenges-line-h, .challenges-line-v');
            lines.forEach(line => {
                line.style.background = 'transparent';
                line.style.boxShadow = 'none';
            });
        });
    }
});
