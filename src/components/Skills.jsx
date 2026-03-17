import { skills } from '../data/portfolio';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="section-alt">
      <div className="container">
        <div className="sh">
          <p className="sh-eyebrow">Technical Arsenal</p>
          <h2 className="sh-title">Skills</h2>
          <p className="sh-sub">Technologies I work with to build reliable, scalable solutions.</p>
        </div>
        <div className="skills-grid">
          {skills.map((cat, i) => (
            <div className="skill-card fu" key={i} style={{animationDelay:`${i*0.08}s`}}>
              <h3 className="skill-cat">{cat.category}</h3>
              <div className="skill-tags">
                {cat.items.map((item, j) => (
                  <span className="skill-tag" key={j}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
