import React from "react"

import Container from "../Container"

import json from "../../../static/content.json"
import arrow from "../../images/arrow.svg"

function Hero() {
  return (
    <Container>
      <div className="hero">
        <h1 className="hero__value">{json.hero.value_proposition}</h1>
        <p className="hero__feature">{json.hero.features}</p>
        <button className="hero__cta">See my projects</button>
        <div>
          <p>SCROLL DOWN</p>
          <img src={arrow} alt="scroll down to see more" />
        </div>
      </div>
    </Container>
  )
}

export default Hero
