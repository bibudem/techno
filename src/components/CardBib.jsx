import React, { useEffect, useState } from 'react';
import styles from './CardBib.module.css';
import { ArrowRight } from '@phosphor-icons/react';

export default function CardBib({
  title,
  Icon,
  moreText,
  href,
  color = 'bleuPrincipal',
  small = false,
  style = {},
  onMouseEnter,
  onMouseLeave,
}) {
  const sizes = {
    small: { height: 260 },
    large: { height: 400 },
  };

  const _size = small ? sizes.small : sizes.large;
  const [hoverEnabled, setHoverEnabled] = useState(true);

  const colorMap = {
    bleuPrincipal: { bg: '#0057ac', hoverBg: '#004c94', iconColor: '#ffffff88', linkIconColor: '#fff' },
    rose300: { bg: '#fbb6ce', hoverBg: '#f06292', iconColor: '#f04e2488', linkIconColor: '#e53935' },
    vertFonce: { bg: '#2e7d32', hoverBg: '#1b5e20', iconColor: '#ffffff88', linkIconColor: '#fff' },
  };

  const _color = colorMap[color] || colorMap.bleuPrincipal;

  useEffect(() => {
    const handleResize = () => {
      setHoverEnabled(window.innerWidth >= 900);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <a
      href={href}
      className={styles.cardLink}
      style={{ height: `${_size.height}px`, ...style }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={styles.cardRoot}
        style={{
          backgroundColor: _color.bg,
          transition: 'background-color 0.3s ease',
        }}
      >
        <div className={styles.cardIcon}>
          <Icon size={55} color={_color.iconColor} />
        </div>
        <div className={styles.cardTitle}>{title}</div>
        <div className={styles.cardSpacer}></div>
        <div className={styles.cardFooter}>
          <div className={styles.cardMore}>{moreText}</div>
          <div className={styles.cardArrow} style={{ backgroundColor: _color.hoverBg }}>
            <ArrowRight size={24} weight="light" color={_color.linkIconColor} />
          </div>
        </div>
      </div>
    </a>
  );
}