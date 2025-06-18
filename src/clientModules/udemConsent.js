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

  // Wrapper pour intercepter la vraie fonction appelée
  Object.defineProperty(window, 'on_udem_cookie_update_consent', {
    set(fn) {
      // On intercepte la fonction UdeM
      window._udem_consent_receiver = (categories) => {
        window.__UDemConsent = categories;
        fn?.(categories); // on appelle la vraie fonction attendue
      };
    },
    get() {
      return window._udem_consent_receiver;
    },
    configurable: true,
  });

  // Injecte le script
  const s = document.createElement('script');
  s.src = 'https://secretariatgeneral.umontreal.ca/udem_consentement_temoins.js?lg=fr';
  s.async = true;
  s.onload = () => {
    const link = document.querySelector('#udem_cookie_consent_toggle');
    if (link?.tagName === 'A') link.remove();
  };
  document.head.appendChild(s);
}