import React from 'react';
import Link from '@docusaurus/Link';

export default function HomeBreadcrumbItem() {
  return (
    <>
      <li className="breadcrumbs__item">
        <Link
          className="breadcrumbs__link"
          href="https://bib.umontreal.ca">
          Les bibliothèques UdeM
        </Link>
      </li>
      <li className="breadcrumbs__item">
        <Link
          className="breadcrumbs__link"
          href="/">
          studio·bib
        </Link>
      </li>
    </>
  );
}