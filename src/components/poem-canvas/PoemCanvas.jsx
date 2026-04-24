// src/components/poem-canvas/PoemCanvas.jsx
// Full-screen poem reading modal with karaoke sync, animated character,
// sidebar, and matching the "Poem Canvas" reference design.
import React, { useEffect } from 'react';
import { parseSRT } from '../../utils/parseSRT';
import { useKaraoke } from '../../hooks/useKaraoke';
import KaraokeText from './KaraokeText';
import PoemCharacter from './PoemCharacter';
import './PoemCanvas.css';

import characterPng from '../../assets/hero-verse-poem/fun-3d-cartoon-teenage-boy-removebg-preview.png';
import audioFile from '../../assets/hero-verse-poem/vidssave.com Twinkle Twinkle Little Star Poem I English Poem I Lullaby For Babies To Go To Sleep I Happy Bachpan 256KBPS.webm';
import { twinkleSRT } from '../../data/twinkleData';

const srtRaw = twinkleSRT;

const SIDEBAR_ITEMS = [
  { name: 'My Poems', icon: 'description' },
  { name: 'Library', icon: 'local_library' },
  { name: 'Stickers', icon: 'auto_awesome' },
  { name: 'Settings', icon: 'settings' },
];

export default function PoemCanvas({ isOpen, onClose, selectedPoem }) {
  // Parse cues inside the component so we can use useMemo safely
  const cues = React.useMemo(() => {
    const parsed = parseSRT(srtRaw);
    console.log('Parsed Cues:', parsed);
    return parsed;
  }, []);
  
  const {
    audioRef,
    activeCueIndex,
    isPlaying,
    progress,
    currentTime,
    togglePlay,
    stop,
  } = useKaraoke(cues);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  // Stop audio when modal closes
  useEffect(() => {
    if (!isOpen) stop();
  }, [isOpen, stop]);

  if (!isOpen) return null;

  // Use the image from the selected poem card or a default
  const displayImage = selectedPoem?.img || '/poem-art.jpg';
  const displayTitle = selectedPoem?.title || 'Twinkle, Twinkle, Little Star';

  return (
    <div className="poem-canvas-overlay" role="dialog" aria-modal="true" aria-label="Poem Canvas Reader">
      {/* Hidden audio element */}
      <audio ref={audioRef} src={audioFile} preload="metadata" />

      {/* ── Top Navbar ── */}
      <nav className="pc-navbar">
        <span className="pc-logo">Poem Canvas</span>
        <div className="pc-nav-links">
          <button className="pc-nav-link active">Library</button>
          <button className="pc-nav-link">My Poems</button>
          <button className="pc-play-btn" onClick={togglePlay}>
            <span className="material-symbols-rounded" style={{ fontSize: 20 }}>
              {isPlaying ? 'pause' : 'play_arrow'}
            </span>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <button className="pc-nav-icon-btn" onClick={togglePlay} aria-label="Toggle sound">
            <span className="material-symbols-rounded">
              {isPlaying ? 'volume_up' : 'volume_off'}
            </span>
          </button>
          <button className="pc-nav-icon-btn" onClick={onClose} aria-label="Close">
            <span className="material-symbols-rounded">close</span>
          </button>
        </div>
      </nav>

      {/* ── Main 3-Column Layout ── */}
      <div className="pc-main-layout">
        {/* Left Sidebar */}
        <aside className="pc-sidebar">
          <div className="pc-sidebar-profile">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=GenUpKid"
              alt="User avatar"
              className="pc-avatar"
            />
            <p className="pc-username">Poet's Nook</p>
            <p className="pc-user-level">Level 5 Word Weaver</p>
          </div>

          <div className="pc-sidebar-nav">
            {SIDEBAR_ITEMS.map((item) => (
              <button
                key={item.name}
                className={`pc-sidebar-item ${item.name === 'Library' ? 'active' : ''}`}
              >
                <span className="material-symbols-rounded">{item.icon}</span>
                {item.name}
              </button>
            ))}
          </div>

          <div className="pc-sidebar-bottom">
            <button className="pc-new-poem-btn">New Poem</button>
          </div>
        </aside>

        {/* Center Panel — Poem Art + Progress */}
        <div className="pc-center-panel">
          <div className="pc-image-card">
            <div className="pc-star-badge">
              <span className="material-symbols-rounded filled">grade</span>
            </div>

            <img src={displayImage} alt={displayTitle} className="pc-poem-art" />

            {/* Progress bar overlay */}
            <div 
              className="pc-progress-bar"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const pct = (x / rect.width) * 100;
                seekTo(pct);
              }}
              style={{ cursor: 'pointer' }}
            >
              <div className="pc-progress-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>

        {/* Right Panel — Title + Karaoke Text + Tags */}
        <div className="pc-right-panel">
          <div className="pc-title-accent" />
          <h1 className="pc-poem-title">{displayTitle}</h1>

          <div className="pc-poem-body">
            <KaraokeText cues={cues} activeCueIndex={activeCueIndex} />
          </div>

          <hr className="pc-divider" />

          <div className="pc-tags">
            <span className="pc-tag sky">#NightSky</span>
            <span className="pc-tag wonder">#Wonder</span>
            <span className="pc-tag magic">#Magic</span>
          </div>

          <div className="pc-actions">
            <button className="pc-action-btn" aria-label="Like">
              <span className="material-symbols-rounded">favorite</span>
            </button>
            <button className="pc-action-btn" aria-label="Share">
              <span className="material-symbols-rounded">share</span>
            </button>
          </div>

          <button className="pc-edit-fab" aria-label="Edit poem">
            <span className="material-symbols-rounded">edit</span>
          </button>

          {/* Animated 3D Character - Moved to Right Panel (Text Box) */}
          <PoemCharacter 
            characterSrc={characterPng} 
            isActive={isPlaying} 
            activeCueIndex={activeCueIndex}
          />
        </div>
      </div>
    </div>
  );
}
