import './PageLayout.css'

const PlayersPage = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">👥 Player Management</h1>
        <p className="page-subtitle">
          Manage your players, track their profiles, and view their performance history
        </p>
      </div>

      <div className="page-content">
        <div className="content-card">
          <h2>Add New Player</h2>
          <p>Create player profiles with custom avatars and skill levels.</p>
          <button className="btn btn-primary">Add Player</button>
        </div>

        <div className="content-card">
          <h2>Player List</h2>
          <p>View and manage all registered players in your system.</p>
          <div className="placeholder-list">
            <div className="placeholder-item">🎯 Player profiles will appear here</div>
            <div className="placeholder-item">📊 Player statistics and rankings</div>
            <div className="placeholder-item">✏️ Edit and delete player options</div>
          </div>
        </div>

        <div className="content-card">
          <h2>Player Statistics</h2>
          <p>Comprehensive performance metrics for each player.</p>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-label">Total Players</span>
              <span className="stat-value">0</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Active Players</span>
              <span className="stat-value">0</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Games Played</span>
              <span className="stat-value">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayersPage