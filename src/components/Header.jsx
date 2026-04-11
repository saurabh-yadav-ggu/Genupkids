import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between py-8">
      {/* Logo */}
      <div className="flex items-center gap-3 cursor-pointer group">
        <div className="w-10 h-10 bg-secondary-container rounded-xl flex items-center justify-center rotate-6 group-hover:rotate-0 transition-transform duration-300 shadow-sm border-2 border-white">
          <span className="material-symbols-rounded text-on-secondary-container text-2xl">rocket_launch</span>
        </div>
        <div className="font-display font-black text-2xl tracking-tighter">
          <span className="text-primary">GenUp</span>
          <span className="text-secondary-dim">Kid</span>
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
      <div className="flex items-center gap-6">
        <button className="hidden sm:inline-block font-display font-black text-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
          Sign In
        </button>
        <button className="bg-primary text-on-primary font-display font-black text-sm uppercase tracking-widest px-8 py-3.5 rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_4px_0_0_#004165]">
          Sign Up Free
        </button>
      </div>
    </header>
  );
};

export default Header;

