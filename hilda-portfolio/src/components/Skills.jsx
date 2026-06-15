import { useEffect, useRef, useState } from 'react';
import { skills } from '../data/skills';
import './Skills.css';

const categories = [
  {
    label: 'Frontend',
    color: '#378ADD',
    names: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React JS', 'Next JS'],
  },
  {
    label: 'Backend & Databases',
    color: '#1D9E75',
    names: ['Python', 'Node JS', 'APIs & Libraries', 'PostgreSQL & Databases'],
  },
  {
    label: 'AI / ML',
    color: '#7F77DD',
    names: ['Prompt Engineering', 'LLMs', 'LangChain & LangGraph', 'Natural Language Processing (NLP)', 'Deep Learning'],
  },
];

function SkillRow({ skill, dotColor, visible }) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => setPct(skill.level), 200);
      return () => clearTimeout(t);
    }
  }, [visible, skill.level]);

  return (
    <div className="skill-row">
      <div className="skill-row__left">
        <span className="skill-dot" style={{ background: dotColor }} />
        <span className="skill-row__name">{skill.name}</span>
      </div>
      <span className="skill-row__pct">{skill.level}%</span>
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

        <div className="skills__columns">
          {categories.map((cat) => {
            const catSkills = cat.names
              .map((n) => skills.find((s) => s.name === n))
              .filter(Boolean);

            return (
              <div key={cat.label} className="skills__col reveal">
                <p className="skills__cat-label">{cat.label}</p>
                <div className="skills__list">
                  {catSkills.map((skill) => (
                    <SkillRow
                      key={skill.name}
                      skill={skill}
                      dotColor={cat.color}
                      visible={visible}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
