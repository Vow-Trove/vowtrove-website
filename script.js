// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});



// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature, .app-card, .stat');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Download button functionality for Google Drive links
document.querySelectorAll('.btn-download-large, .btn-download-alt').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        const originalText = this.innerHTML;
        
        // Show download confirmation
        const downloadConfirmed = confirm('Download VowTrove APK? This will open Google Drive to download the file.');
        
        if (downloadConfirmed) {
            // Show loading state
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Opening...';
            this.disabled = true;
            
            // Open Google Drive link in new tab
            window.open(this.getAttribute('href'), '_blank');
            
            // Show success message
            setTimeout(() => {
                showNotification('Google Drive opened! Download the APK file from there.', 'success');
                button.innerHTML = originalText;
                button.disabled = false;
            }, 1000);
        }
    });
});

// Hero section download button for Google Drive
document.querySelectorAll('.hero-buttons .btn-primary').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        const originalText = this.innerHTML;
        
        const downloadConfirmed = confirm('Download VowTrove APK? This will open Google Drive to download the file.');
        
        if (downloadConfirmed) {
            // Show loading state
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Opening...';
            this.disabled = true;
            
            // Open Google Drive link in new tab
            window.open(this.getAttribute('href'), '_blank');
            
            setTimeout(() => {
                showNotification('Google Drive opened! Download the APK file from there.', 'success');
                button.innerHTML = originalText;
                button.disabled = false;
            }, 1000);
        }
    });
});

// Add loading animation to page
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
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

// Add hover effects to app cards
document.querySelectorAll('.app-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Trigger counter animation when stats come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('h3');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                if (!isNaN(target)) {
                    animateCounter(stat, target);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

// Notification system
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        hideNotification(notification);
    }, 5000);
    
    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        hideNotification(notification);
    });
}

function hideNotification(notification) {
    notification.classList.remove('show');
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Modal functionality
document.addEventListener('DOMContentLoaded', () => {
    // Privacy Policy Modal
    const privacyLink = document.querySelector('a[href="#privacy"]');
    const privacyModal = document.getElementById('privacy');
    const privacyClose = privacyModal.querySelector('.modal-close');
    
    privacyLink.addEventListener('click', (e) => {
        e.preventDefault();
        privacyModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    });
    
    privacyClose.addEventListener('click', () => {
        privacyModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    });
    
    // Terms of Service Modal
    const termsLink = document.querySelector('a[href="#terms"]');
    const termsModal = document.getElementById('terms');
    const termsClose = termsModal.querySelector('.modal-close');
    
    termsLink.addEventListener('click', (e) => {
        e.preventDefault();
        termsModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    });
    
    termsClose.addEventListener('click', () => {
        termsModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === privacyModal) {
            privacyModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
        if (e.target === termsModal) {
            termsModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close modals with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            privacyModal.classList.remove('show');
            termsModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
}); 