import { useCallback, useEffect, useState } from 'react';

export function useDotButton(emblaApi) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback((api) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('reInit', onSelect);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return { selectedIndex };
}

export function DotButton(props) {
  return <button type="button" {...props} />;
}