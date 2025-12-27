// Kayla Clark Website - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Add JS class to enable animations
    document.documentElement.classList.add('js');
    
    // Initialize all components
    initNavigation();
    initScrollAnimations();
    initLightbox();
    initContactForm();
    initSmoothScrolling();
    initVideoBackground();
});

// Navigation functionality
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target)) {
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
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in class
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
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
        if (e.target.matches('.portfolio-item img, .work-item img') || 
            e.target.closest('.portfolio-item, .work-item')) {
            e.preventDefault();
            
            // Handle both img elements and placeholder divs
            let imgSrc, imgAlt;
            if (e.target.tagName === 'IMG') {
                imgSrc = e.target.src;
                imgAlt = e.target.alt;
            } else {
                // For placeholder images, create a simple placeholder
                const container = e.target.closest('.portfolio-item, .work-item');
                const placeholder = container.querySelector('.placeholder-image span');
                if (placeholder) {
                    imgAlt = placeholder.textContent;
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
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

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
    if (!contactForm) return;

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('.btn-primary');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.innerHTML = '<span class="loading"></span> Sending...';
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual form handling)
        try {
            await simulateFormSubmission();
            
            // Success state
            submitBtn.textContent = 'Message Sent!';
            submitBtn.style.background = '#28a745';
            
            // Reset form
            contactForm.reset();
            
            // Show success message
            showNotification('Thank you! Your message has been sent successfully.', 'success');
            
        } catch (error) {
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
            } else {
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
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
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

// Video background functionality
function initVideoBackground() {
    const videoContainer = document.querySelector('.video-background');
    if (!videoContainer) return;

    // Create video element if it doesn't exist
    let video = videoContainer.querySelector('video');
    if (!video) {
        video = document.createElement('video');
        video.setAttribute('autoplay', '');
        video.setAttribute('muted', '');
        video.setAttribute('loop', '');
        video.setAttribute('playsinline', '');
        videoContainer.appendChild(video);
    }

    // Handle video loading and playback
    video.addEventListener('loadeddata', () => {
        video.play().catch(e => {
            console.log('Video autoplay failed:', e);
        });
    });

    // Pause video when not in viewport (performance optimization)
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play().catch(e => console.log('Video play failed:', e));
            } else {
                video.pause();
            }
        });
    });

    videoObserver.observe(videoContainer);
}

// Portfolio filtering (for portfolio pages)
function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            
            // Update active button
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter items
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 100);
                } else {
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
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Performance optimizations
window.addEventListener('scroll', throttle(() => {
    // Throttled scroll events
}, 16)); // ~60fps

// Preload critical images
function preloadImages(urls) {
    urls.forEach(url => {
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
    
    gsap.utils.toArray('.fade-in').forEach(element => {
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