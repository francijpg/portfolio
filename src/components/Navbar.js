import React from "react"
import { FaBars } from "react-icons/fa"
import PageLinks from "../constants/links"
import { FaAtom } from "react-icons/fa"
import { Link } from "gatsby"

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" className="nav-logo">
            Francisc
            <FaAtom className="fas fa-spin"></FaAtom>
          </Link>
          <button
            type="button"
            aria-label="fabars"
            className="toggle-btn"
            onClick={toggleSidebar}
          >
            <FaBars></FaBars>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
