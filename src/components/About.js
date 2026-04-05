import React, { useEffect, useRef, useState } from "react"
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
  const typewriterRef = useRef(null)
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const [TypingStepComponent, setTypingStepComponent] = useState(null)

  const sequence = [
    {
      content: `I'm Francisco, a software engineer who likes to learn and make things happen with the help of technology...`,
    },
  ]

  useEffect(() => {
    if (!typewriterRef.current || typeof window === "undefined") {
      return undefined
    }

    if (!("IntersectionObserver" in window)) {
      setShouldAnimate(true)
      return undefined
    }

    const observer = new window.IntersectionObserver(
      entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          setShouldAnimate(true)
          observer.disconnect()
        }
      },
      { rootMargin: "200px" }
    )

    observer.observe(typewriterRef.current)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!shouldAnimate) {
      return undefined
    }

    let isMounted = true

    import("typing-effect-reactjs").then(module => {
      if (isMounted) {
        setTypingStepComponent(() => module.TypingStep)
      }
    })

    return () => {
      isMounted = false
    }
  }, [shouldAnimate])

  return (
    <>
      <div className="section about">
        <div className="about-container">
          <div className="about-wrapper">
            <div className="about-description">
              <div className="underline"></div>
              <div className="about-title">About me</div>
              <div className="typewriter" ref={typewriterRef}>
                Hi there!{" "}
                <span role="img" aria-label="hand" className="about-icon">
                  👋🏻
                </span>{" "}
                {TypingStepComponent ? (
                  <TypingStepComponent
                    sequence={sequence}
                    styleClass="typewriter"
                    typeSpeed={80}
                    element="h2"
                  />
                ) : (
                  <h2>{sequence[0].content}</h2>
                )}
              </div>
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
