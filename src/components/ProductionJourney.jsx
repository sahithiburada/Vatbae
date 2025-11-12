import React from "react";
import "../styles/ProductionJourney.css";
import fabricImage from "../assets/fabric-selection.png"; // ✅ make sure this exists

const ProductionJourney = () => {
  // ✅ Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 80; // to account for sticky header
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = sectionPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const steps = [
    {
      id: "01",
      title: "Fabric Selection",
      description:
        "Explore our wide range of premium fabrics and choose the one that best fits your design and comfort.",
      color: "#E7BC91",
      image: fabricImage,
      link: "fabrics", // ✅ redirects to FabricsSection
    },
    {
      id: "02",
      title: "Product Choice",
      description:
        "Decide what you want to create — from cozy hoodies to trendy tees or custom apparel.",
      color: "#D4A276",
      link: "products", // ✅ redirects to ProductsSection
    },
    {
      id: "03",
      title: "Customization",
      description:
        "Add your creative touch with unique printing styles or elegant embroidery details.",
      color: "#BC8A5F",
      link: "printing", // ✅ redirects to PrintsSection
    },
    {
      id: "04",
      title: "Packaging & Branding",
      description:
        "Complete your product with custom packaging and branded labels ready for delivery.",
      color: "#A47148",
      link: "brands", // ✅ redirects to BrandsSection
    },
  ];

  return (
    <section className="production-section" id="production">
      <div className="production-header">
        <h2>Production Journey</h2>
        <p>
          At Vatbae, we turn concepts into creations through a seamless
          production process — starting with quality fabric sourcing and ending
          with refined packaging, ensuring perfection at every stage.
        </p>
      </div>

      {/* ✅ Main Step */}
      <div className="large-step" style={{ backgroundColor: steps[0].color }}>
        <div className="step-content">
          <div className="step-id-circle">
            <span>{steps[0].id}</span>
          </div>
          <h3>{steps[0].title}</h3>
          <p>{steps[0].description}</p>
          <button
            className="learn-more"
            onClick={() => scrollToSection(steps[0].link)}
          >
            Learn more <span>→</span>
          </button>
        </div>

        <div className="step-image-wrapper">
          <img src={steps[0].image} alt="Fabric Selection" />
        </div>
      </div>

      {/* ✅ Smaller Steps */}
      <div className="small-steps">
        {steps.slice(1).map((step) => (
          <div
            key={step.id}
            className="small-step"
            style={{ backgroundColor: step.color }}
          >
            <div className="step-id-circle">
              <span>{step.id}</span>
            </div>
            <h4>{step.title}</h4>
            <p>{step.description}</p>
            <button
              className="learn-more"
              onClick={() => scrollToSection(step.link)}
            >
              Learn more <span>→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductionJourney;
