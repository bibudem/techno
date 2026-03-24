import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from '@docusaurus/router';

const AVIS_SCRIPT_SRC = 'https://cdn.jsdelivr.net/gh/bibudem/ui@latest/dist/bib-avis.min.js';
const AVIS_SHADOW_STYLE_ID = 'avis-bib-theme-fix';
const AVIS_SERVICE_URL = 'https://avis.bib.umontreal.ca/api/avis';
const AVIS_REFRESH_INTERVAL_MS = 5 * 60 * 1000;

function isDarkThemeEnabled() {
  return document.documentElement.getAttribute('data-theme') === 'dark';
}

export default function AvisBib() {
  const { pathname } = useLocation();
  const avisRef = useRef(null);
  const lastPathnameRef = useRef(pathname);
  const lastRefreshRef = useRef(Date.now());
  const [refreshKey, setRefreshKey] = useState(() => Date.now());

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const refreshAvis = (force = false) => {
      const now = Date.now();

      if (!force && now - lastRefreshRef.current < AVIS_REFRESH_INTERVAL_MS) {
        return;
      }

      lastRefreshRef.current = now;
      setRefreshKey(now);
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        refreshAvis();
      }
    };

    const intervalId = window.setInterval(() => {
      if (document.visibilityState === 'visible') {
        refreshAvis();
      }
    }, AVIS_REFRESH_INTERVAL_MS);

    window.addEventListener('focus', handleVisibilityChange);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('focus', handleVisibilityChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (lastPathnameRef.current === pathname) {
      return;
    }

    lastPathnameRef.current = pathname;
    lastRefreshRef.current = Date.now();
    setRefreshKey(lastRefreshRef.current);
  }, [pathname]);

  useEffect(() => {
    const host = avisRef.current;
    if (!host) return undefined;

    let pollId = null;
    let pollCount = 0;
    let scriptNode = document.querySelector(`script[src="${AVIS_SCRIPT_SRC}"]`);

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

    const handleScriptLoad = () => {
      syncTheme();
    };

    if (!scriptNode) {
      const script = document.createElement('script');
      script.src = AVIS_SCRIPT_SRC;
      script.type = 'module';
      script.async = true;
      script.dataset.avisBib = 'true';
      script.addEventListener('load', handleScriptLoad);
      document.body.appendChild(script);
      scriptNode = script;
    } else if (window.customElements?.get('bib-avis')) {
      syncTheme();
    } else {
      scriptNode.addEventListener('load', handleScriptLoad);
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
      if (scriptNode) {
        scriptNode.removeEventListener('load', handleScriptLoad);
      }
    };
  }, [refreshKey]);

  return (
    <bib-avis
      key={refreshKey}
      ref={avisRef}
      service={AVIS_SERVICE_URL}
      bouton-fermer
    ></bib-avis>
  );
}
