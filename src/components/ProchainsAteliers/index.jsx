import React, { useEffect, useState } from 'react';
import styles from '../PageAccueil/styles.module.css';
import { CalendarBlank, MapPin, Monitor } from '@phosphor-icons/react';

function parseDateFr(dateStr) {
  const mois = {
    janv: '01',
    févr: '02',
    mars: '03',
    avr: '04',
    mai: '05',
    juin: '06',
    juil: '07',
    août: '08',
    sept: '09',
    oct: '10',
    nov: '11',
    déc: '12',
  };

  if (!dateStr) return null;

  const [jourStr, moisStr, annéeStr] = dateStr
    .trim()
    .replace(/\./g, '') // enlève les points (ex. "févr." -> "févr")
    .split(/\s+/); // découpe par espaces multiples

  const moisNum = mois[moisStr.toLowerCase()];
  if (!moisNum) return null;

  const jour = jourStr.padStart(2, '0');
  return new Date(`${annéeStr}-${moisNum}-${jour}`);
}

export default function ProchainsAteliers() {
  const [formations, setFormations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.bib.umontreal.ca/formations/discipline/informatique-creation-medias')
      .then(res => res.json())
      .then(data => {
        const àVenir = data
          .map(f => ({ ...f, isoDate: parseDateFr(f.date) }))
          .filter(f => {
            if (!f.isoDate) return false;
            const aujourdHui = new Date();
            aujourdHui.setHours(0, 0, 0, 0); // date à minuit
            return f.isoDate >= aujourdHui;
          })
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
      <h2 className={styles.cardHeader}>Prochains ateliers</h2>
      <ul className={styles.cardList}>
        {loading ? (
          <li>Chargement...</li>
        ) : formations.length === 0 ? (
          <li>Aucun atelier à venir.</li>
        ) : (
          formations.map(({ date, titre, typeLocalisation, url, lieu }, idx) => (
            <li key={idx} className={styles.cardItem}>
              <div className={styles.cardItemTop}>
                <div className={styles.cardMeta}>
                  <span className={styles.cardDate}>
                    <CalendarBlank size={16} className={styles.icon} />
                    {date}
                  </span>
                  <span className={styles.cardLocation}>
                    {typeLocalisation === 'en-ligne' ? (
                      <>
                        <Monitor size={16} className={styles.icon} />
                        En ligne
                      </>
                    ) : (
                      <>
                        <MapPin size={16} className={styles.icon} />
                        {lieu || 'Lieu non précisé'}
                      </>
                    )}
                  </span>
                </div>
                <h3 className={styles.cardTitle}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {titre}
                  </a>
                </h3>
              </div>
            </li>
          ))
        )}
      </ul>
      <div className={styles.cardFooter}>
        <a
          href="https://calendrier.bib.umontreal.ca/calendar"
          className={styles.cardMore}
        >
          Voir tous les ateliers →
        </a>
      </div>
    </div>
  );
}