import React from 'react';
import CategorySidebar from './CategorySidebar';
import MobileNavbar from './MobileNavbar';

const MatchCard = ({ title, description, imgUrl, tiltClass, badge, badgeColor }) => (
  <div className={`group bg-surface-container-lowest rounded-xl p-6 shadow-[0px_12px_24px_-4px_rgba(44,47,48,0.08)] transition-all duration-300 hover:rotate-0 flex flex-col ${tiltClass}`}>
    <div className="aspect-video rounded-lg overflow-hidden mb-6 relative bg-primary/5">
      <img alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={imgUrl} />
      {badge && (
        <div className={`absolute top-3 right-3 ${badgeColor || 'bg-secondary-container text-on-secondary-container'} text-[10px] font-black px-3 py-1 rounded-full shadow-sm uppercase tracking-wider`}>
          {badge}
        </div>
      )}
    </div>
    <div className="flex flex-col flex-1">
      <h3 className="font-display font-black text-2xl text-on-surface mb-2 tracking-tight">{title}</h3>
      <p className="text-on-surface-variant font-medium text-sm mb-6 flex-grow leading-relaxed">{description || "Match the colorful pairs before the timer runs out!"}</p>
      <button className="w-full bg-primary-container text-on-primary-container py-4 rounded-xl font-display font-black text-lg flex items-center justify-center gap-2 shadow-[0_4px_0_0_#004165] hover:translate-y-1 hover:shadow-none active:scale-95 transition-all">
        Play <span className="material-symbols-rounded">rocket_launch</span>
      </button>
    </div>
  </div>
);

const MatchingGames = ({ onBack }) => {
  const stickers = [
    { icon: 'pet_supplies', color: 'text-secondary', bg: 'border-secondary-container' },
    { icon: 'star', color: 'text-primary', bg: 'border-primary-container' },
    { icon: 'favorite', color: 'text-tertiary', bg: 'border-tertiary-container' },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-surface selection:bg-primary-container selection:text-on-primary-container paper-texture relative">
      <CategorySidebar activeCategory="puzzles" onBack={onBack} />

      <main className="flex-1 p-6 md:p-12 lg:p-16 relative z-10 overflow-y-auto">
        <MobileNavbar onBack={onBack} />

        <section className="mb-16 relative">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary-container/20 rounded-full blur-[100px] pointer-events-none -z-10"></div>
          
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary-container/20 border border-primary-container/30 rounded-full mb-8 text-primary shadow-sm">
            <span className="material-symbols-rounded text-base">grid_view</span>
            <span className="font-display font-black text-xs uppercase tracking-[0.15em]">Puzzle World</span>
          </div>
          
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-display font-black text-on-surface tracking-tight mb-8 leading-[0.95]">
              Perfect <span className="text-primary italic">Matches</span>
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant font-medium leading-relaxed max-w-2xl">
              Sharpen your eyes and your memory! Can you find all the matching pairs in these delightful worlds?
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          <MatchCard 
            title="Animal Matchup"
            description="Connect fluffy friends in this safari memory quest!"
            imgUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBcR64tOT41Gzjn4dGUyZ-LksiGEHjj_zA86aU1PlPKXVaVCZpWSMWZy-bMbT_Vzu5saFYkuOwNtQ12bGZ4pHNFSWT3Ql0-NhPslZgToDOQRdeT7_Wme77L-DX_QZ4xz0CIY9ybHvrlsuGhVh7JpEESUaUGxZFOizM8OOxg-YKujEH6z_GoFrnJotWJQbvsfMQl_W3NVuuRdClNbhafUnnOPIyjCfcDU2AozXkkmQ_apYOH-RlxFUs4Ey9TJ0X0WYpsXiZJLsHSYzM"
            tiltClass="rotate-[-1deg]"
            badge="NEW"
            badgeColor="bg-tertiary-container text-on-tertiary-container"
          />
          <MatchCard 
            title="Shadow Finder"
            description="Can you spot the object from just its shadow?"
            imgUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBFWQdsDnaQga51iJzCNVVDAT7mF3fVNTBRhzv3HmDSKXHzE4ZIg1nwU9IEwjx4PhaHVzQdUDNe8wJLmcRgQxftR3kBlriAQfa-DQrcX_HL9WuTh6Tvah65AK8XGEJYhe6_TOYjpb_oxzu80GScjlO4qRycYsEsU5LYaBdBO58wAPtEL6bPFkYxhTM72Yr8LmsAK874TB4bUuBYVKnc6QE5mTLT24QEdKZ2k_8mV_t-nt71IX0fd5QJnY1HoGbwFgZ_gob-aGYSf5w"
            tiltClass="rotate-[0.5deg]"
            badge="TRICKY"
            badgeColor="bg-secondary-container text-on-secondary-container"
          />
          <MatchCard 
            title="Fruit Flip"
            description="A juicy challenge for small masters of focus!"
            imgUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuD0Zu0Q_PYKfMVZSSScqFGnQHuOc_qKutNQKWpks4Mfg9ec1JZyZgmrR3NJDahWNTieyJPZxKSslt_G3J-nPUV_gvo0ZV5gS54sJ3FeK8mNS9A3Qf7WEVCMkvUBSQjY5QAR1Ro3HeidHuvQj6fsBzdQQtgleH-BvRDkVCilMpy3XAfUOQw3XzdIPKGJBotUSEPk5Wb7CS3Uf3ikNKJzv5dIgBzz9x_9et-IiejXkEjPshxFs-e644fYv3gtM5eCoEYk9fSWf630V4s"
            tiltClass="rotate-[-0.5deg]"
          />
          <MatchCard 
            title="Shape Snap"
            description="Match the blocks as they fly across your scrapboard."
            imgUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDkuQ3jpDJmnjZe-kRDaMaizl8aTB1fms-drApFfEvNpheCIPBaSdzIGwpTHW6nmJnVAdvttmVWTwG5swo-kz9zRyqofizMdrXmRbdWrtddg2Yyralpmc7D17RjLIYaB8eUUDE4jhS0y3DRc2a_vAr8JB8Tkj4Pr5p8zto15M1EBTKX6AcSsWkJ9GzwJVtMbj-DjDWqKlAWy9z0hv6nM8JRme1ksszjh5jEO9BbP108oeN60hpzb7dT3IlecPqayV7p6FOK5UjRp44"
            tiltClass="rotate-[1deg]"
          />
        </div>

        <section className="mt-24 mb-12 bg-white rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-sm border-4 border-dashed border-outline-variant/30">
          <div className="absolute organic-noise inset-0 opacity-10"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-black font-display mb-10 text-on-surface tracking-tight">Your Sticker Collection</h3>
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
              {stickers.map((s, i) => (
                <div key={i} className={`w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md border-4 ${s.bg} ${i % 2 === 0 ? 'rotate-6' : '-rotate-12'} hover:rotate-0 transition-all duration-300 cursor-pointer group`}>
                  <span className={`material-symbols-rounded text-5xl ${s.color} group-hover:scale-110 transition-transform`} style={{ fontVariationSettings: "'FILL' 1" }}>{s.icon}</span>
                </div>
              ))}
              {[1, 2].map(i => (
                <div key={i} className="w-24 h-24 bg-surface-dim/30 rounded-full flex items-center justify-center border-4 border-dashed border-outline-variant/30 grayscale opacity-40">
                  <span className="material-symbols-rounded text-4xl text-outline-variant/50">lock</span>
                </div>
              ))}
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
          <span className="material-symbols-rounded text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>grid_view</span>
          <span className="text-[10px] font-black uppercase tracking-widest">Matching</span>
        </button>
        <div className="relative -top-8">
          <button className="w-16 h-16 bg-tertiary text-on-tertiary rounded-full shadow-lg flex items-center justify-center active:scale-90 transition-transform ring-8 ring-surface">
            <span className="material-symbols-rounded text-3xl">add</span>
          </button>
        </div>
        <button className="flex flex-col items-center gap-1 opacity-50">
          <span className="material-symbols-rounded text-2xl">military_tech</span>
          <span className="text-[10px] font-black uppercase tracking-widest">Stats</span>
        </button>
        <button className="flex flex-col items-center gap-1 opacity-50">
          <span className="material-symbols-rounded text-2xl">person</span>
          <span className="text-[10px] font-black uppercase tracking-widest">Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default MatchingGames;
