import { useState, useEffect, useRef } from "react";

export default function useConfetti(active) {
  const [particles, setParticles] = useState([]);
  const raf = useRef();
  useEffect(() => {
    if (!active) { setParticles([]); return; }
    const colors = ["#f59e0b","#3b82f6","#ef4444","#10b981","#8b5cf6","#f97316","#ec4899","#facc15","#06b6d4"];
    const shapes = ["rect","circle","star"];
    const items = Array.from({length:120},(_,i)=>({
      id:i, x:Math.random()*100, y:-12-Math.random()*25,
      vx:(Math.random()-0.5)*3, vy:1.0+Math.random()*3.8,
      rot:Math.random()*360, vrot:(Math.random()-0.5)*15,
      color:colors[Math.floor(Math.random()*colors.length)],
      shape:shapes[Math.floor(Math.random()*shapes.length)],
      size:8+Math.random()*16, opacity:1,
    }));
    setParticles(items);
    const tick = () => {
      setParticles(prev => {
        const next = prev.map(p=>({
          ...p, x:p.x+p.vx, y:p.y+p.vy, vy:p.vy+0.07,
          rot:p.rot+p.vrot,
          opacity: p.y>72 ? Math.max(0,p.opacity-0.02) : p.opacity,
        })).filter(p=>p.opacity>0 && p.y<130);
        return next;
      });
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return ()=>cancelAnimationFrame(raf.current);
  },[active]);
  return particles;
}
