import { useState } from "react"; 
import "../App.css";
import "../Css/skills.css";
import skills from "./elements/skills.js"; 

const requirementTags = Array.from(
  new Set(skills.flatMap((s) => s.requirement))
);

const categories = ["All", ...requirementTags];

function FilterButton({ label, isActive, onClick }) {
  const className_ = isActive
    ? "skills-filter-btn active"
    : "skills-filter-btn";
  return (
    <button className={className_} onClick={onClick}>
      {label}
    </button>
  );
}

function Skillset() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter(
        (s) =>
          Array.isArray(s.requirement) &&
          s.requirement.some(
            (req) =>
              req.trim().toLowerCase() === activeCategory.trim().toLowerCase()
          )
      );

  return (
    <div id="skills" className="portfolio-bg">
      <section className="skills-section">
        <div className="skills-title">
          <h2>Skillset</h2>
        </div>

        <div className="skills-filters">
          {categories.map((cat) => (
            <FilterButton
              key={cat}
              label={cat}
              isActive={cat === activeCategory}
              onClick={() => setActiveCategory(cat)}
            />
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill, idx) => (
            <article key={idx} className="skill-card">
              <div className="skill-card-header">
                <div className="skill-card-left">
                  <span className="skill-card-name">{skill.skillname}</span>
                  <span className="skill-card-subCategory">
                    {skill.subCategory}
                  </span>
                </div>
                <span className="skill-card-level">{skill.level}</span>
              </div>
              <div className="skill-progress">
                <div
                  className="skill-progress-fill"
                  style={{ width: `${skill.score || 0}%` }}
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Skillset;
