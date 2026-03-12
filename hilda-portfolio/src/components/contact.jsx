import { useState } from 'react';
import './Contact.css';

const contactDetails = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'wadadahilda@gmail.com',
    href: 'mailto:wadadahilda@gmail.com',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+256 782 828 778',
    href: 'tel:+256782828778',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Kampala, Uganda',
    href: null,
  },
];

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', message: '' });
  const [errors, setErrors]   = useState({});
  const [status, setStatus]   = useState(null); // 'success' | 'error'
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name = 'Name is required.';
    if (!form.email.trim())   e.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email.';
    if (!form.message.trim()) e.message = 'Message is required.';
    return e;
  };

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
    setErrors({ ...errors, [field]: undefined });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    try {
      const res = await fetch('https://formspree.io/f/xjkdeoby', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-badge">Contact</div>
          <h2 className="section-title">Get in <span>Touch</span></h2>
          <p className="section-subtitle">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </div>

        <div className="contact__grid">

          {/* Left info */}
          <div className="contact__info reveal">
            <h3 className="contact__info-heading">
              Let's build something<br /><em>remarkable together.</em>
            </h3>
            <p className="contact__info-text">
              Whether it's a web application, an AI-powered feature, or something completely new —
              drop me a message and let's talk about it.
            </p>

            <div className="contact__details">
              {contactDetails.map(({ icon, label, value, href }) => (
                <div className="contact__detail-item" key={label}>
                  <div className="contact__detail-icon">{icon}</div>
                  <div>
                    <span className="contact__detail-label">{label}</span>
                    {href
                      ? <a href={href} className="contact__detail-value">{value}</a>
                      : <span className="contact__detail-value">{value}</span>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className="contact__socials">
              <a href="https://github.com/HildaWadada" target="_blank" rel="noreferrer" className="contact__social-link" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.09.682-.218.682-.484 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.091-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.683-.104-.253-.447-1.27.097-2.647 0 0 .84-.268 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.293 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.565 4.935.359.308.678.916.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .268.18.578.688.48C19.138 20.163 22 16.417 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/hilda-wadada/" target="_blank" rel="noreferrer" className="contact__social-link" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right form */}
          <form className="contact__form reveal reveal-delay-2" onSubmit={handleSubmit} noValidate>
            <div className="contact__form-row">
              <div className={`contact__field${errors.name ? ' contact__field--error' : ''}`}>
                <label>Your Name</label>
                <input
                  type="text"
                  placeholder="Hilda Wadada"
                  value={form.name}
                  onChange={handleChange('name')}
                />
                {errors.name && <span className="contact__field-error">{errors.name}</span>}
              </div>
              <div className={`contact__field${errors.email ? ' contact__field--error' : ''}`}>
                <label>Your Email</label>
                <input
                  type="email"
                  placeholder="hello@example.com"
                  value={form.email}
                  onChange={handleChange('email')}
                />
                {errors.email && <span className="contact__field-error">{errors.email}</span>}
              </div>
            </div>

            <div className={`contact__field${errors.message ? ' contact__field--error' : ''}`}>
              <label>Your Message</label>
              <textarea
                rows={6}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange('message')}
              />
              {errors.message && <span className="contact__field-error">{errors.message}</span>}
            </div>

            <button type="submit" className="btn btn-accent contact__submit" disabled={loading}>
              {loading ? 'Sending…' : 'Send Message'}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>

            {status === 'success' && (
              <div className="contact__status contact__status--success">
                ✓ Message sent! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="contact__status contact__status--error">
                ✕ Something went wrong. Please try again or email me directly.
              </div>
            )}
          </form>

        </div>
      </div>
    </section>
  );
}
