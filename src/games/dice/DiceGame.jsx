/**
 * Main Dice Math Game Component
 * Two-player competitive math racing game with dice rolls
 */

import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from './components/Header.jsx';
import { ScoreBar } from './components/ScoreBar.jsx';
import { DiceZone } from './components/DiceZone.jsx';
import { Keypad } from './components/Keypad.jsx';
import { WinScreen } from './components/WinScreen.jsx';
import { useGameLogic } from './hooks/useGameLogic.js';
import { COLORS, RADIUS, SPACING } from './styles/theme.js';
import './styles/animations.css';

export default function DiceGame() {
  const { state, startRoll, handleKeyInput, resetGame, getFeedback } = useGameLogic();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {})
    } else {
      document.exitFullscreen().catch(() => {})
    }
  }

  useEffect(() => {
    function onFsChange() {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', onFsChange)
    return () =>
      document.removeEventListener('fullscreenchange', onFsChange)
  }, []);

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
        ref={containerRef}
        className="game-viewport font-body"
      >
        {/* Back Button */}
        <button 
          onClick={() => navigate('/games/numerical')}
          title="Back to Dashboard"
          style={{
            position: 'absolute', top: '30px', left: '30px', zIndex: 600,
            padding: '12px 24px', borderRadius: '18px',
            border: 'none', background: 'white',
            cursor: 'pointer', display: 'flex',
            alignItems: 'center', gap: '10px',
            boxShadow: '0 8px 25px rgba(0,0,0,0.08)', transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: '800', fontSize: '15px', color: '#006093'
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.12)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.08)'; }}
        >
          <span className="material-symbols-rounded" style={{ fontSize: '20px', fontWeight: '800' }}>arrow_back_ios_new</span>
          BACK
        </button>

        {/* Fullscreen Button */}
        <button 
          onClick={toggleFullscreen}
          title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          style={{
            position: 'absolute', bottom: '30px', right: '30px', zIndex: 600,
            width: '56px', height: '56px', borderRadius: '18px',
            border: 'none', background: 'white',
            cursor: 'pointer', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 8px 25px rgba(0,0,0,0.08)', transition: 'all 0.3s'
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.background = '#f8f9fa'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = 'white'; }}
        >
          {isFullscreen ? (
            <span className="material-symbols-rounded" style={{ color: '#006093' }}>fullscreen_exit</span>
          ) : (
            <span className="material-symbols-rounded" style={{ color: '#006093' }}>fullscreen</span>
          )}
        </button>
        <div className="game-content-card" style={{ paddingBottom: '40px' }}>
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
}
