// src/hooks/useCreateHero.js
// PART 4 (LLD Fix): Extracted CreateHero business logic — step navigation,
// name sanitization, photo state — into a dedicated hook.
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const STEPS = [
  { id: 1, label: 'PHOTO' },
  { id: 2, label: 'NAME' },
  { id: 3, label: 'OUTFIT' },
];

// SECURITY: Strip HTML + special chars, max 30 chars
const sanitizeName = (value) => value.replace(/[^a-zA-Z0-9\s]/g, '').slice(0, 30);

export const useCreateHero = () => {
  const navigate = useNavigate();
  const [step, setStep]         = useState(1);
  const [heroName, setHeroName] = useState('');
  const [nameError, setNameError] = useState('');

  const handleNameChange = useCallback((e) => {
    const clean = sanitizeName(e.target.value);
    setHeroName(clean);
    setNameError(clean.length > 0 && clean.length < 2 ? 'Name must be at least 2 characters.' : '');
  }, []);

  const handleContinue = useCallback(() => {
    if (step === 2 && heroName.trim().length < 2) {
      setNameError('Please enter a valid hero name.');
      return;
    }
    if (step < STEPS.length) {
      setStep((s) => s + 1);
    }
  }, [step, heroName]);

  const handleBack = useCallback(() => {
    if (step > 1) setStep((s) => s - 1);
    else navigate(-1);
  }, [step, navigate]);

  return { steps: STEPS, step, heroName, nameError, handleNameChange, handleContinue, handleBack };
};
