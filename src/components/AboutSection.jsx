import React, { useState } from "react";
import "../styles/AboutSection.css";
import videoThumbnail from "../assets/video-thumbnail.png";
import craftedBg from "../assets/crafted-bg.png";

// ⭐ Import video exactly like an image
import aboutVideo from "../assets/about-video.mp4";

const AboutSection = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="about-section" id="about">
      <div className="about-inner">
        <div className="story-tag">Our Story</div>

        <div className="about-header">
          <h2 className="about-title">
            Crafting The Future
            <br /> Of Apparel
          </h2>
          <p className="about-intro-text">
            We are dedicated to redefining garment manufacturing through
            creativity and craftsmanship. Since 2014, Vatbae has specialized in
            managing surplus brands and developing new labels built on quality
            and trust.
          </p>
        </div>

        <div className="about-main">

          {/* Video Block */}
          <div className="about-video-block">
            <div className="video-wrapper">
              {!playVideo ? (
                <>
                  <img
                    src={videoThumbnail}
                    alt="Video Thumbnail"
                    className="video-thumbnail media-cover"
                    onClick={() => setPlayVideo(true)}
                  />
                  <div
                    className="video-play-icon"
                    onClick={() => setPlayVideo(true)}
                  >
                    ▶
                  </div>
                </>
              ) : (
                <video
                  className="local-video media-cover"
                  src={aboutVideo} // ⭐ directly imported file
                  controls
                  autoPlay
                  playsInline
                />
              )}
            </div>

            <div className="video-caption">
              <h3 className="video-heading">Driven By Quality, Defined By Detail</h3>
              <p className="video-text">
                Our expertise extends across men’s, women’s, and kidswear — from tops
                and bottoms to innerwear. Each piece reflects our focus on comfort,
                durability, and precision.
              </p>
            </div>
          </div>

          {/* Crafted Card */}
          <div
            className="crafted-block"
            style={{
              backgroundImage: `linear-gradient(rgba(49,25,13,0.55), rgba(49,25,13,0.55)), url(${craftedBg})`,
            }}
          >
            <div className="crafted-card">
              <h3 className="crafted-title">Crafted For Every Brand</h3>
              <p className="crafted-description">
                From everyday basics to premium apparel, we believe great clothing
                begins with better fabrics and ends with thoughtful design.
              </p>
              <button className="crafted-btn" onClick={() => scrollToSection("contact")}>
                Begin Yours →
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
