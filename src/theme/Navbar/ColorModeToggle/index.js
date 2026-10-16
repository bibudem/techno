import React, { useEffect, useRef } from 'react';
import NavbarColorModeToggle from '@theme-original/Navbar/ColorModeToggle';
import {useColorMode} from '@docusaurus/theme-common';
import {hasKlaroConsent} from '@site/src/utils/consent';

const REQUEST_COLOR_MODE_EVENT = 'sb:request-color-mode';
const COLOR_MODE_CHANGED_EVENT = 'sb:color-mode-changed';
const DARK_MODE_ACTIVATION_EVENT = 'dark_mode_activation';
const COLOR_MODE_STORAGE_KEY = 'theme';

function normalizeColorMode(value) {
  if (value === 'dark') return 'dark';
  if (value === 'light') return 'light';
  return null;
}

function getCurrentColorMode() {
  if (typeof document === 'undefined') return 'light';
  return normalizeColorMode(document.documentElement.getAttribute('data-theme')) || 'light';
}

function getStoredColorMode() {
  if (typeof window === 'undefined') return null;
  try {
    return normalizeColorMode(window.localStorage.getItem(COLOR_MODE_STORAGE_KEY));
  } catch {
    return null;
  }
}

function trackDarkModeActivation(source) {
  if (!hasKlaroConsent('googleAnalytics')) return;
  if (typeof window.gtag !== 'function') return;

  window.gtag('event', DARK_MODE_ACTIVATION_EVENT, {
    source: source || 'unknown',
    non_interaction: true,
  });
}

function ColorModeSyncBridge() {
  const previousModeRef = useRef(null);
  const pendingSourceRef = useRef('unknown');
  const {setColorMode} = useColorMode();
  const setColorModeRef = useRef(setColorMode);
  setColorModeRef.current = setColorMode;

  useEffect(() => {
    const onNavbarToggleClick = (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const button = target.closest('button');
      if (!button) return;
      if (!button.closest('.navbar, .navbar-sidebar')) return;

      const hasKnownWrapper = Boolean(button.closest('[class*="colorModeToggle"]'));
      const className =
        typeof button.className === 'string' ? button.className : '';
      const hasKnownButtonClass = className.includes('toggleButton');

      if (!hasKnownWrapper && !hasKnownButtonClass) return;
      pendingSourceRef.current = 'navbar';
    };

    document.addEventListener('click', onNavbarToggleClick, true);
    return () => {
      document.removeEventListener('click', onNavbarToggleClick, true);
    };
  }, []);

  useEffect(() => {
    const onColorModeRequest = (event) => {
      const requestedMode = normalizeColorMode(event?.detail?.mode);
      if (!requestedMode) return;
      if (getCurrentColorMode() === requestedMode) return;
      pendingSourceRef.current = event?.detail?.source || 'widget';

      // API officielle : Docusaurus met à jour data-theme et le localStorage.
      setColorModeRef.current(requestedMode);
    };

    // Signale à l'outil d'accessibilité (script statique) qu'un pont est monté
    // (compteur : la navbar mobile peut monter une seconde instance).
    window.__sbColorModeBridge = (window.__sbColorModeBridge || 0) + 1;
    window.addEventListener(REQUEST_COLOR_MODE_EVENT, onColorModeRequest);
    return () => {
      window.__sbColorModeBridge -= 1;
      window.removeEventListener(REQUEST_COLOR_MODE_EVENT, onColorModeRequest);
    };
  }, []);

  useEffect(() => {
    const emitColorModeEvent = () => {
      const effectiveMode = getCurrentColorMode();
      const selectedMode = getStoredColorMode() || effectiveMode;
      const previousMode = previousModeRef.current;

      if (previousMode === effectiveMode) {
        pendingSourceRef.current = 'unknown';
        return;
      }

      window.dispatchEvent(
        new CustomEvent(COLOR_MODE_CHANGED_EVENT, {
          detail: {
            mode: effectiveMode,
            choice: selectedMode,
          },
        }),
      );

      // Compatibility with existing site listeners.
      window.dispatchEvent(new Event('themechange'));

      if (previousMode !== null && effectiveMode === 'dark') {
        trackDarkModeActivation(pendingSourceRef.current);
      }

      previousModeRef.current = effectiveMode;
      pendingSourceRef.current = 'unknown';
    };

    const observer = new MutationObserver((mutations) => {
      const hasThemeMutation = mutations.some(
        (mutation) =>
          mutation.type === 'attributes' &&
          mutation.attributeName === 'data-theme',
      );
      if (hasThemeMutation) {
        emitColorModeEvent();
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    const onStorage = (event) => {
      if (event?.key && event.key !== COLOR_MODE_STORAGE_KEY) return;
      emitColorModeEvent();
    };

    window.addEventListener('storage', onStorage);
    emitColorModeEvent();

    return () => {
      observer.disconnect();
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  return null;
}

export default function NavbarColorModeToggleWrapper(props) {
  return (
    <>
      <ColorModeSyncBridge />
      <NavbarColorModeToggle {...props} />
    </>
  );
}
