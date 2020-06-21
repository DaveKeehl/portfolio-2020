import React from "react"

import LogoBlack from "../../images/logo-black.svg"

function Header() {
  return (
    <header>
      <a href="/">
        <img src={LogoBlack} alt="Logo" />
      </a>
      <nav>
        <p>ABOUT ME</p>
        <p>PROJECTS</p>
        <p>CONTACT</p>
      </nav>
    </header>
  )
}

export default Header
