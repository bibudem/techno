import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';
import { DotButton, useDotButton } from './useDotButton';
import { PrevButton, NextButton, usePrevNextButtons } from './usePrevNextButtons';

export default function PhotoCarousel({
  slides,
  slidesToScroll = 2,
  options = {},
  ariaLabel = 'Galerie de photos',
}) {
const emblaOptions = {
  slidesToScroll: 1,       // ✅ 1 item par scroll
  align: 'start',
  containScroll: 'keepSnaps', // ✅ 1 snap par slide (pour 1 dot = 1 item)
  loop: false,
  ...options,
};

  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions);

  const { selectedIndex, onDotButtonClick } = useDotButton(emblaApi);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  const slideLabel = useCallback(
    (i) => {
      const s = slides[i];
      return s?.title || s?.alt || `Élément ${i + 1}`;
    },
    [slides]
  );

  const isExternalHref = (href) => {
    if (!href) return false;
    // http(s), mailto, tel
    return /^(https?:\/\/|mailto:|tel:)/i.test(href);
  };

  return (
    <section className={styles.embla} aria-label={ariaLabel}>
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
                    {slide.title && <h3 className={styles.caption__title}>{slide.title}</h3>}

                    {slide.description && (
                      <p className={styles.caption__desc}>{slide.description}</p>
                    )}

                    {slide.href &&
                      (isExternalHref(slide.href) ? (
                        <a
                          className={styles.caption__link}
                          href={slide.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {slide.hrefLabel || 'Ouvrir le lien'}
                        </a>
                      ) : (
                        <Link className={styles.caption__link} to={slide.href}>
                          {slide.hrefLabel || 'En savoir plus'}
                        </Link>
                      ))}
                  </figcaption>
                )}
              </div>
            </figure>
          ))}
        </div>
      </div>

      <div className={styles.embla__controls}>
        <div className={styles.embla__buttons}>
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            aria-label="Aller au groupe précédent"
          />
          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            aria-label="Aller au groupe suivant"
          />
        </div>

       <div
  className={styles.embla__dots}
  role="tablist"
  aria-label="Navigation de la galerie"
>
  {slides.map((_, i) => (
    <DotButton
      key={slides[i]?.id || i}
      onClick={() => emblaApi && emblaApi.scrollTo(i)}
      className={`${styles.embla__dot} ${i === selectedIndex ? styles['is-selected'] : ''}`}
      aria-label={`Aller à l’item ${i + 1} : ${slideLabel(i)}`}
      aria-current={i === selectedIndex ? 'true' : 'false'}
    />
  ))}
</div>
      </div>
    </section>
  );
}