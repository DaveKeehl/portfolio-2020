import React from 'react'

import plane from '../../images/plane.svg'

import Container from '../Container'
import Footer from '../Footer'

function Contact() {
	return (
		<div className="contact" id="contact">
			<Container>
				<h1
					data-sal="fade"
					data-sal-duration="800"
					data-sal-delay="300"
					data-sal-easing="ease"
				>
					Let's talk.
				</h1>
				<img
					className="contact__plane"
					src={plane}
					alt="plane"
					data-sal="fade"
					data-sal-duration="800"
					data-sal-delay="300"
					data-sal-easing="ease"
				/>
				<form
					// action="https://getform.io/f/f2091374-d0ae-4441-9404-31f6c2cd97da"
					// method="POST"
					name="Portfolio"
					data-netlify="true"
					data-netlify-honeypot="bot-field"
					data-sal="fade"
					data-sal-duration="800"
					data-sal-delay="200"
					data-sal-easing="ease"
				>
					<input type="hidden" name="form-name" value="Portfolio" />
					<label htmlFor="name">Full name</label>
					<input id="name" type="text" name="name" required />
					<label htmlFor="email">Email</label>
					<input id="email" type="text" name="email" required />
					<label htmlFor="subject">Subject</label>
					<input id="subject" type="text" name="subject" required />
					<label htmlFor="message">Message</label>
					<textarea id="message" name="text" required />
					<input type="submit" value="Send" />
				</form>
				<Footer />
			</Container>
		</div>
	)
}

export default Contact
