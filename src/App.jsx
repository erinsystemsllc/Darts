import React from 'react';
import Toolbar from './components/Toolbar';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Toolbar />
      <main className="main-content">
        <h1>Welcome to the Application</h1>
        <p>This is the main content area below the toolbar.</p>
      </main>
    </div>
  );
}

export default App;