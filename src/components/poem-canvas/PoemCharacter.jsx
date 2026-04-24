// src/components/poem-canvas/PoemCharacter.jsx
import './PoemCharacter.css';

export default function PoemCharacter({ characterSrc, isActive, activeCueIndex = -1 }) {
  // Calculate vertical shift based on line index (approx 60px per line)
  const translateY = activeCueIndex >= 0 ? activeCueIndex * 60 : 0;

  return (
    <div 
      className={`char-wrapper ${isActive ? 'active' : ''}`}
      style={{ transform: `translateY(${translateY}px)` }}
    >
      <img src={characterSrc} alt="Animated character" className="char-img" />
      {isActive && <div className="point-pulse" />}
    </div>
  );
}
