import React, { useState, useEffect, useRef } from "react";
import "../styles/ProductsSection.css";

// ✅ Import product images
import roundNeck from "../assets/round-neck.png";
import cutSew from "../assets/cut-sew.png";
import polo from "../assets/polo.png";
import hoodies from "../assets/hoodie.png";
import varsity from "../assets/varsity.png";
import trackPants from "../assets/track-pants.png";
import shorts from "../assets/shorts.png";
import flarePants from "../assets/flare-pants.png";
import coordSets from "../assets/coord-sets.png";
import tubeTops from "../assets/tube-top.png";
import tankTops from "../assets/tank-top.png";
import kidsTshirt from "../assets/kids-tshirt.png";
import kidsSweatshirt from "../assets/kids-sweatshirt.png";
import frocks from "../assets/frocks.png";
import baggyPants from "../assets/baggy-pants.png";

const products = [
  { name: "Round Neck", sub: "Unisex Tops", img: roundNeck },
  { name: "Cut & Sew", sub: "Unisex Tops", img: cutSew },
  { name: "Polo", sub: "Unisex Tops", img: polo },
  { name: "Hoodies", sub: "Unisex Tops", img: hoodies },
  { name: "Varsity Jackets", sub: "Unisex Tops", img: varsity },
  { name: "Track Pants", sub: "Unisex Bottoms", img: trackPants },
  { name: "Shorts", sub: "Unisex Bottoms", img: shorts },
  { name: "Flare Pants", sub: "Unisex Bottoms", img: flarePants },
  { name: "Coord Sets", sub: "Trending Selectives", img: coordSets },
  { name: "Tube Tops", sub: "Trending Selectives", img: tubeTops },
  { name: "Tank Tops", sub: "Trending Selectives", img: tankTops },
  { name: "T-Shirts", sub: "Kids Wear", img: kidsTshirt },
  { name: "Sweatshirts", sub: "Kids Wear", img: kidsSweatshirt },
  { name: "Frocks", sub: "Kids Wear", img: frocks },
  { name: "Baggy Pants", sub: "Unisex", img: baggyPants },
];

const ProductsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  // ✅ Smooth scroll handler to contact section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 80; // offset for sticky header
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = sectionPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // ✅ Auto-slide logic
  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 2900);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="products-section">
      <div className="products-header">
        <h2>PRODUCTS</h2>
        <p>
          Explore our wide apparel collection — Unisex Tops, Bottoms, Trending
          Selectives, and Kids Wear — crafted for quality, durability, and
          comfort.
        </p>
      </div>

      <div
        className="carousel-container"
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
      >
        <button className="arrow left" onClick={prevSlide}>
          ‹
        </button>

        <div className="carousel">
          {products.map((product, index) => {
            const position =
              index === currentIndex
                ? "active"
                : index === (currentIndex + 1) % products.length
                ? "next"
                : index ===
                  (currentIndex - 1 + products.length) % products.length
                ? "prev"
                : "";

            return (
              <div
                key={index}
                className={`carousel-card ${position}`}
                style={{
                  backgroundImage: `url(${product.img})`,
                }}
              >
                <div className="overlay">
                  <div className="product-info">
                    <h4>{product.name}</h4>
                    {product.sub && <p>{product.sub}</p>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button className="arrow right" onClick={nextSlide}>
          ›
        </button>
      </div>

      <div className="carousel-indicators">
        {products.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>

      <div className="carousel-index">
        {currentIndex + 1} / {products.length}
      </div>

      {/* ✅ Redirects to Contact section smoothly */}
      <button
        className="make-ready-btn"
        onClick={() => scrollToSection("contact")}
      >
        Make yours ready
      </button>
    </section>
  );
};

export default ProductsSection;
