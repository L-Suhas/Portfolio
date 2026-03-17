import { useState } from 'react';
import { personal } from '../data/portfolio';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [sent, setSent] = useState(false);

  const onChange = e => setForm(f => ({...f, [e.target.name]: e.target.value}));

  const onSubmit = e => {
    e.preventDefault();
    const ml = `mailto:${personal.email}?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`;
    window.location.href = ml;
    setTimeout(() => { setSent(true); setForm({name:'',email:'',message:''}); }, 800);
  };

  return (
    <section id="contact" className="section-alt">
      <div className="container">
        <div className="sh">
          <p className="sh-eyebrow">Let's Connect</p>
          <h2 className="sh-title">Get In Touch</h2>
          <p className="sh-sub">Open to opportunities, collaborations, or just a good chat.</p>
        </div>

        <div className="contact-wrap">
          {/* Left */}
          <div className="contact-info">
            <div className="c-detail">
              <FiMail className="c-icon" />
              <div>
                <p className="c-label">Email</p>
                <a href={`mailto:${personal.email}`} className="c-val">{personal.email}</a>
              </div>
            </div>
            <div className="c-detail">
              <FiMapPin className="c-icon" />
              <div>
                <p className="c-label">Location</p>
                <p className="c-val">{personal.location}</p>
              </div>
            </div>
            <div className="c-socials">
              <a href={personal.github}  target="_blank" rel="noreferrer" className="c-social"><FiGithub />  GitHub</a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="c-social"><FiLinkedin /> LinkedIn</a>
            </div>
            <div className="c-avail">
              <span className="c-avail-dot" />
              Open to internships & full-time roles
            </div>
          </div>

          {/* Right: form */}
          <form className="contact-form" onSubmit={onSubmit} noValidate>
            <div className="form-row">
              <div className="fg">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" value={form.name} onChange={onChange} required />
              </div>
              <div className="fg">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@email.com" value={form.email} onChange={onChange} required />
              </div>
            </div>
            <div className="fg">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="Tell me about your project or opportunity..." value={form.message} onChange={onChange} required />
            </div>
            <button type="submit" className="btn-fill" style={{alignSelf:'flex-start'}}>
              {sent ? '✓ Opening Mail App' : <><FiSend size={13}/> Send Message</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
