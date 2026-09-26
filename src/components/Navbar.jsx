import { Link, NavLink } from 'react-router-dom';
import { ClipboardList, Bookmark } from 'lucide-react';
import Logo from './Logo';
import { useFitLog } from '../context/FitLogContext';

export default function Navbar() {
  const { plan, saved } = useFitLog();
  return (
    <header className="navbar-wrap">
      <nav className="navbar container">
        <Link to="/" className="brand-link"><Logo /></Link>
        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Workout</NavLink>
          <NavLink to="/my-plan" className={({ isActive }) => isActive ? 'active' : ''}>My Plan</NavLink>
        </div>
        <div className="nav-badges">
          <Link to="/my-plan" className="counter plan-counter"><ClipboardList size={15} /> Plan <b>{plan.length}</b></Link>
          <Link to="/my-plan" className="counter saved-counter"><Bookmark size={15} /> Saved <b>{saved.length}</b></Link>
        </div>
      </nav>
    </header>
  );
}
