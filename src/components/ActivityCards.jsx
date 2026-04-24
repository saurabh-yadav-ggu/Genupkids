import React from 'react';

const ActivityData = [
  {
    id: 1,
    title: 'Numerical Games',
    description: 'Learn to count and solve fun math puzzles with our panda friend!',
    icon: 'calculate',
    colorTheme: 'primary',
    buttonText: 'Play Now',
  },
  {
    id: 2,
    title: 'Alphabetical Games',
    description: 'A–Z learning with interactive activities and kingly lions.',
    icon: 'abc',
    colorTheme: 'secondary',
    buttonText: 'Explore',
  },
  {
    id: 3,
    title: 'Thinking Games',
    description: 'Boost brain power with smart puzzles and clever monkeys.',
    icon: 'psychology',
    colorTheme: 'tertiary',
    buttonText: 'Get Smart',
  },
  {
    id: 4,
    title: 'Interactive Map',
    description: "Explore India's states and capitals with our interactive adventure map!",
    icon: 'map',
    colorTheme: 'tertiary',
    buttonText: 'Explore Map',
  }
];

// Helper to get theme-specific classnames matching the screenshot exactly
const getThemeClasses = (theme) => {
  switch (theme) {
    case 'primary':
      return {
        iconBg: 'bg-primary text-on-primary',
        title: 'text-primary-dim',
        btnBg: 'bg-[#e3f2fd]', // Very light blue
        btnText: 'text-primary-dim',
        borderFocus: 'border-primary',
      };
    case 'secondary':
      return {
        iconBg: 'bg-secondary-container text-secondary',
        title: 'text-secondary-dim',
        btnBg: 'bg-[#fff8e1]', // Very light yellow
        btnText: 'text-secondary-dim',
        borderFocus: 'border-secondary-container',
      };
    case 'tertiary':
      return {
        iconBg: 'bg-tertiary text-on-tertiary',
        title: 'text-tertiary',
        btnBg: 'bg-[#fce4ec]', // Very light pink
        btnText: 'text-tertiary-dim',
        borderFocus: 'border-tertiary',
      };
    case 'gray':
    default:
      return {
        iconBg: 'bg-outline-variant text-surface-container-lowest',
        title: 'text-on-surface-variant',
        btnBg: 'bg-surface-container-high',
        btnText: 'text-on-surface-variant',
        borderFocus: 'border-outline-variant',
      };
  }
};

const Card = ({ data, onClick }) => {
  const theme = getThemeClasses(data.colorTheme);

  return (
    <div 
      onClick={onClick}
      className="relative mt-10 pt-20 pb-8 px-6 bg-surface-container-lowest rounded-[2rem] shadow-[0_12px_24px_-4px_rgba(44,47,48,0.06)] flex flex-col items-center text-center group hover:-translate-y-1 transition-transform cursor-pointer duration-300"
    >
      
      {/* Absolute Icon Container Overflowing Top */}
      <div className={`absolute -top-6 w-[72px] h-[72px] rounded-2xl flex items-center justify-center -rotate-3 group-hover:rotate-0 transition-transform duration-300 ${theme.iconBg} shadow-md`}>
        <span className="material-symbols-rounded" style={{ fontSize: '36px' }}>{data.icon}</span>
      </div>

      <h3 className={`font-display font-extrabold text-2xl mb-4 ${theme.title}`}>
        {data.title}
      </h3>
      
      <p className="font-body text-base text-on-surface-variant font-medium leading-relaxed mb-8 flex-grow">
        {data.description}
      </p>
      
      <button className={`w-[85%] py-3.5 rounded-full font-display font-bold text-base flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 ${theme.btnBg} ${theme.btnText}`}>
        {data.buttonText}
        <span className="material-symbols-rounded" style={{ fontSize: '20px' }}>arrow_forward</span>
      </button>

      {/* Decorative Bottom Line corresponding to theme */}
      <div className={`absolute bottom-0 left-0 w-full h-2 rounded-b-[2rem] ${theme.iconBg} opacity-80`}></div>
    </div>
  );
};

const ActivityCards = ({ onSelectNumerical, onSelectAlphabetical, onSelectThinking, onSelectMatching }) => {
  return (
    <section className="py-6 sm:py-12 mt-4 sm:mt-8 px-2 sm:px-0">
      {/* Header and Decorative Line */}
      <div className="flex items-center justify-between mb-8 sm:mb-12">
        <h2 className="font-display font-extrabold text-2xl sm:text-[28px] text-on-surface">Explore Activities</h2>
        <div className="hidden sm:block flex-grow ml-8 h-[6px] bg-primary-container rounded-full max-w-[200px]"></div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {ActivityData.map(data => (
          <Card 
            key={data.id} 
            data={data} 
            onClick={
              data.id === 1 ? onSelectNumerical : 
              data.id === 2 ? onSelectAlphabetical : 
              data.id === 3 ? onSelectThinking : 
              data.id === 4 ? onSelectMatching : 
              undefined
            }
          />
        ))}
      </div>
    </section>
  );
};

export default ActivityCards;
