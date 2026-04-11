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
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqBxvX1fzmIc8e7dxmViY_-TvGXZoqAiFe7KaZAkHk_S-1wfp5ayO3Z7eAXcr1tEFUkMLaJ2YlzuCFdLGZkH1Wd-JevsxzE3ZIo_4v2AjWKrC-gWgMitrJ7RbsrrNBkcZerE4nTfdHtDKQ_J56aJOuA0cAL9Leif8cFALpTanUfi0HRjxBsY5JX_hRPzvuhG6scfTLpcivlxiKOx2TGCRa01aDaUynGVlAjZwEgSyazzG4Tzxy_q_CdCN0vH8467mv9KM8bVUTJlE',
    color: 'bg-primary/5',
    tilt: 'rotate-[-1deg]',
  },
  {
    id: 'climb',
    title: 'Math Climb',
    description: 'Climb higher by solving math questions correctly!',
    route: '/games/numerical/climb',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZx1lpruCDI0uwiNvdC-eJwSR-TRnX_uAAqUWq_ItEPkMZcqVdzbdqdrnzg2V0GbQWbZ9sEbAvB0SCAYlnMmysj89J7X0xhMk05MFjZR6gHJoFENV2oEM0qBFTWpdR-cJfbaCtVfFuUrtE288MKf2kmhVMX73a3x31vBXI1UkFktjzPe_tN61iMRHSPq-EyyrheSOz-gX_hy4vHhtLxw_U7ygx0gCNFvMlwYKTPEqMIK_0_zQLazvjlqqNuAHD81Ap2qPWNvjUbX0',
    color: 'bg-tertiary/5',
    tilt: 'rotate-[0.5deg]',
  },
  {
    id: 'race',
    title: 'Math Race',
    description: 'Race against your friend in this two-player math challenge!',
    route: '/games/numerical/race',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6de29nrX1OqrktJ7YddO981LE4yR03kou6ebL939lAXbzPuc9PBNeQlnF24m8ZWRnDjkKJ933bd6wegDoUSeMQkrr6YEd2VzBKL59_ingbEDCJYgmKrgFajBrteNMI3erATi0OkNDJRsgsP3IWypnkGtVYRgmtg_AyuTv55QukuuntZYxKbPvpyp6DYT1_mXSQ3HbQoamrpEp17lM67-J9leKY0yX7YUh5W6mrNxam7EghMJ3tUDBxK2wykH1BrJJPNS3G-pKJE',
    color: 'bg-secondary-container/10',
    tilt: 'rotate-[-0.5deg]',
  },
  {
    id: 'tug',
    title: 'Math Tug of War',
    description: 'Battle it out in this arithmetic tug of war competition!',
    route: '/games/numerical/tug',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6MQMdhSUhGIt9Il84-5GcbvgARZ6IvKDcrMf1usQAjh1v-3V-MjoWHUSWzojUzIx2fP3CUDFHTjubSKbAgZHiBpUdq4mT1pZ7vYMv2AjWKrC-gWgMitrJ7RbsrrNBkcZerE4nTfdHtDKQ_J56aJOuA0cAL9Leif8cFALpTanUfi0HRjxBsY5JX_hRPzvuhG6scfTLpcivlxiKOx2TGCRa01aDaUynGVlAjZwEgSyazzG4Tzxy_q_CdCN0vH8467mv9KM8bVUTJlE',
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
