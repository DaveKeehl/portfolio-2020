import React from "react"

import SEO from "../components/SEO"
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

import "typeface-poppins"
import "typeface-roboto"

const IndexPage = () => (
	<React.Fragment>
		<SEO title="Home" />
		<Header />
		<Hero />
		<About />
		<Projects />
		<Contact />
		<Footer />
	</React.Fragment>
)

export default IndexPage
