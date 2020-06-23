import React, { useState, useEffect } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

import arrowTop from "../../images/arrow-top.svg"

function ScrollToTop() {
	const [scroll, setScroll] = useState(0)

	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY)
		})
		return window.removeEventListener("scroll", () => {})
	})

	return (
		<div
			style={scroll > 100 ? { opacity: "1" } : { opacity: "0" }}
			className="scrollToTop"
			onClick={() => scrollTo("#header")}
		>
			<img src={arrowTop} alt="Scroll to top" />
		</div>
	)
}

export default ScrollToTop
