import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import k1universalImg from "../assets/k1universal.jpeg";
import bmoreFoodiesImg from "../assets/bmorefoodies.jpeg";
import itsTechEImg from "../assets/itsteche.jpeg";
import makeupAndMimosasImg from "../assets/makeupandmimosas2.jpeg";
import tmeExperienceImg from "../assets/tmeexperience.jpeg";
import youWannaKnowSomethingImg from "../assets/youwannaknowsomething.jpeg";
import beyondTheSpineImg from "../assets/beyondthespine.jpeg";
import k1CleaningImg from "../assets/k1cleaning.jpeg";
import blackInBusinessImg from "../assets/blackinbusiness2.jpeg";
import businessInBlackImg from "../assets/businessinblack.jpeg";

const brands = [
  {
    name: "K1Universal",
    tagline: "Building Ideas. Elevating Impact.",
    image: k1universalImg,
    category: "category-content",
    link: "/k1universal",
  },
  {
    name: "BmoreFoodies",
    tagline: "Taste Baltimore. Taste the World.",
    image: bmoreFoodiesImg,
    category: "category-content",
    link: "/bmorefoodies",
  },
  {
    name: "It’sTechE (GadgetGirl)",
    tagline: "Smart Reviews. Better Decisions.",
    image: itsTechEImg,
    category: "category-content",
    link: "/itsteche",
  },
  {
    name: "Makeup and Mimosas",
    tagline: "Beauty, Fun, and a Splash of Life.",
    image: makeupAndMimosasImg,
    category: "category-content",
    link: "/makeupandmimosas",
  },
  {
    name: "TME Experience",
    tagline: "Fresh, Flavorful, Fueled by Culture.",
    image: tmeExperienceImg,
    category: "category-food",
    link: "/tmeexperience",
  },
  {
    name: "YouWannaKnowSomething",
    tagline: "Learn Fast. Know More.",
    image: youWannaKnowSomethingImg,
    category: "category-content",
    link: "/youwannaknowsomething",
  },
  {
    name: "Beyond the Spine",
    tagline: "Read. Reflect. Grow.",
    image: beyondTheSpineImg,
    category: "category-content",
    link: "/beyondthespine",
  },
  {
    name: "K1Cleaning",
    tagline: "Clean Spaces. Happy Faces.",
    image: k1CleaningImg,
    category: "category-services",
    link: "/k1cleaning",
  },
  {
    name: "BLACK IN BUSINESS",
    tagline: "Strategy. Clarity. Growth.",
    image: blackInBusinessImg,
    category: "category-services",
    link: "/blackinbusiness",
  },
  {
    name: "BUSINESS IN BLACK",
    tagline: "Building Smarter Businesses with Technology.",
    image: businessInBlackImg,
    category: "category-tech",
    link: "/businessinblack",
  },
];

const Home = () => {
  return (
    <div className="home">
      <header>
        <h1>K1Universal Hub</h1>
        <p>K1's ecosystem at a glance</p>
      </header>

      <div className="hub-container">
        {brands.map((brand, index) => (
          <Link to={brand.link} key={index}>
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
