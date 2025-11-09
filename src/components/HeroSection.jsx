import React from "react";
import "../styles/HeroSection.css";
import bannerImage from "../assets/banner-image.png";

const HeroSection = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 80;
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = sectionPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Left: Text */}
        <div className="hero-text">
          <h1 className="hero-heading">
            We are the <br /> Beginning and the End.
          </h1>

          <p className="hero-subtext">
           From fabric to final packaging, we empower brands with endless customization
           and trusted craftsmanship perfected since 2014.
          </p>

          {/* ✅ Updated redirection to Products section */}
          <button
            className="hero-btn"
            onClick={() => scrollToSection("products")}
          >
            Explore →
          </button>
        </div>

        {/* Right: Image */}
        <div className="hero-image-container">
          <img src={bannerImage} alt="Banner" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
