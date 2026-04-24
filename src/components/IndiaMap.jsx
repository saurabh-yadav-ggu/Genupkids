import React, { useEffect, useRef, useState } from 'react';

const IndiaMap = ({ onStateClick, selectedState, showLabels = true }) => {
  const containerRef = useRef(null);
  const [svgContent, setSvgContent] = useState('');

  useEffect(() => {
    // Fetch the SVG file from the public directory
    fetch('/MapChart_Map.svg')
      .then(res => {
        if (!res.ok) throw new Error('SVG not found');
        return res.text();
      })
      .then(data => {
        const cleanSvg = data.replace(/<\?xml.*\?>/g, '');
        setSvgContent(cleanSvg);
      })
      .catch(err => console.error('Error loading SVG:', err));
  }, []);

  useEffect(() => {
    if (!containerRef.current || !svgContent) return;

    const svgElement = containerRef.current.querySelector('svg');
    if (!svgElement) return;

    // Toggle Labels
    const labels = svgElement.querySelectorAll('text, tspan');
    labels.forEach(label => {
      label.style.display = showLabels ? 'block' : 'none';
      label.style.pointerEvents = 'none'; // Ensure labels don't block clicks
    });

    const paths = svgElement.querySelectorAll('path');
    paths.forEach(path => {
      const stateId = path.id;
      if (!stateId) return;

      // Handle selection class
      if (stateId === selectedState) {
        path.classList.add('selected');
      } else {
        path.classList.remove('selected');
      }

      // Add click handler
      path.onclick = (e) => {
        e.stopPropagation();
        onStateClick(stateId);
      };
    });
  }, [svgContent, selectedState, onStateClick, showLabels]);

  return (
    <div 
      className="map-svg-container" 
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};

export default IndiaMap;
