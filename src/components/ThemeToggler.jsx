import React, { useEffect, useState } from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import Toggle from "react-toggle"
import { FaSun, FaMoon } from "react-icons/fa"
import "react-toggle/style.css"

const getCurrentTheme = fallbackTheme => {
  if (typeof document === "undefined") {
    return fallbackTheme || "light"
  }

  if (document.body.classList.contains("dark")) {
    return "dark"
  }

  if (document.body.classList.contains("light")) {
    return "light"
  }

  return fallbackTheme || "light"
}

const ThemeToggleControl = ({ theme, toggleTheme, mounted }) => {
  const [resolvedTheme, setResolvedTheme] = useState(theme || "light")

  useEffect(() => {
    if (!mounted) {
      return
    }

    const nextTheme = getCurrentTheme(theme)

    setResolvedTheme(currentTheme =>
      currentTheme === nextTheme ? currentTheme : nextTheme
    )
  }, [mounted, theme])

  useEffect(() => {
    if (!mounted || typeof MutationObserver === "undefined") {
      return
    }

    const observer = new MutationObserver(() => {
      setResolvedTheme(getCurrentTheme(theme))
    })

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [mounted, theme])

  if (!mounted) {
    return null
  }

  return (
    <Toggle
      key={resolvedTheme}
      checked={resolvedTheme === 'dark'}
      onChange={e => {
        const nextTheme = e.target.checked ? 'dark' : 'light'
        setResolvedTheme(nextTheme)
        toggleTheme(nextTheme)
      }}
      className='theme-toggle'
      aria-label={`Activate ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
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
