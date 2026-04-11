import { useEffect, useState } from 'react'
import { POLE_H, CHAR_H } from '../../constants/game.js'
import styles from './TreeTop.module.css'

export function TreeTop({ isWinner }) {
  const [showDrop, setShowDrop] = useState(false)

  useEffect(() => {
    if (isWinner) {
      setShowDrop(true)
    } else {
      setShowDrop(false)
    }
  }, [isWinner])

  const dropDist = POLE_H - CHAR_H - 18 + 40

  return (
    <div className={styles.root}>
      <svg width="270" height="180" viewBox="0 0 180 120" className={styles.svg}>
        <path d="M 90 80 Q 20 50 10 90 Q 30 130 90 80 Z" fill="#15803d" className={styles.leafL} />
        <path d="M 90 80 Q 50 20 70 10 Q 110 40 90 80 Z" fill="#16a34a" className={styles.leafTL} />
        <path d="M 90 80 Q 130 20 110 10 Q 70 40 90 80 Z" fill="#22c55e" className={styles.leafTR} />
        <path d="M 90 80 Q 160 50 170 90 Q 150 130 90 80 Z" fill="#15803d" className={styles.leafR} />

        {/* Bananas */}
        <g className={styles.bunch}>
          <path d="M 85 70 Q 75 110 88 120 Q 98 110 95 70 Z" fill="#eab308" />
          <path d="M 90 70 Q 65 105 78 115 Q 90 105 92 70 Z" fill="#facc15" />
          <path d="M 90 70 Q 115 105 102 115 Q 90 105 88 70 Z" fill="#facc15" />
          <path d="M 78 70 Q 55 95 70 105 Q 85 95 85 70 Z" fill="#ca8a04" />
          <path d="M 102 70 Q 125 95 110 105 Q 95 95 95 70 Z" fill="#ca8a04" />
        </g>
      </svg>

      {showDrop && (
        <svg
          width="45"
          height="45"
          viewBox="0 0 30 30"
          className={styles.droppedBanana}
          style={{ '--drop-y': `${dropDist}px` }}
        >
          <path d="M 5 5 Q 30 5 25 25 Q 15 15 5 5 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
        </svg>
      )}
    </div>
  )
}
