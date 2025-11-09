import React from "react";
import "../styles/FabricsSection.css";

import singleJersey from "../assets/single-jersey.png";
import interlock from "../assets/interlock.png";
import frenchTerry from "../assets/french-terry.png";
import derbyRib from "../assets/derby-rib.png";
import airtex from "../assets/airtex.png";
import fleece from "../assets/fleece.png";

const fabrics = [
  {
    name: "Single Jersey",
    desc: "Smooth, lightweight knit ideal for T-shirts and easy printing.",
    color: "rgba(139, 69, 19, 0.8)",
    img: singleJersey,
  },
  {
    name: "Interlock",
    desc: "Durable double-knit with stretch and opacity for premium wear.",
    color: "rgba(34, 139, 34, 0.8)",
    img: interlock,
  },
  {
    name: "French Terry",
    desc: "Loopback knit offering comfort and moisture absorption.",
    color: "rgba(210, 180, 140, 0.8)",
    img: frenchTerry,
  },
  {
    name: "Derby Rib",
    desc: "Strong ribbed knit offering excellent elasticity and recovery, commonly used in collars, cuffs.",
    color: "rgba(105, 105, 105, 0.8)",
    img: derbyRib,
  },
  {
    name: "Airtex",
    desc: "Breathable mesh knit that ensures ventilation and quick drying, ideal for activewear and sports wear.",
    color: "rgba(75, 0, 130, 0.8)",
    img: airtex,
  },
  {
    name: "Fleece",
    desc: "Warm brushed knit with a soft texture, providing insulation and comfort for hoodies and winter wear.",
    color: "rgba(25, 25, 112, 0.8)",
    img: fleece,
  },
];

const FabricsSection = () => {
  return (
    <section className="fabrics-section">
      <div className="fabrics-header">
        <h2>FABRICS</h2>
        <p>
          Crafted to perfection, each fabric is engineered for texture,
          durability, and the seamless production of premium garments.
        </p>
      </div>

      <div className="fabrics-grid">
        {fabrics.map((fabric, index) => (
          <div
            key={index}
            className="fabric-card"
            style={{
              backgroundImage: `linear-gradient(0deg, ${fabric.color} 0%, rgba(0,0,0,0.1) 100%), url(${fabric.img})`,
            }}
          >
            <div className="fabric-info">
              <h4>{fabric.name}</h4>
              <p>{fabric.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FabricsSection;
