
// ---- LOADER ----
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 2000);
});

// ---- CURSOR ----
const dot = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');
let mx = -100, my = -100, rx = -100, ry = -100;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
function animCursor() {
  dot.style.left = mx + 'px'; dot.style.top = my + 'px';
  rx += (mx - rx) * 0.15; ry += (my - ry) * 0.15;
  ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
  requestAnimationFrame(animCursor);
}
animCursor();
document.querySelectorAll('a,button,.tool-card,.service-card,.project-card,.about-stat,.hobby-item,.milestone-card,.timeline-card').forEach(el => {
  el.addEventListener('mouseenter', () => ring.classList.add('hovered'));
  el.addEventListener('mouseleave', () => ring.classList.remove('hovered'));
});

// ---- SCROLL PROGRESS ----
window.addEventListener('scroll', () => {
  const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  document.getElementById('scrollProgress').style.width = pct + '%';
  // Back to top
  const btt = document.getElementById('backToTop');
  if (window.scrollY > 400) btt.classList.add('visible'); else btt.classList.remove('visible');
  // Nav
  const nav = document.getElementById('navbar');
  if (window.scrollY > 50) nav.classList.add('scrolled'); else nav.classList.remove('scrolled');
});

// ---- MOBILE MENU ----
const ham = document.getElementById('hamburger');
const mob = document.getElementById('mobileMenu');
ham.addEventListener('click', () => mob.classList.toggle('open'));
function closeMobile() { mob.classList.remove('open'); }

// ---- TYPING ANIMATION ----
const words = ['Web Development Learner', 'IT Support Enthusiast', 'Creative Editor', 'Gamer 🎮', 'Problem Solver', 'Future Frontend Developer', 'Cyclist 🚴', 'Content Moderation Expert'];
let wi = 0, ci = 0, del = false;
const tEl = document.getElementById('typingText');
function type() {
  const w = words[wi];
  if (!del) {
    tEl.textContent = w.slice(0, ci + 1);
    ci++;
    if (ci === w.length) { del = true; setTimeout(type, 1800); return; }
  } else {
    tEl.textContent = w.slice(0, ci - 1);
    ci--;
    if (ci === 0) { del = false; wi = (wi + 1) % words.length; }
  }
  setTimeout(type, del ? 55 : 95);
}
setTimeout(type, 1200);

// ---- PARTICLES ----
const pWrap = document.getElementById('particles');
for (let i = 0; i < 25; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  const left = Math.random() * 100;
  const dur = 8 + Math.random() * 12;
  const delay = Math.random() * 12;
  const size = 1 + Math.random() * 2;
  p.style.cssText = `left:${left}%;width:${size}px;height:${size}px;animation-duration:${dur}s;animation-delay:${delay}s;`;
  if (i % 3 === 0) p.style.background = 'var(--purple)';
  if (i % 5 === 0) p.style.background = 'var(--green)';
  pWrap.appendChild(p);
}

// ---- REVEAL ON SCROLL ----
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => revealObserver.observe(el));

// ---- SKILL BAR ANIMATION ----
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
        const w = bar.getAttribute('data-width');
        bar.style.transform = `scaleX(${w})`;
        bar.classList.add('animate');
      });
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.skill-category').forEach(el => skillObserver.observe(el));

// ---- COUNTER ANIMATION ----
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('[data-count]').forEach(el => {
        const target = parseInt(el.getAttribute('data-count'));
        let current = 0;
        const step = target / 30;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) { el.textContent = target + '+'; clearInterval(timer); return; }
          el.textContent = Math.floor(current) + '+';
        }, 50);
      });
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.about-stats').forEach(el => counterObserver.observe(el));

// ---- THEME TOGGLE ----
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  themeBtn.textContent = isDark ? '🌙' : '☀️';
});

// ---- COPY EMAIL ----
function copyEmail() {
  navigator.clipboard.writeText('jNofuente1998@gmail.com').then(() => {
    const btn = document.querySelector('.copy-btn');
    const orig = btn.textContent;
    btn.textContent = 'Copied!';
    btn.style.color = 'var(--green)';
    btn.style.borderColor = 'var(--green)';
    setTimeout(() => { btn.textContent = orig; btn.style.color = ''; btn.style.borderColor = ''; }, 2000);
  });
}

// ---- FORM SUBMIT ----
function submitForm() {
  const name = document.getElementById('fname').value.trim();
  const email = document.getElementById('femail').value.trim();
  const msg = document.getElementById('fmsg').value.trim();
  let valid = true;
  document.querySelectorAll('.form-error').forEach(e => e.classList.remove('show'));
  if (!name) { document.getElementById('fnameErr').classList.add('show'); valid = false; }
  if (!email || !email.includes('@')) { document.getElementById('femailErr').classList.add('show'); valid = false; }
  if (!msg) { document.getElementById('fmsgErr').classList.add('show'); valid = false; }
  if (valid) {
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('formSuccess').classList.add('show');
  }
}

// ---- SMOOTH SCROLL (for nav links) ----
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// // ---- RESUME PLACEHOLDER ----
// document.getElementById('dlResume').addEventListener('click', e => {
//   e.preventDefault();
//   alert('Resume download will be available soon! Contact Jerome at jNofuente1998@gmail.com for a copy.');
// });

const burgerBtn = document.getElementById('burgerBtn');
const closeBtn = document.getElementById('closeBtn');
const contactOverlay = document.getElementById('contactOverlay');

// Open Overlay
burgerBtn.addEventListener('click', () => {
  contactOverlay.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent scrolling when open
});

// Close Overlay
closeBtn.addEventListener('click', () => {
  contactOverlay.classList.remove('active');
  document.body.style.overflow = 'auto'; // Restore scrolling
});

// Close if clicking outside the content
contactOverlay.addEventListener('click', (e) => {
  if (e.target === contactOverlay) {
    contactOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

