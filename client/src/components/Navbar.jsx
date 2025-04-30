import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // We'll make this next

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-header">
        <h1 className="logo">TrainerFit</h1>
        <button className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>
      <ul className={`nav-links ${open ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
        <li><Link to="/stories" onClick={() => setOpen(false)}>Success Stories</Link></li>
        <li><Link to="/book" onClick={() => setOpen(false)}>Book a Session</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
