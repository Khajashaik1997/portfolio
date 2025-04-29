import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero">
      {/* ...existing code... */}
      <h1>Hi, I'm Khajapeer – Crafting Seamless Web Experiences with React and Node.js</h1>
      <p>Building modern, scalable, and user-friendly web applications with a passion for innovation.</p>
      <button className="cta-button" onClick={() => window.location.href = '#projects'}>
        View My Work
      </button>
      {/* ...existing code... */}
    </section>
  );
};

export default HeroSection;
