import React from "react";
import Keypad from "./Keypad";

export default function PlayerPanel({ player, onKey, disabled, side }) {
  const isLeft = side==="left";
  return (
    <div style={{
      background:isLeft?"linear-gradient(160deg,#dbeafe 0%,#eff6ff 100%)":"linear-gradient(160deg,#fee2e2 0%,#fff5f5 100%)",
      borderRadius:"clamp(16px,1.8vw,26px)",
      padding:"clamp(11px,1.4vw,20px)",
      width:"clamp(200px,20vw,300px)",flexShrink:0,border:`3px solid ${isLeft?"#93c5fd":"#fca5a5"}`,
      boxShadow:"0 12px 40px rgba(0,0,0,0.12)",display:"flex",flexDirection:"column",gap:"clamp(6px,0.9vh,11px)",animation:player.shake?"shake 0.35s":"none",
    }}>
      <div style={{textAlign:"center",fontFamily:"'Nunito',sans-serif",fontWeight:900,fontSize:"clamp(16px,1.8vw,24px)",color:isLeft?"#1d4ed8":"#b91c1c"}}>
        {isLeft?"🔵 Player 1":"🔴 Player 2"}
      </div>
      <div style={{background:isLeft?"#1e3a8a":"#7f1d1d",borderRadius:13,padding:"clamp(9px,1.2vh,16px) 10px",textAlign:"center",boxShadow:isLeft?"0 4px 20px rgba(30,58,138,0.4)":"0 4px 20px rgba(127,29,29,0.4)"}}>
        <span style={{color:"#fff",fontFamily:"'Nunito',sans-serif",fontSize:"clamp(21px,2.4vw,36px)",fontWeight:900,letterSpacing:3}}>
          {player.question.n1} {player.question.op} {player.question.n2} = ?
        </span>
      </div>
      <div style={{
        background:player.flash?"#bbf7d0":"#fff",
        borderRadius:11,padding:"clamp(7px,0.9vh,12px) 12px",
        fontSize:"clamp(21px,2.3vw,34px)",fontWeight:900,
        fontFamily:"'Nunito',sans-serif",color:"#1e293b",
        textAlign:"center",border:"2px solid #e2e8f0",
        minHeight:"clamp(42px,5vh,62px)",display:"flex",alignItems:"center",justifyContent:"center",
        transition:"background 0.25s",boxShadow:"inset 0 1px 4px rgba(0,0,0,0.06)",
      }}>
        {player.input||<span style={{color:"#cbd5e1",fontSize:"0.75em"}}>_ _</span>}
      </div>
      <Keypad onKey={onKey} disabled={disabled} side={side}/>
    </div>
  );
}
