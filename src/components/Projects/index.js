import React, { useState } from "react"

import Container from "../Container"
import Project from "./Project"

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
			if (project.visibility === "public") {
				return (
					<Project
						key={index}
						projectImage={image[name]}
						cleanName={name}
						projectName={project.name}
						projectDescription={project.description}
						projectCategories={project.categories}
						projectTechnologies={project.technologies}
						projectUrl={project.url}
						projectRepository={project.repository}
					/>
				)
			} else {
				return
			}
		})

	return (
		<Container>
			<div className="projects" id="projects">
				<h1
					data-sal="fade"
					data-sal-duration="800"
					// data-sal-delay="100"
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
								className={`projects__filter__item projects__filter__item__${
									name.toLowerCase().split("/")[0]
								} ${filterCategory === name ? "active" : ""}`}
							>
								{name}
							</button>
						</div>
					))}
				</div>
				<div
					className="projects__cards"
					data-sal="fade"
					data-sal-duration="600"
					data-sal-easing="ease"
				>
					{cards}
				</div>
			</div>
		</Container>
	)
}

export default Projects
