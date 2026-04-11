/**
 * ScoreBar Component
 * Displays current scores and progress bars for both players
 */

import React from 'react';
import { PLAYER_COLORS, RADIUS, SPACING } from '../styles/theme.js';
import { MAX_SCORE } from '../constants/game.js';

export const ScoreBar = ({ scores }) => {
  const renderPlayerScore = (playerIndex) => {
    const colors = PLAYER_COLORS[playerIndex];
    const isPlayer1 = playerIndex === 0;

    return (
      <div
        key={playerIndex}
        style={{
          flex: 1,
          padding: `${SPACING.md}px ${SPACING.lg}px`,
          display: 'flex',
          alignItems: 'center',
          gap: SPACING.md,
          flexDirection: isPlayer1 ? 'row' : 'row-reverse',
          flexBasis: '50%',
          borderRight: isPlayer1 ? `3px solid #F0F0F0` : 'none',
          background: colors.lightBg,
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: RADIUS.md,
            background: colors.primary,
            boxShadow: `0 4px 0 ${colors.dark}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 18,
            fontWeight: 900,
            color: '#fff',
            flexShrink: 0,
          }}
        >
          P{playerIndex + 1}
        </div>

        <div style={{ flex: 1, textAlign: isPlayer1 ? 'left' : 'right' }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 900,
              letterSpacing: 1.5,
              textTransform: 'uppercase',
              color: colors.primary,
              marginBottom: SPACING.xs,
            }}
          >
            Player {playerIndex + 1}
          </div>

          <div
            style={{
              fontSize: 40,
              fontWeight: 900,
              lineHeight: 1,
              color: colors.primary,
              margin: `${SPACING.xs}px 0`,
            }}
          >
            {scores[playerIndex]}
          </div>

          <div
            style={{
              height: 6,
              background: '#E0E0E0',
              borderRadius: RADIUS.sm,
              overflow: 'hidden',
              marginTop: SPACING.xs,
              border: `1px solid ${colors.primary}`,
            }}
          >
            <div
              style={{
                height: '100%',
                borderRadius: RADIUS.sm,
                background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.dark} 100%)`,
                width: `${Math.min(100, (scores[playerIndex] / MAX_SCORE) * 100)}%`,
                transition: 'width 0.55s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        background: '#fff',
        borderBottom: `3px solid #F0F0F0`,
      }}
    >
      {renderPlayerScore(0)}
      {renderPlayerScore(1)}
    </div>
  );
};
