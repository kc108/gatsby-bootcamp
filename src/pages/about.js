import React from "react"

// import Link for "/"
import { Link } from "gatsby"

// importation of Components
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <h1>About Me</h1>
        <h2>Bio</h2>
        <p>
          I am a Full-Stack Software Engineer living in the San Francisco Bay
          Area. With over 12-years of working experience as renewable energy
          engineer I love building stuff and making things that are efficient
          and user-friendly.
        </p>
        <p>
          <Link to="/contact">Want to work with me? Reach out.</Link>
        </p>
      </Layout>
    </div>
  )
}
export default AboutPage
