import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/" className="brand-link">
          🎯 Darts Tracker
        </NavLink>
      </div>
      <div className="navbar-links">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          end
        >
          Home
        </NavLink>
        <NavLink 
          to="/players" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          Players
        </NavLink>
        <NavLink 
          to="/scoring" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          Scoring
        </NavLink>
        <NavLink 
          to="/tournament" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          Tournament
        </NavLink>
        <NavLink 
          to="/stats" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          Stats
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar