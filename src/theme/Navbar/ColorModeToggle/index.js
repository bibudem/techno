import React, { useEffect } from 'react';
import NavbarColorModeToggle from '@theme-original/Navbar/ColorModeToggle';
import { useColorMode } from '@docusaurus/theme-common';

const REQUEST_COLOR_MODE_EVENT = 'sb:request-color-mode';
const COLOR_MODE_CHANGED_EVENT = 'sb:color-mode-changed';

function normalizeColorMode(value) {
  if (value === 'dark') return 'dark';
  if (value === 'light') return 'light';
  return null;
}

function ColorModeSyncBridge() {
  const { colorMode, colorModeChoice, setColorMode } = useColorMode();

  useEffect(() => {
    const onColorModeRequest = (event) => {
      const requestedMode = normalizeColorMode(event?.detail?.mode);
      if (!requestedMode) return;

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
