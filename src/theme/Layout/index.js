import React from 'react';
import Layout from '@theme-original/Layout';
import LienExterne from '@site/src/components/LienExterne';

export default function LayoutWrapper(props) {
  return (
    <>
      <Layout {...props} />
      <LienExterne />
    </>
  );
}