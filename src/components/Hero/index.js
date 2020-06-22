import React from "react"

import Container from "../Container"

import json from "../../../static/content.json"
import arrow from "../../images/arrow.svg"

function Hero() {
	return (
		<Container>
			<div className="hero">
				<div className="hero__main">
					<h1 className="hero__value">
						{json.hero.value_proposition}
					</h1>
					<p
						className="hero__feature"
						dangerouslySetInnerHTML={{ __html: json.hero.features }}
					/>
					<button className="hero__cta">See my projects</button>
				</div>
				<div className="hero__scroll">
					<p>SCROLL DOWN</p>
					<img src={arrow} alt="scroll down to see more" />
				</div>
			</div>
		</Container>
	)
}

export default Hero
