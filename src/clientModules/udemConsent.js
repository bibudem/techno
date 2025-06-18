import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
  // Forcer le français
  Object.defineProperty(navigator, 'language', {
    get: () => 'fr',
    configurable: true,
  });
  Object.defineProperty(navigator, 'languages', {
    get: () => ['fr', 'fr-CA'],
    configurable: true,
  });

  // Fournir une fonction qui retourne une promesse, comme attendu
  window.on_udem_cookie_update_consent = async (categories) => {
    window.__UDemConsent = categories;
    return Promise.resolve(); // nécessaire pour ne pas provoquer d’erreur
  };

  // Charger le script UdeM
  const s = document.createElement('script');
  s.src = 'https://secretariatgeneral.umontreal.ca/udem_consentement_temoins.js?lg=fr';
  s.async = true;
  s.onload = () => {
    const link = document.querySelector('#udem_cookie_consent_toggle');
    if (link?.tagName === 'A') link.remove();
  };
  document.head.appendChild(s);
}