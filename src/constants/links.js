import React from "react"
import { Link } from "gatsby"

const data = [
  {
    id: 1,
    text: "about",
    url: "/about/",
  },
  {
    id: 2,
    text: "projects",
    url: "/projects/",
  },
  {
    id: 3,
    text: "blog",
    url: "/blog/",
  },
  {
    id: 4,
    text: "certificates",
    url: "/certificates/",
  },
  {
    id: 5,
    text: "contact",
    url: "/contact/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
