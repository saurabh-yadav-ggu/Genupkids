import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full py-12 px-8 mt-12 flex flex-col items-center gap-6 border-t border-surface-container-high relative z-10">
      <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-secondary-container rounded-lg flex items-center justify-center -rotate-6 shadow-sm border border-white">
              <span className="material-symbols-rounded text-on-secondary-container text-lg">rocket_launch</span>
          </div>
          <div className="text-xl font-display font-black tracking-tighter">
              <span className="text-primary">GenUp</span>
              <span className="text-secondary-dim ml-1">Kid</span>
          </div>
      </div>
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
        <Link to="/about" className="font-body text-base font-medium text-on-surface-variant hover:text-primary transition-colors hover:underline decoration-wavy">Privacy Policy</Link>
        <Link to="/about" className="font-body text-base font-medium text-on-surface-variant hover:text-primary transition-colors hover:underline decoration-wavy">Terms of Service</Link>
        <Link to="/about" className="font-body text-base font-medium text-on-surface-variant hover:text-primary transition-colors hover:underline decoration-wavy">Support</Link>
      </div>
      <p className="text-on-surface-variant/80 font-medium text-sm text-center mt-4">
          © {new Date().getFullYear()} GenUp Kid. Built with magic and curiosity.
      </p>
    </footer>
  );
};

export default Footer;
