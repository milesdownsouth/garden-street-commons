/**
 * Garden Street Commons - Main JavaScript
 * Handles interactions and dynamic behavior
 */

document.addEventListener('DOMContentLoaded', function() {

    // Email CTA Button Handler
    const ctaButton = document.querySelector('.cta-button');

    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();

            // Email configuration
            const email = 'info@gardenstreetcommons.com';
            const subject = 'Information Request - Garden Street Commons';
            const body = 'Hello,%0D%0A%0D%0AI would like to receive more information about Garden Street Commons.%0D%0A%0D%0AThank you!';

            // Create mailto link
            const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

            // Open email client
            window.location.href = mailtoLink;
        });

        // Add subtle animation on button hover
        ctaButton.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });

        ctaButton.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    }

    // Add fade-in animation on page load
    const container = document.querySelector('.container');
    if (container) {
        container.style.opacity = '0';
        container.style.transform = 'translateY(20px)';
        container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

        setTimeout(function() {
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';
        }, 100);
    }

    // Instagram icon animation
    const instagramIcon = document.querySelector('.instagram-icon');
    if (instagramIcon) {
        instagramIcon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
        });

        instagramIcon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    }

    // Badge pulse animation on hover
    const badge = document.querySelector('.coming-soon-badge');
    if (badge) {
        badge.addEventListener('mouseenter', function() {
            this.style.animation = 'pulse 0.5s ease';
        });

        badge.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    }

    // Logo hover effect
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(-2deg)';
        });

        logo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    }

    // Add smooth scroll for any internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Log page load for analytics (placeholder)
    console.log('Garden Street Commons - Landing Page Loaded');
    console.log('Coming Soon: June 2026');
});

// Add pulse animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
    }
`;
document.head.appendChild(style);
