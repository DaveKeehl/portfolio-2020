import React from "react"

import Container from "../Container"

import json from "../../../static/content.json"

function Projects() {
  const cards = json.projects.map(project => {
    return (
      <div key={project.name} className="projects__cards__card">
        <img
          className="projects__cards__card__thumbnail"
          src={`../../images/${project.name.toLowerCase()}.${/svg|png/}`}
          alt={project.name}
        />
        <div className="projects__cards__card__content">
          <h2>{project.name}</h2>
          <p>{project.short_description}</p>
          <button>Read more</button>
        </div>
      </div>
    )
  })

  return (
    <Container>
      <div className="projects">
        <h1>Projects.</h1>
        <ul className="projects__filter">
          <li className="projects__filter__item projects__filter__item--active">
            ALL
          </li>
          <li className="projects__filter__item">UI/UX</li>
          <li className="projects__filter__item">WEB</li>
        </ul>
        <div className="projects__cards">{cards}</div>
      </div>
    </Container>
  )
}

export default Projects
