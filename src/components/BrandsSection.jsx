import React from "react";
import "../styles/BrandsSection.css";

import marvel from "../assets/marvel.png";
import max from "../assets/max.png";
import pepejeans from "../assets/pepejeans.png";
import tomtailor from "../assets/tomtailor.png";
import mothercare from "../assets/mothercare.png";
import disney from "../assets/disney.png";

const BrandsSection = () => {
  const logos = [marvel, max, pepejeans, tomtailor, mothercare, disney, max];

  return (
    <section className="brands-section">
      <div className="brands-slider">
        <div className="brands-track">
          {logos.map((logo, index) => (
            <div className="brand-logo" key={index}>
              <img src={logo} alt={`brand-${index}`} />
            </div>
          ))}
          {/* duplicate logos for seamless looping */}
          {logos.map((logo, index) => (
            <div className="brand-logo" key={`dup-${index}`}>
              <img src={logo} alt={`brand-dup-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
