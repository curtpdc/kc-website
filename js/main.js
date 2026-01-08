"use strict";
// Kayla Clark Website - Main TypeScript
// Optimized and type-safe version
// DOM loaded event
document.addEventListener('DOMContentLoaded', () => {
    // Add JS class to enable animations
    document.documentElement.classList.add('js');
    // Initialize all components
    initNavigation();
    initScrollAnimations();
    initLightbox();
    initContactForm();
    initSmoothScrolling();
    initHeroSlideshow();
    initCarousel();
});
// Navigation functionality
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    if (!navbar || !hamburger || !navMenu)
        return;
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        }
        else {
            navbar.classList.remove('scrolled');
        }
    });
    // Mobile menu toggle
    const toggleMenu = () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    };
    hamburger.addEventListener('click', toggleMenu);
    // Keyboard accessibility for hamburger
    hamburger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMenu();
        }
    });
    // Close mobile menu when clicking on links
    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        const target = e.target;
        if (!navbar.contains(target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}
// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    // Observe all elements with fade-in class
    document.querySelectorAll('.fade-in').forEach((el) => {
        observer.observe(el);
    });
    // Parallax effect for hero section (throttled with RAF for performance)
    let ticking = false;
    const parallaxScroll = () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
        ticking = false;
    };
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(parallaxScroll);
            ticking = true;
        }
    });
}
// Lightbox functionality
function initLightbox() {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
    <div class="lightbox-content">
      <span class="lightbox-close">&times;</span>
      <img src="" alt="">
    </div>
  `;
    document.body.appendChild(lightbox);
    const lightboxImg = lightbox.querySelector('img');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    // Open lightbox
    document.addEventListener('click', (e) => {
        const target = e.target;
        if (target.matches('.portfolio-item img, .work-item img') ||
            target.closest('.portfolio-item, .work-item')) {
            e.preventDefault();
            let imgSrc = '';
            let imgAlt = '';
            if (target.tagName === 'IMG') {
                const img = target;
                imgSrc = img.src;
                imgAlt = img.alt;
            }
            else {
                const container = target.closest('.portfolio-item, .work-item');
                const placeholder = container?.querySelector('.placeholder-image span');
                if (placeholder) {
                    imgAlt = placeholder.textContent || 'Portfolio Image';
                    // Create a data URL for a simple placeholder
                    imgSrc = 'data:image/svg+xml;base64,' + btoa(`
            <svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800">
              <rect width="600" height="800" fill="#f0f0f0"/>
              <circle cx="200" cy="300" r="50" fill="#ddd"/>
              <polygon points="100,600 300,400 500,600 500,700 100,700" fill="#ddd"/>
              <text x="300" y="450" text-anchor="middle" font-family="Arial" font-size="24" fill="#999">${imgAlt}</text>
            </svg>
          `);
                }
            }
            if (imgSrc) {
                lightboxImg.src = imgSrc;
                lightboxImg.alt = imgAlt || 'Portfolio Image';
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }
    });
    // Close lightbox
    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    };
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}
// Contact form functionality
function initContactForm() {
    const contactForm = document.querySelector('#contact-form');
    if (!contactForm)
        return;
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = contactForm.querySelector('.btn-primary');
        const originalText = submitBtn.textContent || 'Send Message';
        // Show loading state
        submitBtn.innerHTML = '<span class="loading"></span> Sending...';
        submitBtn.disabled = true;
        try {
            await simulateFormSubmission();
            // Success state
            submitBtn.textContent = 'Message Sent!';
            submitBtn.style.background = '#28a745';
            // Reset form
            contactForm.reset();
            // Show success message
            showNotification('Thank you! Your message has been sent successfully.', 'success');
        }
        catch (error) {
            // Error state
            submitBtn.textContent = 'Error - Try Again';
            submitBtn.style.background = '#dc3545';
            showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
        }
        // Reset button after 3 seconds
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
            submitBtn.disabled = false;
        }, 3000);
    });
}
// Simulate form submission
function simulateFormSubmission() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate 90% success rate
            if (Math.random() > 0.1) {
                resolve();
            }
            else {
                reject(new Error('Submission failed'));
            }
        }, 2000);
    });
}
// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 25px',
        borderRadius: '8px',
        color: 'white',
        fontWeight: '600',
        zIndex: '3000',
        transform: 'translateX(400px)',
        transition: 'transform 0.3s ease',
        maxWidth: '300px'
    });
    // Set background color based on type
    const colors = {
        success: '#28a745',
        error: '#dc3545',
        info: '#17a2b8'
    };
    notification.style.background = colors[type] || colors.info;
    document.body.appendChild(notification);
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            notification.remove(); // Safe removal
        }, 300);
    }, 5000);
}
// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (!href)
                return;
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}
// Portfolio filtering (for portfolio pages)
function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    filterButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            // Update active button
            filterButtons.forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');
            // Filter items
            portfolioItems.forEach((item) => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 100);
                }
                else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}
// Image lazy loading
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    images.forEach((img) => imageObserver.observe(img));
}
// Preload critical images
function preloadImages(urls) {
    urls.forEach((url) => {
        const img = new Image();
        img.src = url;
    });
}
// Initialize portfolio filter if on portfolio page
if (document.querySelector('.filter-btn')) {
    initPortfolioFilter();
}
// Initialize lazy loading if lazy images exist
if (document.querySelector('img[data-src]')) {
    initLazyLoading();
}
// GSAP animations (if GSAP is loaded)
if (typeof gsap !== 'undefined') {
    // Hero animation timeline
    const heroTl = gsap.timeline();
    heroTl.from('.hero-title', { duration: 1, y: 50, opacity: 0, ease: 'power2.out' })
        .from('.hero-subtitle', { duration: 0.8, y: 30, opacity: 0, ease: 'power2.out' }, '-=0.5')
        .from('.hero-description', { duration: 0.8, y: 30, opacity: 0, ease: 'power2.out' }, '-=0.3')
        .from('.hero-buttons', { duration: 0.8, y: 30, opacity: 0, ease: 'power2.out' }, '-=0.3');
    // Scroll-triggered animations
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.fade-in').forEach((element) => {
        gsap.from(element, {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    });
}
// Hero slideshow functionality
function initHeroSlideshow() {
    const heroBackground = document.querySelector('.hero-background.slideshow');
    if (!heroBackground)
        return;
    const images = heroBackground.querySelectorAll('img');
    if (images.length <= 1)
        return;
    let currentIndex = 0;
    setInterval(() => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }, 5000); // Change image every 5 seconds
}
// Carousel functionality
function initCarousel() {
    const carousel = document.querySelector('.work-carousel');
    const container = document.querySelector('.work-carousel-container');
    const prevBtn = container?.querySelector('.carousel-nav.prev');
    const nextBtn = container?.querySelector('.carousel-nav.next');
    const dotsContainer = document.querySelector('.carousel-dots');
    if (!carousel || !container)
        return;
    const items = carousel.querySelectorAll('.work-item');
    let currentPosition = 0;
    let itemsPerView = 3;
    // Calculate items per view based on screen size
    const updateItemsPerView = () => {
        const width = window.innerWidth;
        if (width < 768) {
            itemsPerView = 1;
        }
        else if (width < 1200) {
            itemsPerView = 2;
        }
        else {
            itemsPerView = 3;
        }
        updateCarousel();
    };
    // Create dots
    const totalSlides = Math.ceil(items.length / itemsPerView);
    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.className = 'carousel-dot';
            if (i === 0)
                dot.classList.add('active');
            dot.addEventListener('click', () => {
                currentPosition = i;
                updateCarousel();
            });
            dotsContainer.appendChild(dot);
        }
    }
    // Update carousel position
    const updateCarousel = () => {
        const itemWidth = items[0]?.offsetWidth || 0;
        const gap = 24; // 1.5rem
        const offset = currentPosition * (itemWidth + gap) * itemsPerView;
        carousel.style.transform = `translateX(-${offset}px)`;
        // Update dots
        const dots = dotsContainer?.querySelectorAll('.carousel-dot');
        dots?.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentPosition);
        });
    };
    // Navigation buttons
    prevBtn?.addEventListener('click', () => {
        if (currentPosition > 0) {
            currentPosition--;
            updateCarousel();
        }
    });
    nextBtn?.addEventListener('click', () => {
        const maxPosition = Math.ceil(items.length / itemsPerView) - 1;
        if (currentPosition < maxPosition) {
            currentPosition++;
            updateCarousel();
        }
    });
    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    });
    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                // Swiped left
                nextBtn?.click();
            }
            else {
                // Swiped right
                prevBtn?.click();
            }
        }
    });
    // Update on resize
    window.addEventListener('resize', updateItemsPerView);
    updateItemsPerView();
}
//# sourceMappingURL=main.js.map