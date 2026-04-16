// src/hooks/useLogin.js
// PART 4 (LLD Fix): Extracted Login business logic into a dedicated hook.
// Login.jsx is now a pure presenter — zero business logic.
// PART 1 (Security): Rate-limiting (5 attempts → 30s lockout) added here.
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 30_000;

export const useLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');
  const [loading, setLoading]   = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [locked, setLocked]     = useState(false);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (locked) return;

    setError('');
    setLoading(true);

    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      const next = attempts + 1;
      setAttempts(next);

      if (next >= MAX_ATTEMPTS) {
        setLocked(true);
        setError(`Too many failed attempts. Please wait 30 seconds.`);
        setTimeout(() => {
          setLocked(false);
          setAttempts(0);
          setError('');
        }, LOCKOUT_MS);
      } else {
        // err.message is already safe — set in authService
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  }, [email, password, login, navigate, attempts, locked]);

  return { email, setEmail, password, setPassword, error, loading, locked, handleSubmit };
};
