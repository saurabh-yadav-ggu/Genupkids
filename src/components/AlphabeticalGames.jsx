import React from 'react';
import CategorySidebar from './CategorySidebar';
import MobileNavbar from './MobileNavbar';

const AlphabetGameCard = ({ title, description, badge, imgUrl, tiltClass, isBestSeller }) => (
  <div className={`group bg-surface-container-lowest rounded-xl p-6 shadow-[0px_12px_24px_-4px_rgba(44,47,48,0.08)] transition-all duration-300 hover:rotate-0 flex flex-col ${tiltClass}`}>
    <div className="aspect-video rounded-lg overflow-hidden mb-6 relative bg-primary/5">
      <img alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={imgUrl} />
      {isBestSeller && (
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur rounded-full px-3 py-1 text-[10px] font-black text-primary shadow-sm uppercase tracking-wider">
          Best Seller
        </div>
      )}
      {title === "Word Builder" && (
        <span className="absolute bottom-3 left-3 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-black px-3 py-1 rounded-full shadow-sm uppercase tracking-wider">New!</span>
      )}
    </div>
    <div className="flex flex-col flex-1">
      <h3 className="text-2xl font-display font-black text-on-surface mb-2 tracking-tight">{title}</h3>
      <p className="text-on-surface-variant font-medium text-sm mb-6 flex-grow leading-relaxed">{description}</p>
      <button className="w-full py-4 bg-secondary-container text-on-secondary-container rounded-xl font-display font-black text-lg flex items-center justify-center gap-2 transition-all hover:translate-y-1 hover:shadow-none active:scale-95 shadow-[0_4px_0_0_#eec540]">
        Play <span className="material-symbols-rounded">play_circle</span>
      </button>
    </div>
  </div>
);

const AlphabeticalGames = ({ onBack }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-surface selection:bg-secondary-container paper-texture relative">
      <CategorySidebar activeCategory="reading" onBack={onBack} />

      <main className="flex-1 p-6 md:p-12 lg:p-16 relative z-10 overflow-y-auto">
        <MobileNavbar onBack={onBack} />

        <section className="mb-16 relative">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-secondary-container/20 rounded-full blur-[100px] pointer-events-none -z-10"></div>
          
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-secondary-container/20 border border-secondary-container/30 rounded-full mb-8 text-secondary shadow-sm">
            <span className="material-symbols-rounded text-base">auto_stories</span>
            <span className="font-display font-black text-xs uppercase tracking-[0.15em]">Reading Level 2</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-display font-black text-primary tracking-tight mb-8 leading-[0.95]">
              Alphabetical <span className="text-on-surface italic">Adventures</span>
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant font-medium leading-relaxed max-w-2xl">
              Explore the magic of letters through a series of fun adventures. Each game is a new world waiting for you to discover!
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          <AlphabetGameCard 
            title="A-Z Explorer"
            description="Embark on a safari through the alphabet. Find hidden letters in the wild jungle!"
            imgUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuB6KLXnQ-vSASQBetdhxC3kXIktcvJnWMIAohlr7_9IPETyDoPhdU5BIBotJm0L0tDjFYTTztJ2lDtBs8PZzRb54Zml6qD_08ku86Hc0bD8aTw7WGccoJcB2UhQA_LFj8qa4N1htbcKy2BkeDNKlKNdUW4qDaMfnIWSTjo3JHakudzOkoERNs4m6lOJDPieGnHphdVWgbbJdqLDSo_1KLpDeaJRntrDeOZMnv1j07jFVH2-Fk_3sD_jfWKXEPHdnvJpD_ELHJSQUC4"
            tiltClass="rotate-[-1deg]"
            isBestSeller={true}
          />
          <AlphabetGameCard 
            title="Phonics Fun"
            description="Master the sounds of every letter with rhythmic beats and catchy songs."
            imgUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCYXotdNhwHs7yWfUH-OgDY9r9cbFmZg2lm7Ss8i5q0-jIRQcXjFiBhVbLhdkxUcXuf5TJu1vlLKmjBPly064nbYEztUoUkOA6E6m5urZKu-xSi4WDQipFJylt0KpY1FlWZiSQIKJUTaG8kSaLvXpqM1nc-Vw9ycXk3OaK8YDCy46DcVNrRccmX3OIyi7f7Pjo2u68HVuT0ZfE_gY64RarbWmRaL2_yrwEV_h5OnheAoSP2vRHJsWETi_R3WRJcCeVHoBBfNB9b7cI"
            tiltClass="rotate-[0.5deg]"
          />
          <AlphabetGameCard 
            title="Spelling Bee"
            description="Fly through gardens and spell words correctly to collect golden honey!"
            imgUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCztPrpGIG3B4ijF8tH1MBnhszzo14ibarKSq4x77U3pSgpBSCuEf2t18Uf3qWMsTHEKGnp-KijQI4ZLjgxYFX_CvaJtrE4XeAgT5nnzXZSaViOlbk8wdhXnuMwxCLz5jZExPKxwAAkQdGPV1B1UlZ-nWInNlnlui6_0E-3OytGCNtqQCgD3S5PKnd2nKm9fXwmSoNlgEIPEHpyzaxsm6ou5yD2JKbOKMBXAw3JOiVSFNyvLsaU_f8hoAj98OCKDDzxfsX6apUT-LY"
            tiltClass="rotate-[-0.5deg]"
          />
          <AlphabetGameCard 
            title="Letter Trace"
            description="Use magic ink to trace the path of every letter. Practice makes perfect!"
            imgUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCaXqRX8rEwSY0NRM9B-akJTOS3Ksj2Ym4NPTO3LMP9pFB6mNlplz5oSD9MpCX0izEdxaR-yg06cEEz9FMxoYzwvxl2Syy_X_ET3nQslTjZoy0CxpbFIKvpu_Lxz7oeT5h2B9elXh5iXHcZQqNJjhJqf3Qm8ckRC_LR1pbKFR_GGFE5-oTr08E1n4xStyYWj6xGNQj9-QWxjklPSXfyAQzrap6AMjZ7mEb4CYwMTc7NZqg3wW1cnPuUpY-wbWF1w5go8m38S0LD9es"
            tiltClass="rotate-[1deg]"
          />
          <AlphabetGameCard 
            title="Alpha-Match"
            description="Test your memory! Match the letter with the correct object and watch them pop."
            imgUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAE2Wcj9bIxMJejZD6TOyxHx8KkXW14HmEBk6dJKvu4UfqiAzGxKB74fZnF84rFSRqmwO3E0ujcDLM3tpa0ChUEE1pHemuT3f8pbdCYmUwXo2xBiES_O1ebM2W8miYmhkZ-tiwaU24D0W1_OA1MVwTPielR5fywzIRvMr0g8BhKp38n7dajB2dqmOGdWgqYpbuga0vuEsOeYEu02kI9pc6_bYFZxEDjOZGNFvio_97F4BlBOMcVkeve7nhFj8Ly5NhjWXOsDq8_L-A"
            tiltClass="rotate-[-0.5deg]"
          />
          <AlphabetGameCard 
            title="Word Builder"
            description="Stack blocks to build words. The taller the tower, the higher your score!"
            imgUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCfH6FZsq1JlkIlbMLlJifE6Fl2zO6_ymNIPgIVrfWGlMRAKB7eMCSFhiLCtKM7_rnxfrCluqMW4AKjCnJUKN-gfJGYlfx2nC6E2uaSF9BsOQIOVj_2n_d0OzgCiraJ-vRUW0PSP9dC2tcJXEnsJlvPGO1_2yXC4e9Y9CZEMQUiD6EQ1Ld7NRCazTiEf9IE37X0YzoXKoCb6GdsiGeVYnKZDUGXhqwaA9MObQoRNnBuLgTpLD8MDkqod-BlHLHKpCPcwz5IwSaqbrg"
            tiltClass="rotate-[0.3deg]"
          />
        </div>

        <section className="mt-24 mb-12 bg-primary-container/30 rounded-[3rem] p-10 md:p-16 flex flex-col lg:flex-row items-center gap-10 border-4 border-dashed border-primary-container/40 relative overflow-hidden shadow-sm">
          <div className="absolute organic-noise inset-0 opacity-10"></div>
          <div className="w-32 h-32 flex-shrink-0 bg-secondary-container rounded-full flex items-center justify-center shadow-xl -rotate-12 z-10 border-4 border-white">
            <span className="material-symbols-rounded text-6xl text-on-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
          </div>
          <div className="text-center lg:text-left flex-1 z-10">
            <h2 className="text-4xl font-display font-black text-primary mb-4 tracking-tight">Keep Going, Explorer!</h2>
            <p className="text-on-surface-variant font-display font-black text-xl leading-relaxed opacity-90 max-w-xl">
              Complete 3 Alphabet games today to earn the <span className="text-secondary-dim underline underline-offset-4 decoration-wavy">Letter Legend</span> sticker for your digital scrapbook!
            </p>
          </div>
          <button className="z-10 px-10 py-5 bg-primary text-white rounded-2xl font-display font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-xl">
            View Progress
          </button>
        </section>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface shadow-[0_-12px_24px_-4px_rgba(44,47,48,0.08)] h-24 flex justify-around items-center px-6 z-50">
        <button className="flex flex-col items-center gap-1 opacity-50">
          <span className="material-symbols-rounded text-2xl">explore</span>
          <span className="text-[10px] font-black uppercase tracking-widest">Explore</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-rounded text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>menu_book</span>
          <span className="text-[10px] font-black uppercase tracking-widest">Reading</span>
        </button>
        <div className="relative -top-8">
          <button className="w-16 h-16 bg-secondary-container text-on-secondary-container rounded-full shadow-lg flex items-center justify-center active:scale-90 transition-transform ring-8 ring-surface">
            <span className="material-symbols-rounded text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
          </button>
        </div>
        <button className="flex flex-col items-center gap-1 opacity-50">
          <span className="material-symbols-rounded text-2xl">emoji_events</span>
          <span className="text-[10px] font-black uppercase tracking-widest">Rewards</span>
        </button>
        <button className="flex flex-col items-center gap-1 opacity-50">
          <span className="material-symbols-rounded text-2xl">person</span>
          <span className="text-[10px] font-black uppercase tracking-widest">Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default AlphabeticalGames;

