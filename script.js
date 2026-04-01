/* ============================================
   ADITYA PORTFOLIO — script.js
   PREMIUM TECHY INTERACTIONS
   ============================================ */

// ===== CUSTOM CURSOR =====
(function() {
  const glow = document.getElementById('cursorGlow');

  // Create cursor dot and ring
  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  document.body.appendChild(dot);

  const ring = document.createElement('div');
  ring.className = 'cursor-ring';
  document.body.appendChild(ring);

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Dot follows instantly
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';

    // Glow follows instantly
    if (glow) {
      glow.style.left = mouseX + 'px';
      glow.style.top = mouseY + 'px';
    }
  });

  // Ring follows with smooth delay
  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Scale ring on hover over interactive elements
  document.querySelectorAll('a, button, .skill-card, .project-card, .service-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring.style.width = '50px';
      ring.style.height = '50px';
      ring.style.borderColor = 'rgba(199,120,221,0.6)';
      dot.style.transform = 'translate(-50%, -50%) scale(1.5)';
    });
    el.addEventListener('mouseleave', () => {
      ring.style.width = '36px';
      ring.style.height = '36px';
      ring.style.borderColor = 'rgba(199,120,221,0.4)';
      dot.style.transform = 'translate(-50%, -50%) scale(1)';
    });
  });

  // Hide cursor when leaving window
  document.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    ring.style.opacity = '0';
    if (glow) glow.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    dot.style.opacity = '1';
    ring.style.opacity = '1';
    if (glow) glow.style.opacity = '1';
  });
})();


// ===== SCROLL PROGRESS BAR =====
const scrollProgress = document.getElementById('scrollProgress');
function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  if (scrollProgress) {
    scrollProgress.style.width = progress + '%';
  }
}
window.addEventListener('scroll', updateScrollProgress);


// ===== BACK TO TOP BUTTON =====
const backToTop = document.getElementById('backToTop');
function toggleBackToTop() {
  if (backToTop) {
    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }
}
window.addEventListener('scroll', toggleBackToTop);
if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


// ===== NAVBAR =====
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('nav-open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('nav-open');
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
});


// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function setActiveLink() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', setActiveLink);
setActiveLink();


// ===== FADE-IN ON SCROLL =====
const fadeEls = document.querySelectorAll(
  '.project-card, .skill-card, .about-text, .about-img, .contacts-box, .quote-block, .service-card, .timeline-item, .stat-card, .process-step, .testimonial-card, .contacts-availability, .contact-form'
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

fadeEls.forEach(el => {
  el.classList.add('fade-hidden');
  observer.observe(el);
});

// Inject fade styles
const fadeStyle = document.createElement('style');
fadeStyle.textContent = `
  .fade-hidden {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .fade-hidden.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(fadeStyle);


// ===== STAGGERED ANIMATIONS =====
document.querySelectorAll('.skill-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 50}ms`;
});
document.querySelectorAll('.project-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 100}ms`;
});
document.querySelectorAll('.service-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 80}ms`;
});
document.querySelectorAll('.timeline-item').forEach((item, i) => {
  item.style.transitionDelay = `${i * 120}ms`;
});
document.querySelectorAll('.stat-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 80}ms`;
});
document.querySelectorAll('.process-step').forEach((step, i) => {
  step.style.transitionDelay = `${i * 100}ms`;
});
document.querySelectorAll('.testimonial-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 100}ms`;
});


// ===== SKILL LEVEL BAR ANIMATION =====
const skillFills = document.querySelectorAll('.skill-fill');
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const width = fill.style.width;
        fill.style.width = '0';
        setTimeout(() => {
          fill.style.width = width;
        }, 200);
        skillObserver.unobserve(fill);
      }
    });
  },
  { threshold: 0.5 }
);
skillFills.forEach(fill => skillObserver.observe(fill));


// ===== COUNTER ANIMATION FOR STATS =====
const statNumbers = document.querySelectorAll('.stat-number[data-target]');

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'));
        animateCounter(el, target);
        counterObserver.unobserve(el);
      }
    });
  },
  { threshold: 0.5 }
);

statNumbers.forEach(el => counterObserver.observe(el));

function animateCounter(el, target) {
  const duration = 2000;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target;
    }
  }
  requestAnimationFrame(update);
}


// ===== TYPING EFFECT on hero subtitle =====
const typingTarget = document.querySelector('.home-text > p');
if (typingTarget) {
  const originalText = typingTarget.textContent;
  typingTarget.textContent = '';
  typingTarget.style.borderRight = '2px solid var(--purple)';
  let idx = 0;

  function type() {
    if (idx < originalText.length) {
      typingTarget.textContent += originalText[idx];
      idx++;
      setTimeout(type, 35);
    } else {
      // Blink cursor then remove
      let blinks = 0;
      const blinkInterval = setInterval(() => {
        typingTarget.style.borderRightColor =
          typingTarget.style.borderRightColor === 'transparent' ? 'var(--purple)' : 'transparent';
        blinks++;
        if (blinks > 6) {
          clearInterval(blinkInterval);
          typingTarget.style.borderRight = 'none';
        }
      }, 400);
    }
  }

  setTimeout(type, 800);
}


// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// ===== HERO PARTICLE SYSTEM =====
(function() {
  const canvas = document.createElement('canvas');
  const container = document.getElementById('heroParticles');
  if (!container) return;

  container.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const particles = [];
  const particleCount = 60;

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4;
      this.opacity = Math.random() * 0.4 + 0.1;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(199, 120, 221, ${this.opacity})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function drawLines() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(199, 120, 221, ${0.06 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.update();
      p.draw();
    });
    drawLines();

    requestAnimationFrame(animate);
  }
  animate();
})();


// ===== 3D TILT EFFECT ON CARDS =====
document.querySelectorAll('.project-card, .service-card, .testimonial-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / centerY * -4;
    const rotateY = (x - centerX) / centerX * 4;

    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});


// ===== MAGNETIC BUTTONS =====
document.querySelectorAll('.btn-primary, .btn-outline').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
  });
});


// ===== CONTACT FORM HANDLING =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const originalContent = btn.innerHTML;

    btn.innerHTML = '<i class="fa-solid fa-check"></i> Sent!';
    btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';

    setTimeout(() => {
      btn.innerHTML = originalContent;
      btn.style.background = '';
      contactForm.reset();
    }, 2500);
  });
}


// ===== TEXT SCRAMBLE EFFECT ON SECTION TITLES =====
const scrambleObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        scrambleText(entry.target);
        scrambleObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll('.section-title').forEach(title => {
  scrambleObserver.observe(title);
});

function scrambleText(element) {
  const chars = '!<>-_\\/[]{}—=+*^?#________';
  const textNode = Array.from(element.childNodes).find(n => n.nodeType === Node.TEXT_NODE || n.tagName !== 'SPAN');

  // Get the text content after the hash span
  const spans = element.querySelectorAll('span');
  let textEl = null;
  element.childNodes.forEach(node => {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
      textEl = node;
    }
  });

  if (!textEl) return;

  const original = textEl.textContent;
  let iteration = 0;

  const interval = setInterval(() => {
    textEl.textContent = original
      .split('')
      .map((char, i) => {
        if (i < iteration) return original[i];
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join('');

    iteration += 1 / 2;

    if (iteration >= original.length) {
      textEl.textContent = original;
      clearInterval(interval);
    }
  }, 30);
}


// ===== PARALLAX ON DECORATIVE ELEMENTS =====
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  document.querySelectorAll('.deco-squares').forEach(el => {
    el.style.transform = `translateY(${scrollY * 0.03}px)`;
  });
  document.querySelectorAll('.dot-grid-home').forEach(el => {
    el.style.transform = `translateY(calc(-50% + ${scrollY * -0.02}px))`;
  });
});


// ===== RESUME MODAL =====
function openResumeModal() {
  const modal = document.getElementById('resumeModal');
  if (!modal) return;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeResumeModal() {
  const modal = document.getElementById('resumeModal');
  if (!modal) return;

  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Close on backdrop click
document.getElementById('resumeModal')?.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    closeResumeModal();
  }
});

// Close on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeResumeModal();
  }
});


// ===== SKELETON LOADING SCREENS =====
(function() {
  // Cards that get skeleton loading
  const skeletonSelectors = [
    '.skeleton-card',
    '.service-card',
    '.skill-card',
    '.stat-card'
  ];

  // Add skeleton-active class to all cards on load
  skeletonSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(card => {
      card.classList.add('skeleton-active');
    });
  });

  // Remove skeleton after page is ready with staggered delays
  function revealSkeletons() {
    skeletonSelectors.forEach((selector, groupIdx) => {
      document.querySelectorAll(selector).forEach((card, cardIdx) => {
        const delay = (groupIdx * 200) + (cardIdx * 120) + 600;
        setTimeout(() => {
          card.classList.remove('skeleton-active');
        }, delay);
      });
    });
  }

  // Trigger after DOM is fully loaded + small delay for visual effect
  if (document.readyState === 'complete') {
    revealSkeletons();
  } else {
    window.addEventListener('load', revealSkeletons);
  }
})();


// ===== LIVE PROJECT PREVIEW ON HOVER =====
(function() {
  // Lazy load iframes on first hover
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    let iframeLoaded = false;

    card.addEventListener('mouseenter', () => {
      if (iframeLoaded) return;

      const iframe = card.querySelector('.project-live-preview iframe[data-src]');
      if (iframe && iframe.dataset.src) {
        iframe.src = iframe.dataset.src;
        iframeLoaded = true;
      }
    });
  });

  // CLI typing animation for Jaan Pechaan
  const cliCards = document.querySelectorAll('.project-cli-preview');
  cliCards.forEach(cli => {
    let animated = false;
    const parentCard = cli.closest('.project-card');

    if (parentCard) {
      parentCard.addEventListener('mouseenter', () => {
        if (animated) return;
        animated = true;

        const lines = cli.querySelectorAll('.cli-body p');
        lines.forEach((line, i) => {
          line.style.opacity = '0';
          line.style.transform = 'translateX(-8px)';
          line.style.transition = `opacity 0.3s ease ${i * 0.2}s, transform 0.3s ease ${i * 0.2}s`;

          setTimeout(() => {
            line.style.opacity = '1';
            line.style.transform = 'translateX(0)';
          }, 50);
        });
      });
    }
  });

  // Open live URL when clicking overlay
  document.querySelectorAll('.preview-overlay').forEach(overlay => {
    overlay.addEventListener('click', () => {
      const preview = overlay.closest('.project-preview');
      const url = preview?.dataset?.liveUrl;
      if (url) {
        window.open(url, '_blank');
      }
    });
  });
})();