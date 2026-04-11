import React from "react";

export default function Keypad({ onKey, disabled, side }) {
  const btnBg = side==="left"?"linear-gradient(135deg,#3b82f6,#1d4ed8)":"linear-gradient(135deg,#ef4444,#b91c1c)";
  const keys = [1,2,3,4,5,6,7,8,9,"C",0,"Go"];
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"clamp(5px,0.6vw,10px)"}}>
      {keys.map(k=>{
        const isGo=k==="Go",isC=k==="C";
        return (
          <button key={k} disabled={disabled} onClick={()=>!disabled&&onKey(String(k))} style={{
            padding:"clamp(9px,1.2vh,17px) 0",borderRadius:13,border:"none",
            cursor:disabled?"not-allowed":"pointer",
            fontSize:isGo?"clamp(14px,1.3vw,19px)":"clamp(18px,1.9vw,27px)",
            fontWeight:900,fontFamily:"'Nunito',sans-serif",
            background:isGo?btnBg:isC?"linear-gradient(135deg,#f87171,#dc2626)":"#fff",
            color:isGo||isC?"#fff":"#1e293b",
            boxShadow:isGo||isC?"0 4px 14px rgba(0,0,0,0.20)":"0 2px 8px rgba(0,0,0,0.08)",
            transition:"transform 0.08s",opacity:disabled?0.5:1,outline:"none",
          }}
            onMouseDown={e=>{if(!disabled)e.currentTarget.style.transform="scale(0.88)";}}
            onMouseUp={e=>e.currentTarget.style.transform="scale(1)"}
            onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}
          >{k}</button>
        );
      })}
    </div>
  );
}
