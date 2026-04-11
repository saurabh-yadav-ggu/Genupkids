import { CHAR_H, CHAR_W } from '../../constants/game.js'
import styles from './ClimbingKid.module.css'

export function ClimbingKid({ color, climbing, isWinner }) {
  const shirt = color === 'blue' ? '#3b82f6' : '#ef4444'
  const band = color === 'blue' ? '#1d4ed8' : '#991b1b'
  const pants = color === 'blue' ? '#1e40af' : '#7f1d1d'

  const svgMods = [styles.svg]
  if (climbing) svgMods.push(styles.svgClimbing)
  else if (isWinner) svgMods.push(styles.svgWinner)

  const armLMods = [styles.armL]
  if (climbing) armLMods.push(styles.armLClimbing)
  else armLMods.push(styles.armLRest)

  const armRMods = [styles.armR]
  if (climbing) armRMods.push(styles.armRClimbing)
  else armRMods.push(styles.armRRest)

  const legLMods = [styles.legL]
  if (climbing) legLMods.push(styles.legLClimbing)

  const legRMods = [styles.legR]
  if (climbing) legRMods.push(styles.legRClimbing)

  return (
    <div
      className={`${styles.root} ${isWinner ? styles.rootWinner : ''}`}
    >
      <svg
        width={CHAR_W}
        height={CHAR_H}
        viewBox="0 0 72 90"
        className={svgMods.join(' ')}
      >
        <circle cx="36" cy="15" r="13" fill="#FFDBB5" />
        <rect x="23" y="11" width="26" height="5" rx="2.5" fill={band} />
        <ellipse cx="36" cy="4" rx="10" ry="5" fill="#3d2b1f" />
        <circle cx="31" cy="15" r="2.2" fill="#fff" />
        <circle cx="31.8" cy="15.5" r="1.1" fill="#111" />
        <circle cx="41" cy="15" r="2.2" fill="#fff" />
        <circle cx="41.8" cy="15.5" r="1.1" fill="#111" />
        <path
          d="M28 11 Q31 9.5 34 11"
          stroke="#3d2b1f"
          strokeWidth="1.3"
          fill="none"
        />
        <path
          d="M38 11 Q41 9.5 44 11"
          stroke="#3d2b1f"
          strokeWidth="1.3"
          fill="none"
        />
        <path
          d="M31 21 Q36 26 41 21"
          stroke="#a0522d"
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
        />

        <g className={armLMods.join(' ')}>
          <rect x="22" y="34" width="9" height="22" rx="4.5" fill={shirt} />
          <rect x="22" y="52" width="8" height="16" rx="4" fill="#FFDBB5" />
          <ellipse cx="26" cy="68" rx="6" ry="5" fill="#FFDBB5" />
        </g>

        <g className={armRMods.join(' ')}>
          <rect x="41" y="34" width="9" height="22" rx="4.5" fill={shirt} />
          <rect x="42" y="52" width="8" height="16" rx="4" fill="#FFDBB5" />
          <ellipse cx="46" cy="68" rx="6" ry="5" fill="#FFDBB5" />
        </g>

        <rect x="26" y="29" width="20" height="25" rx="5" fill={shirt} />
        <line
          x1="36"
          y1="29"
          x2="36"
          y2="54"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1.5"
        />

        <g className={legLMods.join(' ')}>
          <rect x="26" y="54" width="9" height="22" rx="4.5" fill={pants} />
          <ellipse cx="30" cy="77" rx="7" ry="5" fill="#1e293b" />
        </g>

        <g className={legRMods.join(' ')}>
          <rect x="37" y="54" width="9" height="22" rx="4.5" fill={pants} />
          <ellipse cx="42" cy="77" rx="7" ry="5" fill="#1e293b" />
        </g>

        {isWinner && (
          <text
            x="36"
            y="-3"
            textAnchor="middle"
            className={styles.star}
          >
            ⭐
          </text>
        )}
      </svg>
    </div>
  )
}
