// src/components/CardGrid/CardGrid.jsx
import React, { useState } from "react";
import * as Ph from "@phosphor-icons/react";

const iconMap = {
  Cube: Ph.Cube,
  VirtualReality: Ph.VirtualReality,
  Circuitry: Ph.Circuitry,
  Nut: Ph.Nut,
  Scissors: Ph.Scissors,
  Robot: Ph.Robot,
  Slideshow: Ph.Slideshow,
  FilmReel: Ph.FilmReel,
  Desktop: Ph.Desktop,
  Microphone: Ph.Microphone,
  VideoCamera: Ph.VideoCamera,
  MonitorPlay: Ph.MonitorPlay,
  TreeStructure: Ph.TreeStructure,
  Password: Ph.Password,
  WifiHigh: Ph.WifiHigh,
  Network: Ph.Network,
  Printer: Ph.Printer,
  Scan: Ph.Scan,
  Laptop: Ph.Laptop,
  Monitor: Ph.Monitor,
  DeviceTablet: Ph.DeviceTablet,
  FilmStrip: Ph.FilmStrip,
  AppWindow: Ph.AppWindow,
  Headphones: Ph.Headphones,
  DesktopTower: Ph.DesktopTower,
  BookOpenText: Ph.BookOpenText,
  FileAudio: Ph.FileAudio,
  Waveform: Ph.Waveform,
  FileVideo: Ph.FileVideo,
  Record: Ph.Record,
  PencilSimpleLine: Ph.PencilSimpleLine,
  CubeFocus: Ph.CubeFocus,
};

export default function CardGrid({ items }) {
  const [hovered, setHovered] = useState(null);
  const [focused, setFocused] = useState(null);

  return (
    <div
      className="grid"
      style={{
        display: "grid",
        gap: "1rem",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      }}
      role="list"
    >
      {items.map((item, idx) => {
        const Icon = iconMap[item.icon];
        const isHovered = hovered === idx;
        const isFocused = focused === idx;
        const isActive = isHovered || isFocused;
        const accentColor = isActive ? "var(--gris-600)" : "var(--gris-700)";

        return (
          <a
            key={idx}
            href={item.link}
            className="card card--clickable"
            role="listitem"
            aria-labelledby={`card-title-${idx}`}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setFocused(idx)}
            onBlur={() => setFocused(null)}
            style={{
              backgroundColor: isHovered
                ? "var(--jaune-pale)"
                : "var(--jaune)",
              color: "var(--gris-700)",
              borderRadius: "8px",
              padding: "1rem",
              textDecoration: "none",
              display: "block",
              willChange: "background-color, transform, box-shadow, outline",
              transition:
                "background-color 0.3s ease-in-out, transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              transform: isHovered ? "translateY(-4px)" : "none",
              boxShadow: isHovered
                ? "0 4px 12px rgba(0,0,0,0.1)"
                : "none",
              outline: isFocused ? "3px solid var(--rouge-orange-600)" : "none",
              outlineOffset: isFocused ? "2px" : undefined,
            }}
          >
            <div
              className="card__header"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              {Icon && (
                <Icon
                  size={24}
                  color={accentColor}
                  aria-hidden="true"
                />
              )}
              <div
                style={{
                  flex: 1,
                  borderBottom: `3px solid ${accentColor}`,
                  paddingBottom: "0.25rem",
                }}
              >
                <h3
                  id={`card-title-${idx}`}
                  style={{
                    margin: 0,
                    fontWeight: 500,
                    color: accentColor,
                  }}
                >
                  {item.title}
                </h3>
              </div>
            </div>
            <div className="card__body">
              <p style={{ margin: 0, lineHeight: 1.2, fontSize: "1rem" }}>
                {item.description}
              </p>
            </div>
          </a>
        );
      })}
    </div>
  );
}