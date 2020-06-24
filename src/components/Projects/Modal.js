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
				<div className="modal__top">
					<div className="modal__categories">
						{props.data.projectCategories.map((category) => {
							return (
								<span
									key={category}
									className={`modal__categories__${
										category.toLowerCase().split("/")[0]
									}`}
								>
									{category}
								</span>
							)
						})}
					</div>
					<div
						className="modal__close"
						onClick={() => props.closeModal()}
					>
						<img src={closeButton} alt="Close modal" />
					</div>
				</div>
				<h2>{props.data.projectName}</h2>
				<p>{props.data.projectDescription}</p>
				<div className="modal__technologies">
					{props.data.projectTechnologies.map((technology) => {
						return (
							<div key={technology}>
								<img
									src={techIcons[technology.toLowerCase()]}
									alt={technology}
								/>
								<span>{technology.toUpperCase()}</span>
							</div>
						)
					})}
				</div>
				<div className="modal__links">
					<a
						href={props.data.projectUrl}
						target="_blank"
						rel="noopener"
					>
						{props.data.projectCategories.includes("WEB")
							? "See live website"
							: "Go to product page"}
					</a>
					{props.data.projectRepository !== "" ? (
						<a
							href={props.data.projectRepository}
							target="_blank"
							rel="noopener"
						>
							Go to GitHub repository
						</a>
					) : null}
				</div>
			</aside>
			<div
				className="modal__background"
				onClick={() => props.closeModal()}
			></div>
		</div>
	)
}

export default Modal
