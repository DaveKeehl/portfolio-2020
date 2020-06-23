import React from "react"

import SEO from "../components/SEO"
import ScrollToTop from "../components/ScrollToTop"
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

import "typeface-poppins"
import "typeface-roboto"

const IndexPage = () => (
	<React.Fragment>
		<ScrollToTop />
		<SEO title="Home" />
		<Header />
		<Hero />
		<About />
		<Projects />
		<Contact />
	</React.Fragment>
)

export default IndexPage
