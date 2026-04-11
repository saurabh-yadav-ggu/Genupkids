/**
 * Header Component
 * Game title and new game button
 */

import React from 'react';
import { COLORS, RADIUS, SPACING } from '../styles/theme.js';

export const Header = ({ onNewGame }) => {
  return (
    <div
      style={{
        padding: `${SPACING.md}px ${SPACING.lg}px`,
        textAlign: 'center',
        background: '#FFF',
        borderBottom: `3px solid ${COLORS.borderLight}`,
      }}
    >
      <h1
        style={{
          margin: 0,
          fontSize: 26,
          fontWeight: 900,
          color: '#1A1A2E',
          marginBottom: SPACING.sm,
        }}
      >
        🎮 MathRace!
      </h1>

      <p
        style={{
          margin: 0,
          fontSize: 11,
          color: '#888',
          fontWeight: 700,
          marginBottom: SPACING.md,
        }}
      >
        Who's faster at math? Let's race! 🏃‍♂️
      </p>

      <button
        onClick={onNewGame}
        style={{
          background: '#FFD700',
          color: '#1A1A2E',
          border: 'none',
          borderRadius: RADIUS.full,
          padding: `${SPACING.sm}px ${SPACING.lg}px`,
          fontSize: 13,
          fontWeight: 900,
          cursor: 'pointer',
          fontFamily: "'Nunito', sans-serif",
          boxShadow: `0 4px 0 #D4A500`,
          transition: 'all 0.1s ease',
        }}
      >
        🔄 New Game
      </button>
    </div>
  );
};
