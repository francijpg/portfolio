import React from "react"
import {
  FaLinkedin,
  FaDocker,
  FaGithubSquare,
  FaMedium,
  FaTwitter
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/francijpg",
    ariaLabel: "linkedin",
  },
  {
    id: 2,
    icon: <FaTwitter className="social-icon"></FaTwitter>,
    url: "https://twitter.com/francijpg",
    ariaLabel: "twitter",
  },
  {
    id: 3,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/francijpg",
    ariaLabel: "github",
  },
  {
    id: 5,
    icon: <FaDocker className="social-icon"></FaDocker>,
    url: "https://hub.docker.com/u/francijpg",
    ariaLabel: "docker",
  },
  {
    id: 4,
    icon: <FaMedium className="social-icon"></FaMedium>,
    url: "https://medium.com/@francijpg",
    ariaLabel: "medium",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a
        href={link.url}
        aria-label={link.ariaLabel}
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
