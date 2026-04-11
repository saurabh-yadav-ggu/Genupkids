import React from "react";

export default function HeroKid({ cx, cy, flip, color }) {
  const shirtColor  = color==="blue" ? "#3b82f6" : "#ef4444";
  const shirtDark   = color==="blue" ? "#1d4ed8" : "#b91c1c";
  const capeColor   = color==="blue" ? "#60a5fa" : "#f87171";
  const bandColor   = color==="blue" ? "#1d4ed8" : "#b91c1c";
  const skin = "#fcd9a0";
  const hairColor = "#5c3317";
  return (
    <g transform={`${flip ? `scale(-1,1) translate(${-2*cx},0)` : ""}`}>
      <ellipse cx={cx} cy={cy+78} rx={28} ry={7} fill="rgba(0,0,0,0.12)"/>
      <path d={`M${cx-6} ${cy-55} Q${cx-28} ${cy} ${cx-22} ${cy+55}`} fill={capeColor} opacity="0.85" stroke={shirtDark} strokeWidth="1"/>
      <rect x={cx-20} y={cy+30} width={17} height={46} rx={8} fill="#1e3a5f"/>
      <rect x={cx+3}  y={cy+30} width={17} height={46} rx={8} fill="#1e3a5f"/>
      <rect x={cx-23} y={cy+65} width={21} height={16} rx={6} fill="#374151"/>
      <rect x={cx+2}  y={cy+65} width={21} height={16} rx={6} fill="#374151"/>
      <rect x={cx-20} y={cy+67} width={14} height={4} rx={2} fill="rgba(255,255,255,0.18)"/>
      <rect x={cx+4}  y={cy+67} width={14} height={4} rx={2} fill="rgba(255,255,255,0.18)"/>
      <rect x={cx-22} y={cy+26} width={44} height={14} rx={5} fill={shirtDark}/>
      <rect x={cx-6}  y={cy+28} width={12} height={10} rx={3} fill="#fbbf24"/>
      <rect x={cx-22} y={cy-52} width={44} height={84} rx={14} fill={shirtColor}/>
      <polygon points={`${cx},${cy-32} ${cx+7},${cy-14} ${cx+24},${cy-14} ${cx+10},${cy-4} ${cx+15},${cy+14} ${cx},${cy+4} ${cx-15},${cy+14} ${cx-10},${cy-4} ${cx-24},${cy-14} ${cx-7},${cy-14}`} fill="#fff" opacity="0.25"/>
      <polygon points={`${cx},${cy-26} ${cx+5},${cy-16} ${cx+18},${cy-16} ${cx+7},${cy-8} ${cx+11},${cy+6} ${cx},${cy-2} ${cx-11},${cy+6} ${cx-7},${cy-8} ${cx-18},${cy-16} ${cx-5},${cy-16}`} fill="#fff" opacity="0.18"/>
      <line x1={cx-8} y1={cy-50} x2={cx-8} y2={cy+25} stroke={shirtDark} strokeWidth="1.5" opacity="0.3"/>
      <line x1={cx+8} y1={cy-50} x2={cx+8} y2={cy+25} stroke={shirtDark} strokeWidth="1.5" opacity="0.3"/>
      <rect x={cx+18} y={cy-48} width={16} height={36} rx={8} fill={shirtColor}/>
      <rect x={cx+18} y={cy-14} width={14} height={32} rx={7} fill={skin}/>
      <ellipse cx={cx+25} cy={cy+22} rx={10} ry={8} fill={bandColor}/>
      <rect x={cx+16}  y={cy+14} width={18} height={8} rx={4} fill={bandColor}/>
      <line x1={cx+19} y1={cy+17} x2={cx+19} y2={cy+22} stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
      <line x1={cx+25} y1={cy+17} x2={cx+25} y2={cy+22} stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
      <line x1={cx+31} y1={cy+17} x2={cx+31} y2={cy+22} stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
      <rect x={cx-34} y={cy-44} width={14} height={32} rx={7} fill={shirtColor} opacity="0.7"/>
      <rect x={cx-34} y={cy-14} width={12} height={28} rx={6} fill={skin} opacity="0.7"/>
      <ellipse cx={cx-28} cy={cy+18} rx={8} ry={7} fill={bandColor} opacity="0.7"/>
      <rect x={cx-9} y={cy-68} width={18} height={18} rx={8} fill={skin}/>
      <ellipse cx={cx} cy={cy-88} rx={26} ry={24} fill={skin}/>
      <ellipse cx={cx} cy={cy-72} rx={20} ry={12} fill={skin}/>
      <path d={`M${cx-26} ${cy-96} Q${cx-24} ${cy-118} ${cx} ${cy-116} Q${cx+24} ${cy-118} ${cx+26} ${cy-96} Q${cx+18} ${cy-108} ${cx} ${cy-107} Q${cx-18} ${cy-108} ${cx-26} ${cy-96}Z`} fill={hairColor}/>
      <path d={`M${cx-26} ${cy-96} Q${cx-30} ${cy-90} ${cx-28} ${cy-82}`} fill="none" stroke={hairColor} strokeWidth="4" strokeLinecap="round"/>
      <path d={`M${cx} ${cy-116} Q${cx+8} ${cy-128} ${cx+4} ${cy-132}`} fill="none" stroke={hairColor} strokeWidth="5" strokeLinecap="round"/>
      <rect x={cx-26} y={cy-102} width={52} height={9} rx={4} fill="#fff"/>
      <rect x={cx-26} y={cy-99}  width={52} height={5} rx={2} fill={bandColor}/>
      <path d={`M${cx-26} ${cy-98} Q${cx-36} ${cy-94} ${cx-40} ${cy-90}`} stroke={bandColor} strokeWidth="4" strokeLinecap="round" fill="none"/>
      <path d={`M${cx-26} ${cy-95} Q${cx-34} ${cy-102} ${cx-38} ${cy-100}`} stroke="#fff" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d={`M${cx-18} ${cy-96} Q${cx-11} ${cy-100} ${cx-5} ${cy-97}`} stroke={hairColor} strokeWidth="2.8" fill="none" strokeLinecap="round"/>
      <path d={`M${cx+5}  ${cy-97} Q${cx+11} ${cy-100} ${cx+18} ${cy-96}`} stroke={hairColor} strokeWidth="2.8" fill="none" strokeLinecap="round"/>
      <ellipse cx={cx-11} cy={cy-90} rx={7} ry={7.5} fill="#fff"/>
      <ellipse cx={cx+11} cy={cy-90} rx={7} ry={7.5} fill="#fff"/>
      <ellipse cx={cx-10} cy={cy-89} rx={4.5} ry={5} fill="#1e293b"/>
      <ellipse cx={cx+12} cy={cy-89} rx={4.5} ry={5} fill="#1e293b"/>
      <circle cx={cx-8}  cy={cy-91} r={1.5} fill="#fff"/>
      <circle cx={cx+14} cy={cy-91} r={1.5} fill="#fff"/>
      <path d={`M${cx-3} ${cy-80} Q${cx} ${cy-76} ${cx+3} ${cy-80}`} stroke="#d97706" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <path d={`M${cx-9} ${cy-72} Q${cx} ${cy-66} ${cx+9} ${cy-72}`} stroke="#92400e" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <rect x={cx-6} y={cy-73} width={5} height={4} rx={1.5} fill="#fff"/>
      <rect x={cx+1} y={cy-73} width={5} height={4} rx={1.5} fill="#fff"/>
      <ellipse cx={cx-18} cy={cy-78} rx={5} ry={4} fill="#fca5a5" opacity="0.5"/>
      <ellipse cx={cx+18} cy={cy-78} rx={5} ry={4} fill="#fca5a5" opacity="0.5"/>
    </g>
  );
}
