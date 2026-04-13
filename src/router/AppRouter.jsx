import { HashRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import App from '../App';
import ProtectedRoute from '../components/ProtectedRoute';

// Lazy load pages for code splitting
const NumericalGamesDashboard = lazy(() =>
  import('../pages/NumericalGamesDashboard')
);
const GameZone = lazy(() => import('../pages/GameZone'));
const Login = lazy(() => import('../pages/Login'));
const About = lazy(() => import('../pages/About'));
const HeroVerse = lazy(() => import('../pages/HeroVerse'));

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
    <HashRouter>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<App />} />
            <Route path="/games" element={<GameZone />} />
            <Route path="/about" element={<About />} />
            <Route path="/heroverse" element={<HeroVerse />} />

            {/* Numerical/Math Games */}
            <Route path="/games/numerical" element={<NumericalGamesDashboard />} />
            <Route path="/games/numerical/dice" element={<DiceGame />} />
            <Route path="/games/numerical/climb" element={<MathClimbGame />} />
            <Route path="/games/numerical/race" element={<MathRaceGame />} />
            <Route path="/games/numerical/tug" element={<MathTugOfWarGame />} />
          </Route>

        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default AppRouter;
