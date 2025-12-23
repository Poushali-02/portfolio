import { useState, useRef, useEffect } from "react"; 
import "../App.css";
import "../Css/skills.css";

import skillIcons from "./elements/all_skills.jsx";
import skills from "./data/skills.js";

const requirementTags = Array.from(
  new Set(
    skills
      .filter((s) => Array.isArray(s.requirement) && s.requirement.length > 0)
      .flatMap((s) => s.requirement)
      .map(req => req.trim())
      .filter(Boolean)
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
  const skillCardsRef = useRef(null);

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

  // Mobile touch handler for tooltips
  useEffect(() => {
    const cards = skillCardsRef.current?.querySelectorAll('.skill-card');
    
    const handleTouchStart = (e) => {
      const card = e.currentTarget;
      
      // Remove existing tooltips
      document.querySelectorAll('.mobile-tooltip').forEach(t => t.remove());
      
      // Create tooltip
      const tooltipEl = document.createElement('div');
      tooltipEl.className = 'mobile-tooltip';
      tooltipEl.textContent = card.dataset.skillname || 'Skill';
      
      card.appendChild(tooltipEl);
    };

    const handleTouchEnd = () => {
      setTimeout(() => {
        document.querySelectorAll('.mobile-tooltip').forEach(t => t.remove());
      }, 2500); // Auto-hide after 2.5s
    };

    cards?.forEach(card => {
      card.addEventListener('touchstart', handleTouchStart, { passive: true });
      card.addEventListener('touchend', handleTouchEnd, { passive: true });
    });

    return () => {
      cards?.forEach(card => {
        card.removeEventListener('touchstart', handleTouchStart);
        card.removeEventListener('touchend', handleTouchEnd);
      });
    };
  }, [filteredSkills]);

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

        <div className="skills-grid" ref={skillCardsRef}>
          {filteredSkills.map((skill, idx) => (
            <article 
              className="skill-card" 
              key={`${skill.skillname}-${idx}`}
              data-skillname={skill.skillname}
            >
              <div className="skill-card-content">
                <div className="skill-card-icon-section">
                  <div className="skill-card-icon">
                    {skillIcons[skill.skillname] ?? <i className="fas fa-code" />}
                  </div>
                </div>
                <div className="skill-card-header">
                  <h3 className="skill-card-name">{skill.skillname}</h3>
                  <span className="skill-card-subCategory">
                    {skill.subCategory || 'General'}
                  </span>
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
