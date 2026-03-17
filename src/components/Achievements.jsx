import { achievements } from '../data/portfolio';
import './Achievements.css';

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="container">
        <div className="sh">
          <p className="sh-eyebrow">Recognition</p>
          <h2 className="sh-title">Achievements</h2>
          <p className="sh-sub">Awards, certifications and milestones I'm proud of.</p>
        </div>
        <div className="ach-list">
          {achievements.map((a, i) => (
            <div className="ach-item fu" key={i} style={{animationDelay:`${i*0.08}s`}}>
              <span className="ach-num">{String(i+1).padStart(2,'0')}</span>
              <div className="ach-body">
                <h3 className="ach-title">{a.title}</h3>
                <p className="ach-desc">{a.description}</p>
              </div>
              <span className="ach-year">{a.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
