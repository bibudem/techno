import { useCallback, useEffect, useState } from 'react';

export function usePrevNextButtons(emblaApi) {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  const onPrevButtonClick = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const onNextButtonClick = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('reInit', onSelect);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick };
}

export function PrevButton({ className = '', ...props }) {
  return (
    <button
      type="button"
      className={`embla__button embla__button--prev ${className}`}
      {...props}
    >
     <svg className="embla__button__svg" viewBox="0 0 24 24" aria-hidden="true">
  <path
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M15 18l-6-6 6-6"
  />
</svg>
    </button>
  );
}

export function NextButton({ className = '', ...props }) {
  return (
    <button
      type="button"
      className={`embla__button embla__button--next ${className}`}
      {...props}
    >
      <svg className="embla__button__svg" viewBox="0 0 24 24" aria-hidden="true">
  <path
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M9 18l6-6-6-6"
  />
</svg>
    </button>
  );
}