import React from "react"

import plane from "../../images/plane.svg"

import Container from "../Container"
import Footer from "../Footer"

function Contact() {
	return (
		<div className="contact">
			<Container>
				<div
					id="contact"
					style={{
						position: "absolute",
						top: "50px",
						opacity: "0"
					}}
				></div>
				<h1
					data-sal="fade"
					data-sal-duration="800"
					data-sal-delay="100"
					data-sal-easing="ease"
				>
					Let's talk.
				</h1>
				<img className="contact__plane" src={plane} alt="plane" />
				<form
					action="https://getform.io/f/f2091374-d0ae-4441-9404-31f6c2cd97da"
					method="POST"
					data-sal="fade"
					data-sal-duration="800"
					data-sal-delay="100"
					data-sal-easing="ease"
				>
					<label htmlFor="name">Full name</label>
					<input
						id="name"
						type="text"
						name="name"
						placeholder="e.g. John Doe"
						required
					/>
					<label htmlFor="email">Email</label>
					<input
						id="email"
						type="text"
						name="email"
						placeholder="e.g. john-doe@email.com"
						required
					/>
					<label htmlFor="subject">Subject</label>
					<input
						id="subject"
						type="text"
						name="subject"
						placeholder="e.g. I have an idea for an app"
						required
					/>
					<label htmlFor="message">Message</label>
					<textarea
						id="message"
						name="text"
						placeholder="e.g. Hi, my name is John Doe. I was thinking..."
						required
					/>
					<input type="submit" value="Send" />
				</form>
				<Footer />
			</Container>
		</div>
	)
}

export default Contact
