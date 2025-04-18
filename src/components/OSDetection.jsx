// src/components/OSDetection.jsx
import React, { useLayoutEffect, useState } from 'react';

export default function OSDetection() {
  const [os, setOs] = useState({ name: '', version: '' });

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    const ua = navigator.userAgent;
    let name = 'macOS';
    let version = '12 et antérieurs';

    if (ua.includes('Windows NT 11.0')) {
      name = 'Windows'; version = '11';
    } else if (ua.includes('Windows NT 10.0')) {
      name = 'Windows'; version = '10';
    } else if (ua.includes('Mac OS X')) {
      name = 'macOS';
      const m = ua.match(/Mac OS X (\d+[_\.]\d+)/);
      if (m) {
        const raw = m[1].replace('_','.');
        const major = parseInt(raw.split('.')[1], 10);
        version = major >= 14 ? '13 et ultérieurs' : '12 et antérieurs';
      }
    } else if (/iPad|iPhone|iPod/.test(ua)) {
      name = 'iOS'; version = 'iOS';
    } else if (ua.includes('Android')) {
      name = 'Android'; version = 'Android';
    }

    // stocke simplement la chaîne, pas JSON
    localStorage.setItem('docusaurus.tab.os-tabs', name);
    localStorage.setItem(`docusaurus.tab.${name}`, name === 'Windows' ? `Windows${version}` : version);

    setOs({ name, version });
  }, []);

  if (!os.name) return null;

  return (
    <div style={{ textAlign: 'center', margin: '1.5rem 0' }}>
      <small>Votre système d’exploitation : {os.name} {os.version}</small>
      <br />
      <a href="/informatique/proxy" className="button button--primary">
        Accéder à la documentation pour {os.name}
      </a>
    </div>
  );
}