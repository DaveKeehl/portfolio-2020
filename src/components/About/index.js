import React from "react"

import json from "../../../static/content.json"

function About() {
  return (
    <div className="about">
      <h1>About me.</h1>
      <div className="about__content">
        <div className="about__content__bio">
          <p>{json.about.bio}</p>
          <button>Download my CV</button>
        </div>
        <div className="about__content__info">
          <h2>SKILLS AND KNOWLEDGE</h2>
          <ul>
            {json.about.skills.map(skill => {
              return <li key={skill}>{skill}</li>
            })}
          </ul>
          <h2>LANGUAGES</h2>
          <ul>
            {json.about.languages.map(language => {
              return <li key={language}>{language}</li>
            })}
          </ul>
          <h2>KEEP UP WITH MY WORK</h2>
          <ul>
            {json.about.socials.map(social => {
              return (
                <li key={social.name}>
                  <a href={social.url} target="_blank" rel="noreferrer">
                    {social.name}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
