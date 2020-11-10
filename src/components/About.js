import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
  {
    file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const About = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <>
      <div className="section about">
        <div className="about-container">
          <div className="about-wrapper">
            <div className="about-description">
              <div className="underline"></div>
              <div className="about-title">About me</div>
              Hi there!{" "}
              <span role="img" aria-label="hand" className="about-icon">
                👋🏻
              </span>{" "}
              . I'm Francisco, a software engineer and entrepreneur who enjoys
              learning and making things happen with the help of technology...
              <Link to="/about" className="btn">
                Continue reading…
              </Link>
              <Link to="/contact" className="btn">
                contact me
              </Link>
              <SocialLinks />
            </div>
            <Image fluid={fluid} className="about-image" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About
