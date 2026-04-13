import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import heroImg from '../assets/twinkle_star.jpg';

const HeroVerse = () => {
  return (
    <div className="bg-[#f5f7f8] text-on-surface font-body min-h-screen font-sans selection:bg-[#69bdff]/30 selection:text-[#006093] pb-10">
      {/* Header */}
      <div className="relative z-[100] max-w-7xl mx-auto px-6 pt-4 w-full">
        <Header />
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 relative z-10 text-center md:text-left">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-[#fdd34d] text-yellow-900 rounded-full font-bold text-base md:text-lg shadow-sm">
            <span className="text-xl">🚀</span> Adventure Awaits! Coming Soon...
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#006093] leading-tight tracking-tight">
            HeroVerse: Every<br className="hidden md:block" /> Child is a Hero
          </h1>
          
          <p className="text-lg text-on-surface-variant font-medium leading-relaxed max-w-xl mx-auto md:mx-0">
            HeroVerse is a personalized learning experience where every child becomes the hero of their own story. We transform traditional poems, stories, and learning content into immersive adventures by integrating the child's face, name, and identity into the narrative.
          </p>

          <div className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-xl w-full max-w-md mt-8 border border-gray-100 relative overflow-hidden mx-auto lg:mx-0 text-left">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#ff8fa3] opacity-10 rounded-full blur-2xl"></div>
            <h3 className="font-extrabold text-xl text-gray-900 mb-2">Be part of the legend</h3>
            <p className="text-sm font-medium text-gray-500 mb-6">Sign up to get early access when we launch.</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Hero's email address..." 
                className="w-full bg-gray-100 border-none rounded-full px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-[#006093] outline-none"
              />
              <button className="w-full bg-[#006093] text-white font-bold text-sm px-6 py-4 rounded-full hover:scale-105 active:scale-95 transition-transform whitespace-nowrap shadow-md">
                Join the Waitlist
              </button>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="absolute bg-[#e5e9ea] w-[90%] h-[90%] rounded-[3rem] -z-10 transform -rotate-3 scale-105"></div>
          <div className="relative w-full max-w-xl rounded-[2rem] overflow-hidden shadow-2xl bg-[#192b33]">
            <img 
              src={heroImg} 
              alt="HeroVerse Protagonist" 
              className="w-full h-auto object-contain opacity-90"
            />
            
            {/* Magical Badge */}
            <div className="absolute bottom-6 right-6 bg-[#b94e76] w-20 h-20 rounded-full flex flex-col items-center justify-center text-white shadow-lg border-2 border-white/20 transform -rotate-6">
              <span className="text-xl mb-1">✨</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#f5d0de]">Magical</span>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Layout */}
      <section className="max-w-7xl mx-auto px-8 py-12 space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Blue Card */}
          <div className="bg-[#69bdff] rounded-[2.5rem] p-10 md:p-14 md:w-[60%] flex flex-col justify-center relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/20 rounded-full blur-2xl"></div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#003d5c] mb-6 leading-tight relative z-10 w-[90%]">
              Learning isn't just something you read... it's something you live.
            </h2>
            <p className="text-[#003d5c]/80 text-lg font-medium leading-relaxed max-w-xl relative z-10">
              By blending creativity, storytelling, and technology, HeroVerse makes learning more engaging, relatable, and memorable. From nursery rhymes to educational journeys, we turn passive content into active experiences—helping children build confidence, imagination, and a deeper connection with what they learn.
            </p>
          </div>
          
          {/* Pink Card */}
          <div className="bg-[#ff8fa3] rounded-[2.5rem] p-10 md:w-[40%] flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-16 h-16 bg-[#b94e76] rounded-2xl mb-6 shadow-sm flex items-center justify-center text-white transform group-hover:scale-110 group-hover:-rotate-3 transition-transform">
              <span className="text-2xl">📛</span>
            </div>
            <h3 className="text-2xl font-extrabold text-[#7a1835] mb-4">Total Immersion</h3>
            <p className="text-[#7a1835]/80 font-medium px-4 leading-relaxed">
              Your child's face and name become the central pillar of every educational quest.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Yellow Card */}
          <div className="bg-[#fdd34d] rounded-[2.5rem] p-10 md:w-[35%] flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-16 h-16 bg-[#d97706] rounded-full mb-6 shadow-sm flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-3 transition-transform">
              <span className="text-2xl">📖</span>
            </div>
            <h3 className="text-2xl font-extrabold text-[#78350f] mb-4">Smart Stories</h3>
            <p className="text-[#78350f]/80 font-medium px-4 leading-relaxed">
              Traditional poems and learning content reimagined for the modern young hero.
            </p>
          </div>

          {/* Gray Card */}
          <div className="bg-[#e5e9ea] rounded-[2.5rem] p-10 md:p-14 md:w-[65%] flex flex-col sm:flex-row items-center gap-10 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-32 h-32 bg-white rounded-3xl flex-shrink-0 flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] transform rotate-3 hover:rotate-0 transition-transform">
              <div className="text-5xl text-[#69bdff]">🛡️</div>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#006093] mb-4">Building Confidence</h3>
              <p className="text-[#006093]/70 font-medium leading-relaxed">
                Seeing oneself as the protagonist of a successful educational journey fosters self-esteem and a "can-do" attitude that translates directly into the classroom and real-world interactions.
              </p>
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
};

export default HeroVerse;
