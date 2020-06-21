import React from "react"

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
    <div className="Projects">
      <h1>Projects.</h1>
      <ul>
        <li>ALL</li>
        <li>UI/UX</li>
        <li>WEB</li>
      </ul>
      <div className="Projects__cards">{cards}</div>
    </div>
  )
}

export default Projects
