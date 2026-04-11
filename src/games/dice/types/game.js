/**
 * Game Types (as JSDoc for JavaScript)
 */

/**
 * @typedef {0 | 1} PlayerID
 * @typedef {'roll' | 'race' | 'result' | 'won'} GamePhase
 * @typedef {'+' | '-' | '×'} GameOperator
 * @typedef {'tap' | 'del' | 'roll' | 'tick' | 'ok' | 'bad' | 'win'} SoundType
 * @typedef {'ok' | 'bad' | 'wait' | null} FeedbackType
 */

/**
 * @typedef {Object} Question
 * @property {number} a
 * @property {number} b
 * @property {GameOperator} op
 * @property {number} ans
 */

/**
 * @typedef {Object} ConfettiPiece
 * @property {number} id
 * @property {string} color
 * @property {number} left
 * @property {number} size
 * @property {number} dur
 * @property {number} delay
 * @property {string} shape
 */

/**
 * @typedef {Object} GameState
 * @property {[number | null, number | null]} dice
 * @property {Question | null} question
 * @property {[number, number]} scores
 * @property {[string, string]} inputs
 * @property {[boolean, boolean]} done
 * @property {GamePhase} phase
 * @property {PlayerID | null} roundWinner
 * @property {PlayerID | null} gameWinner
 * @property {boolean} rolling
 */

/**
 * @typedef {Object} PlayerColors
 * @property {string} primary
 * @property {string} dark
 * @property {string} light
 * @property {string} lightBg
 */

export const typeDefinitions = true;
