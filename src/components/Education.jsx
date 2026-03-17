import { education } from '../data/portfolio';
import './Education.css';

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <div className="sh">
          <p className="sh-eyebrow">Academic Journey</p>
          <h2 className="sh-title">Education</h2>
          <p className="sh-sub">The institutions and degrees that built my technical foundation.</p>
        </div>
        <div className="edu-list">
          {education.map((e, i) => (
            <div className="edu-row fu" key={i} style={{animationDelay:`${i*0.1}s`}}>
              <div className="edu-track">
                <div className="edu-dot" />
                {i < education.length - 1 && <div className="edu-line" />}
              </div>
              <div className="edu-card">
                <div className="edu-top">
                  <div className="edu-left">
                    <h3 className="edu-degree">{e.degree}</h3>
                    <p className="edu-inst">{e.institution}</p>
                  </div>
                  <div className="edu-right">
                    <span className="edu-dur">{e.duration}</span>
                    <span className="edu-grade">{e.grade}</span>
                  </div>
                </div>
                {e.highlights.length > 0 && (
                  <div className="edu-tags">
                    {e.highlights.map((h,j) => <span key={j} className="tag">{h}</span>)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
