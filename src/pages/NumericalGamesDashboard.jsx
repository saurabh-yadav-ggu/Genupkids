import { useNavigate } from 'react-router-dom';
import GameCard from '../components/GameCard';
import CategorySidebar from '../components/CategorySidebar';
import MobileNavbar from '../components/MobileNavbar';
import Footer from '../components/Footer';
import { numericalGames } from '../data/games';

/**
 * NumericalGamesDashboard
 * Main page displaying all math/numerical games
 * Features:
 * - Grid layout of game cards
 * - Sidebar navigation (desktop)
 * - Mobile navbar
 * - Progress tracking section
 */
const NumericalGamesDashboard = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-surface selection:bg-primary-container selection:text-on-primary-container paper-texture relative">
      {/* Sidebar */}
      <CategorySidebar activeCategory="math" onBack={handleBack} />

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 lg:p-16 overflow-y-auto relative z-10">
        <MobileNavbar onBack={handleBack} />

        {/* Hero Section */}
        <section className="mb-16 relative">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary-container/20 rounded-full blur-[100px] pointer-events-none -z-10"></div>

          <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary-container/20 border border-primary-container/30 rounded-full mb-8 text-primary shadow-sm">
            <span className="material-symbols-rounded text-base">stars</span>
            <span className="font-display font-black text-xs uppercase tracking-[0.15em]">
              Math Lab Level 1
            </span>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-display font-black text-on-surface tracking-tight mb-8 leading-[0.95]">
              Numerical <span className="text-primary italic">Adventures</span>
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant font-medium leading-relaxed max-w-2xl">
              Dive into the world of numbers! Master counting and addition through
              colorful interactive challenges.
            </p>
          </div>
        </section>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {numericalGames.map((game) => (
            <GameCard
              key={game.id}
              title={game.title}
              description={game.description}
              image={game.image}
              route={game.route}
              badge={game.badge}
              color={game.color}
              tilt={game.tilt}
            />
          ))}
        </div>

        {/* Progress Section */}
        <section className="mt-24 mb-12 bg-primary-dim p-10 md:p-16 rounded-[3rem] text-on-primary-container relative overflow-hidden shadow-2xl">
          <div className="absolute organic-noise inset-0 opacity-10"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="w-32 h-32 bg-secondary-container rounded-3xl flex items-center justify-center rotate-6 shadow-xl border-4 border-white shrink-0">
              <span
                className="material-symbols-rounded text-6xl text-on-secondary-container"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                military_tech
              </span>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl font-display font-black text-white mb-4 tracking-tight">
                Road to Math Mastery!
              </h2>
              <p className="text-primary-container font-display font-extrabold text-xl leading-relaxed opacity-90 max-w-xl">
                You are doing great! Complete 2 more games today to unlock the
                Bronze Panda badge.
              </p>
            </div>
            <button className="px-10 py-5 bg-white text-primary font-display font-black text-lg rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_6px_0_0_#d1d5db]">
              View Progress
            </button>
          </div>
        </section>

        <Footer />
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface shadow-[0_-12px_24px_-4px_rgba(44,47,48,0.08)] h-24 flex justify-around items-center px-6 z-50">
        <button className="flex flex-col items-center gap-1 opacity-50">
          <span className="material-symbols-rounded text-2xl">explore</span>
          <span className="text-[10px] font-black uppercase tracking-widest">Explore</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-primary">
          <span
            className="material-symbols-rounded text-2xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            functions
          </span>
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

export default NumericalGamesDashboard;
