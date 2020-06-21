import React from "react"

import Container from "../Container"

import json from "../../../static/content.json"

function Projects() {
  const cards = json.projects.map(project => {
    return (
      <div key={project.name}>
        <h2>{project.name}</h2>
        <p>{project.short_description}</p>
        <button>Read more</button>
      </div>
    )
  })

  return (
    <Container>
      <div className="projects">
        <h1>Projects.</h1>
        <ul>
          <li>ALL</li>
          <li>UI/UX</li>
          <li>WEB</li>
        </ul>
        <div className="projects__cards">{cards}</div>
      </div>
    </Container>
  )
}

export default Projects
