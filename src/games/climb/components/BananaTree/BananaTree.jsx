// BananaTree.jsx — Responsive: reads actual DOM height so monkey position scales correctly
import { useRef, useLayoutEffect, useState } from 'react'
import { Monkey } from '../Monkey/Monkey.jsx'
import { TreeTop } from '../TreeTop/TreeTop.jsx'
import { CHAR_H, WIN_COUNT } from '../../constants/game.js'
import styles from './BananaTree.module.css'

const GRIPS = 6

export function BananaTree({ correctCount, playerNum, winner, isClimbing }) {
  const isWinner = winner === playerNum
  const color = playerNum === 1 ? 'blue' : 'red'

  // Track the actual rendered stage height so position is always correct
  const stageRef  = useRef(null)
  const [poleH, setPoleH] = useState(400) // safe default

  useLayoutEffect(() => {
    function measure() {
      if (stageRef.current) {
        setPoleH(stageRef.current.offsetHeight)
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const usableH  = poleH - CHAR_H - 18
  const bottomPx = (correctCount / WIN_COUNT) * usableH

  return (
    <div className={styles.column}>
      <TreeTop isWinner={isWinner} />

      <div className={styles.stage} ref={stageRef}>
        <div className={styles.trunk}>
          {Array.from({ length: GRIPS }).map((_, i) => (
            <div
              key={i}
              className={styles.grip}
              style={{ top: ((i + 1) / (GRIPS + 1)) * poleH - 9 }}
            />
          ))}
        </div>

        <div className={styles.base} />

        {Array.from({ length: correctCount }).map((_, i) => {
          const dotY = (i / WIN_COUNT) * usableH + 24
          return (
            <div
              key={i}
              className={`${styles.dot} ${color === 'blue' ? styles.dotBlue : styles.dotRed}`}
              style={{ bottom: dotY }}
            />
          )
        })}

        <div className={styles.character} style={{ bottom: bottomPx }}>
          <Monkey color={color} climbing={isClimbing} isWinner={isWinner} />
        </div>
      </div>
    </div>
  )
}
