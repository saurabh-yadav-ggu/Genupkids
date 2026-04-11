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
            padding:"clamp(14px, 2vh, 22px) 0",borderRadius:16,border:"none",
            cursor:disabled?"not-allowed":"pointer",
            fontSize:isGo?"clamp(13px,1.4vw,18px)":"clamp(18px,2.2vw,28px)",
            fontWeight:800,fontFamily:"'Plus Jakarta Sans',sans-serif",
            background:isGo?btnBg:isC?"#f44336":"#fff",
            color:isGo||isC?"#fff":"#006093",
            boxShadow:isGo||isC?"0 6px 15px rgba(0,0,0,0.15)":"0 3px 10px rgba(0,0,0,0.06)",
            transition:"all 0.1s cubic-bezier(0.4, 0, 0.2, 1)",opacity:disabled?0.5:1,outline:"none",
            userSelect: 'none'
          }}
            onMouseDown={e=>{if(!disabled)e.currentTarget.style.transform="scale(0.92)";}}
            onMouseUp={e=>e.currentTarget.style.transform="scale(1)"}
            onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}
          >{k}</button>
        );
      })}
    </div>
  );
}
