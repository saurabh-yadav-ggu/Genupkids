/**
 * Keypad Component
 * Input interface for each player to enter answers
 */

import React from 'react';
import { PLAYER_COLORS, RADIUS, SPACING } from '../styles/theme.js';
import { soundManager } from '../utils/soundManager.js';

export const Keypad = ({ player, input, active, feedback, onKey }) => {
  const colors = PLAYER_COLORS[player];
  const isRed = player === 0;
  const numBorder = isRed ? '#F5B0BA' : '#B0C0F5';

  const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3];

  const keyStyle = (bg, textCol, border, shadow, extraDisabled = false) => ({
    background: bg,
    color: textCol,
    border: `3px solid ${border}`,
    boxShadow: active && !extraDisabled ? `0 5px 0 ${shadow}` : 'none',
    borderRadius: RADIUS.md,
    fontSize: 26,
    fontWeight: 900,
    fontFamily: "'Nunito', sans-serif",
    cursor: active && !extraDisabled ? 'pointer' : 'default',
    minHeight: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: active && !extraDisabled ? 1 : 0.22,
    pointerEvents: active && !extraDisabled ? 'auto' : 'none',
    userSelect: 'none',
    transition: `transform 0.07s, box-shadow 0.07s`,
    WebkitTapHighlightColor: 'transparent',
  });

  const handlePress = (value) => {
    if (!active) return;
    soundManager.play('tap');
    onKey(value);
  };

  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: SPACING.sm,
        padding: `${SPACING.sm}px ${SPACING.sm}px 14px`,
        background: colors.lightBg,
        borderRight: isRed ? '4px solid #F0F0F0' : 'none',
      }}
    >
      <div
        style={{
          borderRadius: RADIUS.full,
          padding: SPACING.sm,
          textAlign: 'center',
          fontSize: 15,
          fontWeight: 900,
          color: '#fff',
          background: colors.primary,
          boxShadow: `0 4px 0 ${colors.dark}`,
        }}
      >
        {isRed ? '🔴' : '🔵'} Player {player + 1}
      </div>

      <div
        id={`ans${player}`}
        style={{
          borderRadius: RADIUS.lg,
          border: `4px solid ${colors.primary}`,
          minHeight: 68,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: input.length > 2 ? 30 : 44,
          fontWeight: 900,
          color: input ? colors.primary : '#D0D0D0',
          background: '#fff',
          letterSpacing: input ? 2 : 8,
        }}
      >
        {input || '_ _ _'}
      </div>

      {feedback === 'ok' && (
        <div
          style={{
            borderRadius: RADIUS.lg,
            padding: `${SPACING.sm}px ${SPACING.md}px`,
            textAlign: 'center',
            fontSize: 14,
            fontWeight: 900,
            background: '#E6FBF0',
            color: '#1A7A42',
            border: '3px solid #52C87A',
          }}
        >
          ✓ Correct! +1 Point 🎉
        </div>
      )}
      {feedback === 'bad' && (
        <div
          style={{
            borderRadius: RADIUS.lg,
            padding: `${SPACING.sm}px ${SPACING.md}px`,
            textAlign: 'center',
            fontSize: 14,
            fontWeight: 900,
            background: '#FFEAED',
            color: '#C01F35',
            border: '3px solid #F88CA3',
          }}
        >
          ✗ Try Again!
        </div>
      )}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: SPACING.sm,
        }}
      >
        {nums.map((n) => (
          <button
            key={n}
            onClick={() => handlePress(String(n))}
            style={keyStyle('#fff', colors.primary, numBorder, numBorder)}
          >
            {n}
          </button>
        ))}

        <button
          onClick={() => handlePress('del')}
          style={keyStyle(colors.lightBg, colors.primary, colors.light, colors.light)}
        >
          ← X
        </button>

        <button
          onClick={() => handlePress('0')}
          style={keyStyle('#fff', colors.primary, numBorder, numBorder)}
        >
          0
        </button>

        <button
          onClick={() => handlePress('go')}
          style={keyStyle(colors.primary, '#fff', colors.dark, colors.dark, !input)}
        >
          GO →
        </button>
      </div>
    </div>
  );
};
