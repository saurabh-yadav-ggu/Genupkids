// src/hooks/useHeroVerse.js
import { useState, useMemo } from 'react';
import { contentData } from '../data/heroverse';

export const useHeroVerse = () => {
  const [activeTab, setActiveTab] = useState('Library');
  const [isFlipbookOpen, setIsFlipbookOpen] = useState(false);

  const displayedContent = useMemo(() => {
    if (activeTab === 'Library') {
      return Object.values(contentData).flat();
    }
    return contentData[activeTab];
  }, [activeTab]);

  const openFlipbook = () => setIsFlipbookOpen(true);
  const closeFlipbook = () => setIsFlipbookOpen(false);

  return {
    activeTab,
    setActiveTab,
    displayedContent,
    isFlipbookOpen,
    openFlipbook,
    closeFlipbook
  };
};
