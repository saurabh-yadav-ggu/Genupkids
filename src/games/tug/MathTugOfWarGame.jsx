import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "./components/Confetti";
import FullscreenBtn from "./components/UI/FullscreenBtn";
import ArenaScene from "./components/Arena/ArenaScene";
import PlayerPanel from "./components/UI/PlayerPanel";
import ScoreBoard from "./components/UI/ScoreBoard";
import WinBanner from "./WinBanner";
import sfx from "./utils/sfx";
import { generateQuestion, initPlayer } from "./utils/game";
import "./styles/global.css";

export default function MathTugOfWarGame(){
  const navigate = useNavigate();
  const [p1, setP1] = useState(initPlayer);
  const [p2, setP2] = useState(initPlayer);
  const [ropePos, setRopePos] = useState(0);
  const [winner, setWinner] = useState(null);

  const svgShift = Math.max(-20, Math.min(20, ropePos * 1)) * 12;

  const handleKey = useCallback((side, key) => {
    if (winner) return;
    sfx.keypress();
    const setP = side==="left" ? setP1 : setP2;
    setP(prev => {
      if (key==="C") return {...prev,input:""};
      if (key==="Go") {
        const ans=parseInt(prev.input,10);
        if (!isNaN(ans) && ans===prev.question.answer) {
          const ns=prev.score+1;
          if (ns>=10) { sfx.win(); setWinner(side==="left"?1:2); }
          else { sfx.correct(); sfx.pull(); }
          setRopePos(p=>p+(side==="left"?-1:1));
          return {...prev,score:ns,question:generateQuestion(),input:"",flash:true};
        }
        sfx.wrong();
        return {...prev,input:"",shake:true};
      }
      if (prev.input.length>=4) return prev;
      return {...prev,input:prev.input+key};
    });
  },[winner]);

  useEffect(()=>{
    const t=setTimeout(()=>{
      setP1(p=>({...p,flash:false,shake:false}));
      setP2(p=>({...p,flash:false,shake:false}));
    },400);
    return ()=>clearTimeout(t);
  },[p1.flash,p1.shake,p2.flash,p2.shake]);

  const reset=()=>{setP1(initPlayer());setP2(initPlayer());setRopePos(0);setWinner(null);} ;

  return (
    <>
      <Confetti active={!!winner}/>
      <FullscreenBtn/>
      
      <button 
        onClick={() => navigate('/games/numerical')}
        style={{ position: 'absolute', top: '16px', left: '16px', zIndex: 100, padding: '10px 20px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '12px', cursor: 'pointer', fontFamily: "'Nunito', sans-serif", fontSize: '16px', fontWeight: 'bold', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
      >
        &larr; Back
      </button>

      <header style={{position:"absolute",top:"120px",left:"50%",transform:"translateX(-50%)",zIndex:20,textAlign:"center"}}>
        <div style={{fontFamily:"'Nunito',sans-serif",fontWeight:900,fontSize:"clamp(20px,2.8vw,42px)",color:"#1e3a5f",textShadow:"0 3px 0 rgba(255,255,255,0.85)",letterSpacing:-0.5}}>🎯 Math Tug of War!</div>
      </header>

      <div style={{
        width:"100vw",height:"100vh",
        background: "radial-gradient(ellipse at 30% 20%,#bfdbfe 0%,#e0f2fe 45%,#fce7f3 100%)",
        overflow:"hidden",
        display:"flex",flexDirection:"column",
        alignItems:"center",justifyContent:"space-between",
        padding:"clamp(56px,5vh,72px) clamp(8px,1.4vw,24px) clamp(6px,0.9vh,12px)",
      }}>
        <div style={{
          flex:1,width:"100%",maxWidth:1700,display:"flex",alignItems:"center",
          justifyContent:"space-between",gap:"clamp(12px,1.6vw,20px)",minHeight:0,
        }}>
          <div style={{paddingRight:"clamp(18px,2.2vw,28px)",flexShrink:0}}>
            <PlayerPanel player={p1} onKey={k=>handleKey("left",k)} disabled={!!winner} side="left"/>
          </div>
          <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minWidth:0,gap:2}}>
            
            <div style={{fontFamily:"'Nunito',sans-serif",fontWeight:700,fontSize:"clamp(11px,1.2vw,17px)",color:"#475569",marginBottom:6,textAlign:"center"}}>First to <span style={{color:"#7c3aed",fontWeight:900}}>10 ⭐</span> wins!</div>
            <div style={{width:"100%",maxWidth:680,flex:1,minHeight:0,display:"flex",alignItems:"center",paddingLeft:"clamp(18px,2.2vw,28px)",paddingRight:"clamp(18px,2.2vw,28px)"}}>
              <ArenaScene shift={svgShift} winner={winner}/>
            </div>
            {winner ? <WinBanner winner={winner} onReset={reset}/> : <p style={{fontFamily:"'Nunito',sans-serif",fontSize:"clamp(11px,1.1vw,15px)",color:"#94a3b8",textAlign:"center",fontWeight:700,marginTop:4}}>Answer your question to pull the rope! 💪</p>}
          </div>
          <div style={{paddingLeft:"clamp(18px,2.2vw,28px)",flexShrink:0}}>
            <PlayerPanel player={p2} onKey={k=>handleKey("right",k)} disabled={!!winner} side="right"/>
          </div>
        </div>
        <div style={{paddingTop:"clamp(5px,0.7vh,10px)"}}>
          <ScoreBoard s1={p1.score} s2={p2.score}/>
        </div>
      </div>
    </>
  );
}
