import React from 'react';

const StudioCard = ({
  title,
  location,
  description,
  mapLink,
  reserveLink,
  reserveText,
  secondaryLinks = [],
}) => (
  <div
    className="card"
    style={{
      padding: "1rem",
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    }}
  >
    <div className="card__header">
      <h3>{title}</h3>
    </div>

    <div className="card__body">
      {location && (
        <p>
          <strong>{location}</strong>
        </p>
      )}

      {mapLink && (
        <p>
          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#0057ac", textDecoration: "none" }}
          >
            Localiser sur Google Maps
          </a>
        </p>
      )}

      {description && <p>{description}</p>}
    </div>

    {(reserveLink || secondaryLinks.length > 0) && (
      <div
        className="card__footer"
        style={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        {reserveLink && reserveText && (
          <a href={reserveLink} className="button button--primary">
            {reserveText}
          </a>
        )}

        {secondaryLinks.slice(0, 2).map(({ href, text }, index) => (
          <a
            key={index}
            href={href}
            className="button button--secondary"
          >
            {text}
          </a>
        ))}
      </div>
    )}
  </div>
);

export default StudioCard;