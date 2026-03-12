import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'react-feather';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const contactDetails = [
  { icon: <Mail size={16} />,        label: 'Email',    value: 'wadadahilda@gmail.com',                href: 'mailto:wadadahilda@gmail.com' },
  { icon: <Phone size={16} />,       label: 'Phone',    value: '+256 782 828 778',                     href: 'tel:+256782828778' },
  { icon: <FaWhatsapp size={16} />,  label: 'WhatsApp', value: '+256 782 828 778',                     href: 'https://wa.me/256782828778' },
  { icon: <FaLinkedin size={16} />,  label: 'LinkedIn', value: 'linkedin.com/in/hilda-wadada',         href: 'https://www.linkedin.com/in/hilda-wadada/' },
  { icon: <MapPin size={16} />,      label: 'Location', value: 'Kampala, Uganda',                      href: null },
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
              <Send size={15} />
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
