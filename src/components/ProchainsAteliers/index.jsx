import React, { useEffect, useState } from 'react';
import styles from '../PageAccueil/styles.module.css';
import { CalendarBlank, MapPin, Monitor, ArrowRight, ArrowUpRight } from '@phosphor-icons/react';

function parseDateFr(dateStr) {
  const mois = {
    janv: '01',
    févr: '02',
    mars: '03',
    avr: '04',
    mai: '05',
    juin: '06',
    juil: '07',
    juill: '07',
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

  const moisNum = mois[moisStr?.toLowerCase()];
  if (!moisNum) return null;

  // Date locale (minuit à Montréal) : new Date('AAAA-MM-JJ') serait lue en UTC
  // et tomberait la veille au soir, ce qui exclurait les formations du jour.
  const date = new Date(Number(annéeStr), Number(moisNum) - 1, Number(jourStr));
  return Number.isNaN(date.getTime()) ? null : date;
}

export default function ProchainsAteliers() {
  const [formations, setFormations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erreur, setErreur] = useState(false);

  useEffect(() => {
    fetch('https://api.bib.umontreal.ca/formations/discipline/informatique-creation-medias')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => {
        const àVenir = (Array.isArray(data) ? data : [])
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
        setErreur(true);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.cardWorkshops}>
      <h2 className={styles.cardHeader}>Prochaines formations</h2>
      <ul className={styles.cardList}>
        {loading ? (
          <li role="status">Chargement des formations…</li>
        ) : erreur ? (
          <li role="status">
            Impossible d’afficher les prochaines formations pour le moment. Consultez le
            calendrier complet ci-dessous.
          </li>
        ) : formations.length === 0 ? (
          <li>Aucune formation à venir.</li>
        ) : (
          formations.map(({ date, debut, fin, titre, typeLocalisation, url, lieu, imageVedette }, idx) => (
            <li key={idx} className={styles.cardItem}>
              {imageVedette && (
                <img
                  className={styles.cardVignette}
                  src={imageVedette}
                  alt=""
                  width="300"
                  height="300"
                  loading="lazy"
                  decoding="async"
                  // Image introuvable : on garde l'alignement, sans icône d'image brisée
                  onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }}
                />
              )}
              <div className={styles.cardItemTop}>
                <p className={styles.cardDate}>
                  <CalendarBlank className={styles.icon} aria-hidden="true" />
                  {date}{debut && ` · ${debut}${fin ? `–${fin}` : ''}`}
                </p>
                <h3 className={styles.cardTitle}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {titre}
                    {/* plusieurs séances peuvent porter le même titre */}
                    <span className="sr-only">, le {date}</span>
                  </a>
                </h3>
                {/* Absent de bibweb : ici, le lieu décide souvent de l'inscription */}
                <p className={styles.cardLocation}>
                  {typeLocalisation === 'en-ligne' ? (
                    <>
                      <Monitor className={styles.icon} aria-hidden="true" />
                      En ligne
                    </>
                  ) : (
                    <>
                      <MapPin className={styles.icon} aria-hidden="true" />
                      {lieu || 'Lieu non précisé'}
                    </>
                  )}
                </p>
              </div>
              <span className={styles.cardPastille} aria-hidden="true">
                <ArrowUpRight className={styles.cardFleche} size={24} weight="light" />
              </span>
            </li>
          ))
        )}
      </ul>
      <div className={styles.cardFooter}>
        <a
          href="https://calendrier.bib.umontreal.ca/calendar?cid=7690&t=m&d=0000-00-00&cal=7690&inc=0"
          className={`button button--secondary ${styles.spacesButtonLink}`}
        >
          <span>Voir toutes les formations</span>
          <ArrowRight
            size={20}
            weight="light"
            className={styles.spacesButtonIcon}
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  );
}
