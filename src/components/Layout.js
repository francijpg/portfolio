import React, { useState, useEffect } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

const Layout = ({ scrollEffect = false, children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    if (scrollEffect) {
      setIsScrolled(false)
    } else {
      setIsScrolled(true)
    }
  }, [scrollEffect])

  useEffect(() => {
    if (!scrollEffect || typeof window === "undefined") {
      return undefined
    }

    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 0)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrollEffect])

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} isScrolled={isScrolled} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
