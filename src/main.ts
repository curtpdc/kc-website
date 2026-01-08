// Kayla Clark Website - Main TypeScript
// Optimized and type-safe version

// Type definitions
interface NotificationType {
  success: string;
  error: string;
  info: string;
}

interface IntersectionObserverConfig {
  threshold: number;
  rootMargin: string;
}

// GSAP type declarations
declare const gsap: any;
declare const ScrollTrigger: any;

// DOM loaded event
document.addEventListener('DOMContentLoaded', (): void => {
  // Add JS class to enable animations
  document.documentElement.classList.add('js');
  
  // Initialize all components
  initNavigation();
  initScrollAnimations();
  initLightbox();
  initContactForm();
  initSmoothScrolling();
});

// Navigation functionality
function initNavigation(): void {
  const navbar = document.querySelector('.navbar') as HTMLElement | null;
  const hamburger = document.querySelector('.hamburger') as HTMLElement | null;
  const navMenu = document.querySelector('.nav-menu') as HTMLElement | null;
  const navLinks = document.querySelectorAll('.nav-link') as NodeListOf<HTMLAnchorElement>;

  if (!navbar || !hamburger || !navMenu) return;

  // Navbar scroll effect
  window.addEventListener('scroll', (): void => {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  const toggleMenu = (): void => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  };

  hamburger.addEventListener('click', toggleMenu);
  
  // Keyboard accessibility for hamburger
  hamburger.addEventListener('keydown', (e: KeyboardEvent): void => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMenu();
    }
  });

  // Close mobile menu when clicking on links
  navLinks.forEach((link: HTMLAnchorElement): void => {
    link.addEventListener('click', (): void => {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e: MouseEvent): void => {
    const target = e.target as Node;
    if (!navbar.contains(target)) {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    }
  });
}

// Scroll animations
function initScrollAnimations(): void {
  const observerOptions: IntersectionObserverConfig = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]): void => {
    entries.forEach((entry: IntersectionObserverEntry): void => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all elements with fade-in class
  document.querySelectorAll('.fade-in').forEach((el: Element): void => {
    observer.observe(el);
  });

  // Parallax effect for hero section (throttled with RAF for performance)
  let ticking = false;
  const parallaxScroll = (): void => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero') as HTMLElement | null;
    if (hero) {
      const rate = scrolled * -0.5;
      hero.style.transform = `translateY(${rate}px)`;
    }
    ticking = false;
  };

  window.addEventListener('scroll', (): void => {
    if (!ticking) {
      window.requestAnimationFrame(parallaxScroll);
      ticking = true;
    }
  });
}

// Lightbox functionality
function initLightbox(): void {
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <span class="lightbox-close">&times;</span>
      <img src="" alt="">
    </div>
  `;
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector('img') as HTMLImageElement;
  const closeBtn = lightbox.querySelector('.lightbox-close') as HTMLElement;

  // Open lightbox
  document.addEventListener('click', (e: MouseEvent): void => {
    const target = e.target as HTMLElement;
    
    if (target.matches('.portfolio-item img, .work-item img') || 
        target.closest('.portfolio-item, .work-item')) {
      e.preventDefault();
      
      let imgSrc = '';
      let imgAlt = '';
      
      if (target.tagName === 'IMG') {
        const img = target as HTMLImageElement;
        imgSrc = img.src;
        imgAlt = img.alt;
      } else {
        const container = target.closest('.portfolio-item, .work-item') as HTMLElement;
        const placeholder = container?.querySelector('.placeholder-image span') as HTMLElement | null;
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
  const closeLightbox = (): void => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e: MouseEvent): void => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Close with Escape key
  document.addEventListener('keydown', (e: KeyboardEvent): void => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
}

// Contact form functionality
function initContactForm(): void {
  const contactForm = document.querySelector('#contact-form') as HTMLFormElement | null;
  if (!contactForm) return;

  contactForm.addEventListener('submit', async (e: Event): Promise<void> => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('.btn-primary') as HTMLButtonElement;
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
      
    } catch (error) {
      // Error state
      submitBtn.textContent = 'Error - Try Again';
      submitBtn.style.background = '#dc3545';
      showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
    }

    // Reset button after 3 seconds
    setTimeout((): void => {
      submitBtn.textContent = originalText;
      submitBtn.style.background = '';
      submitBtn.disabled = false;
    }, 3000);
  });
}

// Simulate form submission
function simulateFormSubmission(): Promise<void> {
  return new Promise((resolve, reject): void => {
    setTimeout((): void => {
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
function showNotification(message: string, type: keyof NotificationType = 'info'): void {
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
  const colors: NotificationType = {
    success: '#28a745',
    error: '#dc3545',
    info: '#17a2b8'
  };
  notification.style.background = colors[type] || colors.info;

  document.body.appendChild(notification);

  // Animate in
  setTimeout((): void => {
    notification.style.transform = 'translateX(0)';
  }, 100);

  // Remove after 5 seconds
  setTimeout((): void => {
    notification.style.transform = 'translateX(400px)';
    setTimeout((): void => {
      notification.remove(); // Safe removal
    }, 300);
  }, 5000);
}

// Smooth scrolling for anchor links
function initSmoothScrolling(): void {
  document.querySelectorAll('a[href^="#"]').forEach((anchor: Element): void => {
    anchor.addEventListener('click', function(this: HTMLAnchorElement, e: Event): void {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (!href) return;
      
      const target = document.querySelector(href) as HTMLElement | null;
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
function initPortfolioFilter(): void {
  const filterButtons = document.querySelectorAll('.filter-btn') as NodeListOf<HTMLButtonElement>;
  const portfolioItems = document.querySelectorAll('.portfolio-item') as NodeListOf<HTMLElement>;

  filterButtons.forEach((btn: HTMLButtonElement): void => {
    btn.addEventListener('click', (): void => {
      const filter = btn.dataset.filter;
      
      // Update active button
      filterButtons.forEach((b: HTMLButtonElement): void => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter items
      portfolioItems.forEach((item: HTMLElement): void => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = 'block';
          setTimeout((): void => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 100);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.8)';
          setTimeout((): void => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

// Image lazy loading
function initLazyLoading(): void {
  const images = document.querySelectorAll('img[data-src]') as NodeListOf<HTMLImageElement>;
  
  const imageObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]): void => {
    entries.forEach((entry: IntersectionObserverEntry): void => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        if (img.dataset.src) {
          img.src = img.dataset.src;
        }
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img: HTMLImageElement): void => imageObserver.observe(img));
}

// Preload critical images
function preloadImages(urls: string[]): void {
  urls.forEach((url: string): void => {
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
  
  gsap.utils.toArray('.fade-in').forEach((element: any): void => {
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
