import React from "react";

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
      {items.map((item, index) => (
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
            transition: "transform 0.2s, box-shadow 0.2s, background-color 0.2s",
            display: "block",
          }}
        >
          <div className="card__header">
            <h3>{item.title}</h3>
          </div>
          <div className="card__body">
            <p>{item.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default CardGrid;