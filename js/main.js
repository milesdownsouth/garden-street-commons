/**
 * Garden Street Commons - Main JavaScript
 * Handles interactions and dynamic behavior with GSAP animations
 */

document.addEventListener('DOMContentLoaded', function() {

    // GSAP Sequential Animations
    // Create animation timeline (elements start hidden via CSS)
    const timeline = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } });

    timeline
        .to('.main-heading', { opacity: 1, y: 0 })
        .to('.subheading', { opacity: 1, y: 0 }, '+=0.2')
        .to('.coming-soon-badge', { opacity: 1, y: 0 }, '+=0.2')
        .to('.cta-button', { opacity: 1, y: 0 }, '+=0.2');

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
    }

    // Instagram icon hover animation
    const instagramIcon = document.querySelector('.instagram-icon');
    if (instagramIcon) {
        instagramIcon.addEventListener('mouseenter', function() {
            gsap.to(instagramIcon, { scale: 1.1, duration: 0.3, ease: 'power2.out' });
        });

        instagramIcon.addEventListener('mouseleave', function() {
            gsap.to(instagramIcon, { scale: 1, duration: 0.3, ease: 'power2.out' });
        });
    }

    // Logo hover effect
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('mouseenter', function() {
            gsap.to(logo, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
        });

        logo.addEventListener('mouseleave', function() {
            gsap.to(logo, { scale: 1, duration: 0.3, ease: 'power2.out' });
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
