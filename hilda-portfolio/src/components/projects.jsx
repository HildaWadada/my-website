import { GitHub, ExternalLink } from 'react-feather';
import { projects } from '../data/projects';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-badge">My Work</div>
          <h2 className="section-title">Selected <span>Projects</span></h2>
          <p className="section-subtitle">
            A collection of projects I've built — spanning web applications, AI automation, and developer tools.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className={`project-card reveal reveal-delay-${(i % 3) + 1}`}
              style={{ '--card-accent': p.color }}
            >
              {/* Card top bar */}
              <div className="project-card__bar" style={{ background: p.color }} />

              <div className="project-card__body">
                <div className="project-card__header">
                  <div className="project-card__icon" style={{ background: `${p.color}18`, borderColor: `${p.color}30` }}>
                    <span>{p.emoji}</span>
                  </div>
                  <span className="project-card__tag" style={{ color: p.color, borderColor: `${p.color}40`, background: `${p.color}10` }}>
                    {p.tag}
                  </span>
                </div>

                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__desc">{p.desc}</p>

                <div className="project-card__links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="project-card__link">
                      <GitHub size={14} /> GitHub
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="project-card__link project-card__link--accent">
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
