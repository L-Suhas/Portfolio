import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { personal } from '../data/portfolio';
import './Navbar.css';

const navLinks = [
  { to: 'education', label: 'Education' },
  { to: 'experience', label: 'Experience' },
  { to: 'projects', label: 'Projects' },
  { to: 'skills', label: 'Skills' },
  { to: 'achievements', label: 'Achievements' },
  { to: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <Link to="hero" smooth duration={500} className="nav-logo">
          Portfolio<span>.</span>
        </Link>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {navLinks.map(l => (
            <li key={l.to}>
              <Link
                to={l.to}
                smooth
                duration={500}
                offset={-80}
                className="nav-link"
                activeClass="active"
                spy
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a href={personal.resumeUrl} target="_blank" rel="noreferrer" className="nav-resume">
              Résumé ↗
            </a>
          </li>
        </ul>

        <button className={`hamburger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
