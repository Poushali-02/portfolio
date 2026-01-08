import "../App.css";
import "../Css/skills.css";
import "../Css/experiences.css";
import Experiences from "./elements/all_experiences";
import { useState } from "react";
import ReactDOM from "react-dom";

function getTypeClass(type) {
  if (!type) return "exp-type-default";
  return "exp-type-" + type.toLowerCase().replace(/\s+/g, "-");
}

function ExperienceCard({ exp }) {
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (imageSrc) => {
    setLightboxImage(imageSrc);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const handleLightboxClick = (e) => {
    // Close if clicking on the overlay (not the image itself)
    if (e.target === e.currentTarget) {
      closeLightbox();
    }
  };

  // Handle escape key
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  };

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

      {exp.linkedIn && exp.linkedIn.trim() !== "" && (
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <a
            href={exp.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="exp-linkedin-link"
          >
            View on LinkedIn
          </a>
        </div>
      )}

      {exp.images && exp.images.length > 0 && (
        <div className="exp-card-images">
          {exp.images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${exp.title} ${i + 1}`}
              className="exp-card-image"
              onClick={() => openLightbox(src)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>
      )}

      {/* Lightbox Modal - Rendered at body level using portal */}
      {lightboxImage && ReactDOM.createPortal(
        <div
          className="lightbox-overlay"
          onClick={handleLightboxClick}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
        >
          <div className="lightbox-content">
            <img
              src={lightboxImage}
              alt="Fullscreen view"
              className="lightbox-image"
            />
          </div>
        </div>,
        document.body
      )}
    </article>
  );
}

function ExperiencesSection() {
  return (
    <div id="experiences" className="portfolio-bg">
      <section className="experiences-section">
        <div className="experiences-title">
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
