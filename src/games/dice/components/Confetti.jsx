/**
 * Confetti Component
 * Displays falling confetti pieces for celebrations
 */

import React from 'react';
import { CONFETTI_COLORS, CONFETTI_COUNT } from '../constants/game.js';

const generateConfettiPieces = () => {
  return Array.from({ length: CONFETTI_COUNT }, (_, i) => ({
    id: i,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    left: Math.random() * 100,
    size: 8 + Math.random() * 9,
    dur: 2 + Math.random() * 2,
    delay: Math.random() * 1.5,
    shape: i % 4 === 0 ? '50%' : '4px',
  }));
};

export const Confetti = () => {
  const pieces = React.useMemo(() => generateConfettiPieces(), []);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        borderRadius: 20,
      }}
    >
      {pieces.map((piece) => (
        <div
          key={piece.id}
          style={{
            position: 'absolute',
            top: -12,
            left: `${piece.left}%`,
            width: piece.size,
            height: piece.size,
            background: piece.color,
            borderRadius: piece.shape,
            animation: `confettiFall ${piece.dur}s ${piece.delay}s linear forwards`,
          }}
        />
      ))}
    </div>
  );
};
