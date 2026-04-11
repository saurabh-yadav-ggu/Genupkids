/**
 * DiceZone Component
 * Displays dice rolls and the current question
 */

import React from 'react';
import { PLAYER_COLORS, RADIUS, SPACING } from '../styles/theme.js';
import { OPERATOR_DISPLAY } from '../constants/game.js';
import { DiceFace } from './DiceFace.jsx';

export const DiceZone = ({ dice, question, rolling, phase, onRoll }) => {
  const renderPlayerDice = (playerIndex) => {
    const colors = PLAYER_COLORS[playerIndex];
    const diceValue = dice[playerIndex];

    return (
      <div
        key={playerIndex}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: SPACING.md,
        }}
      >
        <div
          style={{
            fontSize: 12,
            fontWeight: 900,
            letterSpacing: 0.5,
            textTransform: 'uppercase',
            color: colors.primary,
          }}
        >
          Player {playerIndex + 1}
        </div>

        <DiceFace value={diceValue} player={playerIndex} spinning={rolling} />

        {diceValue && !rolling ? (
          <div
            style={{
              fontSize: 12,
              fontWeight: 900,
              padding: `3px ${SPACING.md}px`,
              borderRadius: RADIUS.full,
              background: colors.lightBg,
              color: colors.primary,
              border: `2px solid ${colors.light}`,
              boxShadow: `0 3px 0 ${colors.light}`,
            }}
          >
            🎲 Rolled {diceValue}
          </div>
        ) : (
          <div style={{ height: 22 }} />
        )}
      </div>
    );
  };

  return (
    <div
      style={{
        background: '#FFF',
        borderBottom: `3px solid ${PLAYER_COLORS[0].light}`,
        padding: `${SPACING.md}px ${SPACING.md}px 12px`,
        flex: 0.4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: SPACING.md,
          width: '100%',
        }}
      >
        {renderPlayerDice(0)}

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: SPACING.md,
            minWidth: 168,
          }}
        >
          {phase === 'roll' && (
            <button
              onClick={onRoll}
              style={{
                background: '#E8324A',
                color: '#fff',
                border: 'none',
                borderRadius: RADIUS.full,
                padding: `${SPACING.md}px ${SPACING.xl}px`,
                fontSize: 20,
                fontWeight: 900,
                cursor: 'pointer',
                fontFamily: "'Nunito', sans-serif",
                boxShadow: '0 6px 0 #A01F2F',
                animation: 'bop 1.3s ease-in-out infinite',
                letterSpacing: 0.5,
              }}
            >
              🎲 Roll!
            </button>
          )}

          {rolling && (
            <div
              style={{
                fontSize: 15,
                fontWeight: 900,
                color: '#888',
                letterSpacing: 2,
                textTransform: 'uppercase',
                animation: 'blink 0.45s linear infinite',
              }}
            >
              Rolling...
            </div>
          )}

          {question && !rolling && (
            <div
              style={{
                fontSize: 22,
                fontWeight: 900,
                color: '#1A1A2E',
                textAlign: 'center',
              }}
            >
              {question.a} {OPERATOR_DISPLAY[question.op] || question.op} {question.b} = ?
            </div>
          )}
        </div>

        {renderPlayerDice(1)}
      </div>
    </div>
  );
};
