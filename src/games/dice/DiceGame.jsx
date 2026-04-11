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
      containerRef.current?.requestFullscreen().catch(() => {})
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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&display=swap');
      `}</style>

      <div
        ref={containerRef}
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: `${SPACING.md}px`,
          background: '#f5f7ff',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        {/* Back Button */}
        <button 
          onClick={() => navigate('/games/numerical')}
          title="Back to Dashboard"
          style={{
            position: 'absolute', top: '20px', left: '20px', zIndex: 600,
            width: '48px', height: '48px', borderRadius: '50%',
            border: '2.5px solid rgba(0,0,0,0.1)', background: 'rgba(255,255,255,0.6)',
            backdropFilter: 'blur(12px)', cursor: 'pointer', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 18px rgba(0,0,0,0.15)', transition: 'all 0.2s'
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.9)'; e.currentTarget.style.transform = 'scale(1.12)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.6)'; e.currentTarget.style.transform = 'scale(1)'; }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>

        {/* Fullscreen Button */}
        <button 
          onClick={toggleFullscreen}
          title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          style={{
            position: 'absolute', bottom: '20px', right: '20px', zIndex: 600,
            width: '48px', height: '48px', borderRadius: '50%',
            border: '2.5px solid rgba(0,0,0,0.1)', background: 'rgba(255,255,255,0.6)',
            backdropFilter: 'blur(12px)', cursor: 'pointer', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 18px rgba(0,0,0,0.15)', transition: 'all 0.2s'
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.9)'; e.currentTarget.style.transform = 'scale(1.12)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.6)'; e.currentTarget.style.transform = 'scale(1)'; }}
        >
          {isFullscreen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 3v3a2 2 0 01-2 2H3"/><path d="M21 8h-3a2 2 0 01-2-2V3"/>
              <path d="M3 16h3a2 2 0 012 2v3"/><path d="M16 21v-3a2 2 0 012-2h3"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 3H5a2 2 0 00-2 2v3"/><path d="M21 8V5a2 2 0 00-2-2h-3"/>
              <path d="M3 16v3a2 2 0 002 2h3"/><path d="M16 21h3a2 2 0 002-2v-3"/>
            </svg>
          )}
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
            boxShadow: `0 8px 40px rgba(0,0,0,0.13)`,
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
}
