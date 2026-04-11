/**
 * Games Configuration
 * Central source of truth for all available games
 */

export const numericalGames = [
  {
    id: 'dice',
    title: 'Dice Math Game',
    description: 'Roll the dice and solve exciting math problems!',
    route: '/games/numerical/dice',
    badge: 'NEW',
    image: '/thumbnails/dice.png',
    color: 'bg-primary/5',
    tilt: 'rotate-[-1deg]',
  },
  {
    id: 'climb',
    title: 'Math Climb',
    description: 'Climb higher by solving math questions correctly!',
    route: '/games/numerical/climb',
    image: '/thumbnails/climb.png',
    color: 'bg-tertiary/5',
    tilt: 'rotate-[0.5deg]',
  },
  {
    id: 'race',
    title: 'Math Race',
    description: 'Race against your friend in this two-player math challenge!',
    route: '/games/numerical/race',
    image: '/thumbnails/race.png',
    color: 'bg-secondary-container/10',
    tilt: 'rotate-[-0.5deg]',
  },
  {
    id: 'tug',
    title: 'Math Tug of War',
    description: 'Battle it out in this arithmetic tug of war competition!',
    route: '/games/numerical/tug',
    image: '/thumbnails/tug.png',
    color: 'bg-primary-container/10',
    tilt: 'rotate-[1deg]',
  },
];

export const gameCategories = [
  { id: 'numerical', label: 'Numerical Games', icon: 'functions', color: 'text-primary' },
  { id: 'alphabetical', label: 'Alphabetical Games', icon: 'language', color: 'text-secondary' },
  { id: 'thinking', label: 'Thinking Games', icon: 'psychology', color: 'text-tertiary' },
  { id: 'matching', label: 'Matching Games', icon: 'filter_alt', color: 'text-error' },
];
