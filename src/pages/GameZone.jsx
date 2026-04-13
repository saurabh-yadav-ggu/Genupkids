import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ActivityCards from '../components/ActivityCards';

const GameZone = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-surface font-body relative pb-12 overflow-hidden selection:bg-primary-container selection:text-on-primary-container">
      {/* Background ambient glow like Home page */}
      <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-tertiary-container/30 blur-[100px] pointer-events-none z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-4">
        <Header />
      </div>

      <main className="relative z-10 mt-8">
        {/* Game Zone Hero Section */}
        <section className="relative overflow-hidden bg-primary px-4 sm:px-8 py-6 md:py-8 rounded-[2rem] mx-4 max-w-7xl lg:mx-auto mt-2 shadow-[0_20px_40px_-10px_rgba(0,96,147,0.3)]">
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"
          }}></div>
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <div className="inline-block px-4 py-1.5 bg-secondary-container text-on-secondary-container rounded-full font-display font-bold text-xs sm:text-sm tracking-widest uppercase mb-2 sm:mb-3 -rotate-1 shadow-sm">
              IT'S PLAY TIME!
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-5xl lg:text-5xl text-on-primary tracking-tight mb-2 leading-tight">
              Welcome to the Game Zone!
            </h1>
            <p className="text-base sm:text-lg text-on-primary/90 max-w-2xl mx-auto font-medium">
              Choose a world and start your adventure! Every click is a new discovery.
            </p>
            {/* Decorative Elements */}
            <div className="hidden md:block absolute -top-10 -left-10 w-40 h-40 bg-tertiary opacity-30 rounded-full blur-3xl"></div>
            <div className="hidden md:block absolute -bottom-10 -right-10 w-60 h-60 bg-secondary opacity-30 rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* Inherited Activity Cards */}
        <div className="max-w-7xl mx-auto px-6 mt-8">
          <ActivityCards 
            onSelectNumerical={() => navigate('/games/numerical')} 
            onSelectAlphabetical={() => navigate('/games/alphabetical')} 
            onSelectThinking={() => navigate('/games/thinking')} 
            onSelectMatching={() => navigate('/games/matching')} 
          />
        </div>


      </main>

      <Footer />
    </div>
  );
};

export default GameZone;
