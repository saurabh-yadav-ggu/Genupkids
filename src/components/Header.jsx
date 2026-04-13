import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleAuthAction = async () => {
    if (currentUser) {
      await logout();
      navigate('/login');
    } else {
      navigate('/login');
    }
  };

  const getLinkClass = (path, exact = false, isMobile = false) => {
    const isActive = exact 
      ? location.pathname === path 
      : location.pathname.startsWith(path);
      
    if (isMobile) {
      return `block w-full px-6 py-4 font-display font-bold text-lg transition-all ${
        isActive ? 'text-primary bg-primary-container/10 border-l-4 border-primary' : 'text-[#2c2f30] hover:text-primary hover:pl-8'
      }`;
    }

    const baseClass = "font-display font-bold text-[17px] hover:scale-105 transition-transform duration-200";
    const activeClass = "text-primary border-b-[3px] border-primary pb-1";
    const inactiveClass = "text-[#2c2f30] hover:text-primary";
    
    return `${baseClass} ${isActive ? activeClass : inactiveClass}`;
  };

  return (
    <header className="relative py-6 md:py-8 z-[100]">
      <div className="flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1.5 sm:gap-3 cursor-pointer group shrink-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary-container rounded-xl flex items-center justify-center rotate-6 group-hover:rotate-0 transition-transform duration-300 shadow-sm border-2 border-white">
            <span className="material-symbols-rounded text-on-secondary-container text-lg sm:text-2xl">rocket_launch</span>
          </div>
          <div className="font-display font-black text-base sm:text-2xl tracking-tighter">
            <span className="text-primary uppercase sm:normal-case">GenUp</span>
            <span className="text-secondary-dim uppercase sm:normal-case ml-1 sm:ml-0">Kid</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
          <Link to="/" className={getLinkClass("/", true)}>Home</Link>
          <Link to="/games" className={getLinkClass("/games")}>Games</Link>
          <Link to="/heroverse" className={getLinkClass("/heroverse")}>Heroverse</Link>
          <Link to="/about" className={getLinkClass("/about")}>About</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <button onClick={handleAuthAction} className="bg-primary text-white font-display font-bold text-xs sm:text-base px-4 sm:px-8 py-2 sm:py-2.5 rounded-full hover:scale-105 active:scale-95 transition-all outline-none shadow-sm">
            {currentUser ? 'Sign Out' : 'Sign In'}
          </button>

          {/* Hamburger Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container-high text-on-surface-variant hover:bg-primary-container/20 transition-colors"
          >
            <span className="material-symbols-rounded text-2xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-[100%] left-0 right-0 mt-2 bg-white rounded-3xl shadow-2xl border border-primary-container/10 overflow-hidden animate-mobile-menu z-[110]">
          <nav className="flex flex-col p-4">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className={getLinkClass("/", true, true)}>Home</Link>
            <Link to="/games" onClick={() => setIsMenuOpen(false)} className={getLinkClass("/games", false, true)}>Games</Link>
            <Link to="/heroverse" onClick={() => setIsMenuOpen(false)} className={getLinkClass("/heroverse", false, true)}>Heroverse</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className={getLinkClass("/about", false, true)}>About</Link>
          </nav>
          
          <div className="bg-surface-container-low p-6 text-center">
            <p className="font-display font-black text-primary/40 uppercase tracking-[0.2em] text-[10px] mb-2 px-2">GenUp Kid v1.0</p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

