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
              <a href="https://github.com/HildaWadada" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.09.682-.218.682-.484 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.091-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.683-.104-.253-.447-1.27.097-2.647 0 0 .84-.268 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.293 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.565 4.935.359.308.678.916.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .268.18.578.688.48C19.138 20.163 22 16.417 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/hilda-wadada/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a href="mailto:wadadahilda@gmail.com" aria-label="Email">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
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
