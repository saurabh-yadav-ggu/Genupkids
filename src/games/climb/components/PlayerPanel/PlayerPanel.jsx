import { Keypad } from '../Keypad/Keypad.jsx'
import { QuestionBox } from '../QuestionBox/QuestionBox.jsx'
import { WIN_COUNT } from '../../constants/game.js'
import styles from './PlayerPanel.module.css'

export function PlayerPanel({
  player,
  playerNum,
  onPress,
  onClear,
  onSubmit,
  winner,
}) {
  const isBlue = player.color === 'blue'
  const panelVariant = isBlue ? styles.panelBlue : styles.panelRed

  const inputMods = [styles.input]
  if (player.lastResult === true) inputMods.push(styles.inputOk)
  if (player.lastResult === false) inputMods.push(styles.inputBad)

  return (
    <div className={`${styles.panel} ${panelVariant}`}>
      <div className={styles.label}>PLAYER {playerNum}</div>

      <QuestionBox question={player.question} color={player.color} />

      <div className={inputMods.join(' ')}>
        {player.input || (
          <span className={styles.placeholder}>_</span>
        )}
        {player.lastResult === false && (
          <span className={styles.markBad}>✗</span>
        )}
        {player.lastResult === true && (
          <span className={styles.markOk}>✓</span>
        )}
      </div>

      <Keypad
        onPress={onPress}
        onClear={onClear}
        onSubmit={onSubmit}
        disabled={!!winner}
      />

      <div className={styles.stats}>
        Correct:{' '}
        <strong>
          {player.correctCount}/{WIN_COUNT}
        </strong>
      </div>

      <div className={styles.pips}>
        {Array.from({ length: WIN_COUNT }).map((_, i) => (
          <div
            key={i}
            className={`${styles.pip} ${i < player.correctCount ? styles.pipFilled : ''} ${i === player.correctCount - 1 ? styles.pipLatest : ''}`}
          />
        ))}
      </div>
    </div>
  )
}
