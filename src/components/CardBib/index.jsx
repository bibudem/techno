import React, { useEffect, useState } from 'react';
import styles from './CardBib.module.css';
import { ArrowRight } from '@phosphor-icons/react';

export default function CardBib({
  title,
  Icon,
  moreText,
  href,
  color = 'jaune',
  small = false,
  style = {},
  onMouseEnter,
  onMouseLeave,
}) {
  const sizes = {
    small: { height: 240 },
    large: { height: 400 },
  };

  const _size = small ? sizes.small : sizes.large;
  const [isHovered, setIsHovered] = useState(false);
  const [hoverEnabled, setHoverEnabled] = useState(true);

  const colorMap = {
    bleu: {
      bg: 'var(--bleu-500)',
      hoverBg: 'var(--c-004c94)',
      iconColor: 'var(--c-ffffff88)',
      linkIconColor: 'var(--white)',
    },
    jaune: {
      bg: 'var(--jaune)',
      hoverBg: 'var(--c-ffdc81)',
      iconColor: 'var(--c-bc8800)',
      linkIconColor: 'var(--c-473f2c)',
    },
    vertFonce: {
      bg: 'var(--c-2e7d32)',
      hoverBg: 'var(--c-1b5e20)',
      iconColor: 'var(--c-ffffff88)',
      linkIconColor: 'var(--white)',
    },
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

  const handleMouseEnter = () => {
    if (hoverEnabled) setIsHovered(true);
    if (onMouseEnter) onMouseEnter();
  };

  const handleMouseLeave = () => {
    if (hoverEnabled) setIsHovered(false);
    if (onMouseLeave) onMouseLeave();
  };

  return (
    <a
      href={href}
      className={styles.cardLink}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        height: `${_size.height}px`,
        ...style,
      }}
    >
      <div
        className={styles.cardRoot}
        style={{
          backgroundColor: isHovered ? _color.hoverBg : _color.bg,
          transition: 'background-color 0.3s ease',
        }}
      >
        <div className={styles.cardIcon}>
          <Icon size={55} color={_color.iconColor} />
        </div>
        <h2 className={styles.cardTitle}>{title}</h2>
        <div className={styles.cardSpacer}></div>
        <div className={styles.cardFooter}>
          <div className={styles.cardMore}>{moreText}</div>
          <div
            className={styles.cardArrow}
            style={{ backgroundColor: _color.hoverBg }}
          >
            <ArrowRight size={24} weight="light" color={_color.linkIconColor} />
          </div>
        </div>
      </div>
    </a>
  );
}