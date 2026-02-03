var klaroConfig = {
  version: 1,
  elementID: 'klaro',
  storageMethod: 'cookie',
  storageName: 'bib-consent',
  cookieDomain: '.umontreal.ca',
  default: false, // services désactivés par défaut
  htmlTexts: true,
  mustConsent: true, // oblige un choix explicite
  acceptAll: true,
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
          'Nous utilisons certains services pour améliorer votre expérience. Vous pouvez accepter ou refuser chaque service. Consultez la <a href="https://vie-privee.umontreal.ca/confidentialite" target="_blank" rel="noopener">politique de confidentialité</a> pour en savoir plus.',
        acceptAll: 'Tout accepter',
        declineAll: 'Tout refuser',
        manage: 'Gérer les paramètres',
      },
      consentNotice: {
        description:
          'Nous utilisons des témoins et outils d’analyse pour améliorer votre expérience. Vous pouvez gérer vos préférences.',
        learnMore: 'Personnaliser',
        acceptAll: 'Tout accepter',
        declineAll: 'Tout refuser',
      },
      purposes: {
        analytics: 'Statistiques et analyse',
      },
      googleAnalytics: {
        title: 'Google Analytics',
        description: 'Mesure anonyme de la fréquentation du site (pages vues, durée de visite).',
      },
      clarity: {
        title: 'Microsoft Clarity',
        description: 'Analyse anonyme des parcours utilisateurs (clics, interactions).',
      },
    },
  },

  services: [
    {
      name: 'googleAnalytics',
      purposes: ['analytics'],
      cookies: [/^_ga/, /^_gid/, /^_gat/],
      callback(consent) {
        if (consent) {
          const s = document.createElement('script');
          s.src = 'https://www.googletagmanager.com/gtag/js?id=G-V8J6YFFD4F';
          s.async = true;
          document.head.appendChild(s);
          window.dataLayer = window.dataLayer || [];
          function gtag(){ dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'G-V8J6YFFD4F', { anonymize_ip: true });
          
        }
      },
    },
    {
      name: 'clarity',
      purposes: ['analytics'],
      cookies: [/clarity/],
      callback(consent) {
        if (consent) {
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window,document,"clarity","script","r5bxj4q7vj");
        }
      },
    },
  ],
};