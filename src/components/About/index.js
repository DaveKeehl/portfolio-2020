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
					data-sal-delay="300"
					data-sal-easing="ease"
				>
					About me.
				</h1>
				<div className="about__content">
					<div
						className="about__content__bio"
						data-sal="fade"
						data-sal-duration="800"
						data-sal-delay="100"
						data-sal-easing="ease"
					>
						<p
							dangerouslySetInnerHTML={{ __html: json.about.bio }}
						/>
						<button>
							<a
								href="https://drive.google.com/file/d/19JJxzh1iaoj6wfbknYc8rrxf5Pxr7k1a/view?usp=sharing"
								target="_blank"
								rel="noreferrer"
							>
								Take a look at my CV
							</a>
						</button>
					</div>
					<div
						className="about__content__info"
						data-sal="fade"
						data-sal-duration="800"
						data-sal-delay="400"
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
