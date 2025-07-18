import React from 'react';
import {useLocation} from '@docusaurus/router';
import {useThemeConfig} from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import styles from './Breadcrumbs.module.css';

export default function CustomBreadcrumbs({items}) {
  const location = useLocation();
  const {breadcrumbs} = useThemeConfig();

  // Cas vide
  if (!items || items.length === 0) return null;

  // On injecte nos deux éléments statiques au début
  const customItems = [
    {label: 'Site des bibliothèques', href: 'https://bib.umontreal.ca'},
    {label: 'studio-bib', href: '/'},
    ...items.slice(1), // on skippe le "home" par défaut
  ];

  return (
    <nav className={styles.breadcrumbsContainer} aria-label="Fil d’Ariane">
      <ol className={styles.breadcrumbs}>
        {customItems.map((item, idx) => (
          <li key={idx} className={styles.breadcrumbItem}>
            {idx !== customItems.length - 1 ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}