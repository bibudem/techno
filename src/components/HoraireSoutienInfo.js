import React, { useEffect, useState } from 'react';
import styles from './HoraireSoutien.module.css';

// ✅ Version locale de formatDateStr — plus de toISOString()
function formatDateStr(d) {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function formatDateLocale(d) {
  return d.toLocaleDateString('fr-CA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function getLundi(offset = 0, baseDate = new Date()) {
  const lundi = new Date(baseDate);
  lundi.setDate(baseDate.getDate() - baseDate.getDay() + 1 + offset * 7);
  return lundi;
}

export function HoraireSemaine({ codeBib = "ss" }) {
  const [horairesParSemaine, setHorairesParSemaine] = useState(new Map());
  const [offsetSemaine, setOffsetSemaine] = useState(0);
  const todayStr = formatDateStr(new Date());

  useEffect(() => {
    const base = new Date();
    const lundi0 = getLundi(0, base);
    const dimanche7 = new Date(lundi0);
    dimanche7.setDate(lundi0.getDate() + 55);

    fetch(
      `https://api.bib.umontreal.ca/horaires?bibs=${codeBib}&debut=${formatDateStr(
        lundi0
      )}&fin=${formatDateStr(dimanche7)}&format=json`
    )
      .then((res) => res.json())
      .then((data) => {
        const map = new Map();

        for (let i = 0; i < 8; i++) {
          const lundi = getLundi(i, base);
          const dimanche = new Date(lundi);
          dimanche.setDate(lundi.getDate() + 6);

          const lundiStr = formatDateStr(lundi);
          const dimancheStr = formatDateStr(dimanche);

          const semaine = data.evenements
            .filter((evt) => {
              const dateLocal = new Date(evt.date);
              const dateStr = formatDateStr(dateLocal);
              return (
                evt.service === "soutien-informatique" &&
                dateStr >= lundiStr &&
                dateStr <= dimancheStr
              );
            })
            .sort((a, b) => a.date.localeCompare(b.date));

          map.set(i, semaine);
        }

        setHorairesParSemaine(map);
      });
  }, [codeBib]);

  const baseDate = new Date();
  const lundi = getLundi(offsetSemaine, baseDate);
  const dimanche = new Date(lundi);
  dimanche.setDate(lundi.getDate() + 6);

  const joursSemaine = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(lundi);
    d.setDate(lundi.getDate() + i);
    return d;
  });

  const horaires = horairesParSemaine.get(offsetSemaine) || [];
  const horairesMap = Object.fromEntries(
    horaires.map((h) => [formatDateStr(new Date(h.date)), h.sommaire])
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