import React from "react";
import HeroName from "./HeroName";
import TheSun from "./TheSun";
import HeroIntro from "./HeroIntro";
import CoolIcon from "./CoolIcon";
import "./hero.css";

function Hero() {
  return (
    <div className="hero">
      <TheSun />

        <div><h2 className="hero__name">William Bailey</h2>
        </div>
         <div><h3 className="hero__title">
                Web/WordPress/Game Developer
              </h3></div>
        


      {/* <HeroName />
      
      <HeroIntro />
      <CoolIcon /> */}
    </div>
  );
}

export default Hero;
