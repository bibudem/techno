import React from 'react';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HeroAide from '@site/src/components/HeroAide';


export default function Home() {
  return (
    <Layout title="Accueil" description="Page d'accueil studio·bib">
      <main>
        <HomepageFeatures />
        <HeroAide />
      </main>
    </Layout>
  );
}