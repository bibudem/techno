// src/components/CardGrid/CardGrid.jsx
import React, { useState } from 'react';
import {
  Cube,
  VirtualReality,
  Circuitry,
  Nut,
  Scissors,
  Robot,
  Slideshow,
  FilmReel,
  Desktop,
  Microphone,
  VideoCamera,
  MonitorPlay,
  TreeStructure,
  Password,
  WifiHigh,
  Network,
  Printer,
  Scan,
  Laptop,
  Monitor,
  DeviceTablet,
  FilmStrip,
  AppWindow,
  Headphones,
  DesktopTower,
  BookOpenText,
  FileAudio,
  Waveform,
  FileVideo,
  Record,
  PencilSimpleLine,
  CubeFocus,
} from '@phosphor-icons/react';
import styles from './CardGrid.module.css';

const iconMap = {
  Cube,
  VirtualReality,
  Circuitry,
  Nut,
  Scissors,
  Robot,
  Slideshow,
  FilmReel,
  Desktop,
  Microphone,
  VideoCamera,
  MonitorPlay,
  TreeStructure,
  Password,
  WifiHigh,
  Network,
  Printer,
  Scan,
  Laptop,
  Monitor,
  DeviceTablet,
  FilmStrip,
  AppWindow,
  Headphones,
  DesktopTower,
  BookOpenText,
  FileAudio,
  Waveform,
  FileVideo,
  Record,
  PencilSimpleLine,
  CubeFocus,
};

export default function CardGrid({ items }) {
  const [hovered, setHovered] = useState(null);
  const [focused, setFocused] = useState(null);

  return (
    <div className={styles.grid} role="list">
      {items.map((item, idx) => {
        const Icon = iconMap[item.icon];
        const isActive = hovered === idx || focused === idx;
        const titleId = `card-title-${idx}`;
        const descId = `card-desc-${idx}`;

        return (
          <a
            key={idx}
            href={item.link}
            className={styles.card}
            role="listitem"
            aria-labelledby={titleId}
            aria-describedby={descId}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setFocused(idx)}
            onBlur={() => setFocused(null)}
          >
            <div className={styles.header}>
              {Icon && (
                <Icon
                  className={styles.icon}
                  size={24}
                  aria-hidden="true"
                />
              )}
              <div className={styles.titleContainer}>
                <h2 id={titleId} className={styles.title}>
                  {item.title}
                </h2>
              </div>
            </div>
            <p id={descId} className={styles.description}>
              {item.description}
            </p>
          </a>
        );
      })}
    </div>
  );
}