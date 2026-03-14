import { useState, useEffect } from 'react';
import { Menu, X } from 'react-feather';
import './Navbar.css';

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Contact',  href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active, setActive]       = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // update active link based on scroll position
      const sections = ['home', 'projects', 'skills', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (href) => {
    setMenuOpen(false);
    setActive(href.replace('#', ''));
  };

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">

        {/* Logo */}
        <a href="#home" className="navbar__logo">
          <span className="navbar__logo-hw">HW</span>
          <span className="navbar__logo-dot">.</span>
        </a>

        {/* Desktop links */}
        <nav className="navbar__links">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`navbar__link${active === href.replace('#', '') ? ' navbar__link--active' : ''}`}
              onClick={() => handleLinkClick(href)}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#contact" className="btn btn-accent navbar__cta" onClick={() => handleLinkClick('#contact')}>
          Hire Me
        </a>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`}>
        {navLinks.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="navbar__mobile-link"
            onClick={() => handleLinkClick(href)}
          >
            {label}
          </a>
        ))}
        <a href="#contact" className="btn btn-accent" style={{marginTop:'0.5rem'}} onClick={() => handleLinkClick('#contact')}>
          Hire Me
        </a>
      </div>
    </header>
  );
}
