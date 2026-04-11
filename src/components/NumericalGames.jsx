import React from 'react';
import CategorySidebar from './CategorySidebar';
import MobileNavbar from './MobileNavbar';

const GameCard = ({ title, description, badge, imgUrl, tiltClass, colorClass }) => (
  <div className={`group bg-surface-container-lowest rounded-xl p-6 shadow-[0px_12px_24px_-4px_rgba(44,47,48,0.08)] flex flex-col ${tiltClass} hover:rotate-0 transition-all duration-300`}>
    <div className={`relative aspect-video mb-6 rounded-lg overflow-hidden ${colorClass}`}>
      <img alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={imgUrl} />
      {badge && (
        <div className="absolute top-3 right-3 px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-black rounded-full shadow-sm">
          {badge}
        </div>
      )}
    </div>
    <div className="flex flex-col flex-1">
      <h3 className="font-display font-black text-2xl text-on-surface mb-2">{title}</h3>
      <p className="text-on-surface-variant font-medium mb-6 flex-grow leading-relaxed">{description}</p>
      <button className="w-full bg-primary-container text-on-primary-container py-4 rounded-xl font-display font-black text-lg shadow-[0_4px_0_0_#004165] hover:shadow-none hover:translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-2">
        Play <span className="material-symbols-rounded">play_circle</span>
      </button>
    </div>
  </div>
);

const NumericalGames = ({ onBack }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-surface selection:bg-primary-container selection:text-on-primary-container paper-texture relative">
      <CategorySidebar activeCategory="math" onBack={onBack} />

      <main className="flex-1 p-6 md:p-12 lg:p-16 overflow-y-auto relative z-10">
        <MobileNavbar onBack={onBack} />

        <section className="mb-16 relative">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary-container/20 rounded-full blur-[100px] pointer-events-none -z-10"></div>
          
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary-container/20 border border-primary-container/30 rounded-full mb-8 text-primary shadow-sm">
            <span className="material-symbols-rounded text-base">stars</span>
            <span className="font-display font-black text-xs uppercase tracking-[0.15em]">Math Lab Level 1</span>
          </div>
          
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-display font-black text-on-surface tracking-tight mb-8 leading-[0.95]">
              Numerical <span className="text-primary italic">Adventures</span>
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant font-medium leading-relaxed max-w-2xl">
              Dive into the world of numbers! Master counting and addition through colorful interactive challenges.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          <GameCard 
            title="Count the Apples"
            description="Help Pip the Squirrel gather exactly the right number of shiny snacks!"
            badge="NEW"
            imgUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAqBxvX1fzmIc8e7dxmViY_-TvGXZoqAiFe7KaZAkHk_S-1wfp5ayO3Z7eAXcr1tEFUkMLaJ2YlzuCFdLGZkH1Wd-JevsxzE3ZIo_4v2AjWKrC-gWgMitrJ7RbsrrNBkcZerE4nTfdHtDKQ_J56aJOuA0cAL9Leif8cFALpTanUfi0HRjxBsY5JX_hRPzvuhG6scfTLpcivlxiKOx2TGCRa01aDaUynGVlAjZwEgSyazzG4Tzxy_q_CdCN0vH8467mv9KM8bVUTJlE"
            tiltClass="rotate-[-1deg]"
            colorClass="bg-primary/5"
          />
          <GameCard 
            title="Number Match"
            description="Can you pair the numerals with the right amount of dotty ladybugs?"
            imgUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAZx1lpruCDI0uwiNvdC-eJwSR-TRnX_uAAqUWq_ItEPkMZcqVdzbdqdrnzg2V0GbQWbZ9sEbAvB0SCAYlnMmysj89J7X0xhMk05MFjZR6gHJoFENV2oEM0qBFTWpdR-cJfbaCtVfFuUrtE288MKf2kmhVMX73a3x31vBXI1UkFktjzPe_tN61iMRHSPq-EyyrheSOz-gX_hy4vHhtLxw_U7ygx0gCNFvMlwYKTPEqMIK_0_zQLazvjlqqNuAHD81Ap2qPWNvjUbX0"
            tiltClass="rotate-[0.5deg]"
            colorClass="bg-tertiary/5"
          />
          <GameCard 
            title="Addition Quest"
            description="Sum up the magical crystals to power your rocket to the stars!"
            imgUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuB6de29nrX1OqrktJ7YddO981LE4yR03kou6ebL939lAXbzPuc9PBNeQlnF24m8ZWRnDjkKJ933bd6wegDoUSeMQkrr6YEd2VzBKL59_ingbEDCJYgmKrgFajBrteNMI3erATi0OkNDJRsgsP3IWypnkGtVYRgmtg_AyuTv55QukuuntZYxKbPvpyp6DYT1_mXSQ3HbQoamrpEp17lM67-J9leKY0yX7YVUh5W6mrNxam7EghMJ3tUDBxK2wykH1BrJJPNS3G-pKJE"
            tiltClass="rotate-[-0.5deg]"
            colorClass="bg-secondary-container/10"
          />
          <GameCard 
            title="Subtraction Safari"
            description="How many animals are left hiding in the tall grass? Let's count back!"
            imgUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuB6MQMdhSUhGIt9Il84-5GcbvgARZ6IvKDcrMf1usQAjh1v-3V-MjoWHUSWzojUzIx2fP3CUDFHTjubSKbAgZHiBpUdq4mT1pZ7vXJMv0t5sO41qlyadF-eH3N-ACYPS5uOxjzrfM5lxkjEwRb8OY6mGWxr0sytxREjbimXBYk4CNyIiEOeHVQpTw2RIk7MBjdsbV8rc4MhIOF5t9DVzlbBKE-xzBpNM0EprW0hMh06H-JSdJuiJQ0WW8GQQ5vxM9APbF9zWciq8ZA"
            tiltClass="rotate-[1deg]"
            colorClass="bg-primary-container/10"
          />
        </div>

        <section className="mt-24 mb-12 bg-primary-dim p-10 md:p-16 rounded-[3rem] text-on-primary-container relative overflow-hidden shadow-2xl">
          <div className="absolute organic-noise inset-0 opacity-10"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="w-32 h-32 bg-secondary-container rounded-3xl flex items-center justify-center rotate-6 shadow-xl border-4 border-white shrink-0">
              <span className="material-symbols-rounded text-6xl text-on-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl font-display font-black text-white mb-4 tracking-tight">Road to Math Mastery!</h2>
              <p className="text-primary-container font-display font-extrabold text-xl leading-relaxed opacity-90 max-w-xl">
                You are doing great! Complete 2 more games today to unlock the Bronze Panda badge.
              </p>
            </div>
            <button className="px-10 py-5 bg-white text-primary font-display font-black text-lg rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_6px_0_0_#d1d5db]">
              View Progress
            </button>
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
          <span className="material-symbols-rounded text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>functions</span>
          <span className="text-[10px] font-black uppercase tracking-widest">Math</span>
        </button>
        <div className="relative -top-8">
          <button className="w-16 h-16 bg-tertiary text-on-tertiary rounded-full shadow-lg flex items-center justify-center active:scale-90 transition-transform ring-8 ring-surface">
            <span className="material-symbols-rounded text-3xl">play_arrow</span>
          </button>
        </div>
        <button className="flex flex-col items-center gap-1 opacity-50">
          <span className="material-symbols-rounded text-2xl">military_tech</span>
          <span className="text-[10px] font-black uppercase tracking-widest">Quests</span>
        </button>
        <button className="flex flex-col items-center gap-1 opacity-50">
          <span className="material-symbols-rounded text-2xl">person</span>
          <span className="text-[10px] font-black uppercase tracking-widest">Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default NumericalGames;

