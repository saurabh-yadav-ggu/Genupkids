import { Monkey } from '../Monkey/Monkey.jsx'
import { TreeTop } from '../TreeTop/TreeTop.jsx'
import { POLE_H, CHAR_H, WIN_COUNT } from '../../constants/game.js'
import styles from './BananaTree.module.css'

const GRIPS = 6

export function BananaTree({
  correctCount,
  playerNum,
  winner,
  isClimbing,
}) {
  const isWinner = winner === playerNum
  const color = playerNum === 1 ? 'blue' : 'red'

  const bottomPx = (correctCount / WIN_COUNT) * (POLE_H - CHAR_H - 18)

  return (
    <div className={styles.column}>
      <TreeTop isWinner={isWinner} />

      <div className={styles.stage}>
        <div className={styles.trunk}>
          {Array.from({ length: GRIPS }).map((_, i) => (
            <div
              key={i}
              className={styles.grip}
              style={{
                top: ((i + 1) / (GRIPS + 1)) * POLE_H - 9,
              }}
            />
          ))}
        </div>

        <div className={styles.base} />

        {Array.from({ length: correctCount }).map((_, i) => {
          const dotY = (i / WIN_COUNT) * (POLE_H - CHAR_H - 18) + 24
          return (
            <div
              key={i}
              className={`${styles.dot} ${color === 'blue' ? styles.dotBlue : styles.dotRed}`}
              style={{ bottom: dotY }}
            />
          )
        })}

        <div
          className={styles.character}
          style={{ bottom: bottomPx }}
        >
          <Monkey
            color={color}
            climbing={isClimbing}
            isWinner={isWinner}
          />
        </div>
      </div>
    </div>
  )
}
