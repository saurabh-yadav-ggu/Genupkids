import Car from './Car';
import './Track.css';

const F = "'Plus Jakarta Sans', sans-serif";

function Track({ p1Pos, p2Pos, p1Bounce, p2Bounce }) {
  const STEPS = 10;
  const topOf = pos => 88 - pos * 8.4;

  return (
    <div className="track-container">
      <div className="finish-banner">FINISH LINE</div>

      <div className="track-scene">
        <div className="grass-bg" />

        <div className="asphalt-track">
          <div className="rumble-strip left-rumble" />
          <div className="rumble-strip right-rumble" />
          <div className="center-line" />
          <div className="finish-stripe" style={{ top: '2%' }} />
          <div className="start-stripe" style={{ bottom: '9%' }} />

          {Array.from({length:STEPS+1}).map((_,i)=>{
            const top = `${4 + i * 8.4}%`;
            return (
              <div key={i} className="step-markers" style={{top}}>
                <div className="lane-marker"><div className="marker-line"/></div>
                <div className="marker-gap"/>
                <div className="lane-marker"><div className="marker-line"/></div>
              </div>
            );
          })}

          <div className="car-wrapper car-p1" style={{top:`${topOf(p1Pos)}%`}}>
            <Car isP1={true} bounce={p1Bounce}/>
          </div>

          <div className="car-wrapper car-p2" style={{top:`${topOf(p2Pos)}%`}}>
            <Car isP1={false} bounce={p2Bounce}/>
          </div>
        </div>

        <div className="lane-label lane-p1-label">P1 🔵</div>
        <div className="lane-label lane-p2-label">🔴 P2</div>
      </div>

      <div className="start-label">START</div>

      <div className="progress-bars">
        {[
          {label:"🔵 P1",pos:p1Pos,color:"#3b82f6",bg:"#dbeafe"},
          {label:"🔴 P2",pos:p2Pos,color:"#ef4444",bg:"#fee2e2"},
        ].map(({label,pos,color,bg})=>(
          <div key={label} className="progress-item">
            <div className="progress-label">{label}</div>
            <div className="progress-bar">
              <div className="progress-fill" style={{
                width:`${pos*10}%`,
                background:color,
                boxShadow:`0 0 10px ${color}aa`,
              }}/>
            </div>
            <div className="progress-text">{pos}/10</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Track;
