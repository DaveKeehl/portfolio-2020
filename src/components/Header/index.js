import React from "react"

import Container from "../Container"

import LogoBlack from "../../images/logo-black.svg"

function Header() {
  return (
    <Container>
      <header>
        <a href="/">
          <img src={LogoBlack} alt="Logo" />
        </a>
        <nav>
          <ul>
            <li>ABOUT ME</li>
            <li>PROJECTS</li>
            <li>CONTACT</li>
          </ul>
        </nav>
      </header>
    </Container>
  )
}

export default Header
