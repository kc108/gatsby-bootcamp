import React from "react"

import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <div>
      <h1>About Me</h1>
      <h2>Bio</h2>
      <p>
        I am a Full-Stack Software Engineer living in the San Francisco Bay
        Area. With over 12-years of working experience as renewable energy
        engineer I love building stuff and making things that are efficient and
        user-friendly.
      </p>
      <p>
        <Link to="/contact">Want to work with me? Reach out.</Link>
      </p>
    </div>
  )
}
export default AboutPage
