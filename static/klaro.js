var klaroConfig = {
  version: 1,
  elementID: 'klaro',
  storageMethod: 'cookie',
  storageName: 'bib-consent',
  cookieDomain: '.umontreal.ca',
  default: true,
  htmlTexts: true,
//   mustConsent: true,
  acceptAll: true,
  // defaultLocale: 'fr',
  noticeAsModal: false,

  consentModal: {
    layout: 'cloud',
    position: 'bottom',
  },


  translations: {
    fr: {
      consentModal: {
        title: 'Paramètres de confidentialité',
        description:
          'Vos données personnelles sont utilisées pour enregistrer vos préférences, votre consentement et produire des statistiques anonymes. Pour plus d\'informations, veuillez consulter la <a href="https://vie-privee.umontreal.ca/confidentialite" target="_blank" rel="noopener">politique de confidentialité</a>.',
          acceptAll: 'Accepter',
        declineAll: 'Refuser',
        manage: 'Gérer les paramètres',
      },
      consentNotice: {
        description:
          'Vos données personnelles sont utilisées pour enregistrer vos préférences, votre consentement et produire des statistiques anonymes. Pour plus d\'informations, veuillez consulter la <a href="https://vie-privee.umontreal.ca/confidentialite" target="_blank" rel="noopener">politique de confidentialité</a>.',
        acceptAll: 'Accepter',
        declineAll: 'Refuser',
        manage: 'Gérer les paramètres',
      },
      purposes: {
        analytics: 'Statistiques',
      },
      googleAnalytics: {
        title: 'Google Analytics',
        description: 'Mesure anonyme de la fréquentation du site.',
      },
      clarity: {
        title: 'Microsoft Clarity',
        description: 'Analyse des comportements de navigation.',
      },
    },
  },

  services: [
    {
      name: 'googleAnalytics',
      title: 'Google Analytics',
      purposes: ['analytics'],
      cookies: [/^_ga/, /^_gid/, /^_gat/],
      callback(consent) {
        if (consent) {
          const s = document.createElement('script');
          s.src = 'https://www.googletagmanager.com/gtag/js?id=G-R5SGXR9DKM';
          s.async = true;
          document.head.appendChild(s);
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'G-R5SGXR9DKM');
        }
      },
    },

    {
      name: 'clarity',
      title: 'Microsoft Clarity',
      purposes: ['analytics'],
      cookies: [/clarity/],
      callback(consent) {
        if (consent) {
          (function(c, l, a, r, i, t, y) {
            c[a] = c[a] || function() { (c[a].q = c[a].q || []).push(arguments); };
            t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i;
            y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
          })(window, document, 'clarity', 'script', 'r5bxj4q7vj');
        }
      },
    },
  ],
};