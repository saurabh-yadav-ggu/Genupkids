/**
 * WinScreen Component
 * Victory screen displayed when a player wins
 */

import React from 'react';
import { PLAYER_COLORS, RADIUS } from '../styles/theme.js';
import { Confetti } from './Confetti.jsx';

export const WinScreen = ({ winner, scores, onPlayAgain }) => {
  const colors = PLAYER_COLORS[winner];

  return (
    <div
      style={{
        minHeight: 640,
        background: 'rgba(26,26,46,0.85)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: RADIUS.xl,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Confetti />

      <div
        style={{
          background: '#fff',
          borderRadius: 24,
          padding: '32px 38px',
          textAlign: 'center',
          maxWidth: 320,
          width: '92%',
          border: '4px solid #E8EAFF',
          animation: 'winPop 0.55s cubic-bezier(.34,1.56,.64,1)',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: 'inline-block',
            fontSize: 13,
            fontWeight: 900,
            letterSpacing: 2,
            padding: '6px 20px',
            borderRadius: RADIUS.full,
            border: `3px solid ${colors.light}`,
            marginBottom: 10,
            textTransform: 'uppercase',
            background: colors.lightBg,
            color: colors.primary,
          }}
        >
          🏆 WINNER!
        </div>

        <div
          style={{
            fontSize: 60,
            margin: '6px 0',
            animation: 'scorePop 1s ease-in-out infinite',
          }}
        >
          ⭐
        </div>

        <div
          style={{
            fontSize: 28,
            fontWeight: 900,
            color: colors.primary,
            margin: '16px 0 8px',
          }}
        >
          Player {winner + 1}
        </div>

        <div
          style={{
            fontSize: 12,
            color: '#888',
            fontWeight: 700,
            marginBottom: '16px',
          }}
        >
          {winner === 0 ? '🔴' : '🔵'} Final Score: {scores[winner]}/{scores[1 - winner]}
        </div>

        <button
          onClick={onPlayAgain}
          style={{
            background: colors.primary,
            color: '#fff',
            border: 'none',
            borderRadius: RADIUS.full,
            padding: '10px 20px',
            fontSize: 14,
            fontWeight: 900,
            cursor: 'pointer',
            fontFamily: "'Nunito', sans-serif",
            boxShadow: `0 4px 0 ${colors.dark}`,
          }}
        >
          🔄 Play Again
        </button>
      </div>
    </div>
  );
};
