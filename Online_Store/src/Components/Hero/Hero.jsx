import { Link } from "react-router-dom";
import "./Hero.css";
import handIcon from "../Assets/hand_icon.png";
import arrowIcon from "../Assets/arrow.png";
import heroImage from "../Assets/Hero_image.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <span className="hero-badge">
          <img src={handIcon} alt="Waving hand illustration" />
          New arrivals just landed
        </span>
        <h1>
          Fresh collections for <span>everyone</span>
        </h1>
        <p className="hero-subtitle">
          Discover curated looks, breathable fabrics, and silhouettes designed
          to move with you from day to night.
        </p>
        <div className="hero-actions">
          <Link to="/women" className="hero-cta">
            Shop latest drops
            <img src={arrowIcon} alt="" aria-hidden="true" />
          </Link>
          <Link to="/men" className="hero-secondary">
            Explore menswear
          </Link>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-visual">
          <img src={heroImage} alt="Model showcasing the new collection" />
          <div className="hero-glow" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
