import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Import assets
import zogImg from '../assets/heroverse/zog.png';
import dragonImg from '../assets/heroverse/dragon.png';
import bubblesImg from '../assets/heroverse/bubbles.png';
import pawsomeImg from '../assets/heroverse/pawsome.png';
import libraryImg from '../assets/heroverse/library.png';
import jellybeanImg from '../assets/heroverse/jellybean.png';
import gusImg from '../assets/heroverse/gus.png';
import robotImg from '../assets/heroverse/robot.png';

const HeroVerse = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Library');
  const [isFlipbookOpen, setIsFlipbookOpen] = useState(false);

  const sidebarItems = [
    { name: 'Library', icon: 'auto_stories' },
    { name: 'Poem', icon: 'auto_awesome' },
    { name: 'Rhyme', icon: 'music_note' },
    { name: 'Story', icon: 'book_5' },
    { name: 'Read Book', icon: 'menu_book' },
  ];

  const contentData = {
    'Library': [
      { id: 1, title: "Professor Pips' Magic Library", description: "Explore the secrets of the magical book world.", img: libraryImg, color: "bg-primary", category: "Library" },
      { id: 2, title: "Rustle the Robot's Garden", description: "Helping nature grow with high-tech tools.", img: robotImg, color: "bg-[#705900]", category: "Library" },
    ],
    'Poem': [
      { id: 3, title: "The Jellybean Rain", description: "What happens when clouds turn into candy?", img: jellybeanImg, color: "bg-tertiary", category: "Poem" },
      { id: 4, title: "Bubbles in the Deep Blue", description: "A poetic journey through the ocean waves.", img: bubblesImg, color: "bg-blue-500", category: "Poem" },
    ],
    'Story': [
      { id: 5, title: "The Dragon's Peaceful Nap", description: "A fire-breather who just wants to sleep.", img: dragonImg, color: "bg-green-600", category: "Story" },
      { id: 6, title: "Gus Goes High", description: "The mountain goat who reached for the stars.", img: gusImg, color: "bg-slate-600", category: "Story" },
    ],
    'Rhyme': [
      { id: 7, title: "Zog's Galactic Picnic", description: "A catchy rhyme about eating on Mars.", img: zogImg, color: "bg-purple-600", category: "Rhyme" },
      { id: 8, title: "A Pawsome Jungle Party", description: "Rhythmic beats with the wild jungle crew.", img: pawsomeImg, color: "bg-orange-600", category: "Rhyme" },
    ],
    'Read Book': [
      { id: 9, title: "Meghu & Chandamama", description: "A magical story about clouds and the moon.", img: libraryImg, color: "bg-indigo-600", category: "Read Book", flipbookUrl: "https://gemini.google.com/share/72011685966a" },
    ]
  };

  const getDisplayedContent = () => {
    if (activeTab === 'Library') {
      return Object.values(contentData).flat();
    }
    return contentData[activeTab];
  };

  const displayedContent = getDisplayedContent();

  const handleCardClick = (card) => {
    if (card.flipbookUrl) {
      setIsFlipbookOpen(true);
    } else {
      // Handle other card clicks if needed
      console.log('Clicked:', card.title);
    }
  };

  return (
    <div className="flex h-screen bg-[#f5f7f8] font-body text-on-surface overflow-hidden">
      {/* Sidebar */}
      <aside className="w-72 bg-white flex flex-col border-r border-surface-container shadow-sm z-20">
        <div className="p-8">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center rotate-6 group-hover:rotate-0 transition-transform duration-300">
              <span className="material-symbols-rounded text-white text-2xl">rocket_launch</span>
            </div>
            <div className="font-display font-black text-2xl tracking-tighter text-primary">
              HeroVerse
            </div>
          </Link>
          <p className="mt-1 text-on-surface-variant text-xs font-bold uppercase tracking-widest pl-1">Ready to Learn?</p>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {sidebarItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-display font-bold text-lg transition-all ${
                activeTab === item.name 
                  ? 'bg-primary-container text-on-primary-container shadow-sm' 
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
              }`}
            >
              <span className={`material-symbols-rounded ${activeTab === item.name ? 'filled' : ''}`}>
                {item.icon}
              </span>
              {item.name}
            </button>
          ))}
        </nav>

        <div className="p-8">
          <button 
            onClick={() => navigate('/heroverse/create')}
            className="w-full flex items-center justify-center gap-2 bg-[#705900] text-white font-display font-black py-4 rounded-3xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg"
          >
            <span className="material-symbols-rounded">person_add</span>
            Create Hero
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-y-auto relative">
        {/* Top Navbar */}
        <header className="sticky top-0 bg-[#f5f7f8]/80 backdrop-blur-md z-10 px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
             <nav className="flex items-center gap-8">
                <Link to="/heroverse" className="font-display font-bold text-primary border-b-2 border-primary pb-1">{activeTab}</Link>
                <Link to="#" className="font-display font-bold text-on-surface-variant hover:text-primary transition-colors">My Stories</Link>
                <Link to="#" className="font-display font-bold text-on-surface-variant hover:text-primary transition-colors">Achievements</Link>
             </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-on-surface-variant hover:bg-primary-container/20 transition-colors shadow-sm">
              <span className="material-symbols-rounded">notifications</span>
            </button>
            <div className="w-10 h-10 rounded-full bg-secondary-container overflow-hidden border-2 border-white shadow-sm ring-1 ring-black/5">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User Profile" />
            </div>
          </div>
        </header>

        <div className="px-8 py-10 space-y-10 flex-1">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-black">{activeTab === 'Library' ? 'All' : activeTab} Adventures</h2>
            <div className="h-1 flex-1 bg-surface-container mx-8 rounded-full opacity-50"></div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
            {displayedContent.map((card) => (
              <div 
                key={card.id} 
                onClick={() => handleCardClick(card)}
                className="bg-white rounded-[3rem] p-8 flex flex-col md:flex-row gap-8 shadow-sm hover:shadow-xl transition-all group cursor-pointer border-2 border-transparent hover:border-primary-container"
              >
                <div className="w-full md:w-52 h-52 rounded-[2rem] overflow-hidden shadow-lg flex-shrink-0">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <div className="flex items-center gap-3">
                    <span className={`px-4 py-1.2 rounded-full text-white text-[10px] font-black uppercase tracking-widest ${card.color}`}>
                      {card.category}
                    </span>
                    <span className="text-on-surface-variant/40 text-[10px] font-black uppercase tracking-widest">
                      New
                    </span>
                  </div>
                  <h3 className="text-2xl font-black group-hover:text-primary transition-colors">{card.title}</h3>
                  <p className="text-on-surface-variant font-medium leading-relaxed">{card.description}</p>
                  <button className="flex items-center gap-2 text-primary font-black group-hover:gap-4 transition-all uppercase tracking-widest text-xs">
                    {card.flipbookUrl ? 'Start Reading' : 'View Details'}
                    <span className="material-symbols-rounded text-lg">arrow_forward</span>
                  </button>
                  {card.flipbookUrl && (
                    <button className="flex items-center gap-2 text-secondary font-black hover:gap-4 transition-all uppercase tracking-widest text-xs">
                      Listen
                      <span className="material-symbols-rounded text-lg">volume_up</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-20 bg-primary-container/20 rounded-[4rem] text-center border-4 border-dashed border-primary-container/30">
            <span className="material-symbols-rounded text-6xl text-primary-container mb-4">auto_sparkles</span>
            <p className="font-display font-black text-primary text-xl">
              {activeTab === 'Library' ? 'Discover more adventures every week!' : `More ${activeTab}s coming soon!`}
            </p>
          </div>
        </div>

        {/* Flipbook Iframe Modal */}
        {isFlipbookOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-10 pointer-events-auto">
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
              onClick={() => setIsFlipbookOpen(false)}
            ></div>
            
            <div className="relative w-full max-w-7xl h-full bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col border-8 border-white animate-modal-in">
              <div className="bg-primary text-white px-8 py-4 flex items-center justify-between">
                <div className="flex items-center gap-6">
                   <div className="flex items-center gap-4">
                      <span className="material-symbols-rounded">menu_book</span>
                      <h2 className="font-display font-black text-xl tracking-tight">Reading: Meghu & Chandamama</h2>
                   </div>
                   <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-1.5 rounded-full transition-all text-xs font-black uppercase tracking-widest">
                      <span className="material-symbols-rounded text-sm">volume_up</span>
                      Listen
                   </button>
                </div>
                <button 
                  onClick={() => setIsFlipbookOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 transition-colors flex items-center justify-center"
                >
                  <span className="material-symbols-rounded">close</span>
                </button>
              </div>
              
              <div className="flex-1 bg-surface relative flex flex-col">
                <iframe 
                  src="https://gemini.google.com/share/72011685966a" 
                  className="w-full h-full border-none"
                  title="Flipbook Viewer"
                  allowFullScreen
                ></iframe>
                
                {/* Fallback Message for restricted iframes */}
                <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center p-12 text-center bg-surface-container/10 backdrop-blur-[1px]">
                   <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-surface-container pointer-events-auto max-w-md">
                      <span className="material-symbols-rounded text-6xl text-primary opacity-20 mb-4">open_in_new</span>
                      <h3 className="text-xl font-black mb-2">Can't see the book?</h3>
                      <p className="text-on-surface-variant font-medium mb-6">Google security may prevent the story from loading inside the app.</p>
                      <a 
                        href="https://gemini.google.com/share/72011685966a" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-black transition-transform hover:scale-105"
                      >
                        Open Story in New Tab
                        <span className="material-symbols-rounded text-lg">launch</span>
                      </a>
                   </div>
                </div>
              </div>

              <div className="bg-white p-4 flex items-center justify-center gap-8 border-t border-surface-container">
                 <p className="font-display font-bold text-on-surface-variant text-sm flex items-center gap-2">
                   <span className="material-symbols-rounded text-primary">tips_and_updates</span>
                   Tip: Use the arrows inside the story to flip the pages!
                 </p>
              </div>
            </div>
          </div>
        )}
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes modalIn {
          from { transform: scale(0.9) translateY(20px); opacity: 0; }
          to { transform: scale(1) translateY(0); opacity: 1; }
        }
        .animate-modal-in {
          animation: modalIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />
    </div>
  );
};

export default HeroVerse;
