import React from "react"

import Container from "../Container"

import LogoWhite from "../../images/logo-white.svg"

function Footer() {
  return (
    <footer>
      <Container>
        <img src={LogoWhite} alt="Logo" />
        <p>© Davide Ciulla. All Rights Reserved</p>
      </Container>
    </footer>
  )
}

export default Footer
