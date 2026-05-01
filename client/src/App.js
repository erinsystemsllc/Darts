import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/test');
        setMessage(response.data.message);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setMessage('Failed to connect to server');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎯 Darts Game</h1>
        <p>MERN Stack Application</p>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p>Server Status: {message}</p>
            <div className="features">
              <h3>Coming Soon:</h3>
              <ul>
                <li>Player Management</li>
                <li>Game Scoring</li>
                <li>Tournament Mode</li>
                <li>Statistics Tracking</li>
              </ul>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;