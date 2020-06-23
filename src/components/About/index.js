import React from "react"

import Container from "../Container"

import json from "../../../static/content.json"

function About() {
	return (
		<div className="about" id="about">
			<Container>
				<h1
					data-sal="fade"
					data-sal-duration="500"
					data-sal-delay="100"
					data-sal-easing="ease"
				>
					About me.
				</h1>
				<div className="about__content">
					<div
						className="about__content__bio"
						data-sal="fade"
						data-sal-duration="800"
						data-sal-delay="300"
						data-sal-easing="ease"
					>
						<p
							dangerouslySetInnerHTML={{ __html: json.about.bio }}
						/>
						<button>
							<a
								href="https://www.linkedin.com/in/davide-ciulla/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAACygzysBWYiZd6F8Bgdv7OYXhAD02yFKzV8,1592835530052)/"
								target="_blank"
								rel="noopener"
							>
								Download my CV
							</a>
						</button>
					</div>
					<div
						className="about__content__info"
						data-sal="fade"
						data-sal-duration="800"
						data-sal-delay="500"
						data-sal-easing="ease"
					>
						<h2>SKILLS AND KNOWLEDGE</h2>
						<ul>
							{json.about.skills.map((skill) => {
								return <li key={skill}>{skill}</li>
							})}
						</ul>
						<h2>LANGUAGES</h2>
						<ul>
							{json.about.languages.map((language) => {
								return <li key={language}>{language}</li>
							})}
						</ul>
						<h2>KEEP UP WITH MY WORK</h2>
						<ul>
							{json.about.socials.map((social) => {
								return (
									<li key={social.name}>
										<a
											href={social.url}
											target="_blank"
											rel="noreferrer"
										>
											{social.name}
										</a>
									</li>
								)
							})}
						</ul>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default About
