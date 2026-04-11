/**
 * Sound Manager - Handles all audio playback
 */

import { SOUND_CONFIG } from '../constants/game.js';

class SoundManager {
  constructor() {
    this.audioContext = null;
  }

  getContext() {
    try {
      if (!this.audioContext) {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      }
      return this.audioContext;
    } catch (_) {
      return null;
    }
  }

  playTone(freq, startTime, duration, waveType = 'sine', volume = 0.18) {
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();

      oscillator.type = waveType;
      oscillator.frequency.value = freq;

      gain.gain.setValueAtTime(0, ctx.currentTime + startTime);
      gain.gain.linearRampToValueAtTime(volume, ctx.currentTime + startTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + startTime + duration);

      oscillator.connect(gain);
      gain.connect(ctx.destination);

      oscillator.start(ctx.currentTime + startTime);
      oscillator.stop(ctx.currentTime + startTime + duration + 0.05);
    } catch (_) {}
  }

  play(type) {
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      switch (type) {
        case 'tap':
          this.playTone(640, 0, 0.06, 'square', 0.07);
          break;
        case 'del':
          this.playTone(380, 0, 0.07, 'square', 0.06);
          break;
        case 'roll':
          SOUND_CONFIG.roll.forEach((tone) => {
            this.playTone(tone.freq, tone.delay, tone.dur, tone.wave, tone.vol);
          });
          break;
        case 'tick':
          this.playTone(900, 0, 0.03, 'square', 0.04);
          break;
        case 'ok':
          SOUND_CONFIG.ok.forEach((tone) => {
            this.playTone(tone.freq, tone.delay, tone.dur);
          });
          break;
        case 'bad':
          SOUND_CONFIG.bad.forEach((tone) => {
            this.playTone(tone.freq, tone.delay, tone.dur, tone.wave, tone.vol);
          });
          break;
        case 'win':
          SOUND_CONFIG.win.forEach((freq, i) => {
            this.playTone(freq, i * 0.1, 0.25);
          });
          break;
      }
    } catch (_) {}
  }
}

export const soundManager = new SoundManager();
