import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between py-6 md:py-8 px-4 sm:px-0 gap-4">
      {/* Logo */}
      <div className="flex items-center gap-2 sm:gap-3 cursor-pointer group shrink-0">
        <div className="w-9 h-9 sm:w-10 sm:h-10 bg-secondary-container rounded-xl flex items-center justify-center rotate-6 group-hover:rotate-0 transition-transform duration-300 shadow-sm border-2 border-white">
          <span className="material-symbols-rounded text-on-secondary-container text-xl sm:text-2xl">rocket_launch</span>
        </div>
        <div className="font-display font-black text-lg sm:text-2xl tracking-tighter">
          <span className="text-primary uppercase sm:normal-case">GenUp</span>
          <span className="text-secondary-dim uppercase sm:normal-case ml-1 sm:ml-0">Kid</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-10">
        <a href="#" className="font-display font-black text-sm uppercase tracking-widest text-primary relative group">
          Home
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary rounded-full origin-left scale-x-100 transition-transform"></span>
        </a>
        {['Games', 'About', 'Parent Zone'].map((item) => (
          <a key={item} href="#" className="font-display font-black text-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors relative group">
            {item}
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </a>
        ))}
      </nav>

      {/* Action */}
      <div className="flex items-center gap-3 sm:gap-6 shrink-0">
        <button className="hidden sm:inline-block font-display font-black text-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
          Sign In
        </button>
        <button className="bg-primary text-on-primary font-display font-black text-[10px] sm:text-sm uppercase tracking-widest px-4 sm:px-8 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_4px_0_0_#004165]">
          Sign Up Free
        </button>
      </div>
    </header>
  );
};

export default Header;

