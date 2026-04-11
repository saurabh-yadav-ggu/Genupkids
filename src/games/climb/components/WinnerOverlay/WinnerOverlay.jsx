import { Sounds } from '../../audio/sounds.js'
import styles from './WinnerOverlay.module.css'

const CONFETTI_COLORS = [
  '#f97316',
  '#3b82f6',
  '#22c55e',
  '#f59e0b',
  '#ef4444',
  '#a855f7',
  '#06b6d4',
  '#ec4899',
]

export function WinnerOverlay({ winner, onRestart }) {
  return (
    <div className={styles.backdrop}>
      {CONFETTI_COLORS.map((c, i) => (
        <div
          key={i}
          className={`${styles.confetti} ${i % 3 === 0 ? styles.confettiRound : styles.confettiSquare}`}
          style={{
            top: `${3 + i * 4}%`,
            left: `${8 + i * 11}%`,
            background: c,
            '--fall-dur': `${1.2 + i * 0.1}s`,
            '--fall-delay': `${i * 0.08}s`,
          }}
        />
      ))}
      <div className={styles.card}>
        <div className={styles.trophy}>🏆</div>
        <div
          className={`${styles.title} ${winner === 1 ? styles.titleP1 : styles.titleP2}`}
        >
          Player {winner} Wins!
        </div>
        <div className={styles.emojiRow}>🎉 🎊 🎉</div>
        <button
          type="button"
          className={styles.playAgain}
          onClick={() => {
            Sounds.keyTap()
            onRestart()
          }}
        >
          🔄 Play Again!
        </button>
      </div>
    </div>
  )
}
