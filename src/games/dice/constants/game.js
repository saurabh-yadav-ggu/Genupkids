/**
 * Game Constants
 */

export const MAX_SCORE = 10;
export const DICE_SIDES = 6;

// Dice Pips Configuration
export const PIPS = {
  1: [[50, 50]],
  2: [[25, 25], [75, 75]],
  3: [[25, 25], [50, 50], [75, 75]],
  4: [[25, 25], [75, 25], [25, 75], [75, 75]],
  5: [[25, 25], [75, 25], [50, 50], [25, 75], [75, 75]],
  6: [[25, 25], [75, 25], [25, 50], [75, 50], [25, 75], [75, 75]],
};

// UI Constants
export const CONFETTI_COLORS = [
  "#E8324A", "#3B5BDB", "#F5A623", "#27AE60",
  "#9B59B6", "#E67E22", "#1ABC9C", "#E91E63", "#FF6B35",
];

export const CONFETTI_COUNT = 70;
export const DICE_ROLL_ITERATIONS = 13;
export const DICE_ROLL_INTERVAL = 68;

// Operators Display Map
export const OPERATOR_DISPLAY = {
  "+": "+",
  "-": "−",
  "×": "×",
};

// Sound Configuration
export const SOUND_CONFIG = {
  tap: { freq: 640, dur: 0.06, wave: "square", vol: 0.07 },
  del: { freq: 380, dur: 0.07, wave: "square", vol: 0.06 },
  tick: { freq: 900, dur: 0.03, wave: "square", vol: 0.04 },
  roll: [
    { freq: 300, dur: 0.05, wave: "square", vol: 0.09, delay: 0 },
    { freq: 500, dur: 0.05, wave: "square", vol: 0.09, delay: 0.07 },
    { freq: 720, dur: 0.07, wave: "square", vol: 0.08, delay: 0.14 },
  ],
  ok: [
    { freq: 523, dur: 0.11, delay: 0 },
    { freq: 659, dur: 0.11, delay: 0.12 },
    { freq: 784, dur: 0.15, delay: 0.24 },
    { freq: 1047, dur: 0.27, delay: 0.42 },
  ],
  bad: [
    { freq: 220, dur: 0.3, wave: "sawtooth", vol: 0.16, delay: 0 },
    { freq: 170, dur: 0.25, wave: "sawtooth", vol: 0.12, delay: 0.1 },
  ],
  win: [523, 659, 784, 1047, 1319, 1568, 2093],
};
