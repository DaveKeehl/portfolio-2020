import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

import Container from "../Container"

import json from "../../../static/content.json"
import arrow from "../../images/arrow.svg"
import circle from "../../images/circle.svg"
import rectangle from "../../images/rectangle.svg"
import triangle from "../../images/triangle.svg"
import dave from "../../images/dave.jpg"

function Hero() {
	return (
		<Container>
			<div className="hero" id="hero">
				<div className="hero__shapes">
					<img src={circle} alt="circle" />
					<img src={rectangle} alt="rectangle" />
					<img src={triangle} alt="triangle" />
					<div className="hero__shapes__dave">
						<img src={dave} alt="dave" />
						<img src={dave} alt="dave" />
					</div>
				</div>
				<div className="hero__main">
					<h1 className="hero__value">
						{json.hero.value_proposition}
					</h1>
					<p
						className="hero__feature"
						dangerouslySetInnerHTML={{ __html: json.hero.features }}
					/>
					<button
						className="hero__cta"
						onClick={() => scrollTo("#projects")}
					>
						See my projects
					</button>
				</div>
				<div
					className="hero__scroll"
					onClick={() => scrollTo("#about")}
				>
					<p>SCROLL DOWN</p>
					<img src={arrow} alt="scroll down to see more" />
				</div>
			</div>
		</Container>
	)
}

export default Hero
