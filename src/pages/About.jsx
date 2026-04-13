import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './About.css';

const About = () => {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden min-h-screen flex flex-col">
      <div className="max-w-7xl mx-auto px-6 pt-4 w-full">
        <Header />
      </div>

      <main className="scrapbook-grid flex-grow">
        <section className="relative pt-16 pb-24 px-6 max-w-7xl mx-auto overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 space-y-6 relative z-10">
              <div className="inline-block px-4 py-1 bg-secondary-container text-on-secondary-container rounded-full font-bold text-sm mb-4 transform -rotate-2">
                LEARN THROUGH PLAY
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-extrabold text-primary leading-tight tracking-tight">
                About <span className="text-tertiary">GenUp Kid</span>
              </h1>
              <p className="text-xl md:text-2xl text-on-surface-variant font-medium leading-relaxed">
                GenUp Kid is a forward-thinking initiative dedicated to reshaping the landscape of early childhood development and education.
              </p>
              <div className="flex gap-4 pt-4">
                <button className="bg-primary-fixed text-on-primary-container px-8 py-4 rounded-full font-bold text-lg shadow-[0_8px_0_0_rgba(0,96,147,0.2)] hover:scale-[1.02] active:translate-y-1 active:shadow-none transition-all">
                  Get Started
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-xl transform rotate-1 border-4 md:border-8 border-white bg-white">
                <img 
                  alt="Kids learning" 
                  className="w-full h-auto aspect-[4/3] md:h-[400px] object-cover" 
                  data-alt="Group of diverse preschool children laughing and building colorful towers with large tactile wooden blocks in a sunlit classroom" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeUTVWHR89INVubxRqRxdxT9Fn4IL_sbBKliaREqWuMwA_1rVC7LzRhSxKajNbAyb6gvijetNoS0n_NA4pUTESiKQW-iv-T3GRXY8ds88MRbqQ-3qxtwh_woH8SzCvD_umcYNk1rXwxnEwFArcDuIuTUSEMwOQ8ttmEDFkhvBWRZKiS7OZoJ2JtlwPQcKGiFPrmVZVmfLZDiVWjTSkRhu0Ig4Yi9qc-5G7HBYQkYf8s1rhV3QSgfoWxWIhZuV87mF76gErGLL7lLk"
                />
              </div>
              <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-16 h-16 md:w-24 md:h-24 bg-tertiary rounded-full opacity-20 -z-0"></div>
              <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 w-20 h-20 md:w-32 md:h-32 bg-secondary rounded-full opacity-10 -z-0"></div>
              <div className="absolute top-1/2 -left-6 md:-left-12 tape-effect h-6 md:h-10 w-24 md:w-32 z-20 hidden md:block"></div>
            </div>
          </div>
        </section>
        
        <section className="py-20 px-6 bg-surface-container-low">
          <div className="max-w-5xl mx-auto">
            <div className="bg-surface-container-lowest p-8 md:p-16 rounded-xl shadow-sm border-outline-variant/10 border relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-6xl opacity-10 font-black">🎯</div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-4xl">🎯</span>
                  <h2 className="font-display text-3xl font-extrabold text-primary">The GenUp Kid Initiative</h2>
                </div>
                <div className="prose prose-xl text-on-surface-variant max-w-none leading-relaxed space-y-6">
                  <p>
                    At GenUp Kid, we believe that education shouldn't feel like a chore—it should be an adventure. Our initiative is built on the foundation of <strong>transformative learning</strong>. We bridge the gap between traditional instruction and the natural, unbridled curiosity of a child.
                  </p>
                  <p>
                    By integrating tactile experiences, digital innovation, and community support, we are creating a world where every child has the tools to become their own hero.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-primary mb-4">Our Philosophy</h2>
            <div className="h-2 w-24 bg-tertiary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <div className="bg-white p-10 rounded-xl shadow-lg transform -rotate-1 border-l-8 border-tertiary relative">
                <span className="text-tertiary text-7xl font-sans absolute -top-6 -left-6 bg-white rounded-full h-14 w-14 flex items-center justify-center leading-none pt-4">❞</span>
                <p className="text-2xl font-display font-bold text-on-surface italic leading-snug">
                    "A child who plays is a child who learns, and a child who learns while playing is a child who grows without limits."
                </p>
                <div className="mt-6 text-tertiary font-bold">— The GenUp Manifesto</div>
                <div className="absolute -bottom-4 right-8 tape-effect h-6 w-24"></div>
              </div>
            </div>
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-surface-container p-6 rounded-xl border-b-4 border-primary/20 hover:scale-105 transition-transform group">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white mb-4 group-hover:rotate-12 transition-transform">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="font-display font-extrabold text-primary mb-2">Curiosity</h3>
                <p className="text-on-surface-variant">Fueling the "why" in every child's question.</p>
              </div>
              <div className="bg-surface-container p-6 rounded-xl border-b-4 border-secondary/20 hover:scale-105 transition-transform group rotate-1">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white mb-4 group-hover:-rotate-12 transition-transform">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="font-display font-extrabold text-secondary-dim mb-2">Confidence</h3>
                <p className="text-on-surface-variant">Building the inner strength to try new things.</p>
              </div>
              <div className="bg-surface-container p-6 rounded-xl border-b-4 border-tertiary/20 hover:scale-105 transition-transform group -rotate-1">
                <div className="w-12 h-12 bg-tertiary rounded-full flex items-center justify-center text-white mb-4 group-hover:rotate-12 transition-transform">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="font-display font-extrabold text-tertiary mb-2">Creativity</h3>
                <p className="text-on-surface-variant">Expressing unique ideas through play and art.</p>
              </div>
              <div className="bg-surface-container p-6 rounded-xl border-b-4 border-primary/20 hover:scale-105 transition-transform group">
                <div className="w-12 h-12 bg-primary-fixed-dim rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="font-display font-extrabold text-primary-dim mb-2">Connection</h3>
                <p className="text-on-surface-variant">Fostering empathy and social growth.</p>
              </div>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <div className="bg-surface-container-highest p-6 rounded-xl border-b-4 border-tertiary/20 hover:scale-105 transition-transform group max-w-xs text-center">
              <div className="w-12 h-12 bg-on-surface-variant rounded-full flex items-center justify-center text-white mb-4 mx-auto group-hover:rotate-6 transition-transform">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="font-display font-extrabold text-on-surface mb-2">Character</h3>
              <p className="text-on-surface-variant">Nurturing integrity and kindness in every interaction.</p>
            </div>
          </div>
        </section>
        
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto bg-primary rounded-xl p-12 text-center text-white relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 opacity-10 scrapbook-grid"></div>
            <div className="relative z-10 space-y-8">
              <h2 className="font-display text-4xl md:text-5xl font-extrabold">Join the Movement</h2>
              <p className="text-xl md:text-2xl text-on-primary font-medium">
                  Whether you're a parent, educator, or community leader, there's a place for you in our tactile playground. Together, let's build a brighter future.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-full font-bold text-xl shadow-lg hover:scale-105 active:scale-95 transition-all">
                    Join Us Today
                </button>
                <button className="bg-transparent border-2 border-on-primary text-on-primary px-10 py-4 rounded-full font-bold text-xl hover:bg-on-primary/10 transition-all">
                    Contact Us
                </button>
              </div>
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
