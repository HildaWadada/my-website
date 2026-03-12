import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Background blobs */}
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />

      <div className="container hero__inner">

        {/* Left — profile image */}
        <div className="hero__image-col reveal">
          <div className="hero__image-ring">
            <div className="hero__image-wrapper">
              <img src="/images/dada.jpg" alt="Hilda Wadada" className="hero__photo" />
            </div>
            {/* Decorative dots */}
            <div className="hero__ring-dot hero__ring-dot--tl" />
            <div className="hero__ring-dot hero__ring-dot--br" />
          </div>

          {/* Floating badge */}
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Available for work
          </div>
        </div>

        {/* Right — content */}
        <div className="hero__content">
          <div className="section-badge reveal">About Me</div>

          <h1 className="hero__headline reveal reveal-delay-1">
            Building <span>intelligent</span><br />
            web experiences<br />
            <em>that matter.</em>
          </h1>

          <p className="hero__bio reveal reveal-delay-2">
            I'm <strong>Hilda Wadada</strong> — a Fullstack Developer and AI Engineer based in Kampala, Uganda.
            I specialize in full-stack development and AI integration, creating responsive web apps and
            intelligent systems. Passionate about clean code, intuitive design, and transforming complex
            problems into elegant solutions.
          </p>

          {/* Info grid */}
          <div className="hero__info reveal reveal-delay-3">
            <div className="hero__info-item">
              <span className="hero__info-label">Name</span>
              <span className="hero__info-value">Hilda Wadada</span>
            </div>
            <div className="hero__info-item">
              <span className="hero__info-label">Phone</span>
              <span className="hero__info-value">
                <a href="tel:+256782828778">+256 782 828 778</a>
              </span>
            </div>
            <div className="hero__info-item">
              <span className="hero__info-label">Email</span>
              <span className="hero__info-value">
                <a href="mailto:wadadahilda@gmail.com">wadadahilda@gmail.com</a>
              </span>
            </div>
            <div className="hero__info-item">
              <span className="hero__info-label">Location</span>
              <span className="hero__info-value">Kampala, Uganda</span>
            </div>
          </div>

          {/* CTA row */}
          <div className="hero__cta reveal reveal-delay-4">
            <a href="#projects" className="btn btn-accent">View My Work</a>
            <a href="#contact" className="btn btn-outline">Get in Touch</a>
          </div>

          {/* Stats */}
          <div className="hero__stats reveal reveal-delay-5">
            <div className="hero__stat">
              <span className="hero__stat-num">5+</span>
              <span className="hero__stat-label">Projects Built</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">2</span>
              <span className="hero__stat-label">Certifications</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">AI</span>
              <span className="hero__stat-label">Powered Apps</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
