import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Sounds } from './audio/sounds.js'
import { WIN_COUNT } from './constants/game.js'
import { makePlayer, generateQuestion } from './utils/math.js'
import { BananaTree } from './components/BananaTree/BananaTree.jsx'
import { PlayerPanel } from './components/PlayerPanel/PlayerPanel.jsx'
import { WinnerOverlay } from './components/WinnerOverlay/WinnerOverlay.jsx'
import styles from './App.module.css'

const CLOUDS = [
  { t: 16, l: '5%', w: 130, d: '7s' },
  { t: 55, l: '52%', w: 95, d: '10s' },
  { t: 95, l: '18%', w: 75, d: '13s' },
]

export default function MathClimbGame() {
  const navigate = useNavigate();
  const [p1, setP1] = useState(() => makePlayer('blue'))
  const [p2, setP2] = useState(() => makePlayer('red'))
  const [winner, setWinner] = useState(null)
  const [p1Climbing, setP1Climbing] = useState(false)
  const [p2Climbing, setP2Climbing] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const containerRef = useRef(null)

  function toggleFullscreen() {
    Sounds.fullscreen()
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
  }, [])

  function triggerClimb(setFlag) {
    Sounds.climb()
    setFlag(true)
    setTimeout(() => setFlag(false), 750)
  }

  function handleInput(setP, val) {
    if (winner) return
    setP((prev) => ({
      ...prev,
      input: (prev.input + val).slice(0, 3),
    }))
  }

  function handleClear(setP) {
    if (winner) return
    setP((prev) => ({ ...prev, input: '' }))
  }

  function handleSubmit(player, setP, pNum, setClimb) {
    if (winner) return
    const ans = parseInt(player.input, 10)
    if (Number.isNaN(ans)) return

    if (ans === player.question.answer) {
      const nc = player.correctCount + 1
      setP((prev) => ({
        ...prev,
        input: '',
        correctCount: nc,
        question: generateQuestion(),
        lastResult: true,
      }))
      Sounds.correct()
      triggerClimb(setClimb)
      if (nc >= WIN_COUNT) {
        setWinner(pNum)
        setTimeout(() => Sounds.win(), 120)
      }
      setTimeout(() => setP((prev) => ({ ...prev, lastResult: null })), 500)
    } else {
      Sounds.wrong()
      setP((prev) => ({ ...prev, lastResult: false }))
      setTimeout(
        () =>
          setP((prev) => ({
            ...prev,
            lastResult: null,
            input: '',
          })),
        600,
      )
    }
  }

  function restart() {
    setP1(makePlayer('blue'))
    setP2(makePlayer('red'))
    setWinner(null)
    setP1Climbing(false)
    setP2Climbing(false)
  }

  return (
    <div className={styles.shell} style={{
      width: '100%',
      minHeight: '100vh',
      position: 'relative',
    }}>
      {winner && (
        <WinnerOverlay winner={winner} onRestart={restart} />
      )}

      <div ref={containerRef} style={{ width: '100%', minHeight: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className={styles.sun} />

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


        {CLOUDS.map((c, i) => (
          <div
            key={i}
            className={styles.cloud}
            style={{
              top: c.t,
              left: c.l,
              '--float-dur': c.d,
            }}
          >
            <svg width={c.w} height={c.w * 0.4} viewBox="0 0 130 50">
              <ellipse cx="65" cy="38" rx="62" ry="18" fill="#fff" />
              <ellipse cx="42" cy="30" rx="32" ry="20" fill="#fff" />
              <ellipse cx="88" cy="28" rx="26" ry="16" fill="#fff" />
            </svg>
          </div>
        ))}

        <div className={styles.title}>
          🐵 Monkey Math Challenge 🍌
        </div>

        <div className={styles.mainRow}>
          {/* Trees — centered, will reorder to top on mobile via CSS order */}
          <div className={styles.polesWrap}>
            <BananaTree
              correctCount={p1.correctCount}
              playerNum={1}
              winner={winner}
              isClimbing={p1Climbing}
            />
            <BananaTree
              correctCount={p2.correctCount}
              playerNum={2}
              winner={winner}
              isClimbing={p2Climbing}
            />
          </div>

          {/* Panels row — side-by-side below trees on mobile */}
          <div className={styles.panelRow}>
            <div className={styles.sideCol}>
              <PlayerPanel
                player={p1}
                playerNum={1}
                onPress={(v) => handleInput(setP1, v)}
                onClear={() => handleClear(setP1)}
                onSubmit={() => handleSubmit(p1, setP1, 1, setP1Climbing)}
                winner={winner}
              />
            </div>
            <div className={styles.sideCol}>
              <PlayerPanel
                player={p2}
                playerNum={2}
                onPress={(v) => handleInput(setP2, v)}
                onClear={() => handleClear(setP2)}
                onSubmit={() => handleSubmit(p2, setP2, 2, setP2Climbing)}
                winner={winner}
              />
            </div>
          </div>
        </div>

        <div className={styles.groundArea}>
          <div className={styles.grass} />
          
          <div className={styles.dirtDecorations}>
            <svg className={styles.pebble} style={{ left: '20%', top: '25px' }} width="26" height="15" viewBox="0 0 24 14">
               <ellipse cx="12" cy="7" rx="12" ry="7" fill="rgba(0,0,0,0.18)" />
            </svg>
            <svg className={styles.pebble} style={{ left: '50%', top: '65px' }} width="36" height="20" viewBox="0 0 32 18">
               <ellipse cx="16" cy="9" rx="16" ry="9" fill="rgba(0,0,0,0.14)" />
            </svg>
            <svg className={styles.pebble} style={{ left: '80%', top: '40px' }} width="20" height="12" viewBox="0 0 18 10">
               <ellipse cx="9" cy="5" rx="9" ry="5" fill="rgba(0,0,0,0.22)" />
            </svg>
            <svg className={styles.pebble} style={{ left: '35%', top: '100px' }} width="18" height="10" viewBox="0 0 18 10">
               <ellipse cx="9" cy="5" rx="9" ry="5" fill="rgba(0,0,0,0.16)" />
            </svg>
             <svg className={styles.pebble} style={{ left: '70%', top: '110px' }} width="28" height="16" viewBox="0 0 24 14">
               <ellipse cx="12" cy="7" rx="12" ry="7" fill="rgba(0,0,0,0.15)" />
            </svg>
          </div>

          <div className={styles.footer}>
            Answer questions to climb the Banana Tree! ({WIN_COUNT} correct answers
            to win)
          </div>
        </div>

        <button
          type="button"
          className={styles.fsBtn}
          onClick={toggleFullscreen}
          title={
            isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'
          }
        >
          {isFullscreen ? (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="4 14 10 14 10 20" />
              <polyline points="20 10 14 10 14 4" />
              <line x1="10" y1="14" x2="3" y2="21" />
              <line x1="21" y1="3" x2="14" y2="10" />
            </svg>
          ) : (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 3 21 3 21 9" />
              <polyline points="9 21 3 21 3 15" />
              <line x1="21" y1="3" x2="14" y2="10" />
              <line x1="3" y1="21" x2="10" y2="14" />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}
