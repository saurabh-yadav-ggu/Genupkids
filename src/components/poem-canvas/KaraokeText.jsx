// src/components/poem-canvas/KaraokeText.jsx
import { useEffect, useRef } from 'react';
import './KaraokeText.css';

export default function KaraokeText({ cues, activeCueIndex }) {
  const lineRefs = useRef([]);

  useEffect(() => {
    if (activeCueIndex >= 0 && lineRefs.current[activeCueIndex]) {
      lineRefs.current[activeCueIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [activeCueIndex]);

  return (
    <div className="karaoke-text">
      {cues.map((cue, i) => (
        <span
          key={i}
          ref={(el) => (lineRefs.current[i] = el)}
          className={`karaoke-line ${
            i === activeCueIndex ? 'active' : i < activeCueIndex ? 'past' : ''
          }`}
          style={i === activeCueIndex ? {
            background: '#FFD700',
            color: '#000000',
            fontWeight: '900',
            transform: 'scale(1.05)'
          } : {}}
        >
          {cue.text}
        </span>
      ))}
    </div>
  );
}
