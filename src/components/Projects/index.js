import React, { useState } from "react"

import Container from "../Container"

import json from "../../../static/content.json"
import usigeek from "../../images/usigeek.svg"
import stackandheap from "../../images/stackandheap.svg"
import cucinanaturale from "../../images/cucinanaturale.svg"
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
			const image = { usigeek, stackandheap, cucinanaturale, swissapo }
			return (
				<div
					key={index}
					className="projects__cards__card"
					data-sal="fade"
					data-sal-duration="800"
					data-sal-delay="100"
					data-sal-easing="ease"
				>
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
				<h1
					data-sal="fade"
					data-sal-duration="800"
					data-sal-delay="100"
					data-sal-easing="ease"
				>
					Projects.
				</h1>
				<div className="projects__filter">
					{["ALL", "UI/UX", "WEB"].map((name, index) => (
						<div
							key={index}
							onClick={() => setFilterCategory(name)}
							data-sal="fade"
							data-sal-duration="800"
							data-sal-delay="300"
							data-sal-easing="ease"
						>
							<button
								className={`
								projects__filter__item 
								${filterCategory === name ? "active" : ""}`}
							>
								{name}
							</button>
						</div>
					))}
				</div>
				<div className="projects__cards">{cards}</div>
			</div>
		</Container>
	)
}

export default Projects
