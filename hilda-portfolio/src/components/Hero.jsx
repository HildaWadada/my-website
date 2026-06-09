import { MapPin, Phone, Mail, ArrowRight, Briefcase, Award, Cpu } from 'react-feather';
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
            <div className="hero__ring-dot hero__ring-dot--tl" />
            <div className="hero__ring-dot hero__ring-dot--br" />
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
            I'm <strong>Hilda Wadada</strong> a Fullstack Developer and AI Engineer.
            I have built responsive web applications and intelligent systems that
             solve real problems, blending clean frontend design with powerful backend logic and
             AI integration.

             With hands on experience in Python, JavaScript, and large language models, I've built
             everything from business management systems to AI powered interview simulators and
             automated reporting tools. I'm passionate about writing clean, maintainable code and
             creating experiences that are as intuitive as they are functional.

             Currently pursuing a Certificate in Software and AI Engineering at Turing College 
             always learning, always building.
          </p>

          {/* Info grid */}
          <div className="hero__info reveal reveal-delay-3">
            <div className="hero__info-item">
              <span className="hero__info-label">Name</span>
              <span className="hero__info-value">Hilda Wadada</span>
            </div>
            <div className="hero__info-item">
              <span className="hero__info-label"><Phone size={11} style={{marginRight:4}}/>Phone</span>
              <span className="hero__info-value">
                <a href="tel:+256782828778">+256 782 828 778</a>
              </span>
            </div>
            <div className="hero__info-item">
              <span className="hero__info-label"><Mail size={11} style={{marginRight:4}}/>Email</span>
              <span className="hero__info-value">
                <a href="mailto:wadadahilda@gmail.com">wadadahilda@gmail.com</a>
              </span>
            </div>
            <div className="hero__info-item">
              <span className="hero__info-label"><MapPin size={11} style={{marginRight:4}}/>Location</span>
              <span className="hero__info-value">Kampala, Uganda</span>
            </div>
          </div>

          {/* CTA row */}
          <div className="hero__cta reveal reveal-delay-4">
            <a href="#projects" className="btn btn-accent">View My Work <ArrowRight size={15} /></a>
            <a href="#contact" className="btn btn-outline">Get in Touch</a>
          </div>

          {/* Stats */}
          <div className="hero__stats reveal reveal-delay-5">
            <div className="hero__stat">
              <span className="hero__stat-num"><Briefcase size={18} style={{color:'var(--accent)'}}/> 5+</span>
              <span className="hero__stat-label">Projects Built</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num"><Award size={18} style={{color:'var(--accent)'}}/> 2</span>
              <span className="hero__stat-label">Certifications</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num"><Cpu size={18} style={{color:'var(--accent)'}}/> AI</span>
              <span className="hero__stat-label">Powered Apps</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
