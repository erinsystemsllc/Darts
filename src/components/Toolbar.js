import React from 'react';
import './Toolbar.css';

const Toolbar = () => {
  const handleUserClick = () => {
    console.log('User button clicked');
    // Add user menu logic here
  };

  // Generate a random logo color
  const getRandomColor = () => {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const logoColor = getRandomColor();

  return (
    <div className="toolbar">
      <div className="toolbar__left">
        <div className="toolbar__logo" style={{ backgroundColor: logoColor }}>
          <span className="toolbar__logo-text">APP</span>
        </div>
      </div>
      
      <div className="toolbar__right">
        <button 
          className="toolbar__user-button"
          onClick={handleUserClick}
          aria-label="User menu"
        >
          <div className="toolbar__user-avatar">
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" 
                fill="currentColor"
              />
              <path 
                d="M12 14C7.58172 14 4 17.5817 4 22H20C20 17.5817 16.4183 14 12 14Z" 
                fill="currentColor"
              />
            </svg>
          </div>
          <span className="toolbar__user-text">User</span>
        </button>
      </div>
    </div>
  );
};

export default Toolbar;