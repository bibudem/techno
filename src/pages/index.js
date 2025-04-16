import React from 'react';
import Layout from '@theme/Layout';
import PageAccueil from '@site/src/components/PageAccueil';
import HeroAide from '@site/src/components/HeroAide';


export default function Home() {
  return (
    <Layout title="Accueil" description="Page d'accueil studio·bib">
      <main>
        <PageAccueil />
        <HeroAide />
      </main>
    </Layout>
  );
}