import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Link from '@docusaurus/Link';

import { isExternalLink } from '@site/src/utils/links';
import styles from './styles.module.css';
import { DotButton, useDotButton } from './useDotButton';
import { PrevButton, NextButton, usePrevNextButtons } from './usePrevNextButtons';

// Carrousel de diapositives (image + titre + description + lien).
// Défilement d'une diapositive à la fois : un point de navigation = une diapositive.
export default function PhotoCarousel({
  slides,
  options = {},
  ariaLabel = 'Galerie de photos',
  headingLevel = 3,
}) {
  const Titre = `h${headingLevel}`;
  const emblaOptions = {
    slidesToScroll: 1,
    align: 'start',
    containScroll: 'keepSnaps',
    loop: false,
    ...options,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions);

  const { selectedIndex, onDotButtonClick } = useDotButton(emblaApi);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  const controlsButtons = (
    <div className={styles.embla__buttons}>
      <PrevButton
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
        aria-label="Diapositive précédente"
      />
      <NextButton
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
        aria-label="Diapositive suivante"
      />
    </div>
  );

  const slideLabel = useCallback(
    (i) => {
      const s = slides[i];
      return s?.title || s?.alt || `Élément ${i + 1}`;
    },
    [slides]
  );

  return (
    <section className={styles.embla} aria-label={ariaLabel}>
      <div className={styles.embla__controlsTop}>{controlsButtons}</div>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((slide, index) => (
            <figure className={styles.embla__slide} key={slide.id || index}>
              <div className={styles.embla__slide__inner}>
                <img
                  className={styles.embla__slide__img}
                  src={slide.src}
                  alt={slide.alt || slide.title || ''}
                  loading="lazy"
                  decoding="async"
                />

                {(slide.title || slide.description || slide.href) && (
                  <figcaption className={styles.caption}>
                    {slide.title && <Titre className={styles.caption__title}>{slide.title}</Titre>}

                    {slide.description && (
                      <p className={styles.caption__desc}>{slide.description}</p>
                    )}

                    {slide.href &&
                      (isExternalLink(slide.href) ? (
                        <a
                          className={styles.caption__link}
                          href={slide.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {slide.hrefLabel || 'Ouvrir le lien'}
                          {slide.title && <span className="sr-only"> : {slide.title}</span>}
                        </a>
                      ) : (
                        <Link className={styles.caption__link} to={slide.href}>
                          {slide.hrefLabel || 'En savoir plus'}
                          {slide.title && <span className="sr-only"> : {slide.title}</span>}
                        </Link>
                      ))}
                  </figcaption>
                )}
              </div>
            </figure>
          ))}
        </div>
      </div>

      <div className={styles.embla__controlsBottom}>
        <div
          className={styles.embla__dots}
          role="group"
          aria-label="Choisir une diapositive"
        >
          {slides.map((_, i) => (
            <DotButton
              key={slides[i]?.id || i}
              onClick={() => emblaApi && emblaApi.scrollTo(i)}
              className={`${styles.embla__dot} ${
                i === selectedIndex ? styles['is-selected'] : ''
              }`}
              aria-label={`Diapositive ${i + 1} : ${slideLabel(i)}`}
              aria-current={i === selectedIndex ? 'true' : undefined}
            />
          ))}
        </div>
      </div>

      {/* Annonce la diapositive affichée aux lecteurs d'écran */}
      <p className="sr-only" aria-live="polite">
        {`Diapositive ${selectedIndex + 1} sur ${slides.length} : ${slideLabel(selectedIndex)}`}
      </p>
    </section>
  );
}
