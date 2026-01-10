import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const brands = [
  {
    name: "K1Universal",
    tagline: "Building Ideas. Elevating Impact.",
    image: "/assets/k1universal.jpeg",
    category: "category-content",
    link: "/k1universal",
  },
  {
    name: "BmoreFoodies",
    tagline: "Taste Baltimore. Taste the World.",
    image: "/assets/bmorefoodies.jpeg",
    category: "category-content",
    link: "/bmorefoodies",
  },
  {
    name: "It’sTechE (GadgetGirl)",
    tagline: "Smart Reviews. Better Decisions.",
    image: "/assets/itsteche.jpeg",
    category: "category-content",
    link: "/itsteche",
  },
  {
    name: "Makeup and Mimosas",
    tagline: "Beauty, Fun, and a Splash of Life.",
    image: "/assets/makeupandmimosas2.jpeg",
    category: "category-content",
    link: "/makeupandmimosas",
  },
  {
    name: "TME Experience (The Melanin Experience)",
    tagline: "Fresh, Flavorful, Fueled by Culture.",
    image: "/assets/tmeexperience.jpeg",
    category: "category-food",
    link: "/tmeexperience",
  },
  {
    name: "YouWannaKnowSomething",
    tagline: "Learn Fast. Know More.",
    image: "/assets/youwannaknowsomething.jpeg",
    category: "category-content",
    link: "/youwannaknowsomething",
  },
  {
    name: "Beyond the Spine",
    tagline: "Read. Reflect. Grow.",
    image: "/assets/beyondthespine.jpeg",
    category: "category-content",
    link: "/beyondthespine",
  },
  {
    name: "K1Cleaning",
    tagline: "Clean Spaces. Happy Faces.",
    image: "/assets/k1cleaning.jpeg",
    category: "category-services",
    link: "/k1cleaning",
  },
  {
    name: "BLACK IN BUSINESS",
    tagline: "Strategy. Clarity. Growth.",
    image: "/assets/blackinbusiness2.jpeg",
    category: "category-services",
    link: "/blackinbusiness",
  },
  {
    name: "BUSINESS IN BLACK",
    tagline: "Building Smarter Businesses with Technology.",
    image: "/assets/businessinblack.jpeg",
    category: "category-tech",
    link: "/businessinblack",
  },
];

const Home = () => {
  return (
    <div>
      <header>
        <h1>K1Universal Hub</h1>
        <p>K1's ecosystem at a glance</p>
      </header>

      <div className="hub-container">
        {brands.map((brand, index) => (
          <Link to={brand.link} key={index} className="brand-link">
            <div className="brand-card">
              <div className={`logo ${brand.category}`}>
                <img src={brand.image} alt={`${brand.name} Logo`} />
              </div>
              <div className="brand-name">{brand.name}</div>
              <div className="tagline">{brand.tagline}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
