import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IndiaMap from '../components/IndiaMap';
import Sidebar from '../components/MapSidebar';
import CapitalQuest from '../components/CapitalQuest';
import { statesData, defaultState } from '../data/states';
import { Eye, EyeOff } from 'lucide-react';
import '../MapIntegration.css';

const MapQuest = () => {
  const [selectedState, setSelectedState] = useState(defaultState);
  const [mode, setMode] = useState('explorer'); // 'explorer' or 'quest'
  const [showLabels, setShowLabels] = useState(true);

  const handleStateClick = (stateId) => {
    setSelectedState(stateId);
  };

  return (
    <div className="min-h-screen bg-surface font-body relative pb-12 overflow-hidden selection:bg-primary-container selection:text-on-primary-container">
      {/* Background ambient glow like Home page */}
      <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-tertiary-container/30 blur-[100px] pointer-events-none z-0"></div>
      
      <div className="relative z-[100] max-w-7xl mx-auto px-6 pt-4">
        <Header />
      </div>

      <main className="relative z-10 mt-8 max-w-7xl mx-auto px-6">
        <div className="app-layout">
          <div className="main-content">
            <section className="map-section">
              <div className="map-title">
                <h1 className="font-display font-extrabold text-3xl md:text-5xl text-on-surface mb-4 flex items-center gap-4">
                  <span style={{ 
                    background: mode === 'quest' ? '#5db9ff' : '#ff4d8d', 
                    color: 'white', 
                    borderRadius: '50%', 
                    width: '60px', 
                    height: '60px', 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    fontSize: '1.8rem', 
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)' 
                  }}>
                    {mode === 'quest' ? '🎓' : '🧭'}
                  </span>
                  {mode === 'quest' ? 'Capital Quest!' : 'Adventure Map!'}
                </h1>
                <p className="text-on-surface-variant text-lg font-medium mb-8">
                  {mode === 'quest' 
                    ? "Test your memory! Can you find the states by their capital cities?" 
                    : "Click on any state to unlock secret landmarks, tasty treats, and amazing stories!"}
                </p>
              </div>
              
              <div className="map-wrapper relative bg-white p-4 rounded-[2rem] shadow-xl border border-surface-container">
                <IndiaMap 
                  onStateClick={handleStateClick} 
                  selectedState={selectedState} 
                  showLabels={showLabels}
                />
                
                {/* Label Toggle Button */}
                <button 
                  onClick={() => setShowLabels(!showLabels)}
                  className="absolute top-4 right-4 bg-white border border-surface-container p-3 rounded-2xl flex items-center gap-3 font-bold text-on-surface-variant hover:text-primary transition-colors shadow-sm z-10"
                >
                  {showLabels ? <Eye size={18} /> : <EyeOff size={18} />}
                  {showLabels ? 'Hide Labels' : 'Show Labels'}
                </button>

                <div className="absolute bottom-8 right-8 bg-[#ffd95d] p-4 rounded-full shadow-lg border-4 border-white rotate-[-10deg]">
                  <span style={{ fontSize: '2rem' }}>⭐</span>
                </div>
              </div>

              <div className="mode-selector bg-white/80 backdrop-blur-sm border border-white p-2 rounded-[2rem] flex mt-10 shadow-md">
                <button 
                  onClick={() => setMode('explorer')}
                  className={`flex-1 py-4 px-8 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3 ${
                    mode === 'explorer' 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'text-on-surface-variant hover:bg-surface-container'
                  }`}
                >
                  📖 EXPLORER
                </button>
                <button 
                  onClick={() => setMode('quest')}
                  className={`flex-1 py-4 px-8 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3 ${
                    mode === 'quest' 
                    ? 'bg-secondary text-white shadow-lg' 
                    : 'text-on-surface-variant hover:bg-surface-container'
                  }`}
                >
                  ❓ CAPITAL QUEST
                </button>
              </div>
            </section>

            {mode === 'explorer' ? (
              <Sidebar 
                selectedState={selectedState} 
                stateInfo={statesData[selectedState]} 
              />
            ) : (
              <CapitalQuest 
                selectedState={selectedState}
                onCorrectAnswer={(id) => console.log('Correct Answer:', id)}
              />
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MapQuest;
