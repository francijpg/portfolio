import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import Toggle from "react-toggle"
import { FaSun, FaMoon } from "react-icons/fa"
import "react-toggle/style.css"
import NightVideo from "../assets/bg-video.mp4"
import DayVideo from "../assets/bg-day.mp4"

export default () => {

  const changeVideoSource = () => {
    // TODO: provide this video from a context
    const initialRoute = '/'
    if (window.location.pathname === initialRoute) {
      const videoRef = document.getElementById('bgVideo')
      const videoSrc = document.body.classList.contains('light') ? DayVideo : NightVideo
      videoRef.src = videoSrc
    }
  };

  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <Toggle
          defaultChecked={theme === 'dark'}
          onChange={e => { toggleTheme(e.target.checked ? 'dark' : 'light'); changeVideoSource() }}
          className='theme-toggle'
          icons={{
            checked: <FaMoon className="dm-icon-toggle"></FaMoon>,
            unchecked: <FaSun className="dm-icon-toggle"></FaSun>
          }}
        />
      )}
    </ThemeToggler>
  )
}