import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'

const ComponentName = ({ data }) => {
  const { content } = data.blog
  return (
    <Layout>
      <section className="blog-template">
        <div className="section-center">
          <article>
            <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} linkTarget={'_blank'} />
          </article>
          <Link to="/blog" className="btn center-btn">
            blog
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
    }
  }
`

export default ComponentName
