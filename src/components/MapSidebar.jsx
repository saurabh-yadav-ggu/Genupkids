import React from 'react';
import { MapPin, ArrowRight, Sparkles, Heart, MousePointer2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Sidebar = ({ selectedState, stateInfo }) => {
  if (!stateInfo) {
    return (
      <div className="sidebar">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="glass-card state-card"
          style={{ padding: '40px 20px', textAlign: 'center', border: '2px dashed #cbd5e1' }}
        >
          <MousePointer2 size={48} color="#94a3b8" style={{ marginBottom: '20px' }} />
          <h2 style={{ fontSize: '1.5rem', color: '#1a4d75', marginBottom: '10px' }}>Ready to Explore?</h2>
          <p style={{ color: '#64748b' }}>Click on any state on the map to start your scrapbook adventure!</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="sidebar">
      <motion.div 
        key={selectedState}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="glass-card state-card"
      >
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: '20px', left: '20px', background: '#ff4d8d', color: 'white', padding: '5px 12px', borderRadius: '50px', fontSize: '0.7rem', fontWeight: 'bold', zIndex: 1, boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            NEW DISCOVERY!
          </div>
          <div style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(255,255,255,0.9)', padding: '8px', borderRadius: '50%', zIndex: 1, boxShadow: '0 4px 8px rgba(0,0,0,0.05)' }}>
            <Heart size={18} color="#ff4d8d" fill="#ff4d8d" />
          </div>
          <img src={stateInfo.image} alt={selectedState} className="state-image" />
        </div>
        
        <div className="state-info">
          <h2 className="state-name">{stateInfo.name || selectedState.replace(/_/g, ' ')}</h2>
          <div className="state-capital">
            <MapPin size={16} />
            <span>Capital: {stateInfo.capital}</span>
          </div>
          
          <div className="state-fact">
            {stateInfo.fact}
          </div>
          
          <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            Explore More <ArrowRight size={18} />
          </button>
        </div>
      </motion.div>

      <div className="stats-grid">
        <div className="glass-card stat-item">
          <div className="stat-value">12/28</div>
          <div className="stat-label">States Visited</div>
        </div>
        <div className="glass-card stat-item">
          <div className="stat-value">05</div>
          <div className="stat-label">Rare Badges</div>
        </div>
      </div>

      <div className="tips-card">
        <h3><Sparkles size={18} color="#f59e0b" /> Quick Tips</h3>
        <ul className="tips-list">
          <li>Click the stars to unlock special stickers.</li>
          <li>Try 'Capital Quest' to test your knowledge!</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
