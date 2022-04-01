import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Certificates from "../components/Certificates"
import SEO from "../components/SEO"

const CertificatesPage = ({
  data: {
    allStrapiCertificates: { nodes: certificates },
  },
}) => {
  return (
    <Layout>
      <SEO title="Certificates" />
      <section className="certificates-page">
        <Certificates certificates={certificates} title="all certificates" />
      </section>
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiCertificates(sort: { order: DESC, fields: year }) {
      nodes {
        id
        title
        year
        institution
        category {
          name
        }
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
export default CertificatesPage
