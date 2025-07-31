import React from 'react';

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Technical Skills</h3>
          <ul>
            <li><span className="skill-name">Python</span><div className="bar"><div className="level" style={{ width: '90%' }}></div></div></li>
            <li><span className="skill-name">JavaScript / TypeScript</span><div className="bar"><div className="level" style={{ width: '85%' }}></div></div></li>
            <li><span className="skill-name">React</span><div className="bar"><div className="level" style={{ width: '80%' }}></div></div></li>
            <li><span className="skill-name">Unity (C#)</span><div className="bar"><div className="level" style={{ width: '75%' }}></div></div></li>
            <li><span className="skill-name">SQL / MongoDB</span><div className="bar"><div className="level" style={{ width: '70%' }}></div></div></li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Professional Skills</h3>
          <ul>
            <li><span className="skill-name">Problem Solving</span><div className="bar"><div className="level" style={{ width: '85%' }}></div></div></li>
            <li><span className="skill-name">Teamwork</span><div className="bar"><div className="level" style={{ width: '80%' }}></div></div></li>
            <li><span className="skill-name">Leadership</span><div className="bar"><div className="level" style={{ width: '75%' }}></div></div></li>
            <li><span className="skill-name">Time Management</span><div className="bar"><div className="level" style={{ width: '80%' }}></div></div></li>
            <li><span className="skill-name">Communication</span><div className="bar"><div className="level" style={{ width: '85%' }}></div></div></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
