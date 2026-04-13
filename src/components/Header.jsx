import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser, logout } = useAuth();
  
  const handleAuthAction = async () => {
    if (currentUser) {
      await logout();
      navigate('/login');
    } else {
      navigate('/login');
    }
  };

  const getLinkClass = (path, exact = false) => {
    const isActive = exact 
      ? location.pathname === path 
      : location.pathname.startsWith(path);
      
    const baseClass = "font-display font-bold text-[17px] hover:scale-105 transition-transform duration-200";
    const activeClass = "text-primary border-b-[3px] border-primary pb-1";
    const inactiveClass = "text-[#2c2f30] hover:text-primary";
    
    return `${baseClass} ${isActive ? activeClass : inactiveClass}`;
  };

  return (
    <header className="flex items-center justify-between py-6 md:py-8 px-0 gap-2 sm:gap-4">
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

      {/* Navigation - Hidden on Mobile */}
      <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
        <Link to="/" className={getLinkClass("/", true)}>
          Home
        </Link>
        <Link to="/games" className={getLinkClass("/games")}>
          Games
        </Link>
        <Link to="/heroverse" className={getLinkClass("/heroverse")}>
          Heroverse
        </Link>
        <Link to="/about" className={getLinkClass("/about")}>
          About
        </Link>
      </nav>

      {/* Action */}
      <div className="flex items-center shrink-0">
        <button onClick={handleAuthAction} className="bg-primary text-white font-display font-bold text-xs sm:text-base px-4 sm:px-8 py-2 sm:py-2.5 rounded-full hover:scale-105 active:scale-95 transition-all outline-none shadow-sm">
          {currentUser ? (
            <span className="flex items-center gap-2">
              <span className="hidden sm:inline">Sign Out</span>
              <span className="sm:hidden text-lg rotate-180">Logout</span>
            </span>
          ) : 'Sign In'}
        </button>
      </div>
    </header>
  );
};

export default Header;

