import './PageLayout.css'

const ScoringPage = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">🎯 Game Scoring</h1>
        <p className="page-subtitle">
          Real-time scoring for various dart game modes with intuitive controls
        </p>
      </div>

      <div className="page-content">
        <div className="content-card">
          <h2>Game Modes</h2>
          <p>Choose from popular dart game variations.</p>
          <div className="game-modes">
            <button className="game-mode-btn">501</button>
            <button className="game-mode-btn">Cricket</button>
            <button className="game-mode-btn">Around the Clock</button>
            <button className="game-mode-btn">301</button>
          </div>
        </div>

        <div className="content-card">
          <h2>Current Game</h2>
          <p>No active game. Start a new game to begin scoring.</p>
          <div className="game-setup">
            <div className="setup-item">
              <label>Select Players:</label>
              <select className="form-select">
                <option>Choose players...</option>
              </select>
            </div>
            <div className="setup-item">
              <label>Game Mode:</label>
              <select className="form-select">
                <option>501</option>
                <option>Cricket</option>
                <option>301</option>
              </select>
            </div>
            <button className="btn btn-primary">Start Game</button>
          </div>
        </div>

        <div className="content-card">
          <h2>Scoring Interface</h2>
          <p>Interactive dartboard and scoring controls will appear here during active games.</p>
          <div className="scoring-placeholder">
            <div className="dartboard-placeholder">
              🎯 Interactive Dartboard
            </div>
            <div className="score-controls">
              <div className="placeholder-item">Score input controls</div>
              <div className="placeholder-item">Undo/Redo functionality</div>
              <div className="placeholder-item">Game statistics</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScoringPage