import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import App from '../App';

// Lazy load pages for code splitting
const NumericalGamesDashboard = lazy(() =>
  import('../pages/NumericalGamesDashboard')
);

// Lazy load games
const DiceGame = lazy(() => import('../games/dice/DiceGame'));
const MathClimbGame = lazy(() => import('../games/climb/MathClimbGame'));
const MathRaceGame = lazy(() => import('../games/race/MathRaceGame'));
const MathTugOfWarGame = lazy(() => import('../games/tug/MathTugOfWarGame'));

/**
 * Loading Fallback Component
 */
const LoadingScreen = () => (
  <div className="min-h-screen bg-surface flex items-center justify-center">
    <div className="text-center">
      <div className="mb-4">
        <span className="material-symbols-rounded text-6xl text-primary animate-spin">
          progress_activity
        </span>
      </div>
      <p className="text-on-surface-variant font-medium">Loading...</p>
    </div>
  </div>
);

/**
 * AppRouter Component
 * Sets up all routes for the application
 *
 * Routes:
 * - `/` → Home page (category selection)
 * - `/games/numerical` → Numerical Games Dashboard
 * - `/games/numerical/dice` → Dice Math Game
 * - `/games/numerical/climb` → Math Climb Game
 * - `/games/numerical/race` → Math Race Game
 * - `/games/numerical/tug` → Math Tug of War Game
 */
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<App />} />

          {/* Numerical/Math Games */}
          <Route path="/games/numerical" element={<NumericalGamesDashboard />} />
          <Route path="/games/numerical/dice" element={<DiceGame />} />
          <Route path="/games/numerical/climb" element={<MathClimbGame />} />
          <Route path="/games/numerical/race" element={<MathRaceGame />} />
          <Route path="/games/numerical/tug" element={<MathTugOfWarGame />} />

          {/* TODO: Add routes for other game categories once pages are created */}
          {/* <Route path="/games/alphabetical" element={<AlphabeticalGamesDashboard />} /> */}
          {/* <Route path="/games/thinking" element={<ThinkingGamesDashboard />} /> */}
          {/* <Route path="/games/matching" element={<MatchingGamesDashboard />} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
