import { Link } from 'react-router-dom'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1 className="hero-title">🎯 Welcome to Darts Tracker</h1>
        <p className="hero-subtitle">
          Your ultimate companion for tracking darts games, managing players, and analyzing performance
        </p>
      </div>

      <div className="features-grid">
        <Link to="/players" className="feature-card">
          <div className="feature-icon">👥</div>
          <h3>Player Management</h3>
          <p>Add, edit, and manage player profiles with detailed statistics</p>
        </Link>

        <Link to="/scoring" className="feature-card">
          <div className="feature-icon">🎯</div>
          <h3>Game Scoring</h3>
          <p>Real-time scoring for various dart game modes including 501, Cricket, and more</p>
        </Link>

        <Link to="/tournament" className="feature-card">
          <div className="feature-icon">🏆</div>
          <h3>Tournament Mode</h3>
          <p>Organize and run tournaments with bracket management and leaderboards</p>
        </Link>

        <Link to="/stats" className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>Statistics Tracking</h3>
          <p>Comprehensive analytics and performance tracking for all players</p>
        </Link>
      </div>

      <div className="quick-start">
        <h2>Quick Start</h2>
        <p>Get started by adding players or jump straight into a game!</p>
        <div className="quick-actions">
          <Link to="/players" className="btn btn-primary">
            Add Players
          </Link>
          <Link to="/scoring" className="btn btn-secondary">
            Start Game
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage