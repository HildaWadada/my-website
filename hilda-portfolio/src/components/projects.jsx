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
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.09.682-.218.682-.484 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.091-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.683-.104-.253-.447-1.27.097-2.647 0 0 .84-.268 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.293 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.565 4.935.359.308.678.916.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .268.18.578.688.48C19.138 20.163 22 16.417 22 12c0-5.523-4.477-10-10-10z"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="project-card__link project-card__link--accent">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      Live Demo
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
