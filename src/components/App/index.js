import React, { useContext } from "react"

import { ExclusiveWindowContext } from "../../contexts/exclusiveWindowContext"
import SEO from "../SEO"
import ScrollToTop from "../ScrollToTop"
import Header from "../Header"
import Hero from "../Hero"
import About from "../About"
import Projects from "../Projects"
import Contact from "../Contact"

function App() {
	const { isExclusiveWindowOpen } = useContext(ExclusiveWindowContext)

	return (
		<div>
			<ScrollToTop />
			<SEO title="Home" />
			<Header />
			<Hero />
			<About />
			<Projects />
			<Contact />
		</div>
	)
}

export default App
