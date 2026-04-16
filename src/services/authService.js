// src/services/authService.js
// PART 1 (Security) + PART 2 (DIP Fix): Service abstraction layer.
// Auth calls are no longer made directly in components or context.
// This isolates the Firebase SDK — swap it for any auth provider here without touching React code.
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

/**
 * Maps Firebase error codes to safe, user-facing messages.
 * SECURITY FIX: Prevents leaking internal error codes (auth/user-not-found etc.)
 */
const getPublicErrorMessage = (code) => {
  const map = {
    'auth/invalid-email': 'Please enter a valid email address.',
    'auth/user-disabled': 'This account has been disabled.',
    'auth/wrong-password': 'Invalid credentials. Please try again.',
    'auth/user-not-found': 'Invalid credentials. Please try again.',
    'auth/too-many-requests': 'Too many attempts. Please wait and try again.',
    'auth/network-request-failed': 'Network error. Check your connection.',
  };
  return map[code] || 'Authentication failed. Please try again.';
};

export const authService = {
  signup: (email, password) => createUserWithEmailAndPassword(auth, email, password),

  login: async (email, password) => {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      if (import.meta.env.DEV) {
        console.error('[AuthService] Login error:', err.code);
      }
      throw new Error(getPublicErrorMessage(err.code));
    }
  },

  logout: () => signOut(auth),

  onAuthStateChanged: (callback) => onAuthStateChanged(auth, callback),
};
