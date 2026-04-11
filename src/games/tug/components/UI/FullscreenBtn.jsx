import React, { useState, useEffect } from "react";

export default function FullscreenBtn(){
  const [isFs, setIsFs] = useState(false);
  useEffect(()=>{
    const h=()=>setIsFs(!!(
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement
    ));
    document.addEventListener("fullscreenchange", h);
    document.addEventListener("webkitfullscreenchange", h);
    document.addEventListener("mozfullscreenchange", h);
    return ()=>{
      document.removeEventListener("fullscreenchange", h);
      document.removeEventListener("webkitfullscreenchange", h);
      document.removeEventListener("mozfullscreenchange", h);
    };
  },[]);
  const toggle = () => {
    const el = document.documentElement;
    const isCurrentlyFs = !!(
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement
    );
    if (!isCurrentlyFs) {
      const req = el.requestFullscreen || el.webkitRequestFullscreen || el.mozRequestFullScreen;
      if (req) {
        try { req.call(el); } catch(e){ try { window.top.document.documentElement.requestFullscreen(); } catch(e){} }
      }
    } else {
      const exit = document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen;
      if (exit) try { exit.call(document); } catch(e){}
    }
  };
  return (
    <button onClick={toggle} title={isFs?"Exit Fullscreen":"Go Fullscreen"} style={{
      position:"fixed",bottom:20,right:20,zIndex:500,width:52,height:52,borderRadius:"50%",
      border:"2.5px solid rgba(255,255,255,0.75)",background:"rgba(255,255,255,0.32)",backdropFilter:"blur(12px)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 20px rgba(0,0,0,0.18)",transition:"all 0.2s",
    }} onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,0.60)";e.currentTarget.style.transform="scale(1.12)";}} onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.32)";e.currentTarget.style.transform="scale(1)";}}>
      {isFs ? (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 3v3a2 2 0 01-2 2H3"/>
          <path d="M21 8h-3a2 2 0 01-2-2V3"/>
          <path d="M3 16h3a2 2 0 012 2v3"/>
          <path d="M16 21v-3a2 2 0 012-2h3"/>
        </svg>
      ) : (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 3H5a2 2 0 00-2 2v3"/>
          <path d="M21 8V5a2 2 0 00-2-2h-3"/>
          <path d="M3 16v3a2 2 0 002 2h3"/>
          <path d="M16 21h3a2 2 0 002-2v-3"/>
        </svg>
      )}
    </button>
  );
}
