import React from "react";
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
};

const CardGrid = ({ items }) => {
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

        if (item.icon && !Icon) {
          console.warn(`Icône "${item.icon}" introuvable dans iconMap`);
        }

        return (
          <a
            key={index}
            href={item.link}
            className="card card--clickable"
            style={{
              backgroundColor: "#0057ac",
              color: "#fff",
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
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              {Icon && <Icon size={24} />}
              <h3 style={{ margin: 0 }}>{item.title}</h3>
            </div>
            <div className="card__body">
              <p>{item.description}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default CardGrid;