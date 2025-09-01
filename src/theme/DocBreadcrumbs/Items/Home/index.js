import React from 'react';
import Link from '@docusaurus/Link';
import { House } from '@phosphor-icons/react';

export default function HomeBreadcrumbItem() {
  return (
    <>
      <li className="breadcrumbs__item">
        <Link
          className="breadcrumbs__link"
          href="https://bib.umontreal.ca"
        >
          <House size={16} style={{ verticalAlign: 'text-bottom', marginRight: '0.25rem' }} />
          Les bibliothèques UdeM
        </Link>
      </li>
      <li className="breadcrumbs__item">
        <Link
          className="breadcrumbs__link"
          href="/"
        >
          studio·bib
        </Link>
      </li>
    </>
  );
}