import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import Toggle from "react-toggle"
import "react-toggle/style.css"

export default () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <Toggle
        defaultChecked={theme === 'dark'}
        onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
        className='theme-toggle'
        icons={false} />
    )}
  </ThemeToggler>
)