/**
 * GAME INTEGRATION GUIDE
 * =======================
 * 
 * This guide explains how to integrate the existing game projects
 * (dice-math-game, math-climb-game, math-race-game, math-tug-of-war)
 * into the main genupkid-main app.
 */

// ============================================================================
// STEP 1: DICE GAME INTEGRATION (Example)
// ============================================================================

/**
 * Location: src/games/dice/DiceGame.jsx
 * 
 * The dice game is currently a placeholder. To fully integrate:
 * 
 * A. Copy necessary files from /dice-math-game/src/:
 *    - components/*.tsx → src/games/dice/components/
 *    - hooks/*.ts → src/games/dice/hooks/
 *    - utils/*.ts → src/games/dice/utils/
 *    - types/*.ts → src/games/dice/types/
 *    - constants/*.ts → src/games/dice/constants/
 *    - styles/*.ts → src/games/dice/styles/
 *    - index.css (merge into main Tailwind)
 * 
 * B. Convert TypeScript to JavaScript or add TypeScript support
 *    - Option 1: Rename .tsx files to .jsx and remove types
 *    - Option 2: Keep TypeScript and update tsconfig.json (recommended)
 * 
 * C. Update DiceGame.jsx:
 *    ```jsx
 *    import { useEffect } from 'react';
 *    import { useNavigate } from 'react-router-dom';
 *    import { useGameLogic } from './hooks/useGameLogic';
 *    import Header from './components/Header';
 *    import ScoreBar from './components/ScoreBar';
 *    import DiceZone from './components/DiceZone';
 *    import Keypad from './components/Keypad';
 *    import WinScreen from './components/WinScreen';
 *    import { COLORS, RADIUS, SPACING, SHADOWS } from './styles/theme';
 *    import './styles/animations.css';
 *
 *    const DiceGame = () => {
 *      const navigate = useNavigate();
 *      const { state, startRoll, handleKeyInput, resetGame, getFeedback } =
 *        useGameLogic();
 *
 *      // Keep existing keyboard handling, styling, etc.
 *      // ... rest of the component
 *    };
 *    
 *    export default DiceGame;
 *    ```
 * 
 * D. Update imports in refactored components:
 *    - Change relative imports to work with new folder structure
 *    - Example: '../components' → './components'
 */

// ============================================================================
// STEP 2: MATH CLIMB GAME INTEGRATION
// ============================================================================

/**
 * Location: src/games/climb/MathClimbGame.jsx
 * 
 * Similar process as Dice Game:
 * 
 * 1. Copy components from /math-climb-game/src/components/
 * 2. Copy hooks, utils, constants from /math-climb-game/src/
 * 3. Update MathClimbGame.jsx to import and render components
 * 4. Ensure all keyboard/event handlers work
 * 5. Add back button navigation using useNavigate()
 */

// ============================================================================
// STEP 3: MATH RACE GAME INTEGRATION
// ============================================================================

/**
 * Location: src/games/race/MathRaceGame.jsx
 * 
 * Same integration approach as other games.
 * Make sure to:
 * - Import necessary components from math-race-game
 * - Add navigation back to /games/numerical
 * - Test two-player functionality
 */

// ============================================================================
// STEP 4: MATH TUG OF WAR GAME INTEGRATION
// ============================================================================

/**
 * Location: src/games/tug/MathTugOfWarGame.jsx
 * 
 * Final game integration following the same pattern.
 */

// ============================================================================
// FOLDER STRUCTURE AFTER INTEGRATION
// ============================================================================

/**
 * src/games/
 * ├── dice/
 * │   ├── DiceGame.jsx          (Main component - imports from here)
 * │   ├── components/           (Extracted from dice-math-game)
 * │   │   ├── Header.jsx
 * │   │   ├── ScoreBar.jsx
 * │   │   ├── DiceZone.jsx
 * │   │   ├── Keypad.jsx
 * │   │   ├── WinScreen.jsx
 * │   │   └── index.js
 * │   ├── hooks/
 * │   │   ├── useGameLogic.js
 * │   │   └── index.js
 * │   ├── utils/
 * │   │   ├── gameHelpers.js
 * │   │   ├── soundManager.js
 * │   │   └── index.js
 * │   ├── types/
 * │   │   ├── game.js
 * │   │   └── index.js
 * │   ├── constants/
 * │   │   ├── game.js
 * │   │   └── index.js
 * │   ├── styles/
 * │   │   ├── theme.js
 * │   │   ├── animations.css
 * │   │   └── index.css
 * │   └── assets/            (Images, sounds)
 * ├── climb/
 * │   ├── MathClimbGame.jsx
 * │   ├── components/
 * │   ├── hooks/
 * │   ├── utils/
 * │   ├── constants/
 * │   ├── styles/
 * │   └── assets/
 * ├── race/
 * │   ├── MathRaceGame.jsx
 * │   ├── components/
 * │   ├── hooks/
 * │   ├── utils/
 * │   ├── constants/
 * │   ├── styles/
 * │   └── assets/
 * └── tug/
 *     ├── MathTugOfWarGame.jsx
 *     ├── components/
 *     ├── hooks/
 *     ├── utils/
 *     ├── constants/
 *     ├── styles/
 *     └── assets/
 */

// ============================================================================
// ASSET CONSOLIDATION
// ============================================================================

/**
 * After integrating games, consolidate assets:
 * 
 * 1. Move assets from:
 *    /dice-math-game/public/assets/ → /genupkid-main/public/assets/dice/
 *    /math-climb-game/public/assets/ → /genupkid-main/public/assets/climb/
 *    /math-race-game/public/assets/ → /genupkid-main/public/assets/race/
 *    /math-tug-of-war/public/assets/ → /genupkid-main/public/assets/tug/
 * 
 * 2. Update import paths in components:
 *    Old: '../../../public/assets/sound.mp3'
 *    New: '/assets/dice/sound.mp3'
 */

// ============================================================================
// STYLING CONSIDERATIONS
// ============================================================================

/**
 * CSS/Tailwind Integration:
 * 
 * 1. Dice Game uses inline styles with theme.js vars
 *    - Keep theme.js and merge with Tailwind config if needed
 *    - OR convert theme values to Tailwind classes
 * 
 * 2. Other games may use CSS modules or plain CSS
 *    - Import these CSS files in the respective game components
 *    - Ensure styles don't conflict with global styles
 * 
 * 3. For Material Icons:
 *    - Already available in genupkid-main (check Header.jsx)
 *    - Include: <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL@20..48,100..700,0..1" />
 */

// ============================================================================
// TESTING CHECKLIST
// ============================================================================

/**
 * After integration, verify:
 * 
 * ✅ npm install (installs react-router-dom if needed)
 * ✅ npm run dev (starts dev server without errors)
 * ✅ Navigate from Home → Numerical Games → Each Game
 * ✅ Back button works from each game
 * ✅ Game logic and state management works
 * ✅ Keyboard input handling works (if applicable)
 * ✅ Sound effects play correctly
 * ✅ Responsive design on mobile
 * ✅ No console errors or warnings
 */

// ============================================================================
// CLEANUP AFTER INTEGRATION
// ============================================================================

/**
 * Once all games are integrated into genupkid-main,
 * you can optionally:
 * 
 * 1. Keep old game folders as reference
 * 2. Delete old package.json files (keep only genupkid-main)
 * 3. Consolidate public/ assets into one folder
 * 4. Update root README.md with new routing structure
 */
