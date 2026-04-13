import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import SocialLinks from "../constants/socialLinks"
import SEO from "../components/SEO"
import { Link } from "gatsby"

const About = ({
  data: {
    about: { nodes },
  },
}) => {
  const { seniorityInfo, impactInfo, strategicInfo, workInfo, aspirationInfo, contactInfo,
    stack, title, image } = nodes[0]

  return (
    <Layout>
      <SEO title="About Me" description="about FranciscoPG" />
      <section className="section about-page">
        <Title title={title} />
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid} className="about-img" />
          <article className="about-text">
            <p>{seniorityInfo}</p>
            <p>{impactInfo}</p>
            <p>{strategicInfo}</p>
            <p>{workInfo}</p>
            <p>{aspirationInfo}</p>
            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
            <p className="mt-2">{contactInfo}</p>
            <Link to="/contact" className="btn about-contact">
              contact me
            </Link>
            <SocialLinks />
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        title
        seniorityInfo
        impactInfo
        strategicInfo
        workInfo
        aspirationInfo
        contactInfo
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default About
