import { personal } from '../data/portfolio';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-name">Portfolio<span>.</span></p>
        <p className="footer-copy">Designed & built with React + Vite · {new Date().getFullYear()}</p>
        <a href={personal.github} target="_blank" rel="noreferrer" className="footer-gh">View Source ↗</a>
      </div>
    </footer>
  );
}
