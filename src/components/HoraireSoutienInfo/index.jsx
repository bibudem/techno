import React, { useEffect, useId, useMemo, useRef, useState } from 'react';
import styles from './HoraireSoutien.module.css';

// Version locale (pas de toISOString(), qui passerait en UTC)
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

function formatWeekdayShort(d) {
  return d.toLocaleDateString('fr-CA', {
    weekday: 'short',
  }).replace('.', '');
}

function formatDayLong(d) {
  return d.toLocaleDateString('fr-CA', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });
}

// Lundi de la semaine de baseDate (+ offset semaines). getDay() vaut 0 le
// dimanche : (getDay() + 6) % 7 donne le nombre de jours écoulés depuis lundi.
function getLundi(offset = 0, baseDate = new Date()) {
  const lundi = new Date(baseDate);
  lundi.setHours(0, 0, 0, 0);
  lundi.setDate(lundi.getDate() - ((lundi.getDay() + 6) % 7) + offset * 7);
  return lundi;
}

const NB_SEMAINES = 8;

export function HoraireSemaine({ codeBib = "ss" }) {
  const [horairesParSemaine, setHorairesParSemaine] = useState(new Map());
  const [offsetSemaine, setOffsetSemaine] = useState(0);
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [etat, setEtat] = useState('chargement'); // chargement | pret | erreur
  // La date du jour n'est connue que dans le navigateur : le HTML statique,
  // généré au build, ne doit contenir aucune date (sinon hydratation incohérente).
  const [aujourdhui, setAujourdhui] = useState(null);
  const pickerId = useId();
  const tabRefs = useRef([]);
  const todayStr = aujourdhui ? formatDateStr(aujourdhui) : '';

  useEffect(() => {
    setAujourdhui(new Date());
  }, []);

  useEffect(() => {
    if (!aujourdhui) return undefined;
    let annule = false;
    setEtat('chargement');
    const base = aujourdhui;
    const lundi0 = getLundi(0, base);
    const dimanche7 = new Date(lundi0);
    dimanche7.setDate(lundi0.getDate() + 55);

    fetch(
      `https://api.bib.umontreal.ca/horaires?bibs=${codeBib}&debut=${formatDateStr(
        lundi0
      )}&fin=${formatDateStr(dimanche7)}&format=json`
    )
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (annule) return;
        const evenements = Array.isArray(data?.evenements) ? data.evenements : [];
        const map = new Map();

        for (let i = 0; i < NB_SEMAINES; i++) {
          const lundi = getLundi(i, base);
          const dimanche = new Date(lundi);
          dimanche.setDate(lundi.getDate() + 6);

          const lundiStr = formatDateStr(lundi);
          const dimancheStr = formatDateStr(dimanche);

          const semaine = evenements
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
        setEtat('pret');
      })
      .catch(() => {
        if (!annule) setEtat('erreur');
      });

    return () => {
      annule = true;
    };
  }, [codeBib, aujourdhui]);

  const baseDate = aujourdhui || new Date(0);
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

  const dayItems = joursSemaine.map((date, idx) => {
    const dateStr = formatDateStr(date);
    const contenu = horairesMap[dateStr] || 'Fermé';
    return {
      idx,
      dateStr,
      dayNumber: date.getDate(),
      shortLabel: formatWeekdayShort(date),
      longLabel: formatDayLong(date),
      content: contenu,
      isToday: dateStr === todayStr && offsetSemaine === 0,
      isClosed: !horairesMap[dateStr] || /\bfermé\b/i.test(contenu),
    };
  });

  const todayIndex = dayItems.findIndex((day) => day.isToday);

  const mobileFutureDays = useMemo(() => {
    if (!aujourdhui) return [];
    const lundi0 = getLundi(0, aujourdhui);
    const list = [];

    for (let weekOffset = 0; weekOffset < NB_SEMAINES; weekOffset++) {
      const horairesWeek = horairesParSemaine.get(weekOffset) || [];
      const horairesWeekMap = Object.fromEntries(
        horairesWeek.map((h) => [formatDateStr(new Date(h.date)), h.sommaire])
      );

      for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
        const dayDate = new Date(lundi0);
        dayDate.setDate(lundi0.getDate() + weekOffset * 7 + dayIndex);
        const dateStr = formatDateStr(dayDate);

        if (dateStr < todayStr) {
          continue;
        }

        const content = horairesWeekMap[dateStr] || 'Fermé';
        list.push({
          weekOffset,
          dayIndex,
          dateStr,
          label: `${formatDayLong(dayDate)} — ${content}`,
        });
      }
    }

    return list;
  }, [horairesParSemaine, todayStr, aujourdhui]);

  useEffect(() => {
    if (todayIndex >= 0) {
      setSelectedDayIndex(todayIndex);
      return;
    }

    setSelectedDayIndex((prev) => {
      const maxIndex = Math.max(dayItems.length - 1, 0);
      return Math.min(Math.max(prev, 0), maxIndex);
    });
  }, [offsetSemaine, todayIndex, dayItems.length]);

  const activeDay = dayItems[selectedDayIndex] || dayItems[0];
  const mobileSelectValue = mobileFutureDays.some((d) => d.dateStr === activeDay?.dateStr)
    ? activeDay.dateStr
    : mobileFutureDays[0]?.dateStr || '';

  function handleMobileDayChange(e) {
    const selectedDateStr = e.target.value;
    const targetDay = mobileFutureDays.find((day) => day.dateStr === selectedDateStr);

    if (!targetDay) {
      return;
    }

    setOffsetSemaine(targetDay.weekOffset);
    setSelectedDayIndex(targetDay.dayIndex);
  }

  // Onglets : une seule tabulation pour la liste, flèches / Début / Fin pour changer de jour
  function handleTabKeyDown(e) {
    const dernier = dayItems.length - 1;
    const cibles = {
      ArrowRight: selectedDayIndex === dernier ? 0 : selectedDayIndex + 1,
      ArrowLeft: selectedDayIndex === 0 ? dernier : selectedDayIndex - 1,
      Home: 0,
      End: dernier,
    };
    if (!(e.key in cibles)) return;
    e.preventDefault();
    setSelectedDayIndex(cibles[e.key]);
    tabRefs.current[cibles[e.key]]?.focus();
  }

  const pret = etat === 'pret';
  const derniereSemaine = NB_SEMAINES - 1;

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div>
          <h3>Horaire de la semaine</h3>
          <p className={styles.dateRange} aria-live="polite">
            {aujourdhui && `du ${formatDateLocale(lundi)} au ${formatDateLocale(dimanche)}`}
          </p>
        </div>
        {pret && (
          <div className={styles.navButtons}>
            <button
              type="button"
              aria-label="Semaine précédente"
              onClick={() => offsetSemaine > 0 && setOffsetSemaine(offsetSemaine - 1)}
              disabled={offsetSemaine === 0}
              className={`${styles.navButton} ${offsetSemaine === 0 ? styles.disabled : ''}`}
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              aria-label="Semaine suivante"
              onClick={() => offsetSemaine < derniereSemaine && setOffsetSemaine(offsetSemaine + 1)}
              disabled={offsetSemaine === derniereSemaine}
              className={`${styles.navButton} ${offsetSemaine === derniereSemaine ? styles.disabled : ''}`}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        )}
      </div>

      {etat === 'chargement' && (
        <p className={styles.dateRange} role="status">
          Chargement de l’horaire…
        </p>
      )}

      {etat === 'erreur' && (
        <p className={styles.dateRange} role="alert">
          L’horaire n’a pas pu être chargé. Consultez les{' '}
          <a href="https://bib.umontreal.ca/horaires">heures d’ouverture des bibliothèques</a>{' '}
          ou écrivez-nous par clavardage.
        </p>
      )}

      {pret && (
      <div className={styles.scheduleView}>
        <div className={styles.mobilePicker}>
          <label htmlFor={pickerId} className={styles.mobilePickerLabel}>
            Choisir un jour
          </label>
          <select
            id={pickerId}
            className={styles.mobileSelect}
            value={mobileSelectValue}
            onChange={handleMobileDayChange}
          >
            {mobileFutureDays.map((day) => (
              <option key={day.dateStr} value={day.dateStr}>
                {day.label}
              </option>
            ))}
          </select>
        </div>

        <div
          className={styles.dayTabs}
          role="tablist"
          aria-label="Jours de la semaine"
          onKeyDown={handleTabKeyDown}
        >
          {dayItems.map((day) => (
            <button
              key={day.dateStr}
              ref={(el) => {
                tabRefs.current[day.idx] = el;
              }}
              type="button"
              role="tab"
              id={`${pickerId}-tab-${day.idx}`}
              aria-controls={`${pickerId}-panel`}
              aria-selected={selectedDayIndex === day.idx}
              tabIndex={selectedDayIndex === day.idx ? 0 : -1}
              className={`${styles.dayTab} ${
                selectedDayIndex === day.idx ? styles.dayTabActive : ''
              } ${day.isToday ? styles.dayTabToday : ''}`}
              onClick={() => setSelectedDayIndex(day.idx)}
            >
              <span className={styles.dayTabName}>{day.shortLabel}</span>
              <span className={styles.dayTabNumber}>{day.dayNumber}</span>
            </button>
          ))}
        </div>

        {activeDay && (
          <section
            className={`${styles.dayPanel} ${activeDay.isToday ? styles.dayPanelToday : ''}`}
            role="tabpanel"
            id={`${pickerId}-panel`}
            aria-labelledby={`${pickerId}-tab-${activeDay.idx}`}
          >
            <p className={styles.dayPanelDate}>{activeDay.longLabel}</p>
            <p
              className={`${styles.dayPanelValue} ${
                activeDay.isClosed ? styles.dayPanelClosed : styles.dayPanelOpen
              }`}
            >
              {activeDay.content}
            </p>
          </section>
        )}
      </div>
      )}
    </div>
  );
}
