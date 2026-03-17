import { personal } from '../data/portfolio';
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-scroll';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-inner">

        <div className="hero-left">
          <div className="hero-status">
            <span className="hero-dot" />
            Available for opportunities
          </div>

          <h1 className="hero-name">{personal.name}</h1>
          <p className="hero-role">{personal.title}</p>
          <div className="hero-divider" />
          <p className="hero-bio">{personal.bio}</p>

          <p className="hero-loc">
            <FiMapPin size={12} />
            <span>{personal.location}</span>
          </p>

          <div className="hero-cta">
            <Link to="contact" smooth duration={500} offset={-72} className="btn-fill">
              Get in Touch
            </Link>
            <Link to="projects" smooth duration={500} offset={-72} className="btn-outline">
              View Projects
            </Link>
            <a href={personal.resumeUrl} target="_blank" rel="noreferrer" className="btn-outline">
              Résumé ↗
            </a>
          </div>

          <div className="hero-socials">
            <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href={`mailto:${personal.email}`} aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>

        <div className="hero-right">
          <img
            src={`${import.meta.env.BASE_URL}photo.jpg`}
            alt={personal.name}
            className="hero-photo"
            onError={e => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="hero-initials" style={{ display: 'none' }}>
            {personal.name.split(' ').map(w => w[0]).join('')}
          </div>
        </div>

      </div>

      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  );
}