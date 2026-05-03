import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const Blog = ({ id, title, image, date, category, slug, desc, prioritizeImage = false }) => {
  return (
    <Link to={`/blogs/${slug}`} className="blog" key={id}>
      <article>
        {image && (
          <Image
            fluid={image.childImageSharp.fluid}
            className="blog-img"
            critical={prioritizeImage}
            fadeIn={!prioritizeImage}
          />
        )}
        <div className="blog-card">
          <h3>{title}</h3>
          <p>{desc}</p>
          <div className="blog-footer">
            <p>{category}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default Blog
