import { projects } from '../data/portfolio';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

export default function Projects() {
  const featured = projects.filter(p => p.featured);
  const rest     = projects.filter(p => !p.featured);
  return (
    <section id="projects">
      <div className="container">
        <div className="sh">
          <p className="sh-eyebrow">Work Showcase</p>
          <h2 className="sh-title">Projects</h2>
          <p className="sh-sub">Academic and personal builds that reflect how I think and solve problems.</p>
        </div>

        <div className="proj-featured">
          {featured.map((p, i) => (
            <div className="proj-feat-card fu" key={i} style={{animationDelay:`${i*0.12}s`}}>
              <div className="proj-feat-left">
                <p className="proj-eyebrow">Featured Project</p>
                <h3 className="proj-title">{p.title}</h3>
                <p className="proj-desc">{p.description}</p>
                <div className="proj-tech">
                  {p.tech.map((t,j) => <span key={j} className="tag-mono">{t}</span>)}
                </div>
                <div className="proj-links">
                  {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="proj-link"><FiGithub size={14}/> Code</a>}
                  {p.live   && <a href={p.live}   target="_blank" rel="noreferrer" className="proj-link accent"><FiExternalLink size={14}/> Live</a>}
                </div>
              </div>
              <div className="proj-feat-num" aria-hidden="true">{String(i+1).padStart(2,'0')}</div>
            </div>
          ))}
        </div>

        {rest.length > 0 && (
          <div className="proj-grid">
            {rest.map((p, i) => (
              <div className="proj-card fu" key={i} style={{animationDelay:`${i*0.1}s`}}>
                <div className="proj-card-top">
                  <span className="proj-icon">◈</span>
                  <div className="proj-card-links">
                    {p.github && <a href={p.github} target="_blank" rel="noreferrer"><FiGithub size={16}/></a>}
                    {p.live   && <a href={p.live}   target="_blank" rel="noreferrer"><FiExternalLink size={16}/></a>}
                  </div>
                </div>
                <h3 className="proj-title">{p.title}</h3>
                <p className="proj-desc">{p.description}</p>
                <div className="proj-tech" style={{marginTop:'auto', paddingTop: '12px'}}>
                  {p.tech.map((t,j) => <span key={j} className="tag-mono">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
