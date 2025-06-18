import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
  // Forcer la langue en français
  Object.defineProperty(navigator, 'language', {
    get: () => 'fr',
    configurable: true,
  });
  Object.defineProperty(navigator, 'languages', {
    get: () => ['fr', 'fr-CA'],
    configurable: true,
  });

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