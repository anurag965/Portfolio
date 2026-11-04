import React, { createContext, useContext, useState, useEffect } from 'react'

export const THEMES = [
  {
    id: 'amber',
    name: 'Aerospace Amber',
    badge: '🟡',
    accentColor: '#f59e0b',
    glowColor: 'rgba(245, 158, 11, 0.14)',
  },
  {
    id: 'titanium',
    name: 'Titanium Stark',
    badge: '⚪',
    accentColor: '#ffffff',
    glowColor: 'rgba(255, 255, 255, 0.1)',
  },
  {
    id: 'emerald',
    name: 'Bio-AI Emerald',
    badge: '🟢',
    accentColor: '#10b981',
    glowColor: 'rgba(16, 185, 129, 0.14)',
  },
  {
    id: 'cobalt',
    name: 'Electric Cobalt',
    badge: '🔵',
    accentColor: '#3b82f6',
    glowColor: 'rgba(59, 130, 246, 0.14)',
  },
]

const ThemeContext = createContext({
  theme: 'amber',
  setTheme: () => {},
  currentThemeData: THEMES[0],
})

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'amber'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const setTheme = (newTheme) => {
    setThemeState(newTheme)
  }

  const currentThemeData = THEMES.find((t) => t.id === theme) || THEMES[0]

  return (
    <ThemeContext.Provider value={{ theme, setTheme, currentThemeData, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

