import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Header.css";
import logo from "../assets/logo.png"; // ✅ Ensure this path is correct

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleHover = (menu) => {
    if (!isMobile) setActiveMenu(menu);
  };

  const handleClick = (menu) => {
    if (isMobile) setActiveMenu(activeMenu === menu ? null : menu);
  };

  // ✅ Smooth scroll to section
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
      setMenuOpen(false);
      setActiveMenu(null);
    }
  };

  const dropdownAnimation = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.2 },
  };

  return (
    <header className="header">
      <div className="header-inner">
        {/* ✅ Logo */}
        <div className="logo" onClick={() => scrollToSection("home")}>
          <img src={logo} alt="Vatbae Logo" className="logo-placeholder" />
        </div>

        {/* ✅ Mobile Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>

        {/* ✅ Navigation */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <div className="nav-item" onClick={() => scrollToSection("home")}>
            Home
          </div>
          <div className="nav-item" onClick={() => scrollToSection("about")}>
            About Us
          </div>
          <div className="nav-item" onClick={() => scrollToSection("journey")}>
            Journey
          </div>

          {/* ✅ Products Dropdown */}
          <div
            className="nav-item"
            onMouseEnter={() => handleHover("products")}
            onMouseLeave={() => handleHover(null)}
            onClick={() => handleClick("products")}
          >
            Products ▾
            <AnimatePresence>
              {activeMenu === "products" && (
                <motion.div className="dropdown" {...dropdownAnimation}>
                  <div onClick={() => scrollToSection("products")}>All Products</div>
                  <div onClick={() => scrollToSection("products")}>Kids Garments</div>
                  <div onClick={() => scrollToSection("products")}>Unisex Tops</div>
                  <div onClick={() => scrollToSection("products")}>Unisex Bottoms</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ✅ Printing & Embroidery Dropdown */}
          <div
            className="nav-item"
            onMouseEnter={() => handleHover("printing")}
            onMouseLeave={() => handleHover(null)}
            onClick={() => handleClick("printing")}
          >
            Printing & Embroidery ▾
            <AnimatePresence>
              {activeMenu === "printing" && (
                <motion.div className="dropdown" {...dropdownAnimation}>
                  <div onClick={() => scrollToSection("printing")}>Overview</div>
                  <div onClick={() => scrollToSection("printing")}>DTG</div>
                  <div onClick={() => scrollToSection("printing")}>DTF</div>
                  <div onClick={() => scrollToSection("printing")}>Screen Printing</div>
                  <div onClick={() => scrollToSection("printing")}>Machine Embroidery</div>
                  <div onClick={() => scrollToSection("printing")}>Distressed Works</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="nav-item" onClick={() => scrollToSection("fabrics")}>
            Fabrics
          </div>

          {/* ✅ Mobile Buttons */}
          <div className="mobile-buttons">
            <button
              className="btn-outline"
              onClick={() => scrollToSection("products")}
            >
              Explore
            </button>
            <button
              className="btn-fill"
              onClick={() => scrollToSection("contact")}
            >
              Get Quote
            </button>
          </div>
        </nav>

        {/* ✅ Desktop Buttons */}
        <div className="btn-group desktop-buttons">
          <button
            className="btn-outline"
            onClick={() => scrollToSection("products")}
          >
            Explore
          </button>
          <button
            className="btn-fill"
            onClick={() => scrollToSection("contact")}
          >
            Get Quote
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
