import { useState } from "react"; 
import "../App.css";
import "../Css/skills.css";
import skills from "./projects/skills.js"; 

const requirementTags = Array.from(
  new Set(skills.flatMap((s) => s.requirement))
);

const categories = ["All", ...requirementTags];

function Skillset() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.requirement.includes(activeCategory));

  return (
    <div className="portfolio-bg">
        <section className="skills-section">
        <div className="projects-title">
            <h2>Skillset</h2>
        </div>

        <div className="skills-filters">
            {categories.map((cat) => (
            <button
                key={cat}
                className={
                cat === activeCategory
                    ? "skills-filter-btn active"
                    : "skills-filter-btn"
                }
                onClick={() => setActiveCategory(cat)}
            >
                {cat}
            </button>
            ))}
        </div>

        <div className="skills-grid">
            {filteredSkills.map((skill, idx) => (
            <article key={idx} className="skill-card">
                <div className="skill-card-header">
                    <div className="skill-card-left">
                        <span className="skill-card-name">{skill.skillname}</span>
                        <span className="skill-card-subCategory">{skill.subCategory}</span>
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
