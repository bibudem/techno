import {useEffect, useRef} from 'react';

// Ajoute `className` à l'élément la première fois qu'il devient visible
// (ex. lancer une animation CSS au défilement), puis arrête d'observer.
// Si l'utilisateur préfère réduire les animations, la classe n'est jamais ajoutée.
export default function useRevealOnScroll(className, {threshold = 0.5} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !className) return undefined;

    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add(className);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          el.classList.add(className);
          obs.unobserve(el);
        }
      },
      {threshold},
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [className, threshold]);

  return ref;
}
