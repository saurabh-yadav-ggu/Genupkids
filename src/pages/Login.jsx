// src/pages/Login.jsx
// PART 4 (LLD Fix): Pure presenter — zero business logic.
// PART 1 (Security): No raw Firebase errors, rate limiting via useLogin hook.
// PART 2 (SRP Fix): This file ONLY handles login UI rendering.
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLogin } from '../hooks/useLogin';
import Footer from '../components/Footer';
import loginHeroImg from '../assets/hero-image.png';
import './Login.css';

const Login = () => {
  const { currentUser } = useAuth();
  const navigate         = useNavigate();
  const { email, setEmail, password, setPassword, error, loading, locked, handleSubmit } = useLogin();

  // Already authenticated — bounce to home
  React.useEffect(() => {
    if (currentUser) navigate('/');
  }, [currentUser, navigate]);

  return (
    <div className="bg-surface text-on-surface font-body min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT: Illustration */}
          <div className="relative hidden md:flex flex-col items-start space-y-8 p-8">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary-container/30 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-tertiary-container/20 rounded-full blur-3xl -z-10" />

            <div className="absolute top-10 right-20 floating-icon" style={{ animationDelay: '0s' }}>
              <span className="text-5xl opacity-80">⭐</span>
            </div>
            <div className="absolute bottom-20 left-10 floating-icon" style={{ animationDelay: '2s' }}>
              <span className="text-4xl opacity-80">✏️</span>
            </div>
            <div className="absolute top-1/2 right-0 floating-icon" style={{ animationDelay: '4s' }}>
              <span className="text-6xl opacity-80">📖</span>
            </div>

            <div className="space-y-4">
              <Link to="/" className="text-primary font-display font-black text-4xl tracking-tight block hover:opacity-80 transition-opacity">
                GenUp Kid
              </Link>
              <h1 className="text-5xl font-display font-extrabold text-on-background leading-tight">Welcome Back!</h1>
              <p className="text-xl text-on-surface-variant max-w-md">
                Continue your learning adventure and unlock new achievements today.
              </p>
            </div>

            {/* SECURITY: Local asset — no external CDN dependency */}
            <div className="relative w-full aspect-[4/3] max-w-lg rounded-[2rem] overflow-hidden bg-surface-container shadow-2xl">
              <img
                className="w-full h-full object-cover"
                alt="A cheerful young boy using a tablet for learning"
                src={loginHeroImg}
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT: Login Form */}
          <div className="flex justify-center md:justify-start">
            <div className="bg-surface-container-lowest p-8 md:p-12 rounded-[2rem] shadow-xl w-full max-w-md">
              <div className="mb-8">
                <Link to="/" className="text-primary font-display font-black text-3xl tracking-tight block md:hidden mb-6 text-center hover:opacity-80 transition-opacity">
                  GenUp Kid
                </Link>
                <h2 className="text-3xl font-display font-extrabold text-on-background mb-2">Sign In</h2>
                <p className="text-on-surface-variant font-medium">Access your learning dashboard</p>
              </div>

              {error && (
                <div
                  role="alert"
                  aria-live="assertive"
                  className="bg-red-100 text-red-700 p-3 rounded-lg mb-6 text-sm font-bold flex items-center gap-2"
                >
                  <span className="material-symbols-rounded text-lg" aria-hidden="true">error</span>
                  {error}
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-on-surface ml-1" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    maxLength={254}
                    className="w-full px-4 py-4 bg-surface-container-highest border-0 rounded-md focus:ring-4 focus:ring-primary-fixed/40 transition-all font-medium text-on-surface placeholder:text-outline-variant outline-none"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={locked}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-on-surface ml-1" htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    maxLength={128}
                    className="w-full px-4 py-4 bg-surface-container-highest border-0 rounded-md focus:ring-4 focus:ring-primary-fixed/40 transition-all font-medium text-on-surface placeholder:text-outline-variant outline-none"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={locked}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || locked}
                  className="w-full bg-primary-fixed text-on-primary-container py-4 mt-6 rounded-full font-display font-extrabold text-lg shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 outline-none disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {locked ? '🔒 Locked — wait 30s' : loading ? 'Processing...' : 'Sign In →'}
                </button>
              </form>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
