import React from "react";

export default function ScoreBoard({ s1, s2 }) {
  const MAX = 10;
  return (
    <div style={{
      display:"flex",alignItems:"center",justifyContent:"center",gap:12,
      padding:"10px 26px",
      background:"rgba(255,255,255,0.32)",backdropFilter:"blur(16px)",
      borderRadius:999,border:"2.5px solid rgba(255,255,255,0.65)",
      boxShadow:"0 8px 32px rgba(0,0,0,0.10)",
    }}>
      <span style={{fontFamily:"'Nunito',sans-serif",fontWeight:900,fontSize:"clamp(15px,1.7vw,22px)",color:"#1d4ed8",minWidth:55,textAlign:"right"}}>⭐ {s1}</span>
      <div style={{display:"flex",gap:"clamp(3px,0.4vw,6px)"}}>
        {Array.from({length:MAX}).map((_,i)=>(
          <div key={i} style={{
            width:"clamp(15px,1.7vw,24px)",height:"clamp(15px,1.7vw,24px)",borderRadius:"50%",
            background:i<s1?"linear-gradient(135deg,#60a5fa,#1d4ed8)":"rgba(0,0,0,0.07)",
            border:i<s1?"none":"2px solid rgba(0,0,0,0.10)",
            boxShadow:i<s1?"0 2px 8px rgba(59,130,246,0.55)":"none",
            transition:"all 0.35s cubic-bezier(.34,1.56,.64,1)",
            transform:i===s1-1?"scale(1.4)":"scale(1)",
          }}/>
        ))}
      </div>
      <div style={{fontFamily:"'Nunito',sans-serif",fontWeight:900,fontSize:"clamp(13px,1.4vw,18px)",color:"#64748b",borderLeft:"2px dashed rgba(0,0,0,0.12)",borderRight:"2px dashed rgba(0,0,0,0.12)",padding:"0 12px",margin:"0 4px"}}>VS</div>
      <div style={{display:"flex",gap:"clamp(3px,0.4vw,6px)"}}>
        {Array.from({length:MAX}).map((_,i)=>(
          <div key={i} style={{
            width:"clamp(15px,1.7vw,24px)",height:"clamp(15px,1.7vw,24px)",borderRadius:"50%",
            background:i<s2?"linear-gradient(135deg,#f87171,#b91c1c)":"rgba(0,0,0,0.07)",
            border:i<s2?"none":"2px solid rgba(0,0,0,0.10)",
            boxShadow:i<s2?"0 2px 8px rgba(239,68,68,0.55)":"none",
            transition:"all 0.35s cubic-bezier(.34,1.56,.64,1)",
            transform:i===s2-1?"scale(1.4)":"scale(1)",
          }}/>
        ))}
      </div>
      <span style={{fontFamily:"'Nunito',sans-serif",fontWeight:900,fontSize:"clamp(15px,1.7vw,22px)",color:"#b91c1c",minWidth:55,textAlign:"left"}}>{s2} ⭐</span>
    </div>
  );
}
