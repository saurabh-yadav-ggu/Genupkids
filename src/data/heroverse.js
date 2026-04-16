// src/data/heroverse.js
import zogImg from '../assets/heroverse/zog.png';
import dragonImg from '../assets/heroverse/dragon.png';
import bubblesImg from '../assets/heroverse/bubbles.png';
import pawsomeImg from '../assets/heroverse/pawsome.png';
import libraryImg from '../assets/heroverse/library.png';
import jellybeanImg from '../assets/heroverse/jellybean.png';
import gusImg from '../assets/heroverse/gus.png';
import robotImg from '../assets/heroverse/robot.png';

export const sidebarItems = [
  { name: 'Library', icon: 'auto_stories' },
  { name: 'Poem', icon: 'auto_awesome' },
  { name: 'Rhyme', icon: 'music_note' },
  { name: 'Story', icon: 'book_5' },
  { name: 'Read Book', icon: 'menu_book' },
];

export const contentData = {
  'Library': [
    { id: 1, title: "Professor Pips' Magic Library", description: "Explore the secrets of the magical book world.", img: libraryImg, color: "bg-primary", category: "Library" },
    { id: 2, title: "Rustle the Robot's Garden", description: "Helping nature grow with high-tech tools.", img: robotImg, color: "bg-[#705900]", category: "Library" },
  ],
  'Poem': [
    { id: 3, title: "The Jellybean Rain", description: "What happens when clouds turn into candy?", img: jellybeanImg, color: "bg-tertiary", category: "Poem" },
    { id: 4, title: "Bubbles in the Deep Blue", description: "A poetic journey through the ocean waves.", img: bubblesImg, color: "bg-blue-500", category: "Poem" },
  ],
  'Story': [
    { id: 5, title: "The Dragon's Peaceful Nap", description: "A fire-breather who just wants to sleep.", img: dragonImg, color: "bg-green-600", category: "Story" },
    { id: 6, title: "Gus Goes High", description: "The mountain goat who reached for the stars.", img: gusImg, color: "bg-slate-600", category: "Story" },
  ],
  'Rhyme': [
    { id: 7, title: "Zog's Galactic Picnic", description: "A catchy rhyme about eating on Mars.", img: zogImg, color: "bg-purple-600", category: "Rhyme" },
    { id: 8, title: "A Pawsome Jungle Party", description: "Rhythmic beats with the wild jungle crew.", img: pawsomeImg, color: "bg-orange-600", category: "Rhyme" },
  ],
  'Read Book': [
    { id: 9, title: "Meghu & Chandamama", description: "A magical story about clouds and the moon.", img: libraryImg, color: "bg-indigo-600", category: "Read Book", flipbookUrl: "https://gemini.google.com/share/72011685966a" },
  ]
};
