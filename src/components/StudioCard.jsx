import React from 'react';

const StudioCard = ({ title, location, description, mapLink, reserveLink, reserveText }) => (
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

    {reserveLink && reserveText && (
      <div className="card__footer">
        <a
          href={reserveLink}
          className="button button--primary button--block"
          style={{ marginTop: "1rem" }}
        >
          {reserveText}
        </a>
      </div>
    )}
  </div>
);

export default StudioCard;