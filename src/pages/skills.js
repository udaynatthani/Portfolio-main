import React from 'react';
import './skills.css';

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Node.js", "C Programming", "Python",
  "Java", "Tailwind CSS", "Redux", "MongoDB", "Firebase", "REST API", "Bootstrap",
  "Git", "GitHub", "VS Code", "Responsive Design", "C#"
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="heading"><i className="fas fa-laptop-code"></i> Skills </h2>
      <div className="container">
        <div className="row" id="skillsContainer">
          {skills.map((skill, index) => (
            <div className="bar" key={index}>
              <div className="info">
                <span>{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
