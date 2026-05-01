import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import PlayersPage from './pages/PlayersPage'
import ScoringPage from './pages/ScoringPage'
import TournamentPage from './pages/TournamentPage'
import StatsPage from './pages/StatsPage'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/players" element={<PlayersPage />} />
        <Route path="/scoring" element={<ScoringPage />} />
        <Route path="/tournament" element={<TournamentPage />} />
        <Route path="/stats" element={<StatsPage />} />
      </Routes>
    </div>
  )
}

export default App