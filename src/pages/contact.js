import React from "react"

// Importation of Components
import Footer from "../components/footer"
import Header from "../components/header"

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact</h1>
      <p>
        The best way to reach me is via{" "}
        <a href="https://www.gmail.com" target="_blank">
          kc@gmail.com
        </a>
      </p>
      <Footer />
    </div>
  )
}

export default ContactPage
