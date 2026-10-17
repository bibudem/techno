import React from 'react';
import Layout from '@theme/Layout';
import PageAccueil from '@site/src/components/PageAccueil';
import Hero from '@site/src/components/Hero';


export default function Home() {
  return (
    <Layout title="Accueil" description="studio·bib, les services technologiques et créatifs des bibliothèques de l'Université de Montréal : studios balado, impression 3D, ateliers de fabrication, postes d'édition, accès à distance et soutien informatique.">
      <main>
        <PageAccueil />
        <Hero preset="aide" />
      </main>
    </Layout>
  );
}