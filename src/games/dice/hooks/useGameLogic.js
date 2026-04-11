/**
 * Custom Hook - Game Logic Management
 */

import { useCallback, useRef, useState } from 'react';
import { MAX_SCORE, DICE_ROLL_ITERATIONS, DICE_ROLL_INTERVAL } from '../constants/game.js';
import { rollDice, generateQuestion, isValidAnswer } from '../utils/gameHelpers.js';
import { soundManager } from '../utils/soundManager.js';

const createInitialState = () => ({
  dice: [null, null],
  question: null,
  scores: [0, 0],
  inputs: ['', ''],
  done: [false, false],
  phase: 'roll',
  roundWinner: null,
  gameWinner: null,
  rolling: false,
});

export const useGameLogic = () => {
  const [state, setState] = useState(createInitialState());
  const rollTimer = useRef(null);

  const startRoll = useCallback(() => {
    if (state.rolling) return;

    setState((prev) => ({
      ...prev,
      rolling: true,
      roundWinner: null,
    }));

    soundManager.play('roll');

    let count = 0;

    rollTimer.current = setInterval(() => {
      setState((prev) => ({
        ...prev,
        dice: [rollDice(), rollDice()],
      }));

      count++;

      if (count < DICE_ROLL_ITERATIONS) {
        soundManager.play('tick');
        return;
      }

      if (rollTimer.current) {
        clearInterval(rollTimer.current);
      }

      setState((prev) => {
        const d1 = rollDice();
        const d2 = rollDice();
        const question = generateQuestion(d1, d2);

        return {
          ...prev,
          dice: [d1, d2],
          rolling: false,
          question,
          inputs: ['', ''],
          done: [false, false],
          phase: 'race',
        };
      });
    }, DICE_ROLL_INTERVAL);
  }, [state.rolling]);

  const submitAnswer = useCallback(
    (playerIndex) => {
      if (state.done[playerIndex] || state.phase !== 'race' || !state.question) {
        return;
      }

      const answer = parseInt(state.inputs[playerIndex]);

      if (!isValidAnswer(state.inputs[playerIndex])) {
        return;
      }

      if (answer === state.question.ans) {
        soundManager.play('ok');

        setState((prev) => {
          const newScores = [...prev.scores];
          newScores[playerIndex]++;

          return {
            ...prev,
            scores: newScores,
            roundWinner: playerIndex,
            done: [true, true],
            phase: 'result',
            gameWinner: newScores[playerIndex] >= MAX_SCORE ? playerIndex : null,
          };
        });

        setTimeout(() => {
          setState((prev) =>
            prev.gameWinner !== null
              ? prev
              : {
                  ...prev,
                  dice: [null, null],
                  question: null,
                  inputs: ['', ''],
                  done: [false, false],
                  roundWinner: null,
                  phase: 'roll',
                }
          );

          if (state.gameWinner !== null) {
            setTimeout(() => {
              setState((prev) => ({ ...prev, phase: 'won' }));
              soundManager.play('win');
            }, 1700);
          }
        }, 2500);
      } else {
        soundManager.play('bad');

        const ansElement = document.getElementById(`ans${playerIndex}`);
        if (ansElement) {
          ansElement.style.background = '#FFEAED';
          ansElement.style.animation = 'shake 0.4s ease-out';
          setTimeout(() => {
            if (ansElement) {
              ansElement.style.animation = '';
              ansElement.style.background = '#fff';
            }
          }, 500);
        }

        setState((prev) => ({
          ...prev,
          inputs: prev.inputs.map((input, i) => (i === playerIndex ? '' : input)),
          done: prev.done.map((d, i) => {
            if (i === playerIndex) return true;
            return d;
          }),
        }));

        setTimeout(() => {
          setState((prev) => ({
            ...prev,
            done: [false, false],
          }));
        }, 800);
      }
    },
    [state]
  );

  const handleKeyInput = useCallback(
    (playerIndex, key) => {
      if (key === 'go') {
        submitAnswer(playerIndex);
      } else if (key === 'del') {
        soundManager.play('del');
        setState((prev) => ({
          ...prev,
          inputs: prev.inputs.map((input, i) => (i === playerIndex ? input.slice(0, -1) : input)),
        }));
      } else if (/\d/.test(key)) {
        soundManager.play('tap');
        setState((prev) => ({
          ...prev,
          inputs: prev.inputs.map((input, i) =>
            i === playerIndex && input.length < 3 ? input + key : input
          ),
        }));
      }
    },
    [submitAnswer]
  );

  const resetGame = useCallback(() => {
    if (rollTimer.current) {
      clearInterval(rollTimer.current);
    }
    setState(createInitialState());
  }, []);

  const getFeedback = useCallback((playerIndex) => {
    if (state.phase === 'result' && state.roundWinner === playerIndex) {
      return 'ok';
    }
    if (state.phase === 'result' && state.roundWinner !== playerIndex && state.done[playerIndex]) {
      return 'bad';
    }
    return null;
  }, [state]);

  return { state, startRoll, handleKeyInput, resetGame, getFeedback };
};
