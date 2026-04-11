import React from "react";
// replace character drawings with a single image from public/

export default function ArenaScene({ shift, winner }) {
  const W=700;
  const cy = 90;
  const ropeY = cy + 22;
  const p1cx = 150;
  const p2cx = 550;
  const handOffset = 35;
  const ropeX1 = p1cx + handOffset;
  const ropeX2 = p2cx - handOffset;
  const clampedShift = Math.max(-210, Math.min(210, shift));
  const groundY = cy + 84;
  return (
    <svg viewBox={`0 0 ${W} 200`} width="100%" height="100%" style={{overflow:"visible",display:"block",maxHeight:"100%"}}>
      <defs>
        <linearGradient id="gnd" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#86efac"/>
          <stop offset="100%" stopColor="#4ade80"/>
        </linearGradient>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(186,230,253,0)"/>
          <stop offset="100%" stopColor="rgba(186,230,253,0.25)"/>
        </linearGradient>
        <linearGradient id="rg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d97706"/>
          <stop offset="40%" stopColor="#b45309"/>
          <stop offset="100%" stopColor="#78350f"/>
        </linearGradient>
      </defs>
      <rect x={0} y={0} width={W} height={groundY} fill="url(#sky)"/>
      <rect x={-75} y={groundY} width={W+150} height={25} fill="url(#gnd)"/>
      {Array.from({length:40}).map((_,i)=>{
        const gx = -60 + i*22;
        return <path key={i} d={`M${gx} ${groundY} Q${gx+3} ${groundY-12} ${gx+6} ${groundY}`} fill="#22c55e" opacity="0.65"/>;
      })}
      <ellipse cx={W/2} cy={groundY+4} rx={380} ry={8} fill="rgba(0,0,0,0.07)"/>
      <line x1={W/2} y1={10} x2={W/2} y2={groundY} stroke="#94a3b8" strokeWidth="3" strokeDasharray="11,7" strokeLinecap="round" opacity="0.55"/>
      <polygon points={`${W/2-9},${groundY} ${W/2+9},${groundY} ${W/2+5},${groundY-16} ${W/2-5},${groundY-16}`} fill="#f97316" opacity="0.85"/>
      <rect x={W/2-2} y={groundY-16} width={4} height={16} rx={2} fill="#ea580c"/>

      <g style={{transition:"transform 0.45s cubic-bezier(0.34,1.56,0.64,1)"}} transform={`translate(${clampedShift},0)`}>
        <image href="/thumbnails/tug.png" x={W/2 - 320} y={cy-210} width={640} height={420} preserveAspectRatio="xMidYMid meet" />
      </g>
    </svg>
  );
}
