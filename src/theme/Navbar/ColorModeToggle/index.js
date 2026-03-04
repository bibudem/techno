import React, { useEffect, useRef } from 'react';
import NavbarColorModeToggle from '@theme-original/Navbar/ColorModeToggle';
import { useColorMode } from '@docusaurus/theme-common';
import {hasKlaroConsent} from '@site/src/utils/consent';

const REQUEST_COLOR_MODE_EVENT = 'sb:request-color-mode';
const COLOR_MODE_CHANGED_EVENT = 'sb:color-mode-changed';
const DARK_MODE_ACTIVATION_EVENT = 'dark_mode_activation';

function normalizeColorMode(value) {
  if (value === 'dark') return 'dark';
  if (value === 'light') return 'light';
  return null;
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
  const { colorMode, colorModeChoice, setColorMode } = useColorMode();
  const previousModeRef = useRef(null);
  const pendingSourceRef = useRef('unknown');

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
      pendingSourceRef.current = event?.detail?.source || 'widget';

      setColorMode(requestedMode);
    };

    window.addEventListener(REQUEST_COLOR_MODE_EVENT, onColorModeRequest);
    return () => {
      window.removeEventListener(REQUEST_COLOR_MODE_EVENT, onColorModeRequest);
    };
  }, [setColorMode]);

  useEffect(() => {
    const effectiveMode = colorMode === 'dark' ? 'dark' : 'light';
    const selectedMode = normalizeColorMode(colorModeChoice) || effectiveMode;
    const previousMode = previousModeRef.current;

    window.dispatchEvent(
      new CustomEvent(COLOR_MODE_CHANGED_EVENT, {
        detail: {
          mode: effectiveMode,
          choice: selectedMode,
        },
      }),
    );

    // Compatibilite avec le code existant du site (observateurs deja en place).
    window.dispatchEvent(new Event('themechange'));

    // Ignore la premiere passe (etat initial), puis suit seulement les activations.
    if (previousMode === null) {
      previousModeRef.current = effectiveMode;
      pendingSourceRef.current = 'unknown';
      return;
    }

    if (previousMode !== effectiveMode && effectiveMode === 'dark') {
      trackDarkModeActivation(pendingSourceRef.current);
    }

    previousModeRef.current = effectiveMode;
    pendingSourceRef.current = 'unknown';
  }, [colorMode, colorModeChoice]);

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
