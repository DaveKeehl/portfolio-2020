import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

import Container from "../Container"

import LogoBlack from "../../images/logo-black.svg"

function Header() {
	return (
		<Container>
			<header id="header">
				<a href="/">
					<img src={LogoBlack} alt="Logo" />
				</a>
				<nav>
					<ul>
						<li onClick={() => scrollTo("#about")}>ABOUT ME</li>
						<li onClick={() => scrollTo("#projects")}>PROJECTS</li>
						<li onClick={() => scrollTo("#contact")}>CONTACT</li>
					</ul>
				</nav>
			</header>
		</Container>
	)
}

export default Header
