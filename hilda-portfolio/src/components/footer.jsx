import { GitHub, Linkedin, Mail } from 'react-feather';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__top-inner">
          {/* Brand */}
          <div className="footer__brand">
            <span className="footer__logo">HW<span className="footer__logo-dot">.</span></span>
            <p className="footer__tagline">
              Building intelligent web experiences<br />from Kampala, Uganda.
            </p>
            <div className="footer__socials">
              <a href="https://github.com/HildaWadada" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHub size={17} /></a>
              <a href="https://www.linkedin.com/in/hilda-wadada/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
              <a href="mailto:wadadahilda@gmail.com" aria-label="Email"><Mail size={17} /></a>
            </div>
          </div>

          {/* Nav */}
          <div className="footer__col">
            <h4 className="footer__col-title">Navigation</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Contact</h4>
            <ul>
              <li><a href="mailto:wadadahilda@gmail.com">wadadahilda@gmail.com</a></li>
              <li><a href="tel:+256782828778">+256 782 828 778</a></li>
              <li><a href="tel:+256703723368">+256 703 723 368</a></li>
              <li>Kampala, Uganda</li>
            </ul>
          </div>

          {/* Get in touch */}
          <div className="footer__col">
            <h4 className="footer__col-title">Get the latest</h4>
            <p className="footer__col-text">
              Open for freelance projects, collaborations, and full-time opportunities.
            </p>
            <a href="#contact" className="btn btn-accent footer__cta">Let's Talk</a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {year} Hilda Wadada · AI Engineer &amp; Web Developer</p>
          <p>
            <a href="https://github.com/HildaWadada" target="_blank" rel="noreferrer">Privacy Policy</a>
            &nbsp;·&nbsp;
            <a href="https://github.com/HildaWadada" target="_blank" rel="noreferrer">Terms</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
