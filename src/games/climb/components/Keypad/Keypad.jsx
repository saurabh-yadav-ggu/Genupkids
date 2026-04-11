import { Sounds } from '../../audio/sounds.js'
import styles from './Keypad.module.css'

function Btn({ label, type, disabled, onAction }) {
  const cls =
    type === 'num'
      ? `${styles.kbtn} ${styles.kbtnNum}`
      : type === 'clear'
        ? `${styles.kbtn} ${styles.kbtnClear}`
        : `${styles.kbtn} ${styles.kbtnGo}`

  return (
    <button
      type="button"
      className={cls}
      onClick={onAction}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export function Keypad({ onPress, onClear, onSubmit, disabled }) {
  function makeAction(type, label) {
    return () => {
      if (disabled) return
      if (type === 'clear') {
        Sounds.clear()
        onClear()
      } else if (type === 'go') {
        onSubmit()
      } else {
        Sounds.keyTap()
        onPress(String(label))
      }
    }
  }

  return (
    <div className={styles.grid}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
        <Btn
          key={n}
          label={n}
          type="num"
          disabled={disabled}
          onAction={makeAction('num', n)}
        />
      ))}
      <Btn
        label="C"
        type="clear"
        disabled={disabled}
        onAction={makeAction('clear')}
      />
      <Btn
        label={0}
        type="num"
        disabled={disabled}
        onAction={makeAction('num', 0)}
      />
      <Btn
        label="Go"
        type="go"
        disabled={disabled}
        onAction={makeAction('go')}
      />
    </div>
  )
}
