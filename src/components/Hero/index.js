import React from "react"

import json from "../../../static/content.json"
import arrow from "../../images/arrow.svg"

function Hero() {
  return (
    <div className="Hero">
      <h1 className="Hero__value">{json.hero.value_proposition}</h1>
      <p className="Hero__feature">{json.hero.features}</p>
      <button className="Hero__cta">See my projects</button>
      <div>
        <p>SCROLL DOWN</p>
        <img src={arrow} alt="scroll down to see more" />
      </div>
    </div>
  )
}

export default Hero
