// src/clientModules/accessibilitePersist.js
// Réapplique les préférences de l'outil d'accessibilité (static/accessibilite)
// au chargement et après chaque navigation : Docusaurus réécrit les classes
// de <html>/<body> lors des changements de page.
// Le thème clair/sombre n'est pas géré ici : Docusaurus en est la seule source.

function lire(cle) {
  try {
    return window.localStorage.getItem(cle);
  } catch {
    return null;
  }
}

function ensureWarmOverlay(shouldEnable) {
  const existing = document.getElementById('readability-warm-overlay');
  if (shouldEnable) {
    if (!existing) {
      const overlay = document.createElement('div');
      overlay.id = 'readability-warm-overlay';
      document.body.appendChild(overlay);
    }
  } else if (existing) {
    existing.remove();
  }
}

function applyAccessibilitePrefs() {
  document.body.classList.toggle('readability-hide-images', lire('hide_all_images') === 'true');
  document.body.classList.toggle('open-dyslexic', lire('open_dyslexic_font') === 'true');
  document.body.classList.toggle('readability-highlight-links-on', lire('highlight_links') === 'true');
  document.documentElement.classList.toggle('readability-large-text', lire('large_text') === 'true');

  ensureWarmOverlay(lire('warm_background') === 'true');
}

if (typeof window !== 'undefined') {
  applyAccessibilitePrefs();
}

export function onRouteDidUpdate() {
  // On laisse Docusaurus (Helmet) poser ses classes, puis on réapplique.
  setTimeout(applyAccessibilitePrefs, 0);
  setTimeout(applyAccessibilitePrefs, 50);
}
