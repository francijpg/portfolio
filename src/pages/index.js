import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import About from "../components/About"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Services from "../components/Services"
import SEO from "../components/SEO"

export default ({ data }) => {

  const {
    allStrapiProjects: { nodes: projects },
  } = data

  return (
    <Layout scrollEffect={true}>
      <SEO title="Home" description="home page" />
      <Hero />
      <About />
      <Services />
      <Jobs />
      <Projects projects={projects} title="featured projects" showLink />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(
      filter: { featured: { eq: true } }
      sort: { order: DESC, fields: strapiId }
    ) {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`
