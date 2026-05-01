import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './GameHistory.css'

interface GameRecord {
  date: string
  mode?: string
  difficulty?: string
  result: string
  score?: number
  duration?: string
}

const GameHistoryPage = () => {
  const [gameHistory, setGameHistory] = useState<GameRecord[]>([])

  useEffect(() => {
    const history: GameRecord[] = JSON.parse(localStorage.getItem('gameHistory') || '[]')
    setGameHistory(history.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()))
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  const getResultClass = (result: string) => {
    return result === 'win' ? 'result-win' : result === 'loss' ? 'result-loss' : 'result-draw'
  }

  const clearHistory = () => {
    if (window.confirm('Are you sure you want to clear all game history?')) {
      localStorage.removeItem('gameHistory')
      setGameHistory([])
    }
  }

  return (
    <div className="game-history">
      <div className="game-history-header">
        <h1>Game History</h1>
        <div className="header-actions">
          <Link to="/" className="back-button">Back to Home</Link>
          {gameHistory.length > 0 && (
            <button onClick={clearHistory} className="clear-button">
              Clear History
            </button>
          )}
        </div>
      </div>

      {gameHistory.length === 0 ? (
        <div className="no-history">
          <p>No games played yet. Start playing to see your game history!</p>
          <Link to="/scoring" className="start-game-button">Start New Game</Link>
        </div>
      ) : (
        <div className="history-list">
          <div className="history-stats">
            <div className="stat-item">
              <span className="stat-number">{gameHistory.length}</span>
              <span className="stat-label">Total Games</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{gameHistory.filter(g => g.result === 'win').length}</span>
              <span className="stat-label">Wins</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{gameHistory.filter(g => g.result === 'loss').length}</span>
              <span className="stat-label">Losses</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{gameHistory.filter(g => g.result === 'draw').length}</span>
              <span className="stat-label">Draws</span>
            </div>
          </div>

          <div className="history-items">
            {gameHistory.map((game, index) => (
              <div key={index} className="history-item">
                <div className="game-info">
                  <div className="game-date">{formatDate(game.date)}</div>
                  <div className="game-details">
                    <span className="game-mode">{game.mode || 'Classic'}</span>
                    <span className="game-difficulty">{game.difficulty || 'Medium'}</span>
                  </div>
                </div>
                <div className="game-score">
                  <div className={`game-result ${getResultClass(game.result)}`}>
                    {game.result.toUpperCase()}
                  </div>
                  <div className="score-details">
                    <span>Score: {game.score || 0}</span>
                    <span>Time: {game.duration || 'N/A'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default GameHistoryPage
