// src/pages/CreateHero.jsx
// PART 4 (LLD): Pure presenter — all logic in useCreateHero hook.
// PART 2 (SRP): This component ONLY renders UI. No inline logic.
// PART 1 (Security): No dangerouslySetInnerHTML. Name sanitized in hook.
import React from 'react';
import { Link } from 'react-router-dom';
import { useCreateHero } from '../hooks/useCreateHero';
import heroPreviewImg from '../assets/heroverse/hero_preview.png';

// --- Sub-components (SRP + ISP: small, focused, injectable) ---

const StepIndicator = ({ steps, currentStep }) => (
  <div className="flex items-center gap-4 mb-16">
    {steps.map((s, i) => (
      <React.Fragment key={s.id}>
        <div className="flex flex-col items-center gap-2">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
            currentStep === s.id
              ? 'bg-primary-container text-primary shadow-lg scale-110'
              : currentStep > s.id
                ? 'bg-primary text-white'
                : 'bg-surface-container text-on-surface-variant'
          }`}>
            {s.id}
          </div>
          <span className={`text-[10px] font-black tracking-widest ${currentStep === s.id ? 'text-primary' : 'text-on-surface-variant'}`}>
            {s.label}
          </span>
        </div>
        {i < steps.length - 1 && <div className="w-12 h-0.5 bg-surface-container" />}
      </React.Fragment>
    ))}
  </div>
);

const PhotoUploadStep = ({ isActive }) => (
  <div className={`bg-white rounded-[3.5rem] p-12 shadow-sm border-2 border-transparent transition-all ${isActive ? 'border-primary-container ring-8 ring-primary-container/10' : 'opacity-60'}`}>
    <div className="flex flex-col items-center text-center space-y-6">
      <div className="relative">
        <div className="w-48 h-48 rounded-full border-4 border-dashed border-primary-container flex items-center justify-center cursor-pointer hover:bg-primary-container/5 transition-colors">
          <div className="flex flex-col items-center gap-2">
            <span className="material-symbols-rounded text-5xl text-primary">photo_camera</span>
            <span className="text-primary font-black text-sm">Tap to Snap!</span>
          </div>
        </div>
        <div className="absolute bottom-2 right-2 w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center shadow-lg border-4 border-white">
          <span className="material-symbols-rounded text-on-secondary-container">auto_fix_high</span>
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="text-2xl font-black">Step 1: Upload a Photo</h3>
        <p className="text-on-surface-variant font-medium">A clear photo of your face works best for magic!</p>
      </div>
    </div>
  </div>
);

const NameInputStep = ({ isActive, heroName, nameError, onChange }) => (
  <div className={`bg-surface-container-low rounded-[2.5rem] p-8 space-y-4 transition-all ${isActive ? 'bg-white border-2 border-primary-container ring-8 ring-primary-container/10 opacity-100' : 'opacity-40'}`}>
    <div className="flex items-center gap-3 text-on-surface-variant">
      <span className="material-symbols-rounded">edit_note</span>
      <h3 className="text-xl font-bold">Step 2: Enter Your Hero Name</h3>
    </div>
    <input
      id="hero-name"
      type="text"
      placeholder="e.g. Captain Courage"
      value={heroName}
      onChange={onChange}
      disabled={!isActive}
      maxLength={30}
      autoComplete="off"
      aria-label="Hero name"
      aria-invalid={!!nameError}
      className="w-full bg-surface-container-high rounded-full px-8 py-5 font-bold text-lg outline-none focus:ring-2 focus:ring-primary transition-all disabled:cursor-not-allowed"
    />
    {nameError && (
      <p role="alert" className="text-red-500 text-xs font-bold px-4">{nameError}</p>
    )}
  </div>
);

const HeroStatCard = ({ icon, label, color }) => (
  <div className="bg-white rounded-3xl p-4 flex flex-col items-center gap-2 shadow-sm border border-surface-container group-hover:-translate-y-2 transition-transform duration-300">
    <span className={`material-symbols-rounded ${color}`}>{icon}</span>
    <span className="text-[10px] font-black tracking-widest opacity-60">{label}</span>
  </div>
);

const HERO_STATS = [
  { label: 'DEFENSE', icon: 'shield', color: 'text-amber-600' },
  { label: 'SPEED',   icon: 'bolt',   color: 'text-pink-600' },
  { label: 'MAGIC',   icon: 'auto_awesome', color: 'text-cyan-600' },
];

const HeroPreview = ({ heroName }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-primary-container/30 blur-[100px] rounded-full pointer-events-none" />
    <div className="bg-[#d9e3e7] rounded-[3.5rem] p-10 shadow-2xl relative border-4 border-white overflow-hidden">
      <div className="flex items-center justify-between mb-8">
        <span className="bg-[#ff8fa3] text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
          Hero Preview
        </span>
      </div>

      <div className="bg-[#0c1a25] rounded-[2.5rem] overflow-hidden relative shadow-inner aspect-[4/5]">
        <img src={heroPreviewImg} alt="Your hero character preview" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
          <span className="text-white/60 font-bold text-xs uppercase tracking-widest">The Mighty</span>
          <h2 className="text-4xl font-black text-white leading-none">{heroName || 'Hero-in-Training'}</h2>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-8">
        {HERO_STATS.map((stat) => (
          <HeroStatCard key={stat.label} {...stat} />
        ))}
      </div>
    </div>
  </div>
);

// --- Main Page Component (Pure presenter) ---
const CreateHero = () => {
  const {
    steps, step, heroName, nameError,
    handleNameChange, handleContinue, handleBack,
  } = useCreateHero();

  const continueLabel = step === 1 ? 'Continue to Name' : step === 2 ? 'Continue to Outfit' : 'Finish';

  return (
    <div className="min-h-screen bg-[#f8fafb] font-body text-on-surface flex flex-col">
      <header className="bg-white/80 backdrop-blur-md px-8 py-4 flex items-center justify-between border-b border-surface-container">
        <Link to="/heroverse" className="font-display font-black text-2xl tracking-tighter text-primary">HeroVerse</Link>
        <nav className="flex items-center gap-8" aria-label="Hero creation navigation">
          <Link to="/heroverse" className="font-display font-bold text-on-surface-variant hover:text-primary transition-colors">Library</Link>
          <Link to="/heroverse/create" className="font-display font-bold text-primary border-b-2 border-primary pb-1">Create</Link>
        </nav>
      </header>

      <main className="flex-1 max-w-6xl mx-auto w-full px-8 py-10 flex flex-col items-center">
        <StepIndicator steps={steps} currentStep={step} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full items-start">
          <div className="space-y-10">
            <div className="space-y-4">
              <h1 className="text-6xl font-black tracking-tight">Become the Hero!</h1>
              <p className="text-xl text-on-surface-variant font-medium leading-relaxed max-w-md">
                Let's create your magical avatar. This is how you'll look inside every adventure.
              </p>
            </div>

            <PhotoUploadStep isActive={step === 1} />
            <NameInputStep
              isActive={step === 2}
              heroName={heroName}
              nameError={nameError}
              onChange={handleNameChange}
            />

            <div className="flex items-center justify-between pt-8">
              <button
                onClick={handleBack}
                className="flex items-center gap-2 font-black text-on-surface-variant hover:text-primary transition-colors"
              >
                <span className="material-symbols-rounded">arrow_back</span>
                Back
              </button>
              <button
                onClick={handleContinue}
                className="bg-primary-container text-on-primary-container px-10 py-5 rounded-[2rem] font-black text-xl flex items-center gap-4 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary-container/20"
              >
                {continueLabel}
                <span className="material-symbols-rounded">arrow_forward</span>
              </button>
            </div>
          </div>

          <HeroPreview heroName={heroName} />
        </div>
      </main>
    </div>
  );
};

export default CreateHero;
