import React from "react";
import "../styles/Footer.css";
import instagramIcon from "../assets/instagram.png";
import linkedinIcon from "../assets/linkedin.png";

const Footer = () => {
  // ✅ Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 80; // adjust for sticky header height
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = sectionPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-content">
        {/* ==================== LEFT SIDE ==================== */}
        <div className="footer-left">
          <h2 className="footer-title">
            Let’s start <br /> stitching.
          </h2>
          <button
            className="quote-btn"
            onClick={() => scrollToSection("contact")}
          >
            Get a quote →
          </button>
        </div>

        {/* ==================== MIDDLE SECTION ==================== */}
        <div className="footer-middle">
          <h3 className="footer-heading">Company</h3>
          <ul>
            <li onClick={() => scrollToSection("home")}>Home</li>
            <li onClick={() => scrollToSection("about")}>About us</li>
            <li onClick={() => scrollToSection("journey")}>Production Journey</li>
            <li onClick={() => scrollToSection("products")}>Products</li>
            <li onClick={() => scrollToSection("printing")}>Printing & Embroidery</li>
            <li onClick={() => scrollToSection("brands")}>Brands</li>
            <li onClick={() => scrollToSection("contact")}>Contact</li>
          </ul>
        </div>

        {/* ==================== RIGHT SECTION ==================== */}
        <div className="footer-right">
          <h3 className="footer-heading">Contact Us</h3>
          <p>vatbae.studio@gmail.com</p>
          <p>+91 9677780345</p>
          <div className="footer-social">
            <a
              href="https://www.instagram.com/vatbae.studio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/vatbae-studio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Vatbae Studio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
