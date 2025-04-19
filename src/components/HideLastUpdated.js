import {useEffect} from 'react';

export default function HideLastUpdated() {
  useEffect(() => {
    const el = document.querySelector('.theme-last-updated');
    if (el) el.style.display = 'none';
  }, []);
  return null;
}