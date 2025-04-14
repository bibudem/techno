import React, { useEffect, useState } from 'react';

function getLundiEtDimanche() {
    const today = new Date();
    const lundi = new Date(today); // clone
    const dimanche = new Date(today); // clone aussi
  
    // Lundi = aujourd'hui - (jour de la semaine - 1)
    lundi.setDate(today.getDate() - today.getDay() + 1);
  
    // Dimanche = lundi + 6 jours
    dimanche.setDate(lundi.getDate() + 6);
  
    return { lundi, dimanche };
  }

function formatDateStr(d) {
  return d.toISOString().split('T')[0];
}

export function HoraireAujourdhui({ codeBib = "ss" }) {
  const [horaire, setHoraire] = useState(null);
  const todayStr = formatDateStr(new Date());

  useEffect(() => {
    fetch(`https://api.bib.umontreal.ca/horaires?bibs=${codeBib}&format=json`)
      .then((res) => res.json())
      .then((data) => {
        const h = data.evenements.find(
          (evt) =>
            evt.service === "soutien-informatique" &&
            evt.date.startsWith(todayStr)
        );
        setHoraire(h);
      });
  }, [codeBib]);

  return (
    <div>
      <h3>Aujourd’hui</h3>
      {horaire ? (
        <p><strong>{horaire.sommaire}</strong></p>
      ) : (
        <p>Pas de soutien informatique aujourd’hui.</p>
      )}
    </div>
  );
}

export function HoraireSemaine({ codeBib = "ss" }) {
  const [horaires, setHoraires] = useState([]);
  const todayStr = formatDateStr(new Date());

  useEffect(() => {
    const { lundi, dimanche } = getLundiEtDimanche();

    fetch(
      `https://api.bib.umontreal.ca/horaires?bibs=${codeBib}&debut=${formatDateStr(
        lundi
      )}&fin=${formatDateStr(dimanche)}&format=json`
    )
      .then((res) => res.json())
      .then((data) => {
        const soutien = data.evenements
          .filter((evt) => evt.service === "soutien-informatique")
          .sort((a, b) => new Date(a.date) - new Date(b.date));
        setHoraires(soutien);
      });
  }, [codeBib]);

  if (horaires.length === 0) {
    return <p>Aucun horaire disponible cette semaine.</p>;
  }

  return (
    <div style={{ overflowX: 'auto' }}>
      <h3>Horaire de la semaine</h3>
      <table>
        <thead>
          <tr>
            {horaires.map((h) => {
              const date = new Date(h.date);
              const jour = date.toLocaleDateString('fr-CA', {
                weekday: 'short',
                day: 'numeric',
              });
              const isToday = h.date.startsWith(todayStr);
              return (
                <th key={h.id} style={isToday ? { background: '#E5F0F8', fontWeight: 'bold' } : {}}>
                  {jour}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {horaires.map((h) => {
              const isToday = h.date.startsWith(todayStr);
              return (
                <td key={h.id} style={isToday ? { background: '#E5F0F8' } : {}}>
                  {h.sommaire}
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}