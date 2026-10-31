// Icône burger de bibweb (src/components/icones/BurgerIcon.astro)
import React from 'react';

export default function IconMenu({width = 34, height = 34, ...props}) {
  return (
    <svg width={width} height={height} viewBox="0 0 256 256" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M224 128a8 8 0 0 1-8 8H40a8 8 0 1 1 0-16h176a8 8 0 0 1 8 8zM86 72h132c3.314 0 6-3.582 6-8s-2.686-8-6-8H86c-3.314 0-6 3.582-6 8s2.686 8 6 8zm132 112H86c-3.314 0-6 3.582-6 8s2.686 8 6 8h132c3.314 0 6-3.582 6-8s-2.686-8-6-8z" />
    </svg>
  );
}
