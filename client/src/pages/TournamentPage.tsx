import './PageLayout.css'

const TournamentPage = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">🏆 Tournament Mode</h1>
        <p className="page-subtitle">
          Organize and manage tournaments with bracket systems and leaderboards
        </p>
      </div>

      <div className="page-content">
        <div className="content-card">
          <h2>Create Tournament</h2>
          <p>Set up a new tournament with custom rules and participants.</p>
          <div className="tournament-setup">
            <div className="setup-item">
              <label>Tournament Name:</label>
              <input type="text" className="form-input" placeholder="Enter tournament name" />
            </div>
            <div className="setup-item">
              <label>Tournament Type:</label>
              <select className="form-select">
                <option>Single Elimination</option>
                <option>Double Elimination</option>
                <option>Round Robin</option>
              </select>
            </div>
            <button className="btn btn-primary">Create Tournament</button>
          </div>
        </div>

        <div className="content-card">
          <h2>Active Tournaments</h2>
          <p>Currently running tournaments and their progress.</p>
          <div className="placeholder-list">
            <div className="placeholder-item">🏆 No active tournaments</div>
            <div className="placeholder-item">📋 Tournament brackets will appear here</div>
            <div className="placeholder-item">🎯 Match scheduling and results</div>
          </div>
        </div>

        <div className="content-card">
          <h2>Tournament History</h2>
          <p>View past tournaments and their results.</p>
          <div className="tournament-stats">
            <div className="stat-item">
              <span className="stat-label">Total Tournaments</span>
              <span className="stat-value">0</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Completed</span>
              <span className="stat-value">0</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Participants</span>
              <span className="stat-value">0</span>
            </div>
          </div>
        </div>

        <div className="content-card">
          <h2>Leaderboard</h2>
          <p>Tournament winners and top performers.</p>
          <div className="leaderboard-placeholder">
            <div className="placeholder-item">🥇 Tournament champions</div>
            <div className="placeholder-item">📊 Performance rankings</div>
            <div className="placeholder-item">🏅 Achievement badges</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TournamentPage