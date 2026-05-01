// Game History Management Utilities

export const saveGameToHistory = (gameData) => {
  try {
    const history = getGameHistory();
    const gameRecord = {
      id: Date.now(),
      date: new Date().toISOString(),
      result: gameData.result, // 'win', 'loss', 'draw'
      score: gameData.score || 0,
      duration: gameData.duration || null,
      mode: gameData.mode || 'Classic',
      difficulty: gameData.difficulty || 'Medium',
      moves: gameData.moves || 0,
      ...gameData
    };
    
    history.unshift(gameRecord);
    
    // Keep only the last 100 games to prevent localStorage bloat
    const trimmedHistory = history.slice(0, 100);
    
    localStorage.setItem('gameHistory', JSON.stringify(trimmedHistory));
    return gameRecord;
  } catch (error) {
    console.error('Error saving game to history:', error);
    return null;
  }
};

export const getGameHistory = () => {
  try {
    const history = localStorage.getItem('gameHistory');
    return history ? JSON.parse(history) : [];
  } catch (error) {
    console.error('Error retrieving game history:', error);
    return [];
  }
};

export const clearGameHistory = () => {
  try {
    localStorage.removeItem('gameHistory');
    return true;
  } catch (error) {
    console.error('Error clearing game history:', error);
    return false;
  }
};

export const getGameStats = () => {
  const history = getGameHistory();
  
  const stats = {
    totalGames: history.length,
    wins: history.filter(game => game.result === 'win').length,
    losses: history.filter(game => game.result === 'loss').length,
    draws: history.filter(game => game.result === 'draw').length,
    winRate: 0,
    averageScore: 0,
    bestScore: 0,
    totalPlayTime: 0
  };
  
  if (stats.totalGames > 0) {
    stats.winRate = Math.round((stats.wins / stats.totalGames) * 100);
    
    const scores = history.map(game => game.score || 0);
    stats.averageScore = Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);
    stats.bestScore = Math.max(...scores);
    
    // Calculate total play time if duration is available
    const durations = history
      .filter(game => game.duration && typeof game.duration === 'string')
      .map(game => {
        const parts = game.duration.split(':');
        if (parts.length === 2) {
          return parseInt(parts[0]) * 60 + parseInt(parts[1]);
        }
        return 0;
      });
    
    if (durations.length > 0) {
      const totalSeconds = durations.reduce((sum, duration) => sum + duration, 0);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      stats.totalPlayTime = hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
    }
  }
  
  return stats;
};

export const formatGameDuration = (startTime, endTime) => {
  if (!startTime || !endTime) return null;
  
  const duration = Math.floor((endTime - startTime) / 1000);
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};