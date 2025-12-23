import { useState } from "react"; 
import "../App.css";
import "../Css/skills.css";

import skillIcons from "./elements/all_skills.jsx";
import skills from "./data/skills.js";

const requirementTags = Array.from(
  new Set(
    skills
      .filter((s) => Array.isArray(s.requirement))
      .flatMap((s) => s.requirement)
  )
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
                req.trim().toLowerCase() ===
                activeCategory.trim().toLowerCase()
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
            <article className="skill-card">
            <div className="skill-card-content">
              <div className="skill-card-icon-section">
                <div className="skill-card-icon">
                  {skillIcons[skill.skillname] ?? null}
                </div>
              </div>
              <div className="skill-card-header">
                <h3 className="skill-card-name">{skill.skillname}</h3>
                <span className="skill-card-subCategory">{skill.subCategory}</span>
              </div>
            </div>
          </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Skillset;
