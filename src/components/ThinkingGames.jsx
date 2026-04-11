import React from 'react';
import CategorySidebar from './CategorySidebar';
import MobileNavbar from './MobileNavbar';

const ThinkingGameCard = ({ title, description, imgUrl, tiltClass, colorOverlay }) => (
  <article className={`group bg-surface-container-lowest rounded-xl p-6 shadow-[0px_12px_24px_-4px_rgba(44,47,48,0.08)] transition-all duration-300 hover:rotate-0 flex flex-col ${tiltClass}`}>
    <div className="aspect-video rounded-lg overflow-hidden mb-6 relative bg-primary/5">
      <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={imgUrl} alt={title} />
      <div className={`absolute inset-0 ${colorOverlay} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
    </div>
    <div className="flex flex-col flex-1">
      <h2 className="text-2xl font-black font-display mb-2 text-on-surface tracking-tight">{title}</h2>
      <p className="text-on-surface-variant font-medium text-sm mb-6 flex-grow leading-relaxed">{description}</p>
      <button className="w-full py-4 bg-tertiary text-white rounded-xl font-display font-black text-lg flex items-center justify-center gap-2 transition-all hover:translate-y-1 hover:shadow-none active:scale-95 shadow-[0_4px_0_0_#710d3b]">
        Play Now <span className="material-symbols-rounded">play_circle</span>
      </button>
    </div>
  </article>
);

const ThinkingGames = ({ onBack }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-surface selection:bg-tertiary-container selection:text-on-tertiary-container paper-texture relative">
      <CategorySidebar activeCategory="puzzles" onBack={onBack} />

      <main className="flex-1 p-6 md:p-12 lg:p-16 relative z-10 overflow-y-auto">
        <MobileNavbar onBack={onBack} />

        <section className="relative overflow-hidden bg-primary-container rounded-[3rem] p-10 md:p-16 mb-16 rotate-[-0.6deg] shadow-lg">
          <div className="noise-texture absolute inset-0 opacity-[0.03] pointer-events-none"></div>
          <div className="relative z-10 max-w-2xl">
            <span className="bg-tertiary text-white px-6 py-2 rounded-full text-xs font-black tracking-[0.2em] mb-6 inline-block uppercase shadow-sm">Brain Power</span>
            <h1 className="text-5xl md:text-8xl font-black font-display text-on-primary-container mb-8 tracking-tighter leading-[0.95]">
              Thinking <span className="opacity-80 italic">Games</span>
            </h1>
            <p className="text-xl md:text-2xl text-on-primary-container/90 font-medium leading-relaxed max-w-xl">
              Ready to become a brain-master? Solve puzzles, beat mazes, and sharpen your memory in the thinking zone!
            </p>
          </div>
          <div className="absolute right-[-40px] bottom-[-40px] opacity-10">
            <span className="material-symbols-rounded text-[280px]" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          <ThinkingGameCard 
            title="Pattern Master"
            description="Can you spot the sequence? Connect the shapes and colors to win!"
            imgUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBBWRzDzQdS4v3R_y8oazHOk5ZhNvxwih5g8kY2Qz45eQa2IJ1RH7RzY9LdSL60q0nIrvzEGJQvOL8C1hId0llWtPYkta4JqxNKMwg8FwHrlZJ06YXRLFzSJETDgkWobr6ywPCMSqxOxIAGiB8cEf2bGl6tfzn9ozbuwVcVW_WIXLrwFbUzrkMY2W2cP6rwiEBbOPwILsyed2ZwYLU4srtcSlZb9bI_C4MUm3FZnbpEMF036ud-OFcF3X7CO-hzAzxB_eeSDG1Ufwk"
            tiltClass="rotate-[0.5deg]"
            colorOverlay="bg-tertiary/10"
          />
          <ThinkingGameCard 
            title="Logic Puzzles"
            description="Think outside the box! Use your smarts to solve these tricky riddles."
            imgUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAZlCUf7-pevy-TTYZBO8OkuM8qFIgvO1c0RIf3FfYVYu5k-1lJHvqOuqiFYigUtcvJCqZjClUIHCb0PaBJWa2ic6hpaLfT4ZQDlDi7VB0e1rWqT5bsNu5hk49pDTZUBxhQeUe1bsNSfS7_qGD5J7pqBm8sdvboVtAn_YmFixWMyAo2vczfHRtLr0rx0y9oR3-IFMSKMu-P9hwMDT7nEJs-d_PlhffWhaesmQr-6ByOyQvpoGzVaVEeyu7YKNuRfxxoiDnjF6kixMc"
            tiltClass="rotate-[-0.5deg]"
            colorOverlay="bg-primary/10"
          />
          <ThinkingGameCard 
            title="Maze Runner"
            description="Escape the winding walls! Find the quickest path to the finish line."
            imgUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDfT0ZkvztxKC9IBGuE-AzA8pNimMGiAyz4FrbUaNwBemgRp-e0JzxkP1JMF2O_lLrnUfuUh247JXIzgu3bl5QWhYpj6GXQjCWoAwQimd_K7OtvBi46epETCdFGPa_AqyJnTmSTbQ-EPawpnBASuI_vTS_omY7PZTvQFdcgaivGOi4l5jlQ9xsx2THJgldnx2hIsj0oYx5nylfFCcY6gFWAJ91WZrt5QWZSpreNI_zNtd_9ossBwpkKlCuETRVi-DKTbQaj1Z3s2Eg"
            tiltClass="rotate-[-1deg]"
            colorOverlay="bg-secondary/10"
          />
          <ThinkingGameCard 
            title="Memory Match"
            description="Where was that star? Flip the cards and match the pairs together."
            imgUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDhLlDCriPun45ny7tKFjHtyAB1c_WbVYpKZH0tgc0E2iZXv73Var4nyIcBBlqUQzLDpJriVtETEIfHn2yXYhXYYztp-cw1CUp-hL9JBXLzMwIR9V6g73jAgbvc6RxewD6RahRkp-VpIgcP-WC63g-F3EcvF2AW3QTwOZ178i3gTzRgXSs-tAaZ_HcuMOLVvLDitrvom8Fink93Hs57qoR9ic_jE5JZRNMfHA_2-92BiqepTT28lSIMzjc2zoM6Wu3X-Qy-0ezz_B8"
            tiltClass="rotate-[1deg]"
            colorOverlay="bg-tertiary/10"
          />
          <ThinkingGameCard 
            title="Sudoku Kid"
            description="A numbers game for everyone! Fill the grid without repeats."
            imgUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuB9OmsAAQuWeu1dUv8UNq-s2chAq_LLEjZaZGz14W3X0fFoMo0V_j_6xNUvEE2POxaL6kdgp-wM6PEjiXHdPz6hkMRY_x9SGDj9MVdAetMaWG8AhEYrI5lFMmRYjJ614G_LVt6jzTbDP7N6bUdJcMGMlFNc2KZOI9SheipBmpjbvxGiFxDUXKlJBtlNvO5pGpReMKOug9NPvbuOKBHC4ILhVjxkSNK927tsi2lb9j2ofaGWY10dI2d5cugJevmSVzt1zrIGcSXEOJk"
            tiltClass="rotate-[0.5deg]"
            colorOverlay="bg-primary/10"
          />
          <ThinkingGameCard 
            title="Shadow Shapes"
            description="Whose shadow is that? Identify the objects by their dark outlines."
            imgUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCbucDJt_9HIFh1KG9uGYMkunXg_Ui9WGgnUXESz0LKPJpOj8VW0c50E7xQ1B5Fl9g_nVhabCn5DYAEItWYLaLsuEls2fyLx2z6vbhKhoVYSfUQQwDTtcoD7kMdBO9XrO7inuawUVSpljTgI-r25l1-T2OTcW_k7j-MLAcpXEiCBv9a_kleKMtEkRQq1AK-n8aq07yQ1YSxkrC6NAnDREY_eyDeVw0-ReowX2SUEZpegJp7h2g8tp3SNbnfsEAQUfTRSGuzszqC6tM"
            tiltClass="rotate-[-0.5deg]"
            colorOverlay="bg-secondary/10"
          />
        </div>

        <section className="mt-24 mb-12 p-10 md:p-16 bg-surface-container-low rounded-[3rem] relative overflow-hidden border-4 border-dashed border-outline-variant/30 shadow-sm">
          <div className="absolute organic-noise inset-0 opacity-10"></div>
          <div className="flex flex-col lg:flex-row items-center gap-10 relative z-10">
            <div className="w-28 h-28 bg-secondary-container rounded-3xl flex items-center justify-center shadow-xl -rotate-12 border-4 border-white shrink-0">
              <span className="material-symbols-rounded text-on-secondary-container text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-4xl font-black font-display text-on-surface mb-3 tracking-tight">Thinking Master Badge</h3>
              <p className="text-on-surface-variant font-display font-extrabold text-xl opacity-80 leading-relaxed max-w-xl">Play 3 more puzzles to earn this week's special sticker!</p>
            </div>
            <div className="flex -space-x-4">
              <div className="w-14 h-14 rounded-full bg-primary border-4 border-white flex items-center justify-center rotate-6 shadow-md"><span className="material-symbols-rounded text-white">star</span></div>
              <div className="w-14 h-14 rounded-full bg-tertiary-dim border-4 border-white flex items-center justify-center -rotate-12 shadow-md"><span className="material-symbols-rounded text-white">favorite</span></div>
              <div className="w-14 h-14 rounded-full bg-secondary-container border-4 border-white flex items-center justify-center rotate-3 shadow-md"><span className="material-symbols-rounded text-secondary-dim">auto_awesome</span></div>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface shadow-[0_-12px_24px_-4px_rgba(44,47,48,0.08)] h-24 flex justify-around items-center px-6 z-50">
        <button className="flex flex-col items-center gap-1 opacity-50">
          <span className="material-symbols-rounded text-2xl">explore</span>
          <span className="text-[10px] font-black uppercase tracking-widest">Explore</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-rounded text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>extension</span>
          <span className="text-[10px] font-black uppercase tracking-widest">Puzzles</span>
        </button>
        <div className="relative -top-8">
          <button className="w-16 h-16 bg-tertiary text-white rounded-full shadow-lg flex items-center justify-center ring-8 ring-surface active:scale-90 transition-all">
            <span className="material-symbols-rounded text-3xl">play_circle</span>
          </button>
        </div>
        <button className="flex flex-col items-center gap-1 opacity-50">
          <span className="material-symbols-rounded text-2xl">trophy</span>
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

export default ThinkingGames;

