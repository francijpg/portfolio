import React, { useState, useEffect } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

const Layout = ({ scrollEffect = false, children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const isBrowser = typeof window !== "undefined"

  useEffect(() => {
    if (scrollEffect) {
      setIsScrolled(false)
    } else {
      setIsScrolled(true)
    }
  }, [scrollEffect])

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  if (isBrowser) {
    window.onscroll = () => {
      if (scrollEffect) {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)
      }
    }
  }

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} isScrolled={isScrolled} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
