import { useEffect, useRef, useState } from 'react';
import * as FiIcons from 'react-feather';
import { skills } from '../data/skills';
import './Skills.css';

function SkillCard({ skill, visible }) {
  const [width, setWidth] = useState(0);
  const Icon = FiIcons[skill.icon];

  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => setWidth(skill.level), 200);
      return () => clearTimeout(t);
    }
  }, [visible, skill.level]);

  return (
    <div className="skill-card">
      <div className="skill-card__top">
        <div className="skill-card__icon" style={{ background: `${skill.color}18`, borderColor: `${skill.color}30` }}>
          {Icon && <Icon size={24} color={skill.color} />}
        </div>
        <div className="skill-card__info">
          <span className="skill-card__name">{skill.name}</span>
          <span className="skill-card__pct" style={{ color: skill.color }}>{skill.level}%</span>
        </div>
      </div>
      <div className="skill-card__bar-bg">
        <div
          className="skill-card__bar-fill"
          style={{
            width: `${width}%`,
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
            transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="section skills" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-badge">My Expertise</div>
          <h2 className="section-title">My Work <span>Skills</span></h2>
          <p className="section-subtitle">
            A snapshot of the tools and technologies I use to build smart, scalable, and user-friendly applications.
          </p>
        </div>

        <div className="skills__grid">
          {skills.map((skill, i) => (
            <div key={skill.name} className={`reveal reveal-delay-${(i % 4) + 1}`}>
              <SkillCard skill={skill} visible={visible} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
