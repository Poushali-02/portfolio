// ExperiencesSection.jsx
import "../App.css";
import "../Css/skills.css";     // re-use glass styles
import "../Css/experiences.css"; // small extra overrides
import Experiences from "./elements/all_experiences";

function getTypeClass(type) {
  return "exp-type-" + type.toLowerCase().replace(/\s+/g, "-");
}

function ExperienceCard({ exp }) {
  return (
    <article className="exp-card">
      <header className="exp-card-header">
        <div className="exp-card-center">
          <h3 className="exp-card-title">{exp.title}</h3>
          <span
          className={`exp-card-type ${getTypeClass(exp.type)}`}
          >
          {exp.type}
        </span>
        </div>
      </header>

      <p className="exp-card-description">
        {exp.description}
      </p>

      {exp.images && exp.images.length > 0 && (
        <div className="exp-card-images">
          {exp.images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${exp.title} ${i + 1}`}
              className="exp-card-image"
            />
            ))}
        </div>
      )}
    </article>
  );
}

function ExperiencesSection() {
  return (
    <div id="experiences" className="portfolio-bg">
      <section className="skills-section">
        <div className="skills-title">
          <h2>Experiences</h2>
        </div>

        <div className="exp-grid">
          {Experiences.map((exp, idx) => (
            <ExperienceCard key={idx} exp={exp} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default ExperiencesSection;
