// src/clientModules/accessibilitePersist.js

function ensureWarmOverlay(shouldEnable) {
  const existing = document.getElementById('readability-warm-overlay');
  if (shouldEnable) {
    if (!existing) {
      const overlay = document.createElement('div');
      overlay.id = 'readability-warm-overlay';
      document.body.appendChild(overlay);
    }
  } else {
    if (existing) existing.remove();
  }
}

function applyAccessibilitePrefs() {
  // On relit localStorage et on (re)pose les classes sur <body>
  const warm = localStorage.warm_background === 'true';
  const hideImages = localStorage.hide_all_images === 'true';
  const dyslexic = localStorage.open_dyslexic_font === 'true';
  const highlight = localStorage.highlight_links === 'true';

  document.body.classList.toggle('readability-hide-images', hideImages);
  document.body.classList.toggle('open-dyslexic', dyslexic);
  document.body.classList.toggle('readability-highlight-links-on', highlight);

  ensureWarmOverlay(warm);
}

function hookSpaNavigation() {
  // Détecte navigation SPA: pushState/replaceState + back/forward
  const { pushState, replaceState } = history;

  history.pushState = function (...args) {
    pushState.apply(this, args);
    window.dispatchEvent(new Event('locationchange'));
  };

  history.replaceState = function (...args) {
    replaceState.apply(this, args);
    window.dispatchEvent(new Event('locationchange'));
  };

  window.addEventListener('popstate', () => {
    window.dispatchEvent(new Event('locationchange'));
  });

  window.addEventListener('locationchange', () => {
    // Important: on laisse Docusaurus finir son update, puis on réapplique
    setTimeout(applyAccessibilitePrefs, 0);
    setTimeout(applyAccessibilitePrefs, 50);
  });
}

export default (function init() {
  if (typeof window === 'undefined') return;

  // Au chargement initial
  applyAccessibilitePrefs();

  // À chaque navigation
  hookSpaNavigation();
})();