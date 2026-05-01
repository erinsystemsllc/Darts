import './PageLayout.css'

const StatsPage = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">📊 Statistics Tracking</h1>
        <p className="page-subtitle">
          Comprehensive analytics and performance tracking for all players and games
        </p>
      </div>

      <div className="page-content">
        <div className="content-card">
          <h2>Overall Statistics</h2>
          <p>Global performance metrics across all games and players.</p>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-label">Total Games</span>
              <span className="stat-value">0</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Total Throws</span>
              <span className="stat-value">0</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Average Score</span>
              <span className="stat-value">0</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Best Finish</span>
              <span className="stat-value">-</span>
            </div>
          </div>
        </div>

        <div className="content-card">
          <h2>Player Performance</h2>
          <p>Individual player statistics and comparisons.</p>
          <div className="player-stats">
            <div className="stat-filter">
              <label>Select Player:</label>
              <select className="form-select">
                <option>All Players</option>
              </select>
            </div>
            <div className="placeholder-list">
              <div className="placeholder-item">📈 Win/Loss ratios</div>
              <div className="placeholder-item">🎯 Average scores per game</div>
              <div className="placeholder-item">⚡ Checkout percentages</div>
              <div className="placeholder-item">🏆 Tournament performance</div>
            </div>
          </div>
        </div>

        <div className="content-card">
          <h2>Game Analysis</h2>
          <p>Detailed breakdown of game patterns and trends.</p>
          <div className="analysis-charts">
            <div className="chart-placeholder">
              📊 Performance trends over time
            </div>
            <div className="chart-placeholder">
              🎯 Accuracy by dartboard section
            </div>
            <div className="chart-placeholder">
              📈 Score distribution analysis
            </div>
          </div>
        </div>

        <div className="content-card">
          <h2>Achievements</h2>
          <p>Milestones and notable accomplishments.</p>
          <div className="achievements-grid">
            <div className="achievement-item">
              <span className="achievement-icon">🏆</span>
              <span className="achievement-name">First Win</span>
            </div>
            <div className="achievement-item">
              <span className="achievement-icon">🎯</span>
              <span className="achievement-name">Perfect Game</span>
            </div>
            <div className="achievement-item">
              <span className="achievement-icon">⚡</span>
              <span className="achievement-name">Quick Finish</span>
            </div>
            <div className="achievement-item">
              <span className="achievement-icon">🔥</span>
              <span className="achievement-name">Hot Streak</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsPage