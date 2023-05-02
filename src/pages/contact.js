import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Contact from "../components/Contact"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <section className="contact-page">
        <Contact title="Contact" />
      </section>
    </Layout>
  )
}

export default contact
