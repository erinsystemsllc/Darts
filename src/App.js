import React from 'react';
import './App.css';
import Toolbar from './components/Toolbar';

function App() {
  return (
    <div className="App">
      <Toolbar />
      <main className="main-content">
        <header className="App-header">
          <h1>Welcome to the Application</h1>
          <p>This is the main content area of the application.</p>
        </header>
      </main>
    </div>
  );
}

export default App;