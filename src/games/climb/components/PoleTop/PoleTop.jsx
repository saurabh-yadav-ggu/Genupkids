import styles from './PoleTop.module.css'

export function PoleTop() {
  return (
    <svg
      className={styles.svg}
      width="270"
      height="142.5"
      viewBox="0 0 180 95"
    >
      <rect x="83" y="0" width="3" height="5" rx="1" fill="#78716c" />
      <rect x="86" y="2" width="30" height="13" rx="1.5" fill="#ef4444" />
      <rect x="86" y="15" width="30" height="13" rx="1.5" fill="#f8fafc" />
      <rect x="4" y="32" width="172" height="9" rx="4.5" fill="#15803d" />
      <rect x="5" y="33" width="170" height="4" rx="2" fill="#22c55e" opacity="0.45" />
      {[24, 58, 90, 122, 156].map((x) => (
        <line
          key={x}
          x1={x}
          y1="41"
          x2={x}
          y2="56"
          stroke="#92400e"
          strokeWidth="1.5"
        />
      ))}
      <rect x="12" y="56" width="24" height="22" rx="3" fill="#f97316" />
      <rect x="12" y="56" width="24" height="8" rx="3" fill="#ea580c" />
      <rect x="22" y="56" width="4" height="22" fill="#fbbf24" />
      <rect x="12" y="64" width="24" height="3" fill="#fbbf24" />
      <path
        d="M46 56 L38 67 L46 67 L46 78 L70 78 L70 67 L78 67 L70 56 Z"
        fill="#60a5fa"
      />
      <path d="M46 56 C49 63 67 63 70 56" fill="#93c5fd" />
      <circle cx="58" cy="68" r="3" fill="rgba(255,255,255,0.4)" />
      <rect x="88" y="46" width="4" height="14" rx="2" fill="#92400e" />
      <ellipse cx="90" cy="65" rx="8" ry="10" fill="#d97706" />
      <ellipse cx="90" cy="58" rx="5" ry="6" fill="#b45309" />
      <circle cx="90" cy="65" r="2.5" fill="#92400e" />
      <rect x="110" y="56" width="24" height="22" rx="3" fill="#a855f7" />
      <rect x="110" y="56" width="24" height="8" rx="3" fill="#9333ea" />
      <rect x="120" y="56" width="4" height="22" fill="#fbbf24" />
      <rect x="110" y="64" width="24" height="3" fill="#fbbf24" />
      <ellipse cx="156" cy="66" rx="12" ry="9" fill="#fbbf24" />
      <rect x="144" y="66" width="24" height="6" rx="3" fill="#f59e0b" />
      <rect x="151" y="72" width="10" height="5" rx="2" fill="#f59e0b" />
      <circle cx="156" cy="62" r="4" fill="#fde68a" />
      <text x="156" y="64" textAnchor="middle" fontSize="7" fill="#92400e">
        ★
      </text>
    </svg>
  )
}
