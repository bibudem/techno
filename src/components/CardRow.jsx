import React, { useEffect, useRef, useState } from 'react';
import CardBib from './CardBib';

export default function CardRow({ children, gap = 32, minCardWidth = 300, maxCardsPerRow = 4, hoverBoost = 50, maxWidth = 380 }) {
  const containerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [baseWidth, setBaseWidth] = useState(minCardWidth);
  const cardCount = React.Children.count(children);

  useEffect(() => {
    const resize = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      const possibleCount = Math.floor((containerWidth + gap) / (minCardWidth + gap));
      const count = Math.min(possibleCount, maxCardsPerRow);
      const totalGap = gap * (count - 1);
      const availableWidth = containerWidth - totalGap;
      setBaseWidth(availableWidth / count);
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [gap, minCardWidth, maxCardsPerRow]);

  return (
    <div
      ref={containerRef}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: `${gap}px`,
        overflowX: 'hidden',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }}
    >
     {React.Children.map(children, (child, index) => {
  const isHovered = index === hoveredIndex;
  const flexGrow = isHovered ? 1.1 : 1;
  return React.cloneElement(child, {
    style: {
      flexGrow,
      flexShrink: 1,
      flexBasis: 0,
      transition: 'flex-grow 300ms ease',
      ...child.props.style,
    },
    onMouseEnter: () => setHoveredIndex(index),
    onMouseLeave: () => setHoveredIndex(null),
  });
})}
    </div>
  );
}
