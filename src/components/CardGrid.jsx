import React, {useState} from "react";
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
} from "@phosphor-icons/react";

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
  // on stocke l'index de la carte survolée
  const [hovered, setHovered] = useState(null);

  return (
    <div
      className="grid"
      style={{
        display: "grid",
        gap: "1rem",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      }}
    >
      {items.map((item, index) => {
        const Icon = item.icon && iconMap[item.icon];
        return (
          <a
            key={index}
            href={item.link}
            className="card card--clickable"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            style={{
              backgroundColor:
                hovered === index ? "#FFDC81" : "var(--jaune)",
              color: "#000",
              borderRadius: "8px",
              padding: "1rem",
              textDecoration: "none",
              transition:
                "transform 0.2s, box-shadow 0.2s, background-color 0.2s",
              display: "block",
            }}
          >
            <div
              className="card__header"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              {Icon && (
                <Icon size={24} color="#BC8800" />
              )}
              <h3 style={{ margin: 0, fontWeight: 500 }}>{item.title}</h3>
            </div>
            <div className="card__body">
              <p>{item.description}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
}