import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Track from './Track';
import Panel from './PlayerPanel';
import Winner from './Winner';
import { genQ, mkP, FullscreenButton } from './gameLogic';
import { SFX } from './sounds';
import './global.css';

const MathRaceGame = () => {
  const navigate = useNavigate();
  const [p1, setP1] = useState(() => mkP());
  const [p2, setP2] = useState(() => mkP());
  const [winner, setWinner] = useState(null);
  const [p1Shake, setP1Shake] = useState(false);
  const [p2Shake, setP2Shake] = useState(false);
  const [p1Bounce, setP1Bounce] = useState(false);
  const [p2Bounce, setP2Bounce] = useState(false);

  const shake = s => {
    if (s === "l") { 
      setP1Shake(true); 
      setTimeout(() => setP1Shake(false), 400); 
    } else { 
      setP2Shake(true); 
      setTimeout(() => setP2Shake(false), 400); 
    }
  };
  
  const bounce = s => {
    if (s === "l") { 
      setP1Bounce(true); 
      setTimeout(() => setP1Bounce(false), 900); 
    } else { 
      setP2Bounce(true); 
      setTimeout(() => setP2Bounce(false), 900); 
    }
  };

  const handleKey = useCallback((side, key) => {
    if (winner) return;
    SFX.key();
    const setP = side === "l" ? setP1 : setP2;
    const ps = side === "l" ? p1 : p2;
    
    if (key === "C") { 
      setP(p => ({ ...p, input: "" })); 
      return; 
    }
    
    if (key === "Go") {
      const ans = parseInt(ps.input, 10);
      if (!isNaN(ans) && ans === ps.q.ans) {
        const np = ps.pos + 1;
        SFX.correct(); 
        setTimeout(() => SFX.hop(), 130);
        bounce(side);
        if (np >= 10) { 
          setTimeout(() => SFX.win(), 220); 
          setWinner(side === "l" ? 1 : 2); 
          setP(p => ({ ...p, pos: np, input: "" })); 
        } else {
          setP({ q: genQ(), input: "", pos: np });
        }
      } else {
        SFX.wrong(); 
        shake(side); 
        setP(p => ({ ...p, input: "" }));
      }
      return;
    }
    
    setP(p => { 
      if (p.input.length >= 3) return p; 
      return { ...p, input: p.input + key }; 
    });
  }, [winner, p1, p2]);

  const reset = () => {
    setP1(mkP()); 
    setP2(mkP()); 
    setWinner(null);
    setP1Shake(false); 
    setP2Shake(false); 
    setP1Bounce(false); 
    setP2Bounce(false);
  };

  return (
    <div className="race-game">
      {winner && <Winner who={winner} onReset={reset} />}
      <FullscreenButton />

      <button 
          onClick={() => navigate('/games/numerical')}
          title="Back to Dashboard"
          style={{
            position: 'absolute', top: '30px', left: '30px', zIndex: 100,
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

      <div className="game-viewport">
        <div className="game-content-card" style={{ maxWidth: '100%', padding: '40px' }}>
          <div className="game-title">
            Math Car Race!
          </div>

          <div className="main-row">
            <div className="panel-container">
              <Panel 
                player={p1} 
                isP1={true}
                onKey={k => handleKey("l", k)} 
                disabled={!!winner} 
                shake={p1Shake}
              />
            </div>

            <div className="track-container">
              <Track
                p1Pos={p1.pos} 
                p2Pos={p2.pos}
                p1Bounce={p1Bounce} 
                p2Bounce={p2Bounce}
              />
            </div>

            <div className="panel-container">
              <Panel 
                player={p2} 
                isP1={false}
                onKey={k => handleKey("r", k)} 
                disabled={!!winner} 
                shake={p2Shake}
              />
            </div>
          </div>

          <div className="footer-hint" style={{ marginTop: '20px' }}>
            Solve your question ➜ speed UP the track ➜ first over the finish line wins! 🏆
          </div>
        </div>
      </div>
    </div>
  );
};

export default MathRaceGame;
