import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImg from '../assets/hero-image.png';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 pt-4 md:pt-8 pb-16">
      {/* Left text content */}
      <div className="flex-1 max-w-2xl z-10 text-center lg:text-left">
        <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-[5rem] lg:leading-[1.1] tracking-tight mb-6">
          <span className="block text-primary">Learn, Play, and</span>
          <span className="block text-primary">Grow with</span>
          <span className="block text-tertiary">GenUp Kid!</span>
        </h1>
        <p className="font-body text-lg md:text-xl lg:text-2xl text-on-surface-variant font-medium leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
          Fun games designed to boost your child's skills through interactive play and joyful exploration.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6">
          <button onClick={() => navigate('/games')} className="w-full sm:w-auto inline-flex items-center justify-center bg-primary-container text-on-primary-container font-display font-bold text-lg sm:text-xl px-10 py-4 rounded-full shadow-[0_6px_0_0_#005480] hover:translate-y-1 hover:shadow-[0_3px_0_0_#005480] active:translate-y-1.5 active:shadow-none transition-all outline-none">
            Start Playing
          </button>
          <button className="w-full sm:w-auto inline-flex items-center justify-center bg-tertiary-container text-on-tertiary-container font-display font-bold text-lg sm:text-xl px-10 py-4 rounded-full shadow-[0_6px_0_0_#8f2751] hover:translate-y-1 hover:shadow-[0_3px_0_0_#8f2751] active:translate-y-1.5 active:shadow-none transition-all outline-none">
            Start Reading
          </button>
        </div>
      </div>

      {/* Right illustration area */}
      <div className="flex-1 relative w-full max-w-xl flex justify-center items-center">
        {/* Glow behind image container */}
        <div className="absolute inset-0 bg-gradient-to-tr from-secondary-container/40 via-tertiary-container/30 to-primary-container/20 rounded-[3rem] blur-xl transform translate-x-4 translate-y-4"></div>
        
        {/* Image Card Container */}
        <div className="relative bg-gradient-to-tr from-[#fbeecc] via-surface-container-lowest to-[#ffdce4] p-2 rounded-[3.5rem] shadow-[0_12px_32px_-8px_rgba(44,47,48,0.12)]">
          <div className="bg-surface-container-lowest rounded-[3rem] overflow-hidden">
            <img src={heroImg} alt="Child reading and playing" className="w-full h-auto object-cover object-bottom pt-8 px-4" />
          </div>

          {/* Floating Sticker: Star (Top Left) */}
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-surface-container-lowest rounded-full shadow-[0_8px_16px_-4px_rgba(44,47,48,0.12)] flex items-center justify-center transform -rotate-12 z-20">
            <span className="material-symbols-rounded text-secondary" style={{ fontSize: '32px' }}>star</span>
          </div>

          {/* Floating Sticker: Party Popper (Bottom Right) */}
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-surface-container-lowest rounded-full shadow-[0_8px_16px_-4px_rgba(44,47,48,0.12)] flex items-center justify-center transform rotate-12 z-20">
            <span className="material-symbols-rounded text-tertiary" style={{ fontSize: '32px' }}>celebration</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
