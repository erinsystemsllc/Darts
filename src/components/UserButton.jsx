import React, { useState, useRef, useEffect } from 'react';
import '../styles/UserButton.css';

const UserButton = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="user-button-container" ref={dropdownRef}>
      <button className="user-button" onClick={toggleDropdown}>
        <div className="user-avatar">
          <span className="user-initial">U</span>
        </div>
        <span className="user-name">User</span>
        <svg 
          className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}
          width="12" 
          height="12" 
          viewBox="0 0 12 12"
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </button>
      
      {isDropdownOpen && (
        <div className="user-dropdown">
          <div className="dropdown-item">
            <span>Profile</span>
          </div>
          <div className="dropdown-item">
            <span>Settings</span>
          </div>
          <div className="dropdown-divider"></div>
          <div className="dropdown-item logout">
            <span>Logout</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserButton;