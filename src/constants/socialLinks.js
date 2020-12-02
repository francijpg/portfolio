import React from "react"
import {
  FaLinkedin,
  FaDocker,
  FaGithubSquare,
  FaEnvelope,
  FaMedium,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaEnvelope className="social-icon"></FaEnvelope>,
    url: "mailto:hellofrancijpg@gmail.com",
    ariaLabel: "mail",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/francijpg",
    ariaLabel: "linkedin",
  },
  {
    id: 3,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/francijpg",
    ariaLabel: "github",
  },
  {
    id: 4,
    icon: <FaMedium className="social-icon"></FaMedium>,
    url: "https://medium.com/@francijpg",
    ariaLabel: "medium",
  },
  {
    id: 5,
    icon: <FaDocker className="social-icon"></FaDocker>,
    url: "https://hub.docker.com/u/francijpg",
    ariaLabel: "docker",
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
