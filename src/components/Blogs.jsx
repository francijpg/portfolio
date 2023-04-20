import React from "react"
import Title from "./Title"
import { Link } from "gatsby"
import Blog from "./Blog"

const Blogs = ({ blogs, title, showLink, bg }) => {
  return (
    <section className="section">
      <Title title={title} />
      <div className="section-center blogs-center">
        {blogs.map(blog => {
          return <Blog key={blog.id} {...blog} />
        })}
      </div>
      {showLink && (
        <Link to="/blog" className="btn center-btn">
          blog
        </Link>
      )}
    </section>
  )
}

export default Blogs
