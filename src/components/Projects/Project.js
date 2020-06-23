import React, { useState } from "react"

import Modal from "./Modal"

function Project(props) {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openModal = () => {
		setIsModalOpen(true)
		// document.querySelector('html').style.overflow = "hidden"
	}

	const closeModal = () => {
		setIsModalOpen(false)
		// document.querySelector('html').style.overflow = "initial"
	}

	const shortenedDescription = () => {
		let cutSentence = props.projectDescription.split("").slice(0, 150)
		for (let i = 0; i <= 2; i++) {
			cutSentence[cutSentence.length - 1 - i] = "."
		}
		return cutSentence.join("")
	}

	return (
		<div
			className="projects__cards__card"
			data-sal="fade"
			data-sal-duration="800"
			data-sal-delay="100"
			data-sal-easing="ease"
		>
			<div
				className={`projects__cards__card__thumbnail ${props.cleanName}`}
			>
				<img src={props.projectImage} alt={props.projectName} />
				<div className="projects__cards__card__labels">
					{props.projectCategories.map((category) => {
						const cleanCategory = category
							.split("/")[0]
							.toLowerCase()
						return (
							<span
								key={cleanCategory}
								className={`projects__cards__card__labels__${cleanCategory}`}
							>
								{category}
							</span>
						)
					})}
				</div>
			</div>
			<div className="projects__cards__card__content">
				<h2>{props.projectName}</h2>
				<p>{shortenedDescription()}</p>
				<button onClick={() => openModal()}>Read more</button>
			</div>
			<Modal
				data={props}
				isModalOpen={isModalOpen}
				closeModal={closeModal}
			/>
		</div>
	)
}

export default Project
