// src/components/GlobalLayout.jsx
import React from 'react';
import Layout from '@theme/Layout';
import Footer from './Footer';

export default function GlobalLayout({ title, description, children }) {
  return (
    <Layout title={title} description={description}>
      <main>{children}</main>
      <Footer />
    </Layout>
  );
}
