import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-header">
        <Link to="/" className="logo">
          <img src="/images/NevesFit.png" alt="NevesFit Logo" className="logo-image" />
        </Link>
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
