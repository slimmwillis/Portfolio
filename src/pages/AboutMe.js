import React from "react";
import "./aboutMe.css";
// import aboutMe from './aboutMe.jpg'

export default function AboutMe() {
  return (
    <div id="aboutMebg">
      <a href="/contact">
      <div id="lavaPlanet">
        <p id="lavaPlanetText">Hire Me</p>
      </div> </a>

      <div className="aboutMeContainer">
        {/* <img src={aboutMe} className="aboutMeImage" alt="logo"/> */}

        <h1 className="wordsAndStuff">Software Engineer<br /> &
        ProAdvisor
        </h1>
        <h2 className="wordsAndStuff">Full-Stack Web Developer <br /> & Bookkeeper</h2>
        <h3 className="wordsAndStuff">MERN TS <br />
        & Payroll Specialist</h3>
        <h5 className="wordsAndStuff">MongoDb, Express, React, Node</h5>
        <p className="wordsAndStuff">
          I am a full-stack web developer with a passion to solve complex
          problems.
        </p>

        <h2 className="wordsAndStuff">Game Developer</h2>
        <h3 className="wordsAndStuff">Html5 Games & Unity</h3>
        <h5 className="wordsAndStuff">PhaserJS, Three.JS, and Unity</h5>
        <p className="wordsAndStuff">
        For as long as I can remember, I’ve been fascinated by games, especially those with intricate economies that challenge strategic thinking. Beyond gaming, I’ve always had a deep interest in analyzing businesses and understanding how they generate revenue.<br />
        <br />
There’s something inherently satisfying about working with data, whether it’s writing clean lines of code, structuring information in spreadsheets, or analyzing financial reports filled with charts and graphs. I love uncovering patterns, optimizing systems, and making sense of complex information to drive efficiency and growth.
<br /><br />
With my combined expertise in software development and bookkeeping, I enjoy solving problems that merge technology and finance. Whether it’s building scalable applications, managing financial data, or automating workflows, I thrive on creating logical, efficient solutions that make an impact.
        </p>
        <p id="aboutMeHideMe" className="wordsAndStuff">
          Also, lava planet is a div with an img, not a gif.
        </p>
      </div>
    </div>
    //  </div>
  );
}
