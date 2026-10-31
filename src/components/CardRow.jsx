import React, { useState, useEffect } from 'react';

export default function CardRow({ children, gap = 32, hoverBoost = 1.1 }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // initial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className="card-row"
      style={{
        display: isMobile ? 'grid' : 'flex',
        gridTemplateColumns: isMobile ? 'repeat(2, minmax(0, 1fr))' : undefined,
        flexWrap: 'wrap',
        gap: isMobile ? '0.75rem' : `${gap}px`,
        alignItems: 'stretch',
      }}
    >
      {React.Children.map(children, (child, index) => {
        const isHovered = index === hoveredIndex;

        return React.cloneElement(child, {
          style: {
            flexGrow: isHovered ? hoverBoost : 1,
            flexShrink: 1,
            flexBasis: 0,
            minWidth: isMobile ? 0 : '250px',
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