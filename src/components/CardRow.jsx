import React, { useEffect, useRef, useState } from 'react';

export default function CardRow({
  children,
  gap = 32,
  minCardWidth = 300,
  maxCardsPerRow = 4,
  hoverBoost = 1.1,
  maxWidth = 380,
}) {
  const containerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [baseWidth, setBaseWidth] = useState(minCardWidth);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const resize = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const possibleCount = Math.floor((containerWidth + gap) / (minCardWidth + gap));
      const count = Math.min(possibleCount, maxCardsPerRow);
      const totalGap = gap * (count - 1);
      const availableWidth = containerWidth - totalGap;

      setBaseWidth(availableWidth / count);
      setIsMobile(window.innerWidth <= 768);
    };

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [gap, minCardWidth, maxCardsPerRow]);

  return (
    <div
      ref={containerRef}
      className="card-row"
      style={{
        display: 'flex',
        flexWrap: isMobile ? 'nowrap' : 'wrap',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '0rem' : `${gap}px`,
        overflowX: 'hidden',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
      }}
    >
      {React.Children.map(children, (child, index) => {
        const isHovered = index === hoveredIndex;
        const flexGrow = isMobile ? 1 : isHovered ? hoverBoost : 1;

        return React.cloneElement(child, {
          style: {
            flexGrow,
            flexShrink: 1,
            flexBasis: isMobile ? '100%' : `${baseWidth}px`,
            width: isMobile ? '100%' : 'auto',
            transition: 'flex-grow 300ms ease',
            ...child.props.style,
          },
          onMouseEnter: () => !isMobile && setHoveredIndex(index),
          onMouseLeave: () => !isMobile && setHoveredIndex(null),
        });
      })}
    </div>
  );
}