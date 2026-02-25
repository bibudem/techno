var GA_MEASUREMENT_ID = 'G-V8J6YFFD4F';
var CLARITY_PROJECT_ID = 'r5bxj4q7vj';

var consentCookieDomain =
  typeof window !== 'undefined' &&
  window.location &&
  !/^(localhost|127\.0\.0\.1)$/.test(window.location.hostname)
    ? window.location.hostname
    : undefined;

function listCookieNames() {
  if (typeof document === 'undefined' || !document.cookie) return [];
  return document.cookie
    .split(';')
    .map(function (part) {
      return part.trim().split('=')[0];
    })
    .filter(Boolean);
}

function deleteCookieEverywhere(name) {
  if (typeof document === 'undefined') return;

  var hostname = window.location.hostname;
  var domains = [hostname, '.' + hostname];
  if (hostname.endsWith('.umontreal.ca')) {
    domains.push('.umontreal.ca');
  }

  var expires = 'Thu, 01 Jan 1970 00:00:00 GMT';
  document.cookie = name + '=; expires=' + expires + '; path=/';
  domains.forEach(function (domain) {
    document.cookie =
      name + '=; expires=' + expires + '; path=/; domain=' + domain;
  });
}

function clearCookiesByPatterns(patterns) {
  var names = listCookieNames();
  names.forEach(function (cookieName) {
    var shouldDelete = patterns.some(function (pattern) {
      return pattern.test(cookieName);
    });
    if (shouldDelete) deleteCookieEverywhere(cookieName);
  });
}

function loadScriptOnce(id, src, onLoad) {
  if (document.getElementById(id)) {
    onLoad();
    return;
  }

  var script = document.createElement('script');
  script.id = id;
  script.src = src;
  script.async = true;
  script.onload = onLoad;
  document.head.appendChild(script);
}

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== 'function') {
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
  }
}

function updateGoogleConsentState(granted) {
  ensureGtag();
  window['ga-disable-' + GA_MEASUREMENT_ID] = !granted;
  window.gtag('consent', 'update', {
    analytics_storage: granted ? 'granted' : 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
}

function activateGoogleAnalytics() {
  loadScriptOnce(
    'studio-bib-ga-loader',
    'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID,
    function () {
      ensureGtag();
      if (!window.__studioBibGaConfigured) {
        window.gtag('js', new Date());
        window.gtag('config', GA_MEASUREMENT_ID, {anonymize_ip: true});
        window.__studioBibGaConfigured = true;
      }
    },
  );
}

function handleGoogleAnalyticsConsent(granted) {
  updateGoogleConsentState(granted);

  if (granted) {
    activateGoogleAnalytics();
    return;
  }

  clearCookiesByPatterns([/^_ga$/i, /^_ga_.+/i, /^_gid$/i, /^_gat$/i]);
}

function activateClarity() {
  if (window.__studioBibClarityLoaded) return;
  window.__studioBibClarityLoaded = true;

  (function (c, l, a, r, i, t, y) {
    c[a] =
      c[a] ||
      function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
    t = l.createElement(r);
    t.async = 1;
    t.src = 'https://www.clarity.ms/tag/' + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, 'clarity', 'script', CLARITY_PROJECT_ID);
}

function updateClarityConsentState(granted) {
  if (typeof window.clarity !== 'function') return;

  try {
    window.clarity('consent', granted);
  } catch (err) {
    console.warn('Clarity consent API v1 indisponible', err);
  }

  try {
    window.clarity('consentv2', {
      ad_Storage: 'denied',
      analytics_Storage: granted ? 'granted' : 'denied',
    });
  } catch (err) {
    console.warn('Clarity consent API v2 indisponible', err);
  }
}

function handleClarityConsent(granted) {
  if (granted) {
    activateClarity();
    updateClarityConsentState(true);
    return;
  }

  updateClarityConsentState(false);
  clearCookiesByPatterns([
    /^_clck$/i,
    /^_clsk$/i,
    /^CLID$/i,
    /^ANONCHK$/i,
    /^MR$/i,
    /^MUID$/i,
    /^SM$/i,
  ]);
}

var klaroConfig = {
  version: 2,
  elementID: 'klaro',
  storageMethod: 'cookie',
  storageName: 'bib-consent',
  cookieDomain: consentCookieDomain,
  cookieExpiresAfterDays: 180,
  cookieSameSite: 'lax',
  default: false,
  htmlTexts: true,
  mustConsent: false,
  acceptAll: true,
  hideDeclineAll: false,
  hideLearnMore: false,
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
        manage: 'Paramètres des témoins',
        learnMore: 'Paramètres des témoins',
        acceptAll: 'Tout accepter',
        declineAll: 'Tout refuser',
      },
      ok: "J'accepte",
      purposes: {
        analytics: 'Statistiques et analyse',
        externalMedia: 'Médias externes',
      },
      googleAnalytics: {
        title: 'Google Analytics',
        description:
          'Mesure anonyme de la fréquentation du site (pages vues, durée de visite).',
      },
      clarity: {
        title: 'Microsoft Clarity',
        description:
          'Analyse anonyme des parcours utilisateurs (clics, interactions).',
      },
      externalMedia: {
        title: 'Médias externes',
        description:
          'Affiche les contenus intégrés de services externes (YouTube, Loom, Spotify, Anchor, Podbean).',
      },
    },
  },

  services: [
    {
      name: 'googleAnalytics',
      purposes: ['analytics'],
      cookies: [/^_ga$/i, /^_ga_.+/i, /^_gid$/i, /^_gat$/i],
      callback: function (consent) {
        handleGoogleAnalyticsConsent(Boolean(consent));
      },
    },
    {
      name: 'clarity',
      purposes: ['analytics'],
      cookies: [
        /^_clck$/i,
        /^_clsk$/i,
        /^CLID$/i,
        /^ANONCHK$/i,
        /^MR$/i,
        /^MUID$/i,
        /^SM$/i,
      ],
      callback: function (consent) {
        handleClarityConsent(Boolean(consent));
      },
    },
    {
      name: 'externalMedia',
      purposes: ['externalMedia'],
      contextualConsentOnly: true,
    },
  ],
};
