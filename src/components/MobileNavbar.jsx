import React from 'react';

const MobileNavbar = ({ onBack }) => (
  <div className="md:hidden flex items-center justify-between mb-10">
    <button onClick={onBack} className="w-12 h-12 flex items-center justify-center bg-surface-container-highest rounded-full active:scale-90 transition-transform shadow-sm">
      <span className="material-symbols-rounded text-primary">arrow_back</span>
    </button>
    <span className="font-display font-black text-primary text-2xl tracking-tighter">GenUp Kid</span>
    <div className="w-12 h-12 rounded-full border-2 border-primary-container overflow-hidden shadow-sm">
      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaKMte1OL7Zx3R4xrqcvBCLBZuDge0BLQ5XxcMI8Egg-hIJBSrSv389Of8OxqqFeGURyCOo8n3r4NJfK3453FXJ4AxFL1GLT9ovdLjAANfKbASrm9Avo3wCJWClMDaDKfEc3nQw1HNWF7htSso_K1RCWkVf0uzhOfcbY22cjjaE7roY9XErG6IT9Xn--ppYXns8h55KQUctcKywiQfO93I-NShQbFFD4kbji57YhCU6Hg1F9uw6aqbLU_vv2Fw1T2udvEhsgezx1k" alt="Avatar" className="w-full h-full object-cover" />
    </div>
  </div>
);

export default MobileNavbar;
