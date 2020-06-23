import React from "react"

import closeButton from "../../images/close-modal.svg"
import modalArrow from "../../images/modal-arrow.svg"
import react from "../../images/icons/react.svg"
import sass from "../../images/icons/sass.svg"
import html from "../../images/icons/html.svg"
import css from "../../images/icons/css.svg"
import wordpress from "../../images/icons/wordpress.svg"

function Modal(props) {
	const techIcons = { react, sass, html, css, wordpress }

	return (
		<div
			className="modal"
			style={
				props.isModalOpen
					? { display: "block", opacity: "1" }
					: { display: "none", opacity: "0" }
			}
		>
			<aside>
				<div
					className="modal__close"
					onClick={() => props.closeModal()}
				>
					<img src={closeButton} alt="Close modal" />
				</div>
				<div className="modal__categories">
					{props.data.projectCategories.map((category) => {
						return <span key={category}>{category}</span>
					})}
				</div>
				<h2>{props.data.projectName}</h2>
				<p>{props.data.projectShortDescription}</p>
				<div className="modal__technologies">
					{props.data.projectTechnologies.map((technology) => {
						return (
							<img
								key={technology}
								src={techIcons[technology.toLowerCase()]}
								alt={technology}
							/>
						)
					})}
				</div>
				<a href={props.data.projectUrl}>
					{props.data.projectCategories.includes("WEB")
						? "Live website"
						: "External link"}
				</a>
				{props.data.projectRepository !== "" ? (
					<a href={props.data.projectRepository}>GitHub repository</a>
				) : null}
			</aside>
		</div>
	)
}

export default Modal
