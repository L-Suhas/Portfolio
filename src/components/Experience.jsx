import { experience } from '../data/portfolio';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section-alt">
      <div className="container">
        <div className="sh">
          <p className="sh-eyebrow">Work History</p>
          <h2 className="sh-title">Experience</h2>
          <p className="sh-sub">Roles where I've turned theory into real-world impact.</p>
        </div>
        <div className="exp-grid">
          {experience.map((e, i) => (
            <div className="exp-card fu" key={i} style={{animationDelay:`${i*0.1}s`}}>
              <div className="exp-head">
                <span className="exp-badge">{e.type}</span>
                <span className="exp-dur">{e.duration}</span>
              </div>
              <h3 className="exp-role">{e.role}</h3>
              <p className="exp-co">@ {e.company}</p>
              <p className="exp-desc">{e.description}</p>
              <div className="exp-tech">
                {e.tech.map((t,j) => <span key={j} className="tag-mono">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
