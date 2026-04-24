// src/hooks/useKaraoke.js
// Custom hook that syncs an <audio> element with parsed SRT cues
// for karaoke-style text highlighting.
import { useState, useRef, useEffect, useCallback } from 'react';

export function useKaraoke(cues) {
  const audioRef = useRef(null);
  const [activeCueIndex, setActiveCueIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const syncLyrics = () => {
      const t = audio.currentTime;
      setCurrentTime(t);

      if (audio.duration && !isNaN(audio.duration)) {
        setProgress((t / audio.duration) * 100);
      }

      // Find active cue
      const idx = cues.findIndex((c) => t >= c.start && t < c.end);
      setActiveCueIndex(idx);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      setActiveCueIndex(-1);
    };

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);

    // Use interval for high-frequency sync (10fps)
    const interval = setInterval(() => {
      if (!audio.paused) {
        syncLyrics();
      }
    }, 100);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      clearInterval(interval);
    };
  }, [cues]);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play()
        .then(() => setIsPlaying(true))
        .catch((e) => {
          console.error('Playback failed:', e);
          setIsPlaying(false);
        });
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }, []);

  const seekTo = useCallback((percent) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    const newTime = (percent / 100) * audio.duration;
    audio.currentTime = newTime;
    
    // Immediate sync update
    const t = newTime;
    setCurrentTime(t);
    setProgress(percent);
    const idx = cues.findIndex((c) => t >= c.start && t < c.end);
    setActiveCueIndex(idx);
  }, [cues]);

  const stop = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
    setActiveCueIndex(-1);
    setProgress(0);
  }, []);

  return {
    audioRef,
    activeCueIndex,
    isPlaying,
    progress,
    currentTime,
    duration,
    togglePlay,
    seekTo,
    stop,
  };
}
