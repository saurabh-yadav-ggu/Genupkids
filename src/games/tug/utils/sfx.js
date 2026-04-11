function createAudio() {
  let ctx = null;
  const get = () => {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    return ctx;
  };
  return {
    correct() {
      try {
        const c = get();
        const freqs = [523, 659, 784, 1047];
        freqs.forEach((f, i) => {
          const o = c.createOscillator();
          const g = c.createGain();
          o.connect(g); g.connect(c.destination);
          o.type = "sine"; o.frequency.value = f;
          g.gain.setValueAtTime(0, c.currentTime + i*0.08);
          g.gain.linearRampToValueAtTime(0.18, c.currentTime + i*0.08 + 0.04);
          g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + i*0.08 + 0.22);
          o.start(c.currentTime + i*0.08);
          o.stop(c.currentTime + i*0.08 + 0.25);
        });
      } catch(e){}
    },
    wrong() {
      try {
        const c = get();
        const o = c.createOscillator();
        const g = c.createGain();
        o.connect(g); g.connect(c.destination);
        o.type = "sawtooth";
        o.frequency.setValueAtTime(300, c.currentTime);
        o.frequency.linearRampToValueAtTime(150, c.currentTime + 0.3);
        g.gain.setValueAtTime(0.18, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.32);
        o.start(c.currentTime); o.stop(c.currentTime + 0.35);
      } catch(e){}
    },
    keypress() {
      try {
        const c = get();
        const o = c.createOscillator();
        const g = c.createGain();
        o.connect(g); g.connect(c.destination);
        o.type = "sine"; o.frequency.value = 880;
        g.gain.setValueAtTime(0.07, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.08);
        o.start(c.currentTime); o.stop(c.currentTime + 0.1);
      } catch(e){}
    },
    win() {
      try {
        const c = get();
        const melody = [523,659,784,1047,1319,1047,1319,1568];
        melody.forEach((f,i)=>{
          const o = c.createOscillator();
          const g = c.createGain();
          o.connect(g); g.connect(c.destination);
          o.type = i%2===0?"sine":"triangle";
          o.frequency.value = f;
          const t = c.currentTime + i*0.1;
          g.gain.setValueAtTime(0, t);
          g.gain.linearRampToValueAtTime(0.22, t+0.04);
          g.gain.exponentialRampToValueAtTime(0.001, t+0.28);
          o.start(t); o.stop(t+0.32);
        });
      } catch(e){}
    },
    pull() {
      try {
        const c = get();
        const o = c.createOscillator();
        const g = c.createGain();
        o.connect(g); g.connect(c.destination);
        o.type = "triangle"; o.frequency.value = 220;
        g.gain.setValueAtTime(0.12, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime+0.2);
        o.start(c.currentTime); o.stop(c.currentTime+0.22);
      } catch(e){}
    }
  };
}
const sfx = createAudio();
export default sfx;
