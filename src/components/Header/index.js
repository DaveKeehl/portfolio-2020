import React from "react"

import logo from "../../images/logo.svg"

function Header() {
  return (
    <header>
      <a href="/">
        <img src={logo} alt="Logo" />
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
