// Parcours de réservation en deux voies pour les studios :
// - Première utilisation : réserver d'abord le studio (créneaux plus rares),
//   puis un technicien au même créneau.
// - Je connais déjà le studio : lien direct vers la réservation.
// À placer dans le prop beforeReserve de StudioCard, sans reserveLink ni secondaryLinks.
import React, {useState} from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import {
  ArrowRight,
  ArrowSquareOut,
  BookOpenText,
  CalendarCheck,
  CheckCircle,
  UserFocus,
} from '@phosphor-icons/react';
import styles from './styles.module.css';

const EXTERNAL_LINK_PATTERN = /^(?:[a-z][a-z\d+\-.]*:|\/\/)/i;

function getLinkProps(link) {
  if (EXTERNAL_LINK_PATTERN.test(link)) {
    return {href: link, target: '_blank', rel: 'noopener noreferrer'};
  }
  return {to: link};
}

export default function ParcoursReservation({
  reserveLink,
  accompagnementLink,
  guideLink,
  question = 'Avez-vous déjà utilisé ce studio?',
  // Quoi faire si aucun technicien n'est libre au créneau du studio.
  sansTechnicien = 'Gardez votre réservation du studio. Sur place, le guide d\u2019utilisation pas à pas vous accompagne.',
}) {
  const [premiereOuverte, setPremiereOuverte] = useState(false);
  const [studioReserve, setStudioReserve] = useState(false);
  const panneauId = React.useId();

  return (
    <div className={styles.parcours}>
      <p className={styles.question}>{question}</p>

      <div className={styles.options}>
        <button
          type="button"
          className={clsx(styles.option, premiereOuverte && styles.optionActive)}
          aria-expanded={premiereOuverte}
          aria-controls={panneauId}
          onClick={() => setPremiereOuverte((ouvert) => !ouvert)}
        >
          <UserFocus size={26} weight="duotone" className={styles.optionIcon} aria-hidden="true" />
          <span className={styles.optionTitle}>Première utilisation</span>
          <span className={styles.optionText}>
            Réservez un technicien qui vous accompagnera sur place.
          </span>
        </button>

        <Link
          {...getLinkProps(reserveLink)}
          className={styles.option}
          data-ignore-external="true"
        >
          <CalendarCheck size={26} weight="duotone" className={styles.optionIcon} aria-hidden="true" />
          <span className={styles.optionTitle}>
            Je connais déjà le studio
            <ArrowSquareOut size={16} className={styles.optionExternal} aria-hidden="true" />
          </span>
          <span className={styles.optionText}>Réservez directement le studio.</span>
        </Link>
      </div>

      {premiereOuverte && (
        <ol id={panneauId} className={styles.etapes}>
          <li className={clsx(styles.etape, studioReserve && styles.etapeFaite)}>
            <span className={styles.etapeNumero} aria-hidden="true">
              {studioReserve ? <CheckCircle size={22} weight="fill" /> : '1'}
            </span>
            <div className={styles.etapeContenu}>
              <p className={styles.etapeTitre}>Réservez le studio</p>
              <p className={styles.etapeTexte}>
                Les créneaux du studio partent vite : commencez par là.{' '}
                <strong>Notez la date et l'heure choisies.</strong>
              </p>
              <Link
                {...getLinkProps(reserveLink)}
                className={clsx(styles.action, !studioReserve && styles.actionPrimaire)}
                data-ignore-external="true"
                onClick={() => setStudioReserve(true)}
              >
                Réserver le studio
                <ArrowSquareOut size={16} aria-hidden="true" />
              </Link>
            </div>
          </li>

          <li className={clsx(styles.etape, studioReserve && styles.etapeCourante)}>
            <span className={styles.etapeNumero} aria-hidden="true">2</span>
            <div className={styles.etapeContenu}>
              <p className={styles.etapeTitre}>Réservez un technicien au même créneau</p>
              <p className={styles.etapeTexte}>
                La réservation du studio n'inclut pas de technicien. Choisissez la même
                date et la même heure dans l'horaire des techniciens.
              </p>
              <Link
                {...getLinkProps(accompagnementLink)}
                className={clsx(styles.action, studioReserve && styles.actionPrimaire)}
                data-ignore-external="true"
              >
                Réserver un technicien
                <ArrowSquareOut size={16} aria-hidden="true" />
              </Link>
              {sansTechnicien && (
                <p className={styles.etapeNote}>
                  <strong>Aucun technicien libre à ce créneau?</strong> {sansTechnicien}
                </p>
              )}
            </div>
          </li>
        </ol>
      )}

      {guideLink && (
        <Link to={guideLink} className={styles.guide}>
          <BookOpenText size={24} weight="duotone" className={styles.guideIcon} aria-hidden="true" />
          <span className={styles.guideTitre}>Guide d'utilisation pas à pas</span>
          <ArrowRight size={18} className={styles.guideArrow} aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}
