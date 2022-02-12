import React from "react"
import SocialLinks from "../constants/socialLinks"
import { animateScroll as scroll } from "react-scroll"
import { FaAtom } from "react-icons/fa"
import Links from "../constants/links"

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <footer className="footer">
      <div className="footer-wrap">
        <div className="footer-links-wrapper">
          <div className="footer-links-items">
            <div className="footer-link-title">Ideology</div>
            <div className="footer-link-phrase">
              Just start and keep going!
              <span role="img" aria-label="rocket" className="footer-icon">
                🚀
              </span>{" "}
            </div>
          </div>
          <div className="footer-links-items">
            <div className="footer-link-title">Content</div>
            <Links styleClass="footer-link" />
          </div>
        </div>
        <div className="footer-row">
          <div className="footer-row-wrap">
            <button className="footer-row-logo" onClick={toggleHome}>
              Francisc
              <FaAtom className="fas fa-spin"></FaAtom>
            </button>
            <div className="footer-row-rights">
              <h4>
                &copy;2020-{new Date().getFullYear()}
                <span> Francisco P.G.</span> All rights reserved. Built with
                {` `}
                <a
                  href="https://www.gatsbyjs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-gatsby"
                >
                  Gatsby
                </a>
              </h4>
            </div>
            <div>
              <SocialLinks styleClass="social-link"></SocialLinks>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
