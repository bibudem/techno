import React, { useEffect, useRef } from 'react';

const AVIS_SCRIPT_SRC = 'https://cdn.jsdelivr.net/gh/bibudem/ui@latest/dist/bib-avis.min.js';
const AVIS_SHADOW_STYLE_ID = 'avis-bib-theme-fix';

function isDarkThemeEnabled() {
  return document.documentElement.getAttribute('data-theme') === 'dark';
}

export default function AvisBib() {
  const avisRef = useRef(null);

  useEffect(() => {
    const host = avisRef.current;
    if (!host) return undefined;

    let pollId = null;
    let pollCount = 0;

    const ensureShadowThemeStyle = () => {
      if (!host.shadowRoot) return false;

      if (host.shadowRoot.getElementById(AVIS_SHADOW_STYLE_ID)) return true;

      const style = document.createElement('style');
      style.id = AVIS_SHADOW_STYLE_ID;
      style.textContent = `
        :host {
          color-scheme: light;
        }
        :host([data-site-theme='dark']) {
          color: var(--avis-bib-text, #1c1e21);
        }
        :host([data-site-theme='dark']) p,
        :host([data-site-theme='dark']) span,
        :host([data-site-theme='dark']) label,
        :host([data-site-theme='dark']) legend,
        :host([data-site-theme='dark']) li,
        :host([data-site-theme='dark']) h1,
        :host([data-site-theme='dark']) h2,
        :host([data-site-theme='dark']) h3,
        :host([data-site-theme='dark']) h4,
        :host([data-site-theme='dark']) h5,
        :host([data-site-theme='dark']) h6,
        :host([data-site-theme='dark']) small {
          color: var(--avis-bib-text, #1c1e21) !important;
        }
        :host([data-site-theme='dark']) a {
          color: var(--avis-bib-link, #0057ac) !important;
        }
      `;

      host.shadowRoot.appendChild(style);
      return true;
    };

    const syncTheme = () => {
      const isDark = isDarkThemeEnabled();

      host.setAttribute('data-site-theme', isDark ? 'dark' : 'light');
      host.style.colorScheme = 'light';
      host.style.setProperty('--avis-bib-text', 'var(--gris-800, #1c1e21)');
      host.style.setProperty('--avis-bib-link', 'var(--bleu-600, #00407f)');

      ensureShadowThemeStyle();
    };

    const existingScript = document.querySelector(`script[src="${AVIS_SCRIPT_SRC}"]`);

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = AVIS_SCRIPT_SRC;
      script.type = 'module';
      script.async = true;
      script.dataset.avisBib = 'true';
      script.addEventListener('load', syncTheme);
      document.body.appendChild(script);
    } else {
      syncTheme();
    }

    const themeObserver = new MutationObserver(syncTheme);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    pollId = window.setInterval(() => {
      syncTheme();
      pollCount += 1;

      if (ensureShadowThemeStyle() || pollCount >= 20) {
        window.clearInterval(pollId);
      }
    }, 250);

    return () => {
      themeObserver.disconnect();
      if (pollId) window.clearInterval(pollId);
    };
  }, []);

  return (
    <bib-avis
      ref={avisRef}
      service="https://avis.bib.umontreal.ca/api/avis"
      bouton-fermer
    ></bib-avis>
  );
}
