import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProductionJourney from "./components/ProductionJourney";
import FabricsSection from "./components/FabricsSection";
import ProductsSection from "./components/ProductsSection";
import PrintsSection from "./components/PrintsSection"; // ✅ existing Prints Section added
import BrandsSection from "./components/BrandsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* ✅ Hero Section */}
      <section id="home" className="hero-wrapper">
        <HeroSection />
        <div className="smooth-transition-divider">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 220"
            preserveAspectRatio="none"
          >
            <path
              d="M0,70 C360,160 1080,160 1440,70 L1440,220 L0,220 Z"
              fill="#2B1B0F"
            />
          </svg>
        </div>
      </section>

      {/* ✅ About Section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* ✅ Production Journey Section */}
      <section id="journey">
        <ProductionJourney />
      </section>

      {/* ✅ Fabrics Section */}
      <section id="fabrics">
        <FabricsSection />
      </section>

      {/* ✅ Products Section */}
      <section id="products">
        <ProductsSection />
      </section>

      {/* ✅ Prints & Embroidery Section */}
      <section id="printing">
        <PrintsSection />
      </section>

      {/* ✅ Brands Section */}
      <section id="brands">
        <BrandsSection />
      </section>

      {/* ✅ Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
}

export default App;
