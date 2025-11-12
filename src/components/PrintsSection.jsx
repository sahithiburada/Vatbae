import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/PrintsSection.css";

// ✅ Final import list (removed highDensity & puffPrint)
import acidwash from "../assets/print-acidwash.png";
import sprayworks from "../assets/print-sprayworks.png";
import dtg from "../assets/print-dtg.png";
import screenPrinting from "../assets/print-screen.png";
import embroidery from "../assets/print-embroidery.png";
import distressed from "../assets/print-distressed.png";

// ✅ Final print array (only includes your intended prints)
const prints = [
  { name: "Acid Wash", img: acidwash },
  { name: "Spray Works", img: sprayworks },
  { name: "DTG", img: dtg },
  { name: "Screen Printing", img: screenPrinting },
  { name: "Embroidery", img: embroidery },
  { name: "Distressed", img: distressed },
];

const PrintsSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section className="prints-section" id="printing">
      <div className="prints-header">
        <h2>PRINTS & EMBROIDERY</h2>
        <p>
          Enhance your garments with premium printing and embroidery techniques
          that ensure precision, durability, and standout design.
        </p>
      </div>

      {/* ✅ Desktop view */}
      {!isMobile ? (
        <div className="prints-grid desktop-grid">
          {prints.map((print, index) => (
            <div
              key={index}
              className={`print-card ${
                index === 1 || index === 4 ? "wide-card" : "tall-card"
              }`}
              style={{ backgroundImage: `url(${print.img})` }}
            >
              <div className="print-overlay">
                <span className="print-name">{print.name}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* ✅ Mobile zigzag layout */
        <div className="mobile-zigzag">
          <div className="stitch-line"></div>
          {prints.map((print, index) => (
            <motion.div
              key={index}
              className={`zigzag-card ${index % 2 === 0 ? "left" : "right"}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className="zigzag-image"
                style={{ backgroundImage: `url(${print.img})` }}
              >
                <div className="zigzag-overlay">
                  <span className="zigzag-name">{print.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default PrintsSection;
