import React from "react";

import Container from "../Container";

import LogoBlack from "../../images/logo-black.svg";

function Header() {
  return (
    <Container>
      <header>
        <a href="/">
          <img src={LogoBlack} alt="Logo" />
        </a>
        <nav>
          <ul>
            <li>
              <a href="#about">ABOUT ME</a>
            </li>
            <li>
              <a href="#projects">PROJECTS</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </nav>
      </header>
    </Container>
  );
}

export default Header;
