/* ---------- THEME (mode sombre) — clair par défaut, le choix explicite est mémorisé ---------- */
const THEME_KEY = 'pcd-theme';
const themeToggle = document.getElementById('theme-toggle');
const themeColorMeta = document.getElementById('theme-color-meta');
let isDark = document.documentElement.getAttribute('data-theme') === 'dark';
let p5Instance;

function applyTheme(theme, persist) {
  document.documentElement.setAttribute('data-theme', theme);
  isDark = theme === 'dark';
  themeToggle.setAttribute('aria-checked', String(isDark));
  themeToggle.setAttribute('aria-label', isDark ? 'Désactiver le mode sombre' : 'Activer le mode sombre');
  if (themeColorMeta) themeColorMeta.setAttribute('content', isDark ? '#121212' : '#fafaf8');
  if (persist) {
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) { /* localStorage unavailable */ }
  }
  if (p5Instance && prefersReducedMotion) p5Instance.redraw();
}

applyTheme(isDark ? 'dark' : 'light', false);

themeToggle.addEventListener('click', () => {
  applyTheme(isDark ? 'light' : 'dark', true);
});

/* ---------- NAV (overlay plein écran) ---------- */
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

function openMenu() {
  navLinks.classList.add('open');
  navLinks.setAttribute('aria-hidden', 'false');
  navToggle.setAttribute('aria-expanded', 'true');
  navToggle.setAttribute('aria-label', 'Fermer le menu');
  document.body.classList.add('nav-open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  navLinks.classList.remove('open');
  navLinks.setAttribute('aria-hidden', 'true');
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', 'Ouvrir le menu');
  document.body.classList.remove('nav-open');
  document.body.style.overflow = '';
}

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.contains('open');
  if (isOpen) closeMenu(); else openMenu();
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navLinks.classList.contains('open')) {
    closeMenu();
    navToggle.focus();
  }
});

/* ---------- BACK TO TOP ---------- */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const backToTop = document.getElementById('back-to-top');
const heroSection = document.getElementById('accueil');
const accueilHeading = document.getElementById('accueil-heading');

function updateBackToTop() {
  const pastHero = heroSection.getBoundingClientRect().bottom <= 0;
  backToTop.classList.toggle('visible', pastHero);
  backToTop.setAttribute('aria-hidden', String(!pastHero));
}

window.addEventListener('scroll', updateBackToTop, { passive: true });
updateBackToTop();

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  accueilHeading.focus();
});

/* ---------- FAQ ACCORDION (ouverture/fermeture animée) ---------- */
if (!prefersReducedMotion) {
  class AnimatedDetails {
    constructor(el) {
      this.el = el;
      this.summary = el.querySelector('summary');
      this.animation = null;
      this.isClosing = false;
      this.isExpanding = false;
      this.summary.addEventListener('click', (e) => this.onClick(e));
    }
    onClick(e) {
      e.preventDefault();
      this.el.style.overflow = 'hidden';
      if (this.isClosing || !this.el.open) {
        this.open();
      } else if (this.isExpanding || this.el.open) {
        this.shrink();
      }
    }
    closedHeight() {
      const cs = getComputedStyle(this.el);
      return this.summary.offsetHeight + parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);
    }
    shrink() {
      this.isClosing = true;
      const startHeight = `${this.el.offsetHeight}px`;
      const endHeight = `${this.closedHeight()}px`;
      if (this.animation) this.animation.cancel();
      this.animation = this.el.animate({ height: [startHeight, endHeight] }, { duration: 250, easing: 'ease-out' });
      this.animation.onfinish = () => this.onAnimationFinish(false);
      this.animation.oncancel = () => { this.isClosing = false; };
    }
    open() {
      this.el.style.height = `${this.el.offsetHeight}px`;
      this.el.open = true;
      window.requestAnimationFrame(() => this.expand());
    }
    expand() {
      this.isExpanding = true;
      const startHeight = `${this.el.offsetHeight}px`;
      const endHeight = `${this.el.scrollHeight}px`;
      if (this.animation) this.animation.cancel();
      this.animation = this.el.animate({ height: [startHeight, endHeight] }, { duration: 250, easing: 'ease-out' });
      this.animation.onfinish = () => this.onAnimationFinish(true);
      this.animation.oncancel = () => { this.isExpanding = false; };
    }
    onAnimationFinish(open) {
      this.el.open = open;
      this.animation = null;
      this.isClosing = false;
      this.isExpanding = false;
      this.el.style.height = '';
      this.el.style.overflow = '';
    }
  }

  document.querySelectorAll('.accordion details').forEach((el) => new AnimatedDetails(el));
}

/* ---------- REVEAL ON SCROLL (transition légère entre les blocs) ---------- */
if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  const revealTargets = document.querySelectorAll(
    '#main-content .tag, #main-content h2, #main-content .container > .two-col, #main-content .subsection, #main-content .schedule, #main-content .accordion, #main-content .contact-intro'
  );
  revealTargets.forEach((el) => el.classList.add('reveal'));

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0 });

  revealTargets.forEach((el) => revealObserver.observe(el));
}

/* ---------- PARALLAX LÉGER SUR LA DÉCO (+, −, ;, //, (), [], {}) ---------- */
if (!prefersReducedMotion) {
  const SPEEDS = [0.12, 0.18, 0.24, 0.14, 0.2, 0.16, 0.22];
  const decoData = Array.from(document.querySelectorAll('.deco-mark')).map((el, i) => ({
    el,
    speed: SPEEDS[i % SPEEDS.length],
  }));

  let parallaxTicking = false;
  function updateParallax() {
    for (const { el, speed } of decoData) {
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--parallax-y', `${rect.top * speed}px`);
    }
    parallaxTicking = false;
  }
  window.addEventListener('scroll', () => {
    if (!parallaxTicking) {
      window.requestAnimationFrame(updateParallax);
      parallaxTicking = true;
    }
  }, { passive: true });
  updateParallax();
}

/* ---------- P5.JS BACKGROUND (Accueil only) ---------- */

const sketch = (p) => {
  let particles = [];
  const DENSITY = 7000; // px² per particle — keeps mobile canvases from feeling crowded
  const MIN_PARTICLES = 40;
  const MAX_START_PARTICLES = 180;
  const MAX_PARTICLES = 220;
  const REPEL_RADIUS = 120;
  const MOUSE_LINK_RADIUS = 150;
  let container;
  let canvasW, canvasH;

  function particleCountFor(w, h) {
    return Math.round(p.constrain(w * h / DENSITY, MIN_PARTICLES, MAX_START_PARTICLES));
  }

  class Particle {
    constructor(w, h, x, y) {
      this.w = w; this.h = h;
      this.pos = p.createVector(x !== undefined ? x : p.random(w), y !== undefined ? y : p.random(h));
      this.angle = p.random(p.TWO_PI);
      this.speed = p.random(0.3, 0.9);
      this.r = p.random(1.2, 2.8);
      this.noiseOff = p.random(1000);
      this.linkColor = p.random() < 0.5 ? 'lime' : 'purple';
    }
    update() {
      const n = p.noise(this.pos.x * 0.002, this.pos.y * 0.002, this.noiseOff);
      this.angle = n * p.TWO_PI * 2;
      this.pos.x += p.cos(this.angle) * this.speed;
      this.pos.y += p.sin(this.angle) * this.speed;

      const dMouse = p.dist(this.pos.x, this.pos.y, p.mouseX, p.mouseY);
      if (dMouse < REPEL_RADIUS && dMouse > 0) {
        const push = p.createVector(this.pos.x - p.mouseX, this.pos.y - p.mouseY);
        push.setMag(p.map(dMouse, 0, REPEL_RADIUS, 2.4, 0));
        this.pos.add(push);
      }

      if (this.pos.x < -10) this.pos.x = this.w + 10;
      if (this.pos.x > this.w + 10) this.pos.x = -10;
      if (this.pos.y < -10) this.pos.y = this.h + 10;
      if (this.pos.y > this.h + 10) this.pos.y = -10;
    }
    show() {
      p.noStroke();
      if (isDark) {
        p.fill(240, 240, 237, 110);
      } else {
        p.fill(17, 17, 17, 90);
      }
      p.circle(this.pos.x, this.pos.y, this.r * 2);
    }
  }

  p.setup = () => {
    container = document.getElementById('p5-bg');
    canvasW = container.offsetWidth;
    canvasH = container.offsetHeight;
    const canvas = p.createCanvas(canvasW, canvasH);
    canvas.parent('p5-bg');
    const NUM = particleCountFor(canvasW, canvasH);
    for (let i = 0; i < NUM; i++) particles.push(new Particle(canvasW, canvasH));

    if (prefersReducedMotion) {
      p.noLoop();
    }
  };

  p.draw = () => {
    p.clear();

    const mouseOnCanvas = p.mouseX >= 0 && p.mouseX <= canvasW && p.mouseY >= 0 && p.mouseY <= canvasH;

    const maxDist = 170;
    const lineRGB = isDark ? [111, 177, 255] : [0, 87, 172];
    const linkColors = { lime: [208, 219, 0], purple: [88, 0, 196] };
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const d = p.dist(
          particles[i].pos.x, particles[i].pos.y,
          particles[j].pos.x, particles[j].pos.y
        );
        if (d < maxDist) {
          const alpha = p.map(d, 0, maxDist, 110, 0);
          p.stroke(lineRGB[0], lineRGB[1], lineRGB[2], alpha);
          p.strokeWeight(0.8);
          p.line(particles[i].pos.x, particles[i].pos.y, particles[j].pos.x, particles[j].pos.y);
        }
      }

      if (mouseOnCanvas) {
        const dm = p.dist(particles[i].pos.x, particles[i].pos.y, p.mouseX, p.mouseY);
        if (dm < MOUSE_LINK_RADIUS) {
          const alpha = p.map(dm, 0, MOUSE_LINK_RADIUS, 220, 0);
          const sWeight = p.map(dm, 0, MOUSE_LINK_RADIUS, 4.2, 0.7);
          const c = linkColors[particles[i].linkColor];
          p.stroke(c[0], c[1], c[2], alpha);
          p.strokeWeight(sWeight);
          p.line(particles[i].pos.x, particles[i].pos.y, p.mouseX, p.mouseY);
        }
      }
    }

    for (const particle of particles) {
      particle.update();
      particle.show();
    }
  };

  p.mousePressed = () => {
    const withinCanvas = p.mouseX >= 0 && p.mouseX <= canvasW && p.mouseY >= 0 && p.mouseY <= canvasH;
    if (!withinCanvas) return;

    for (let i = 0; i < 4; i++) {
      particles.push(new Particle(canvasW, canvasH, p.mouseX, p.mouseY));
    }
    while (particles.length > MAX_PARTICLES) particles.shift();

    if (prefersReducedMotion) p.redraw();
  };

  p.windowResized = () => {
    canvasW = container.offsetWidth;
    canvasH = container.offsetHeight;
    p.resizeCanvas(canvasW, canvasH);
  };
};

p5Instance = new p5(sketch);
