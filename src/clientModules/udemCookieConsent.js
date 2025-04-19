// src/clientModules/udemConsent.js

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
  // Forcer la langue en français quel que soit le navigateur
  Object.defineProperty(navigator, 'language', {
    get: () => 'fr',
    configurable: true,
  });
  Object.defineProperty(navigator, 'languages', {
    get: () => ['fr', 'fr-CA'],
    configurable: true,
  });

  // Handler appelé à chaque mise à jour du consentement
  window.on_udem_cookie_update_consent = (categories) => {
    // On stocke pour les autres modules
    window.__UDemConsent = categories;
  };

  // Injection du script UdeM
  const s = document.createElement('script');
  s.src = 'https://secretariatgeneral.umontreal.ca/udem_consentement_temoins.js?lg=fr';
  s.async = true;
  s.onload = () => {
    // Supprime le lien injecté par défaut
    const autoLink = document.querySelector('#udem_cookie_consent_toggle');
    if (autoLink && autoLink.tagName === 'A') {
      autoLink.remove();
    }
  };
  document.head.appendChild(s);
}