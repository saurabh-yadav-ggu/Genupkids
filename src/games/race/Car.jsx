import './Car.css';

function Car({ isP1, bounce }) {
  const bodyColor = isP1 ? "#3b82f6" : "#ef4444";
  const highlight = isP1 ? "#93c5fd" : "#fca5a5";
  const shadowColor = isP1 ? "#1e3a8a" : "#7f1d1d";
  const windowColor = "#bae6fd";
  const n = isP1 ? "A" : "B";

  const idleAnim = `carIdle${n} 2s ease-in-out infinite`;
  const zoomAnim = `carZoom${n} 0.6s cubic-bezier(.34,1.2,.64,1) both`;

  return (
    <div style={{ position: 'relative', width: 76, height: 110 }}>
      {bounce && [-18, 0, 18].map((dx, i) => (
        <div key={i} style={{
          position: 'absolute',
          bottom: 0,
          left: 38 + dx - 8,
          width: 16,
          height: 16,
          background: i === 1 ? '#fb923c' : '#facc15',
          borderRadius: '50%',
          animation: `exhaust 0.6s ease forwards`,
          animationDelay: `${i * 0.05}s`,
          pointerEvents: 'none',
          filter: 'blur(2px)'
        }} />
      ))}

      <svg width="76" height="110" viewBox="0 0 76 110" overflow="visible" style={{
        animation: bounce ? zoomAnim : idleAnim,
        transformOrigin: "center center"
      }}>
        <rect x="14" y="16" width="48" height="84" rx="14" fill="rgba(0,0,0,0.4)" filter="blur(3px)" />
        <rect x="8" y="22" width="14" height="22" rx="4" fill="#1e293b" />
        <rect x="54" y="22" width="14" height="22" rx="4" fill="#1e293b" />
        <rect x="8" y="70" width="14" height="22" rx="4" fill="#1e293b" />
        <rect x="54" y="70" width="14" height="22" rx="4" fill="#1e293b" />
        <rect x="11" y="24" width="4" height="18" rx="2" fill="#475569" />
        <rect x="61" y="24" width="4" height="18" rx="2" fill="#475569" />
        <rect x="11" y="72" width="4" height="18" rx="2" fill="#475569" />
        <rect x="61" y="72" width="4" height="18" rx="2" fill="#475569" />
        <rect x="14" y="16" width="48" height="84" rx="14" fill={bodyColor} fillOpacity="0.85" />
        <rect x="16" y="22" width="44" height="72" rx="12" fill={bodyColor} />
        <rect x="18" y="26" width="20" height="18" rx="4" fill={windowColor} fillOpacity="0.7" />
        <rect x="38" y="26" width="20" height="18" rx="4" fill={windowColor} fillOpacity="0.7" />
        <circle cx="24" cy="26" r="3.5" fill={highlight} />
        <circle cx="51" cy="26" r="3.5" fill={highlight} />
        <rect x="20" y="58" width="36" height="14" rx="3" fill={highlight} fillOpacity="0.5" />
        <text x="38" y="80" textAnchor="middle" fontSize="12" fill={shadowColor} fontWeight="bold" fontFamily="Arial">
          {isP1 ? "P1" : "P2"}
        </text>
      </svg>
    </div>
  );
}

export default Car;
