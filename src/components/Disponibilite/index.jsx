import React, { useEffect, useState } from 'react';

export default function Disponibilite({ oclc, label }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    fetch(`https://api.bib.umontreal.ca/atrium/docs/${oclc}/statut-circulation`)
      .then((res) => res.json())
      .then((json) => {
        setData({
          dispo: json['total-exemplaires-disponibles'],
          url: json.permalien,
        });
      })
      .catch(() => setError(true));
  }, [oclc]);

  if (error) return <p>Erreur de chargement</p>;
  if (!data) return <p>Chargement...</p>;

  const message = data.dispo > 0
    ? `Disponible : ${data.dispo}`
    : 'Aucune disponibilité';

  const baseStyle = {
    display: 'block',
    border: '1px solid var(--c-dddddd)',
    borderRadius: '8px',
    padding: '1rem',
    margin: '0.5rem 0',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    transform: hover ? 'translateY(-2px)' : 'none',
    boxShadow: hover ? '0 4px 8px rgba(0, 0, 0, 0.08)' : 'none',
  };

  return (
    <a
      href={data.url}
      target="_blank"
      rel="noopener noreferrer"
      style={baseStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <strong>{label}</strong>
      <br />
      {message}
    </a>
  );
}