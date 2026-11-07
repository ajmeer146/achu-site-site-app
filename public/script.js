//! Interactive functionality for BWM homepage

document.addEventListener('DOMContentLoaded', function() {
  //! Mobile menu toggle
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.createElement('div');

  hamburger.className = 'hamburger';
  hamburger.innerHTML = '<span></span><span></span><span></span>';
  hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('open');
    if (navLinks.classList.contains('open')) {
      navLinks.style.pointerEvents = 'auto';
      navLinks.style.visibility = 'visible';
    } else {
      navLinks.style.pointerEvents = 'none';
      navLinks.style.visibility = 'hidden';
    }
  });

  if (window.innerWidth <= 768) {
    navbar.querySelector('.container').appendChild(hamburger);
  }

  //! Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  //! CTA button ripple effect
  const ctaButtons = document.querySelectorAll('.btn-primary');
  ctaButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
      
      ripple.style.background = 'rgba(255, 255, 255, 0.3)';
      ripple.style.borderRadius = '50%';
      ripple.style.position = 'absolute';
      ripple.style.transform = 'scale(0)';
      ripple.style.transition = 'transform 0.6s ease-out';
      
      btn.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  //! Feature card hover enhancement on focus
  const featureCards = document.querySelectorAll('.feature-card');
  featureCards.forEach(card => {
    card.addEventListener('focusin', function() {
      this.style.boxShadow = 'var(--shadow-card)';
    });
    card.addEventListener('focusout', function() {
      this.style.boxShadow = '';
    });
  });
});