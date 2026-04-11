/**
 * DiceFace Component
 * Displays a single die face with pips based on value
 */

import React from 'react';
import { PIPS } from '../constants/game.js';
import { PLAYER_COLORS, RADIUS } from '../styles/theme.js';

export const DiceFace = ({ value, player, spinning }) => {
  const colors = PLAYER_COLORS[player];
  const emptyColor = player === 0 ? '#F5B0BA' : '#B0C0F5';

  return (
    <div
      style={{
        width: 80,
        height: 80,
        borderRadius: RADIUS.xl,
        background: '#fff',
        position: 'relative',
        border: `4px solid ${colors.primary}`,
        boxShadow: `0 6px 0 ${colors.dark}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: spinning ? 'diceSpin 0.09s linear infinite' : 'none',
        flexShrink: 0,
      }}
    >
      {!value ? (
        <span
          style={{
            fontSize: 30,
            fontWeight: 900,
            color: emptyColor,
          }}
        >
          ?
        </span>
      ) : (
        PIPS[value]?.map(([cx, cy], i) => (
          <div
            key={i}
            style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              background: colors.primary,
              position: 'absolute',
              left: (cx / 100) * 68 + 2 - 6,
              top: (cy / 100) * 68 + 2 - 6,
            }}
          />
        ))
      )}
    </div>
  );
};
