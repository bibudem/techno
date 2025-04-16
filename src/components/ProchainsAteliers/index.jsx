import React, { useEffect, useState } from 'react';
import styles from '../PageAccueil/styles.module.css';

// Fonction utilitaire pour convertir "23 avr. 2025" → Date JS
function parseDateFr(dateStr) {
  const mois = {
    'janv.': '01',
    'févr.': '02',
    'mars': '03',
    'avr.': '04',
    'mai': '05',
    'juin': '06',
    'juil.': '07',
    'août': '08',
    'sept.': '09',
    'oct.': '10',
    'nov.': '11',
    'déc.': '12',
  };

  const [jour, moisAbrégé, année] = dateStr.split(' ');
  const moisNum = mois[moisAbrégé];
  if (!moisNum) return null;
  return new Date(`${année}-${moisNum}-${jour.padStart(2, '0')}`);
}

export default function ProchainsAteliers() {
  const [formations, setFormations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.bib.umontreal.ca/formations/discipline/art-cinema-musique')
      .then(res => res.json())
      .then(data => {
        const àVenir = data
          .map(f => ({
            ...f,
            isoDate: parseDateFr(f.date),
          }))
          .filter(f => f.isoDate && f.isoDate >= new Date())
          .sort((a, b) => a.isoDate - b.isoDate)
          .slice(0, 4);

        setFormations(àVenir);
        setLoading(false);
      })
      .catch(() => {
        setFormations([]);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.cardWorkshops}>
      <div className={styles.cardHeader}>Prochains ateliers</div>
      <ul className={styles.cardList}>
        {loading ? (
          <li>Chargement...</li>
        ) : formations.length === 0 ? (
          <li>Aucun atelier à venir.</li>
        ) : (
          formations.map(({ date, titre, typeLocalisation, url, lieu }, idx) => (
            <li key={idx} className={styles.cardItem}>
              <div className={styles.cardItemTop}>
                <span className={styles.cardDate}>{date}</span>
                <span> — </span>
                <a href={url} className={styles.cardTitle} target="_blank" rel="noopener noreferrer">
                  {titre}
                </a>
              </div>
              <div className={styles.cardLocation}>
                {typeLocalisation === 'en-ligne'
                  ? 'En ligne'
                  : lieu || 'Lieu non précisé'}
              </div>
            </li>
          ))
        )}
      </ul>
      <div className={styles.cardFooter}>
        <a href="https://calendrier.bib.umontreal.ca/calendar" className={styles.cardMore}>
          Voir tous les ateliers →
        </a>
      </div>
    </div>
  );
}