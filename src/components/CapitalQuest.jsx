import React, { useState, useEffect } from 'react';
import { Trophy, HelpCircle, RefreshCw, CheckCircle2, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { statesData } from '../data/states';

const CapitalQuest = ({ selectedState, onCorrectAnswer }) => {
  const [targetState, setTargetState] = useState(null);
  const [feedback, setFeedback] = useState(null); // 'correct', 'wrong', null
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);

  const statesArray = Object.keys(statesData);

  const startNewRound = () => {
    const randomState = statesArray[Math.floor(Math.random() * statesArray.length)];
    setTargetState(randomState);
    setFeedback(null);
  };

  useEffect(() => {
    startNewRound();
  }, []);

  useEffect(() => {
    if (!selectedState || !targetState || feedback) return;

    if (selectedState === targetState) {
      setFeedback('correct');
      setScore(s => s + 1);
      setAttempts(a => a + 1);
      if (onCorrectAnswer) onCorrectAnswer(selectedState);
    } else {
      setFeedback('wrong');
      setAttempts(a => a + 1);
    }
  }, [selectedState]);

  if (!targetState) return null;

  return (
    <div className="quest-container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card quest-card"
        style={{ padding: '30px', textAlign: 'center', border: '3px solid #5db9ff' }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <div style={{ background: '#5db9ff', color: 'white', padding: '10px', borderRadius: '50%' }}>
            <HelpCircle size={32} />
          </div>
        </div>

        <h2 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#1a4d75' }}>Capital Quest!</h2>
        <p style={{ fontSize: '1.1rem', fontWeight: 'bold', margin: '20px 0' }}>
          Where is the capital <span style={{ color: '#ff4d8d', textDecoration: 'underline' }}>{statesData[targetState].capital.split(' (')[0]}</span>?
        </p>
        
        <p style={{ fontSize: '0.9rem', color: '#6b7c8a' }}>Click on the correct state on the map!</p>

        <AnimatePresence mode="wait">
          {feedback && (
            <motion.div
              key={feedback}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              style={{ 
                marginTop: '20px', 
                padding: '15px', 
                borderRadius: '15px',
                background: feedback === 'correct' ? '#e6fffa' : '#fff5f5',
                color: feedback === 'correct' ? '#2c7a7b' : '#c53030',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                fontWeight: 'bold'
              }}
            >
              {feedback === 'correct' ? (
                <><CheckCircle2 size={20} /> Spot on! That's {statesData[targetState].name}!</>
              ) : (
                <><XCircle size={20} /> Not quite! Try again or find it!</>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div style={{ marginTop: '30px', display: 'flex', gap: '10px' }}>
          <button 
            onClick={startNewRound}
            className="btn-primary" 
            style={{ flex: 1, justifyContent: 'center', background: '#5db9ff' }}
          >
            <RefreshCw size={18} /> {feedback ? 'Next State' : 'Skip'}
          </button>
        </div>
      </motion.div>

      <div className="stats-grid" style={{ marginTop: '20px' }}>
        <div className="glass-card stat-item">
          <div className="stat-value" style={{ color: '#2c7a7b' }}>{score}</div>
          <div className="stat-label">Correct</div>
        </div>
        <div className="glass-card stat-item">
          <div className="stat-value">{attempts}</div>
          <div className="stat-label">Total Tries</div>
        </div>
      </div>

      <div className="tips-card" style={{ marginTop: '20px', background: '#eef2f5' }}>
        <h3 style={{ fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Trophy size={16} color="#ffd95d" /> Achievement Progress
        </h3>
        <div style={{ width: '100%', height: '8px', background: '#d1d9e0', borderRadius: '4px', marginTop: '10px', overflow: 'hidden' }}>
          <div style={{ width: `${(score / 28) * 100}%`, height: '100%', background: '#ffd95d' }}></div>
        </div>
        <p style={{ fontSize: '0.75rem', marginTop: '8px', color: '#6b7c8a' }}>{score} of 28 states mastered!</p>
      </div>
    </div>
  );
};

export default CapitalQuest;
