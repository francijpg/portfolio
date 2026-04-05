import React, { useEffect, useState } from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import Toggle from "react-toggle"
import { FaSun, FaMoon } from "react-icons/fa"
import "react-toggle/style.css"
import NightVideo from "../assets/bg-video.mp4"
import DayVideo from "../assets/bg-day.mp4"

const ThemeToggleControl = ({ theme, toggleTheme, mounted }) => {
  useEffect(() => {
    if (!mounted || window.location.pathname !== '/') {
      return
    }

    const videoRef = document.getElementById('bgVideo')

    if (!videoRef) {
      return
    }

    videoRef.src = theme === 'light' ? DayVideo : NightVideo
  }, [mounted, theme])

  if (!mounted) {
    return null
  }

  return (
    <Toggle
      checked={theme === 'dark'}
      onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
      className='theme-toggle'
      icons={{
        checked: <FaMoon className="dm-icon-toggle" />,
        unchecked: <FaSun className="dm-icon-toggle" />
      }}
    />
  )
}

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <ThemeToggleControl
          theme={theme}
          toggleTheme={toggleTheme}
          mounted={mounted}
        />
      )}
    </ThemeToggler>
  )
}

export default ThemeToggle
