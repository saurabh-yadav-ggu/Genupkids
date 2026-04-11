import React from "react";

export default function WinBanner({ winner, onReset }){
  return (
    <div style={{
      padding:"clamp(14px,2vh,22px) clamp(28px,3.5vw,54px)",borderRadius:26,
      background:winner===1?"linear-gradient(135deg,#1e40af,#3b82f6,#60a5fa)":"linear-gradient(135deg,#991b1b,#dc2626,#f87171)",
      color:"#fff",fontFamily:"'Nunito',sans-serif",fontWeight:900,fontSize:"clamp(20px,2.6vw,38px)",textAlign:"center",
      boxShadow:"0 14px 48px rgba(0,0,0,0.28),0 0 0 4px rgba(255,255,255,0.25)",animation:"winBounce 0.65s cubic-bezier(.34,1.56,.64,1)",display:"flex",flexDirection:"column",alignItems:"center",gap:8,position:"relative",overflow:"hidden",
    }}>
      <div style={{position:"absolute",inset:0,background:"linear-gradient(105deg,transparent 38%,rgba(255,255,255,0.25) 50%,transparent 62%)",animation:"shimmer 1.8s infinite"}}/>
      <span style={{position:"relative",zIndex:1}}>🏆 Player {winner} Wins! 🏆</span>
      <span style={{position:"relative",zIndex:1,fontSize:"clamp(12px,1.5vw,20px)",opacity:0.9}}>Amazing Math Skills! 🎉</span>
      <button onClick={onReset} style={{
        position:"relative",zIndex:1,marginTop:4,padding:"clamp(8px,1vh,12px) clamp(20px,2.5vw,30px)",borderRadius:99,border:"2px solid rgba(255,255,255,0.5)",background:"rgba(255,255,255,0.22)",color:"#fff",fontSize:"clamp(13px,1.4vw,20px)",fontWeight:900,fontFamily:"'Nunito',sans-serif",cursor:"pointer",backdropFilter:"blur(6px)",transition:"all 0.2s",
      }} onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,0.4)";e.currentTarget.style.transform="scale(1.06)";}} onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.22)";e.currentTarget.style.transform="scale(1)";}}>🔄 Play Again!</button>
    </div>
  );
}
