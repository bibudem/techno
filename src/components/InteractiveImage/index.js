import React, { useState, useMemo } from 'react';
import styles from './InteractiveImage.module.css';

/**
 * Props :
 *  - image: string (src de l’image)
 *  - zones: [{ id, label, top, left, width, height }]  (valeurs en %, ex: "90%" )
 */
export default function InteractiveImage({ image, zones }) {
  const [activeId, setActiveId] = useState(null);

  const activeZone = useMemo(
    () => zones.find(z => z.id === activeId) || null,
    [activeId, zones]
  );

  const buildClipPolygon = (zone) => {
    if (!zone) return 'none';
    const left = zone.left;
    const top = zone.top;
    const right = `calc(${zone.left} + ${zone.width})`;
    const bottom = `calc(${zone.top} + ${zone.height})`;
    return `polygon(${left} ${top}, ${right} ${top}, ${right} ${bottom}, ${left} ${bottom})`;
  };

  const handleEnter = (id) => setActiveId(id);
  const handleLeave = () => setActiveId(null);
  const handleClick = (id) => setActiveId(prev => (prev === id ? null : id)); // mobile/tap

  return (
    <div>
      {/* Liste de textes interactive */}
      <ul className={styles.textList}>
        {zones.map((z) => (
          <li
            key={z.id}
            className={activeId === z.id ? styles.activeText : ''}
            onMouseEnter={() => handleEnter(z.id)}
            onMouseLeave={handleLeave}
            onClick={() => handleClick(z.id)}
          >
            {z.label}
          </li>
        ))}
      </ul>

      {/* Image + overlay sombre + image clippée pour zone active + hotspots */}
      <div className={styles.wrapper}>
        {/* Image de base */}
        <img className={styles.baseImage} src={image} alt="Interactive tutorial" />

        {/* Overlay sombre (toujours présent mais visible/invisible via classe) */}
        <div
          className={`${styles.overlay} ${activeZone ? styles.visible : ''}`}
        />

        {/* Image du dessus clippée (toujours là aussi, mais visible/invisible) */}
        <img
          className={`${styles.baseImage} ${styles.highlightImage} ${
            activeZone ? styles.visible : ''
          }`}
          src={image}
          alt=""
          style={{ clipPath: buildClipPolygon(activeZone) }}
        />

        {/* Hotspots invisibles pour activer depuis l’image */}
        {zones.map((z) => (
          <div
            key={z.id}
            className={styles.hotspot}
            style={{ top: z.top, left: z.left, width: z.width, height: z.height }}
            onMouseEnter={() => handleEnter(z.id)}
            onMouseLeave={handleLeave}
            onClick={() => handleClick(z.id)}
            aria-label={z.label}
          />
        ))}
      </div>
    </div>
  );
}