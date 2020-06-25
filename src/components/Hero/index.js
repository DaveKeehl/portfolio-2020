import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { useInView } from "react-intersection-observer"

import Container from "../Container"

import json from "../../../static/content.json"
import arrow from "../../images/arrow.svg"
import circle from "../../images/circle.svg"
import rectangle from "../../images/rectangle.svg"
import triangle from "../../images/triangle.svg"
import dave from "../../images/dave.png"

function Hero() {
	const [ref, inView, entry] = useInView({})

	return (
		<Container>
			<div ref={ref} className="hero" id="hero">
				<div className="hero__shapes">
					<img
						className={`hero__shapes__circle ${
							inView ? "animation" : ""
						}`}
						src={circle}
						alt="circle"
					/>
					<div className="hero__shapes__rectangle">
						<img
							className={`${inView ? "animation" : ""}`}
							src={rectangle}
							alt="rectangle"
						/>
					</div>
					<img
						className={`hero__shapes__triangle ${
							inView ? "animation" : ""
						}`}
						src={triangle}
						alt="triangle"
					/>
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
