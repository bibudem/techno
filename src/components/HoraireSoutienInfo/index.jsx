import React, { useEffect, useId, useMemo, useState } from 'react';
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

function getLundi(offset = 0, baseDate = new Date()) {
  const lundi = new Date(baseDate);
  lundi.setDate(baseDate.getDate() - baseDate.getDay() + 1 + offset * 7);
  return lundi;
}

export function HoraireSemaine({ codeBib = "ss" }) {
  const [horairesParSemaine, setHorairesParSemaine] = useState(new Map());
  const [offsetSemaine, setOffsetSemaine] = useState(0);
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const todayStr = formatDateStr(new Date());
  const pickerId = useId();

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
    const base = new Date();
    const lundi0 = getLundi(0, base);
    const list = [];

    for (let weekOffset = 0; weekOffset < 8; weekOffset++) {
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
  }, [horairesParSemaine, todayStr]);

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

        <div className={styles.dayTabs} role="tablist" aria-label="Jours de la semaine">
          {dayItems.map((day) => (
            <button
              key={day.dateStr}
              type="button"
              role="tab"
              id={`${pickerId}-tab-${day.idx}`}
              aria-controls={`${pickerId}-panel`}
              aria-selected={selectedDayIndex === day.idx}
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
    </div>
  );
}
