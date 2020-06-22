import React, { useState, useEffect, useRef, createRef } from "react"

import Container from "../Container"

import json from "../../../static/content.json"
import usigeek from "../../images/usigeek.svg"
import stackandheap from "../../images/stackandheap.svg"
import laboratorio from "../../images/laboratorio.svg"
import swissapo from "../../images/swissapo.svg"

function Projects() {
	const [filterCategory, setFilterCategory] = useState("ALL")

	const cards = json.projects
		.filter(
			(project) =>
				filterCategory === "ALL" ||
				project.categories.includes(filterCategory)
		)
		.map((project, index) => {
			const name = project.name
				.trim()
				.replace(/ /g, "")
				.replace(/[-_]/g, "")
				.toLowerCase()
			const image = { usigeek, stackandheap, laboratorio, swissapo }
			return (
				<div key={index} className="projects__cards__card">
					<div className={`projects__cards__card__thumbnail ${name}`}>
						<img src={image[name]} alt={project.name} />
					</div>
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
			<div className="projects" id="projects">
				<h1>Projects.</h1>
				<div className="projects__filter">
					{["ALL", "UI/UX", "WEB"].map((name, index) => (
						<button
							key={index}
							className={`
								projects__filter__item 
								${filterCategory === name ? "projects__filter__item--active" : ""}
							`}
							onClick={() => setFilterCategory(name)}
						>
							{name}
						</button>
					))}
				</div>
				<div className="projects__cards">{cards}</div>
			</div>
		</Container>
	)
}

export default Projects
