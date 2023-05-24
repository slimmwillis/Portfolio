import React from "react"
import TheSun from "./TheSun"
import "./hero.css"

function Hero() {
  return (
    <div className="hero">
      <TheSun />

      <div className="hero__content">
        <h2 className="hero__name">William Bailey</h2>
        <h3 className="hero__title">Web/WordPress/Game Developer</h3>

        <button className="btn">Hire Me</button>
      </div>
    </div>
  )
}

export default Hero
