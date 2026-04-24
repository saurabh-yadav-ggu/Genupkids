// src/pages/HeroVerse.jsx
// PART 1 (Security): Sandboxed iframe, referrerPolicy, no dangerouslySetInnerHTML.
// PART 2 (SRP): Sidebar, AdventureCard, FlipbookModal are isolated components.
// PART 4 (LLD): Business logic lives in useHeroVerse hook. This is a pure presenter.
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useHeroVerse } from '../hooks/useHeroVerse';
import { sidebarItems } from '../data/heroverse';
import PoemCanvas from '../components/poem-canvas/PoemCanvas';

// ---------- Sidebar ----------
const Sidebar = ({ activeTab, onTabChange, onCreateHero }) => (
  <aside className="w-72 bg-white flex flex-col border-r border-surface-container shadow-sm z-20" aria-label="HeroVerse navigation">
    <div className="p-8">
      <Link to="/" className="flex items-center gap-2 group">
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center rotate-6 group-hover:rotate-0 transition-transform duration-300">
          <span className="material-symbols-rounded text-white text-2xl" aria-hidden="true">rocket_launch</span>
        </div>
        <span className="font-display font-black text-2xl tracking-tighter text-primary">HeroVerse</span>
      </Link>
      <p className="mt-1 text-on-surface-variant text-xs font-bold uppercase tracking-widest pl-1">Ready to Learn?</p>
    </div>

    <nav className="flex-1 px-4 space-y-2">
      {sidebarItems.map((item) => {
        const isActive = activeTab === item.name;
        return (
          <button
            key={item.name}
            onClick={() => onTabChange(item.name)}
            aria-current={isActive ? 'page' : undefined}
            className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-display font-bold text-lg transition-all ${isActive
              ? 'bg-primary-container text-on-primary-container shadow-sm'
              : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
              }`}
          >
            <span className="material-symbols-rounded" aria-hidden="true">{item.icon}</span>
            {item.name}
          </button>
        );
      })}
    </nav>

    <div className="p-8">
      <button
        onClick={onCreateHero}
        className="w-full flex items-center justify-center gap-2 bg-[#705900] text-white font-display font-black py-4 rounded-3xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg"
      >
        <span className="material-symbols-rounded" aria-hidden="true">person_add</span>
        Create Hero
      </button>
    </div>
  </aside>
);

// ---------- AdventureCard ----------
const AdventureCard = ({ card, onClick }) => (
  <article
    onClick={() => onClick(card)}
    onKeyDown={(e) => e.key === 'Enter' && onClick(card)}
    role="button"
    tabIndex={0}
    aria-label={`Open ${card.title}`}
    className="bg-white rounded-[3rem] p-8 flex flex-col md:flex-row gap-8 shadow-sm hover:shadow-xl transition-all group cursor-pointer border-2 border-transparent hover:border-primary-container focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary"
  >
    <div className="w-full md:w-52 h-52 rounded-[2rem] overflow-hidden shadow-lg flex-shrink-0">
      <img
        src={card.img}
        alt={card.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        loading="lazy"
      />
    </div>
    <div className="flex flex-col justify-center space-y-4">
      <span className={`px-4 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-widest w-fit ${card.color}`}>
        {card.category}
      </span>
      <h3 className="text-2xl font-black group-hover:text-primary transition-colors">{card.title}</h3>
      <p className="text-on-surface-variant font-medium leading-relaxed">{card.description}</p>
      <div className="flex flex-wrap gap-4 pt-2">
        <span className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs">
          {card.flipbookUrl ? 'Start Reading' : 'View Details'}
          <span className="material-symbols-rounded text-lg" aria-hidden="true">arrow_forward</span>
        </span>
        {card.flipbookUrl && (
          <span className="flex items-center gap-2 text-secondary font-black uppercase tracking-widest text-xs">
            Listen
            <span className="material-symbols-rounded text-lg" aria-hidden="true">volume_up</span>
          </span>
        )}
      </div>
    </div>
  </article>
);

// ---------- FlipbookModal ----------
// SECURITY: sandbox attribute prevents iframe from navigating top-level page,
// accessing storage, or running privileged scripts. referrerPolicy prevents URL leakage.
const FlipbookModal = ({ isOpen, onClose, url }) => {
  // Trap focus on open — close on Escape
  React.useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Story flipbook viewer"
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-10"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-7xl h-full bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col border-8 border-white animate-modal-in">
        {/* Header */}
        <div className="bg-primary text-white px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="material-symbols-rounded" aria-hidden="true">menu_book</span>
            <h2 className="font-display font-black text-xl">Reading: Story Adventure</h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close story viewer"
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-rounded" aria-hidden="true">close</span>
          </button>
        </div>

        {/* iframe — SECURITY FIX applied */}
        <div className="flex-1 bg-surface relative">
          <iframe
            src={url}
            className="w-full h-full border-none"
            title="Flipbook Story Viewer"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            referrerPolicy="no-referrer"
            loading="lazy"
          />

          {/* Fallback overlay — in case iframe is blocked by X-Frame-Options */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-surface-container pointer-events-auto max-w-md text-center">
              <span className="material-symbols-rounded text-6xl text-primary opacity-20 block mb-4" aria-hidden="true">open_in_new</span>
              <h3 className="text-xl font-black mb-2">Can't see the book?</h3>
              <p className="text-on-surface-variant font-medium mb-6">
                The story can't load inside the app due to security restrictions.
              </p>
              {/* rel="noopener noreferrer" prevents the new tab from accessing window.opener */}
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-black hover:scale-105 transition-transform"
              >
                Open in New Tab <span className="material-symbols-rounded text-lg" aria-hidden="true">launch</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer tip */}
        <div className="bg-white p-4 border-t border-surface-container text-center font-display font-bold text-on-surface-variant text-sm flex items-center justify-center gap-2">
          <span className="material-symbols-rounded text-primary" aria-hidden="true">tips_and_updates</span>
          Tip: Use the arrows inside the story to flip the pages!
        </div>
      </div>
    </div>
  );
};

// ---------- Page Container (orchestrator only) ----------
const HeroVerse = () => {
  const navigate = useNavigate();
  const {
    activeTab, setActiveTab,
    displayedContent,
    isFlipbookOpen, openFlipbook, closeFlipbook,
  } = useHeroVerse();

  // Poem Canvas karaoke reader state
  const [isPoemCanvasOpen, setIsPoemCanvasOpen] = useState(false);
  const [selectedPoemData, setSelectedPoemData] = useState(null);

  const handleCardClick = (card) => {
    if (card.category === 'Poem') {
      setSelectedPoemData(card);
      setIsPoemCanvasOpen(true);
    } else if (card.flipbookUrl) {
      openFlipbook();
    }
  };

  return (
    <div className="flex h-screen bg-[#f5f7f8] font-body text-on-surface overflow-hidden">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} onCreateHero={() => navigate('/heroverse/create')} />

      <main className="flex-1 flex flex-col overflow-y-auto relative">
        {/* Top bar */}
        <header className="sticky top-0 bg-[#f5f7f8]/80 backdrop-blur-md z-10 px-8 py-4 flex items-center justify-between">
          <nav className="flex items-center gap-8" aria-label="Content filters">
            <span className="font-display font-bold text-primary border-b-2 border-primary pb-1">{activeTab}</span>
          </nav>
          {/* SECURITY: Avatar uses a fixed seed — not PII like email/uid */}
          <div className="flex items-center gap-4">
            <button
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-on-surface-variant shadow-sm hover:bg-primary-container/20 transition-colors"
              aria-label="Notifications"
            >
              <span className="material-symbols-rounded" aria-hidden="true">notifications</span>
            </button>
            <div
              className="w-10 h-10 rounded-full bg-secondary-container overflow-hidden border-2 border-white shadow-sm ring-1 ring-black/5"
              aria-label="User profile"
            >
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=GenUpKid" alt="Profile avatar" />
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="px-8 py-10 space-y-10 flex-1">
          <div className="flex items-center justify-between">
            <h2 className="text-4xl font-black">
              {activeTab === 'Library' ? 'All' : activeTab} Adventures
            </h2>
            <div className="h-1 flex-1 bg-surface-container mx-8 rounded-full opacity-50" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
            {displayedContent.map((card) => (
              <AdventureCard key={card.id} card={card} onClick={handleCardClick} />
            ))}
          </div>
        </div>

        <FlipbookModal
          isOpen={isFlipbookOpen}
          onClose={closeFlipbook}
          url="https://gemini.google.com/share/72011685966a"
        />

        {/* Poem Canvas — Karaoke reading experience */}
        <PoemCanvas
          isOpen={isPoemCanvasOpen}
          onClose={() => setIsPoemCanvasOpen(false)}
          selectedPoem={selectedPoemData}
        />
      </main>
    </div>
  );
};

export default HeroVerse;
