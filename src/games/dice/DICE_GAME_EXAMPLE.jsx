/**
 * DICE GAME REFACTORING EXAMPLE
 * =============================
 * 
 * This example shows how to refactor the existing Dice Math Game
 * as a component integrated into the main app.
 * 
 * Follow this pattern for other games (Climb, Race, Tug of War)
 */

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameLogic } from './hooks/useGameLogic';
import {
  Header,
  ScoreBar,
  DiceZone,
  Keypad,
  WinScreen,
} from './components';
import { COLORS, RADIUS, SPACING, SHADOWS } from './styles/theme';
import './styles/animations.css';

/**
 * DiceGame Component
 * 
 * REFACTORED from: /dice-math-game/src/App.tsx
 * 
 * Changes made:
 * 1. Wrapped in lazy() for code splitting
 * 2. Added useNavigate() for back button
 * 3. Removed global HTML/body styles (handled by main app)
 * 4. Kept all game logic intact
 * 5. Made it work as a page route instead of standalone app
 */
const DiceGame = () => {
  const navigate = useNavigate();
  const { state, startRoll, handleKeyInput, resetGame, getFeedback } =
    useGameLogic();

  // Handle keyboard events
  useEffect(() => {
    const handleKeyPress = (e) => {
      const key = e.key;
      if (/^\d$/.test(key)) {
        e.preventDefault();
        handleKeyInput(0, key);
        handleKeyInput(1, key);
      } else if (key === 'Backspace') {
        e.preventDefault();
        handleKeyInput(0, 'del');
        handleKeyInput(1, 'del');
      } else if (key === 'Enter') {
        e.preventDefault();
        handleKeyInput(0, 'go');
        handleKeyInput(1, 'go');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyInput]);

  return (
    <>
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: `${SPACING.md}px`,
          backgroundColor: '#f5f5f5',
        }}
      >
        {/* Back Button (NEW) */}
        <button
          onClick={() => navigate('/games/numerical')}
          style={{
            position: 'absolute',
            top: 20,
            left: 20,
            padding: '12px 20px',
            backgroundColor: COLORS.primary,
            color: 'white',
            border: 'none',
            borderRadius: 8,
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: 16,
            zIndex: 1000,
          }}
        >
          ← Back to Numerical Games
        </button>

        <div
          style={{
            maxWidth: 720,
            width: '100%',
            backgroundColor: '#fff',
            borderRadius: RADIUS.xl,
            border: `3px solid ${COLORS.borderLight}`,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: SHADOWS.drop,
          }}
        >
          {state.phase === 'won' ? (
            <WinScreen
              winner={state.gameWinner}
              scores={state.scores}
              onPlayAgain={resetGame}
            />
          ) : (
            <>
              <Header onNewGame={resetGame} />
              <ScoreBar scores={state.scores} />
              <DiceZone
                dice={state.dice}
                question={state.question}
                rolling={state.rolling}
                phase={state.phase}
                onRoll={startRoll}
              />
              <div
                style={{
                  display: 'flex',
                  flex: 1,
                  gap: 0,
                }}
              >
                <Keypad
                  player={0}
                  input={state.inputs[0]}
                  active={state.phase === 'race'}
                  feedback={getFeedback(0)}
                  onKey={(value) => handleKeyInput(0, value)}
                />
                <Keypad
                  player={1}
                  input={state.inputs[1]}
                  active={state.phase === 'race'}
                  feedback={getFeedback(1)}
                  onKey={(value) => handleKeyInput(1, value)}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DiceGame;

/**
 * INTEGRATION STEPS:
 * 
 * 1. Copy dice-math-game source files:
 *    - Copy /dice-math-game/src/components/* → /src/games/dice/components/
 *    - Copy /dice-math-game/src/hooks/* → /src/games/dice/hooks/
 *    - Copy /dice-math-game/src/utils/* → /src/games/dice/utils/
 *    - Copy /dice-math-game/src/types/* → /src/games/dice/types/
 *    - Copy /dice-math-game/src/constants/* → /src/games/dice/constants/
 *    - Copy /dice-math-game/src/styles/* → /src/games/dice/styles/
 * 
 * 2. Update file extensions:
 *    - If using TypeScript, keep .ts/.tsx files
 *    - If using JavaScript, rename to .js/.jsx
 * 
 * 3. Replace placeholder DiceGame.jsx with this code
 * 
 * 4. Update imports in components if paths changed
 * 
 * 5. Test routing:
 *    - npm run dev
 *    - Navigate to /games/numerical/dice
 *    - Test game functionality
 *    - Test back button
 */
