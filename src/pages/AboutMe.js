import React from "react";
import "./aboutMe.css";
// import aboutMe from './aboutMe.jpg'

export default function AboutMe() {
  return (
    <div id="aboutMebg">
      <div id="lavaPlanet">
        <p id="lavaPlanetText">William Bailey</p>
      </div>

      <div className="aboutMeContainer">
        {/* <img src={aboutMe} className="aboutMeImage" alt="logo"/> */}

        <h1 className="wordsAndStuff">William Bailey</h1>
        <h2 className="wordsAndStuff">Full-Stack Web Developer</h2>
        <h3 className="wordsAndStuff">MERN</h3>
        <h5 className="wordsAndStuff">MongoDb, Express, React, Node</h5>
        <p className="wordsAndStuff">
          I am a full-stack web developer with a passion to solve complex
          problems.
        </p>

        <h2 className="wordsAndStuff">Game Developer</h2>
        <h3 className="wordsAndStuff">Html5 Games & Unity</h3>
        <h5 className="wordsAndStuff">PhaserJS, Three.JS, and Unity</h5>
        <p className="wordsAndStuff">
          As a boy I enjoyed games as the one time I get to live out fantasies
          and have fun not worry about getting hurt, judgement or even really
          making a lot of effort. Games are just an easy way to be happy and tap
          into your imagination. An escape from reality.
        </p>
        <p id="aboutMeHideMe" className="wordsAndStuff">
          Also, lava planet is a div, not an image.
        </p>
      </div>
    </div>
    //  </div>
  );
}
