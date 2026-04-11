/**
 * Game Logic Helpers
 */

import { DICE_SIDES } from '../constants/game.js';

/**
 * Generate random number from 1 to 6
 */
export const rollDice = () => Math.floor(Math.random() * DICE_SIDES) + 1;

/**
 * Generate a random math question based on two dice values
 */
export const generateQuestion = (a, b) => {
  const operators = ['+', '-', '×'];
  const operator = operators[Math.floor(Math.random() * operators.length)];

  let x = a;
  let y = b;
  let ans;

  if (operator === '+') {
    ans = a + b;
  } else if (operator === '-') {
    x = Math.max(a, b);
    y = Math.min(a, b);
    ans = x - y;
  } else {
    ans = a * b;
  }

  return { a: x, b: y, op: operator, ans };
};

/**
 * Check if answer is valid number
 */
export const isValidAnswer = (input) => {
  if (input === '') return false;
  return !isNaN(parseInt(input));
};

/**
 * Get animation delay for confetti
 */
export const getRandomDelay = (min = 0, max = 1.5) => {
  return Math.random() * (max - min) + min;
};

/**
 * Get random size for confetti
 */
export const getRandomSize = (min = 8, max = 17) => {
  return min + Math.random() * (max - min);
};

/**
 * Get random duration for confetti
 */
export const getRandomDuration = (min = 2, max = 4) => {
  return min + Math.random() * (max - min);
};
