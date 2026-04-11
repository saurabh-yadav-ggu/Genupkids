import React from "react";
import useConfetti from "../hooks/useConfetti";

export default function Confetti({ active }) {
  const particles = useConfetti(active);
  if (!particles.length) return null;
  return (
    <div style={{position:"fixed",inset:0,pointerEvents:"none",zIndex:999,overflow:"hidden"}}>
      {particles.map(p=>{
        if (p.shape==="star") return (
          <div key={p.id} style={{position:"absolute",left:`${p.x}%`,top:`${p.y}%`,transform:`rotate(${p.rot}deg)`,opacity:p.opacity}}>
            <svg width={p.size} height={p.size} viewBox="0 0 24 24">
              <polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" fill={p.color}/>
            </svg>
          </div>
        );
        return <div key={p.id} style={{
          position:"absolute",left:`${p.x}%`,top:`${p.y}%`,
          width:p.size,height:p.shape==="circle"?p.size:p.size*0.5,
          background:p.color,borderRadius:p.shape==="circle"?"50%":"3px",
          transform:`rotate(${p.rot}deg)`,opacity:p.opacity,
        }}/>
      })}
    </div>
  );
}
