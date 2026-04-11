import { CHAR_H, CHAR_W } from '../../constants/game.js'
import styles from './Monkey.module.css'

export function Monkey({ color, climbing, isWinner }) {
  const isBlue = color === 'blue'
  const accent = isBlue ? '#3b82f6' : '#ef4444'

  const rootMods = [styles.root]
  if (isWinner) rootMods.push(styles.rootWinner)

  const armBackClass = climbing ? styles.armBackClimb : ''
  const armFrontClass = climbing ? styles.armFrontClimb : ''
  const legBackClass = climbing ? styles.legBackClimb : ''
  const legFrontClass = climbing ? styles.legFrontClimb : ''

  const climbMod = climbing ? styles.climbingBody : ''
  const winMod = isWinner ? styles.winBody : ''

  return (
    <div className={rootMods.join(' ')}>
      <svg
        width={CHAR_W}
        height={CHAR_H}
        viewBox="0 0 72 90"
        className={`${styles.svg} ${!isBlue ? styles.flip : ''}`}
      >
        <g className={`${climbMod} ${winMod}`}>
          {/* Tail */}
          <path d="M 15 65 Q -5 70 2 85" stroke="#5c3a21" strokeWidth="6" fill="none" strokeLinecap="round" className={styles.tail} />

          {/* Right/Back Arm (darker) wrapping around tree */}
          <g className={armBackClass}>
            <path d="M 28 42 Q 40 25 50 30" stroke="#3d2210" strokeWidth="7" fill="none" strokeLinecap="round" />
            <circle cx="50" cy="30" r="4.5" fill="#c39473" />
          </g>

          {/* Right/Back Leg (darker) wrapping around tree */}
          <g className={legBackClass}>
            <path d="M 26 68 Q 30 80 48 65" stroke="#3d2210" strokeWidth="7" fill="none" strokeLinecap="round" />
            <ellipse cx="48" cy="65" rx="5" ry="3.5" fill="#c39473" />
          </g>

          {/* Body */}
          <ellipse cx="24" cy="55" rx="14" ry="20" fill="#5c3a21" transform="rotate(15, 24, 55)" />
          <ellipse cx="28" cy="55" rx="8" ry="16" fill="#e6b38a" transform="rotate(15, 28, 55)" />

          {/* Left/Front Leg */}
          <g className={legFrontClass}>
            <path d="M 20 68 Q 15 80 42 68" stroke="#5c3a21" strokeWidth="7" fill="none" strokeLinecap="round" />
            <ellipse cx="42" cy="68" rx="5" ry="3.5" fill="#e6b38a" />
          </g>

          {/* Left/Front Arm */}
          <g className={armFrontClass}>
            <path d="M 22 42 Q 30 20 45 25" stroke="#5c3a21" strokeWidth="7" fill="none" strokeLinecap="round" />
            <circle cx="45" cy="25" r="4.5" fill="#e6b38a" />
          </g>

          {/* Head */}
          <g className={styles.head}>
            <circle cx="18" cy="28" r="5.5" fill="#5c3a21" />
            <circle cx="18" cy="28" r="3" fill="#e6b38a" />
            <circle cx="30" cy="25" r="13" fill="#5c3a21" />
            <circle cx="35" cy="27" r="10" fill="#e6b38a" />

            <circle cx="37" cy="22" r="2.5" fill="#fff" />
            <circle cx="38" cy="22" r="1.5" fill="#000" />

            <ellipse cx="42" cy="28" rx="4" ry="3" fill="#d99b6c" />
            <path d="M 40 31 Q 42 33 44 31" stroke="#3d2210" strokeWidth="1" fill="none" />

            <path d="M 18 19 Q 25 12 38 18 L 38 21 Q 25 16 17 22 Z" fill={accent} />
            <path d="M 18 20 L 10 16 L 12 24 Z" fill={accent} />
          </g>

          {isWinner && (
            <text x="36" y="-5" textAnchor="middle" fontSize="18" fill="#facc15" style={{ filter: 'drop-shadow(0 0 5px rgba(250,204,21,0.8))' }}>⭐</text>
          )}
        </g>
      </svg>
    </div>
  )
}

