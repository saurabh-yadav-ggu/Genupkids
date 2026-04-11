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
        title="Back to Dashboard"
        style={{
          position: 'absolute', top: '30px', left: '30px', zIndex: 100,
          padding: '12px 24px', borderRadius: '18px',
          border: 'none', background: 'white',
          cursor: 'pointer', display: 'flex',
          alignItems: 'center', gap: '10px',
          boxShadow: '0 8px 25px rgba(0,0,0,0.08)', transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: '800', fontSize: '15px', color: '#006093'
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.12)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.08)'; }}
      >
        <span className="material-symbols-rounded" style={{ fontSize: '20px', fontWeight: '800' }}>arrow_back_ios_new</span>
        BACK
      </button>

      <header style={{position:"absolute",top:"120px",left:"50%",transform:"translateX(-50%)",zIndex:20,textAlign:"center"}}>
        <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:800,fontSize:"clamp(20px,2.8vw,42px)",color:"#006093",textShadow:"0 3px 0 rgba(255,255,255,0.85)",letterSpacing:-1}}>🎯 Math Tug of War!</div>
      </header>

      <div className="game-viewport">
        <div 
          className="game-content-card"
          style={{
            maxWidth: '1400px',
            background: 'radial-gradient(ellipse at 30% 20%,#ebf4ff 0%,#f5f7f8 45%,#ffeff1 100%)'
          }}
        >
          <div style={{
            flex:1,width:"100%",padding:"clamp(10px, 2vw, 30px)",display:"flex",
            alignItems:"center",justifyContent:"center",flexWrap: 'wrap',
            gap:"clamp(12px, 3vw, 40px)",minHeight:0, overflowY: 'auto'
          }}>
            <div style={{flexShrink:0}}>
              <PlayerPanel player={p1} onKey={k=>handleKey("left",k)} disabled={!!winner} side="left"/>
            </div>
            
            <div style={{
              flex: '1 1 300px', maxWidth: '600px', display:"flex", 
              flexDirection:"column", alignItems:"center", justifyContent:"center", 
              minWidth: '280px'
            }}>
              <div style={{fontFamily:"'Be Vietnam Pro',sans-serif",fontWeight:600,fontSize:"clamp(11px,1.2vw,17px)",color:"#595c5d",marginBottom:6,textAlign:"center"}}>First to <span style={{color:"#006093",fontWeight:800}}>10 ⭐</span> wins!</div>
              <div style={{width:"100%",flex:1,minHeight: '180px', display:"flex",alignItems:"center"}}>
                <ArenaScene shift={svgShift} winner={winner}/>
              </div>
              {winner ? <WinBanner winner={winner} onReset={reset}/> : <p style={{fontFamily:"'Be Vietnam Pro',sans-serif",fontSize:"clamp(11px,1.1vw,15px)",color:"#747778",textAlign:"center",fontWeight:600,marginTop:4}}>Answer your question to pull! 💪</p>}
            </div>

            <div style={{flexShrink:0}}>
              <PlayerPanel player={p2} onKey={k=>handleKey("right",k)} disabled={!!winner} side="right"/>
            </div>
          </div>
          <div style={{paddingBottom:"40px", display: 'flex', justifyContent: 'center'}}>
            <ScoreBoard s1={p1.score} s2={p2.score}/>
          </div>
        </div>
      </div>
    </>
  );
}
