import React, { useEffect, useState } from 'react';
import styles from './HoraireSoutien.module.css';

function formatDateStr(d) {
  return d.toISOString().split('T')[0]; // "YYYY-MM-DD"
}

function formatDateLocale(d) {
  return d.toLocaleDateString('fr-CA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function getLundi(offset = 0) {
  const today = new Date();
  const lundi = new Date(today);
  lundi.setDate(today.getDate() - today.getDay() + 1 + offset * 7);
  return lundi;
}

export function HoraireSemaine({ codeBib = "ss" }) {
  const [horairesParSemaine, setHorairesParSemaine] = useState(new Map());
  const [offsetSemaine, setOffsetSemaine] = useState(0);
  const todayStr = formatDateStr(new Date());

  useEffect(() => {
    const lundi0 = getLundi(0);
    const dimanche7 = new Date(lundi0);
    dimanche7.setDate(lundi0.getDate() + 55); // 8 semaines * 7 - 1 = 55

    fetch(
      `https://api.bib.umontreal.ca/horaires?bibs=${codeBib}&debut=${formatDateStr(
        lundi0
      )}&fin=${formatDateStr(dimanche7)}&format=json`
    )
      .then((res) => res.json())
      .then((data) => {
        const map = new Map();

        for (let i = 0; i < 8; i++) {
          const lundi = getLundi(i);
          const dimanche = new Date(lundi);
          dimanche.setDate(lundi.getDate() + 6);

          const lundiStr = formatDateStr(lundi);
          const dimancheStr = formatDateStr(dimanche);

          const semaine = data.evenements
            .filter(
              (evt) =>
                evt.service === "soutien-informatique" &&
                evt.date.slice(0, 10) >= lundiStr &&
                evt.date.slice(0, 10) <= dimancheStr
            )
            .sort((a, b) => a.date.localeCompare(b.date));

          map.set(i, semaine);
        }

        setHorairesParSemaine(map);
      });
  }, [codeBib]);

  const lundi = getLundi(offsetSemaine);
  const dimanche = new Date(lundi);
  dimanche.setDate(lundi.getDate() + 6);

  const joursSemaine = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(lundi);
    d.setDate(d.getDate() + i);
    return d;
  });

  const horaires = horairesParSemaine.get(offsetSemaine) || [];
  const horairesMap = Object.fromEntries(
    horaires.map((h) => [h.date.slice(0, 10), h.sommaire])
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div>
          <h3>Horaire de la semaine</h3>
          <p className={styles.dateRange}>
            du {formatDateLocale(lundi)} au {formatDateLocale(dimanche)}
          </p>
        </div>
        <div className={styles.navButtons}>
          <button
            onClick={() => offsetSemaine > 0 && setOffsetSemaine(offsetSemaine - 1)}
            disabled={offsetSemaine === 0}
            className={`${styles.navButton} ${offsetSemaine === 0 ? styles.disabled : ''}`}
          >
            ←
          </button>
          <button
            onClick={() => offsetSemaine < 7 && setOffsetSemaine(offsetSemaine + 1)}
            disabled={offsetSemaine === 7}
            className={`${styles.navButton} ${offsetSemaine === 7 ? styles.disabled : ''}`}
          >
            →
          </button>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              {joursSemaine.map((date) => {
                const jour = date.toLocaleDateString('fr-CA', {
                  weekday: 'short',
                  day: 'numeric',
                });
                const isToday = formatDateStr(date) === todayStr && offsetSemaine === 0;
                return (
                  <th key={jour} className={isToday ? styles.todayHeader : ''}>
                    {jour}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              {joursSemaine.map((date) => {
                const dateStr = formatDateStr(date);
                const isToday = dateStr === todayStr && offsetSemaine === 0;
                const contenu = horairesMap[dateStr] || 'Fermé';
                return (
                  <td key={dateStr} className={isToday ? styles.todayCell : ''}>
                    {contenu}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}