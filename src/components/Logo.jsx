import React, { useState, useEffect } from 'react';
import { getRandomLogo } from '../utils/logoGenerator';
import '../styles/Logo.css';

const Logo = () => {
  const [currentLogo, setCurrentLogo] = useState(null);

  useEffect(() => {
    setCurrentLogo(getRandomLogo());
  }, []);

  const handleLogoClick = () => {
    setCurrentLogo(getRandomLogo());
  };

  if (!currentLogo) return null;

  return (
    <div className="logo-container" onClick={handleLogoClick} title="Click for new logo">
      <div className="logo" style={{ backgroundColor: currentLogo.color }}>
        <span className="logo-text">{currentLogo.text}</span>
      </div>
    </div>
  );
};

export default Logo;