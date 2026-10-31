// Pied de page repris de bibweb (src/components/coquille/PiedDePage.astro).
// Seules les adresses propres au site des bibliothèques sont adaptées ici.
import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import {
  CaretDown,
  Info,
  InstagramLogo,
  PaperPlaneTilt,
  Siren,
  User,
  YoutubeLogo,
} from '@phosphor-icons/react';
import { isExternalLink } from '@site/src/utils/links';
import styles from './Footer.module.css';

const CONDITIONS = 'https://bib.umontreal.ca/conditions-utilisation';
const ACCUEIL_BIB = 'https://bib.umontreal.ca/';
const ALT_SCEAU = 'Les bibliothèques, Université de Montréal – Accueil';

const LIENS_AIDE = [
  { libelle: 'Nous joindre', href: '/a-propos/nous-joindre', Icone: PaperPlaneTilt },
  { libelle: 'Mon dossier', href: 'https://umontreal.account.worldcat.org/account', rel: 'noopener noreferrer', Icone: User },
  { libelle: 'À propos', href: '/a-propos/', Icone: Info },
];

const SITES_CONNEXES = [
  { libelle: 'Boîte à outils', fonction: 'Guides pour vos recherches', href: 'https://boite-outils.bib.umontreal.ca/', point: 'var(--rouge-orange-500)' },
  { libelle: 'Studio·bib', fonction: 'Informatique et création numérique', href: 'https://studio.bib.umontreal.ca/', point: 'var(--jaune)' },
  { libelle: 'Papyrus', fonction: 'Dépôt institutionnel', href: 'https://umontreal.scholaris.ca/', point: 'var(--vert-fonce)' },
  { libelle: 'GéoIndex', fonction: 'Données géospatiales', href: 'https://geoapp.bibl.ulaval.ca/', rel: 'noopener noreferrer', point: 'var(--bleu-200)' },
  { libelle: 'Collections spéciales', fonction: 'Objets numériques', href: 'https://collections-speciales.bib.umontreal.ca/', point: 'var(--rose-300)' },
];

const RESEAUX = [
  { libelle: 'YouTube des Bibliothèques', href: 'https://www.youtube.com/user/BibliothequesUdeM', Icone: YoutubeLogo },
  { libelle: "Instagram de l'Université de Montréal", href: 'https://www.instagram.com/umontreal/', Icone: InstagramLogo },
];

const LIENS_QUEUE = [
  { libelle: 'Confidentialité', href: 'https://vie-privee.umontreal.ca/confidentialite/' },
  { libelle: "Conditions d'utilisation", href: CONDITIONS },
  { libelle: 'Accessibilité', href: '/a-propos/accessibilite' },
];

function Lien({ href, rel, children, ...reste }) {
  return isExternalLink(href) ? (
    <a href={href} rel={rel} {...reste}>{children}</a>
  ) : (
    <Link to={href} {...reste}>{children}</Link>
  );
}

function Licence() {
  return (
    <div className={styles.licence} prefix="cc: http://creativecommons.org/ns# dct: http://purl.org/dc/terms/">
      <svg className={styles.iconeCc} xmlns="http://www.w3.org/2000/svg" viewBox="5.5 -3.5 64 64" aria-hidden="true" focusable="false">
        <path d="M37.441-3.5q13.428 0 22.857 9.372 4.513 4.514 6.857 10.314 2.343 5.8 2.344 12.314-.001 6.572-2.314 12.313-2.315 5.743-6.828 10.143-4.684 4.628-10.629 7.086-5.942 2.457-12.285 2.457c-6.343 0-8.276-.808-12.143-2.429q-5.8-2.428-10.4-7.027t-7-10.372C5.5 34.899 5.5 32.767 5.5 28.5q0-6.343 2.428-12.2t7.057-10.486Q24.127-3.499 37.441-3.5m.116 5.772q-10.971 0-18.458 7.657-3.772 3.829-5.8 8.6a25.2 25.2 0 0 0-2.029 9.972q-.001 5.144 2.029 9.913 2.029 4.774 5.8 8.516t8.515 5.715a25.7 25.7 0 0 0 9.943 1.971q5.14.001 9.973-1.999 4.827-2.001 8.713-5.771 7.485-7.313 7.484-18.344 0-5.314-1.943-10.057-1.941-4.742-5.654-8.458-7.718-7.715-18.573-7.715m-.401 20.915-4.287 2.229q-.686-1.428-1.685-2-1-.57-1.858-.571-4.285 0-4.286 5.657 0 2.57 1.085 4.113 1.086 1.544 3.201 1.544 2.8 0 3.944-2.743l3.942 2q-1.257 2.344-3.486 3.686-2.227 1.343-4.914 1.343-4.286.001-6.915-2.629-2.628-2.628-2.628-7.313 0-4.571 2.657-7.257t6.715-2.686q5.944-.002 8.515 4.627m18.457 0-4.229 2.229q-.686-1.427-1.686-2-1.003-.57-1.914-.571-4.286 0-4.287 5.657 0 2.57 1.086 4.113 1.084 1.544 3.201 1.544 2.799 0 3.941-2.743l4 2q-1.314 2.344-3.541 3.686a9.23 9.23 0 0 1-4.857 1.343q-4.343.001-6.941-2.629-2.603-2.628-2.602-7.313 0-4.571 2.658-7.257 2.655-2.685 6.713-2.686 5.944-.002 8.458 4.627" />
      </svg>
      <svg className={styles.iconeCc} xmlns="http://www.w3.org/2000/svg" viewBox="5.5 -3.5 64 64" aria-hidden="true" focusable="false">
        <path d="M37.443-3.5q13.483 0 22.742 9.257Q69.499 15.072 69.5 28.5q0 13.486-9.145 22.456Q50.641 60.5 37.443 60.5q-12.973 0-22.514-9.43Q5.501 41.642 5.5 28.5t9.429-22.742Q24.186-3.501 37.443-3.5m.114 5.772q-10.914 0-18.457 7.657-7.83 8.001-7.829 18.572 0 10.63 7.77 18.398 7.771 7.772 18.514 7.771 10.685.002 18.629-7.828 7.543-7.257 7.543-18.343 0-10.913-7.656-18.571-7.656-7.656-18.514-7.656m8.572 18.285v13.085h-3.656v15.542h-9.944V33.643h-3.656V20.557q0-.857.599-1.457.602-.6 1.457-.6h13.144q.8 0 1.428.6t.628 1.457m-13.087-8.228q0-4.513 4.458-4.514c4.458-.001 4.457 1.504 4.457 4.514q0 4.457-4.457 4.457c-4.457 0-4.458-1.486-4.458-4.457" />
      </svg>
      <a href={CONDITIONS} rel="license">Sauf indications contraires, ce site est sous licence CC BY 4.0</a>
    </div>
  );
}

export default function Footer() {
  // Sans JS ou sur grand écran, la liste reste visible et le titre reste un simple titre
  const [etroit, setEtroit] = useState(false);
  const [ouvert, setOuvert] = useState(false);
  const [anime, setAnime] = useState(false);

  useEffect(() => {
    const requete = window.matchMedia('(width < 900px)');
    const actualiser = () => {
      setEtroit(requete.matches);
      setOuvert(false);
      setAnime(false);
    };
    actualiser();
    requete.addEventListener('change', actualiser);
    return () => requete.removeEventListener('change', actualiser);
  }, []);

  return (
    <footer className={styles.pied} data-site-footer>
      <div className={styles.local}>
        <div className={styles.interieur}>
          <div className={styles.signature}>
            <a className={styles.signatureSceau} href={ACCUEIL_BIB}>
              <img src="/img/logo-bib-sceau-bleu.svg" alt={ALT_SCEAU} width="302" height="302" loading="lazy" decoding="async" />
            </a>
            <h2 className={styles.titre}>Les bibliothèques de l'Université de Montréal</h2>
          </div>

          <div className={styles.colonnes}>
            <div className={styles.colonne}>
              <h3 className={styles.sousTitre}>Besoin d'aide?</h3>
              <ul className={styles.liste}>
                {LIENS_AIDE.map(({ libelle, href, rel, Icone }) => (
                  <li key={libelle}>
                    <Lien href={href} rel={rel}>
                      <Icone size={18} aria-hidden="true" />
                      {libelle}
                    </Lien>
                  </li>
                ))}
              </ul>
              <p className={styles.urgence}>
                {/* Numéro insécable : il ne se coupe jamais en deux */}
                <a href="tel:+15143437771">
                  <span className={styles.sirene}>
                    <Siren size={18} aria-hidden="true" />
                  </span>
                  {'Urgence UdeM 514 343‑7771'}
                </a>
              </p>
              <ul className={styles.reseaux}>
                {RESEAUX.map(({ libelle, href, Icone }) => (
                  <li key={libelle}>
                    <a href={href} aria-label={libelle}>
                      <Icone size={24} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`${styles.colonne} ${styles.pliable}`}>
              <h3 className={styles.sousTitre}>
                {etroit ? (
                  <button
                    type="button"
                    className={styles.bascule}
                    aria-expanded={ouvert}
                    aria-controls="pied-liste-sites"
                    onClick={() => {
                      // L'ouverture s'anime après un clic seulement, jamais au chargement
                      setAnime(true);
                      setOuvert(!ouvert);
                    }}
                  >
                    Sites connexes
                    <CaretDown className={styles.chevron} size={18} weight="bold" aria-hidden="true" />
                  </button>
                ) : (
                  'Sites connexes'
                )}
              </h3>
              <ul
                className={`${styles.liste} ${styles.listeSites}`}
                id="pied-liste-sites"
                hidden={etroit && !ouvert}
                data-anime={anime ? '' : undefined}
              >
                {SITES_CONNEXES.map(({ libelle, fonction, href, rel, point }) => (
                  <li key={libelle}>
                    <a href={href} rel={rel}>
                      <span className={styles.point} style={{ '--point': point }} aria-hidden="true" />
                      <span>
                        {libelle}
                        <span className={styles.fonction}>{fonction}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`${styles.colonne} ${styles.colonneLogo}`}>
              <a href={ACCUEIL_BIB}>
                <img src="/img/logo-bib-sceau-bleu.svg" alt={ALT_SCEAU} width="302" height="302" loading="lazy" decoding="async" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.queue}>
        <div className={`${styles.interieur} ${styles.rangeeQueue}`}>
          <div className={styles.groupeQueue}>
            <Licence />
          </div>
          <div className={`${styles.groupeQueue} ${styles.liensQueue}`}>
            {LIENS_QUEUE.map(({ libelle, href }) => (
              <Lien key={libelle} href={href}>{libelle}</Lien>
            ))}
            <button type="button" onClick={() => window.klaro?.show()}>
              Paramètres des témoins
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
