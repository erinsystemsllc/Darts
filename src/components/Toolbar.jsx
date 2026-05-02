import React from 'react';
import Logo from './Logo';
import UserButton from './UserButton';
import '../styles/Toolbar.css';

const Toolbar = () => {
  return (
    <header className="toolbar">
      <div className="toolbar-left">
        <Logo />
      </div>
      <div className="toolbar-center">
        <h2 className="app-title">My Application</h2>
      </div>
      <div className="toolbar-right">
        <UserButton />
      </div>
    </header>
  );
};

export default Toolbar;