import React from 'react';
import Link from '@docusaurus/Link';

export default function LogoWrapper() {
  return (
    <div
      style={{
        display: 'flex',
        gap: '0.75rem',
        marginRight: '1.5rem',
      }}
    >
      {/* Logo Bibliothèques (légèrement plus bas) */}
      <Link to="https://bib.umontreal.ca">
        <img
          src="/img/logobib.svg"
          alt="Bibliothèques UdeM"
          height="36"
          style={{ transform: 'translateY(2px)' }}
        />
      </Link>

      {/* Séparateur centré */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '1px',
            height: '24px',
            backgroundColor: 'var(--black)',
            opacity: 0.5,
          }}
        />
      </div>

      {/* Logo Studio (légèrement plus bas) */}
      <Link to="/" style={{ marginRight: '1.5rem' }}>
        <img
          src="/img/logostudio.svg"
          alt="studio•bib"
          height="26"
          style={{ transform: 'translateY(8px)' }}
        />
      </Link>
    </div>
  );
}