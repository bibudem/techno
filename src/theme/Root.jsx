// src/theme/Root.jsx
import React from 'react';
import Footer from '@site/src/components/Footer/Footer';

export default function Root({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}