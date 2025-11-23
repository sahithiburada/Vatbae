import React, { useEffect, useState } from "react";
import "../styles/AboutSection.css";
import videoThumbnail from "../assets/video-thumbnail.png";
import craftedBg from "../assets/crafted-bg.png";

// Import your local video
import aboutVideo from "../assets/about-video.mp4";

const AboutSection = () => {
  const [playVideo, setPlayVideo] = useState(false);
  // aspectPct is padding-top percent used to preserve aspect ratio (height/width * 100)
  // default to 56.25 (16:9) until metadata loads
  const [aspectPct, setAspectPct] = useState(56.25);

  // Preload video metadata to read natural width/height without playing
  useEffect(() => {
    let vid = document.createElement("video");
    vid.preload = "metadata";
    vid.src = aboutVideo;

    const handleLoadedMetadata = () => {
      if (vid.videoWidth && vid.videoHeight) {
        const pct = (vid.videoHeight / vid.videoWidth) * 100;
        setAspectPct(pct);
      }
    };

    // Some browsers need the event listener before setting src, but usually both work
    vid.addEventListener("loadedmetadata", handleLoadedMetadata);
    // If the metadata is already available, try to compute immediately
    if (vid.readyState >= 1) {
      handleLoadedMetadata();
    }

    // cleanup
    return () => {
      vid.removeEventListener("loadedmetadata", handleLoadedMetadata);
      // dereference to allow GC
      vid.src = "";
      vid = null;
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="about-section">
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
          {/* Local Video Section */}
          <div className="about-video-block">
            {/* video-wrapper uses inline style paddingTop to preserve aspect ratio */}
            <div
              className="video-wrapper"
              style={{ paddingTop: `${aspectPct}%` }}
            >
              {!playVideo ? (
                <>
                  <img
                    src={videoThumbnail}
                    alt="Video Thumbnail"
                    className="video-thumbnail media-cover"
                  />
                  <div
                    className="video-play-icon"
                    onClick={() => setPlayVideo(true)}
                    aria-label="Play video"
                    role="button"
                  >
                    ▶
                  </div>
                </>
              ) : (
                <video
                  className="local-video media-cover"
                  src={aboutVideo}
                  controls
                  autoPlay
                  
                  aria-label="About video"
                />
              )}
            </div>

            <div className="video-caption">
              <h3 className="video-heading">
                Driven By Quality, Defined By Detail
              </h3>
              <p className="video-text">
                Our expertise extends across men’s, women’s, and kidswear — from
                tops and bottoms to innerwear. Each piece reflects our focus on
                comfort, durability, and precision.
              </p>
            </div>
          </div>

          {/* Crafted Section */}
          <div
            className="crafted-block"
            style={{
              backgroundImage: `linear-gradient(rgba(49,25,13,0.55), rgba(49,25,13,0.55)), url(${craftedBg})`,
            }}
          >
            <div className="crafted-card">
              <h3 className="crafted-title">Crafted For Every Brand</h3>
              <p className="crafted-description">
                From everyday basics to premium apparel, we believe great
                clothing begins with better fabrics and ends with thoughtful
                design for every brand we work with.
              </p>
              <button
                className="crafted-btn"
                onClick={() => scrollToSection("contact")}
              >
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
