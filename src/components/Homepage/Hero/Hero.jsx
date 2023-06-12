import HeroImageLeft from "../../../assests/Homepage/Navbar/hero-image-one.jpg";
import HeroImageRightOne from "../../../assests/Homepage/Navbar/hero-image-second.jpg";
import HeroImageRightSecond from "../../../assests/Homepage/Navbar/hero-image-third.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-main">
      <div className="hero-image-left">
        <img src={HeroImageLeft} />
      </div>
      <div className="hero-image-second">
        <div className="hero-image-second-wrapper">
          <img src={HeroImageRightOne} className="hero-second-image-first" />
          <img
            src={HeroImageRightSecond}
            className="hero-second-image-second"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
