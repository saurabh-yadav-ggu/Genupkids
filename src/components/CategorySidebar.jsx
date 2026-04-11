import React from 'react';

const CategorySidebar = ({ activeCategory, onBack }) => {
  const categories = [
    { id: 'puzzles', name: 'Puzzles', icon: 'extension' },
    { id: 'math', name: 'Math Lab', icon: 'functions' },
    { id: 'reading', name: 'Reading', icon: 'menu_book' },
    { id: 'science', name: 'Science', icon: 'science' },
    { id: 'art', name: 'Art', icon: 'palette' },
  ];

  return (
    <aside className="hidden md:flex flex-col h-screen py-10 bg-surface-container-low w-72 sticky top-0 shadow-[4px_0_24px_-12px_rgba(44,47,48,0.08)] z-20 overflow-y-auto">
      <div className="px-8 mb-10">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-12 h-12 bg-secondary-container rounded-2xl flex items-center justify-center rotate-6 shadow-sm">
            <span className="material-symbols-rounded text-on-secondary-container" style={{ fontSize: '28px' }}>rocket_launch</span>
          </div>
          <div>
            <h2 className="font-display font-extrabold text-on-surface text-lg leading-tight tracking-tight">Categories</h2>
            <p className="text-xs text-on-surface-variant font-bold opacity-70 uppercase tracking-widest">Pick a world!</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {categories.map((cat) => (
          <a
            key={cat.id}
            href="#"
            className={`flex items-center gap-4 px-6 py-4 font-display font-bold rounded-2xl transition-all ${
              activeCategory === cat.id
                ? 'bg-primary text-on-primary shadow-md scale-[1.02]'
                : 'text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-rounded">{cat.icon}</span>
            <span>{cat.name}</span>
          </a>
        ))}
      </nav>

      <div className="px-6 pb-8 space-y-4">
        <button className="w-full bg-tertiary text-on-tertiary py-4 rounded-2xl font-display font-extrabold shadow-[0_6px_0_0_#710d3b] hover:shadow-none hover:translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-3">
          <span className="material-symbols-rounded">bolt</span>
          Daily Quest
        </button>
        <button 
          onClick={onBack}
          className="w-full flex items-center justify-center gap-2 text-primary-dim font-display font-bold py-3 hover:bg-primary-container/10 rounded-2xl transition-colors"
        >
          <span className="material-symbols-rounded">arrow_back</span> Back Home
        </button>
      </div>
    </aside>
  );
};

export default CategorySidebar;
