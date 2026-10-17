import React, { useEffect, useState } from 'react';

export default function Disponibilite({ oclc, label }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    let annule = false;
    setData(null);
    setError(false);

    fetch(`https://api.bib.umontreal.ca/atrium/docs/${oclc}/statut-circulation`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((json) => {
        if (!json?.permalien) throw new Error('Réponse incomplète');
        if (annule) return;
        setData({
          dispo: Number(json['total-exemplaires-disponibles']) || 0,
          url: json.permalien,
        });
      })
      .catch(() => {
        if (!annule) setError(true);
      });

    return () => {
      annule = true;
    };
  }, [oclc]);

  // Sans réponse de l'API, on renvoie quand même vers la notice Sofia
  const notice = `https://umontreal.on.worldcat.org/oclc/${oclc}`;

  if (error) {
    return (
      <p role="status">
        <strong>{label}</strong> : disponibilité impossible à afficher pour le moment.{' '}
        <a href={notice} target="_blank" rel="noopener noreferrer">Vérifier dans Sofia</a>
      </p>
    );
  }
  if (!data) return <p role="status">{label} : chargement de la disponibilité…</p>;

  const message = data.dispo > 0
    ? `${data.dispo} disponible${data.dispo > 1 ? 's' : ''}`
    : 'Aucun exemplaire disponible pour le moment';

  const baseStyle = {
    display: 'block',
    border: '1px solid var(--gris-100)',
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