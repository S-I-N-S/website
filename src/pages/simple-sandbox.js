import * as React from "react"
import { useState, useEffect } from "react"

// Theme colors based on your specifications
const themes = {
  light: {
    // Primary colors
    primary: '#7C3AED',
    primaryContainer: '#C3AEE6',
    onPrimary: '#FFFFFF',
    onPrimaryContainer: '#1B0C33',
    
    // Secondary colors
    secondary: '#3AED7C',
    secondaryContainer: '#AEE6C3',
    onSecondary: '#FFFFFF',
    onSecondaryContainer: '#0C331B',
    
    // Tertiary colors
    tertiary: '#ED7C3A',
    tertiaryContainer: '#E6C3AE',
    onTertiary: '#FFFFFF',
    onTertiaryContainer: '#331B0C',
    
    // Surface colors
    background: '#fcfbfc',
    onBackground: '#323133',
    surface: '#fcfbfc',
    onSurface: '#323133',
    surfaceVariant: '#dfdae6',
    onSurfaceVariant: '#5c5666',
    outline: '#8a8299',
    shadow: '#d6d5d6',
    
    // Neomorphic shadows
    lightShadow: '#ffffff',
    darkShadow: '#d6d5d6',
    primaryDarkShadow: '#6931c9',
    primaryLightShadow: '#8f43ff'
  },
  dark: {
    // Primary colors
    primary: '#97E6B4',
    primaryContainer: '#186635',
    onPrimary: '#124C28',
    onPrimaryContainer: '#AEE6C3',
    
    // Secondary colors
    secondary: '#B497E6',
    secondaryContainer: '#351866',
    onSecondary: '#28124C',
    onSecondaryContainer: '#C3AEE6',
    
    // Tertiary colors
    tertiary: '#E6B497',
    tertiaryContainer: '#663518',
    onTertiary: '#4C2812',
    onTertiaryContainer: '#E6C3AE',
    
    // Surface colors
    background: '#313332',
    onBackground: '#e3e6e4',
    surface: '#313332',
    onSurface: '#e3e6e4',
    surfaceVariant: '#56665c',
    onSurfaceVariant: '#d6e6dc',
    outline: '#a1b3a8',
    shadow: '#2a2b2b',
    
    // Neomorphic shadows
    lightShadow: '#383b3a',
    darkShadow: '#2a2b2b',
    primaryDarkShadow: '#80c499',
    primaryLightShadow: '#aeffcf'
  }
}

const SimpleSandboxPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  
  // Load theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark')
    } else {
      // Default to system preference
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
  }, [])
  
  // Save theme preference and apply CSS variables
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
    const theme = isDarkMode ? themes.dark : themes.light
    
    // Apply CSS custom properties to root
    Object.entries(theme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--color-${key}`, value)
    })
    
    // Also apply background to body to prevent white strips
    document.body.style.backgroundColor = theme.background
    document.body.style.color = theme.onBackground
    document.body.style.margin = '0'
    document.body.style.padding = '0'
    document.body.style.overflow = 'hidden'
  }, [isDarkMode])
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }
  
  return (
    <div style={containerStyles}>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Unica+One&family=Open+Sans:wght@300;400;500;600&display=swap" 
        rel="stylesheet" 
      />
      
      {/* Theme toggle in bottom right */}
      <button 
        style={themeToggleStyles}
        onClick={toggleTheme}
        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>
      
      
      {/* Main content */}
      <main style={mainStyles}>
        <div style={contentWrapperStyles}>
          <section style={welcomeSectionStyles}>
            <h1 style={welcomeTextStyles}>
              \\ <span style={brandNameStyles}>simple-sandbox</span> \\
            </h1>
          </section>
          
          <section style={contentSectionStyles}>
            <div style={cardStyles}>
              <h2 style={comingSoonStyles}>... soon</h2>
              <p style={descriptionStyles}>
                we are currently working hard on bringing our vision of a malware sandbox to you
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

// Main Styles
const containerStyles = {
  height: '100vh',
  width: '100vw',
  backgroundColor: 'var(--color-background)',
  color: 'var(--color-onBackground)',
  fontFamily: '"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  transition: 'background-color 0.3s ease, color 0.3s ease',
  margin: 0,
  padding: 0,
  position: 'relative',
  overflow: 'hidden',
  background: `linear-gradient(45deg, 
    var(--color-background) 0%, 
    var(--color-surface) 50%, 
    var(--color-background) 100%)`,
  backgroundSize: '400% 400%',
  animation: 'gradientShift 8s ease infinite'
}

const themeToggleStyles = {
  background: 'var(--color-surface)',
  border: 'none',
  color: 'var(--color-onSurface)',
  padding: '0.5rem',
  borderRadius: '50%',
  cursor: 'pointer',
  fontSize: '1.2rem',
  fontFamily: '"Open Sans", sans-serif',
  width: '3rem',
  height: '3rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `
    4px 4px 8px var(--color-darkShadow),
    -4px -4px 8px var(--color-lightShadow)
  `,
  transition: 'all 0.2s ease',
  position: 'fixed',
  bottom: '2rem',
  right: '2rem',
  zIndex: 1000
}


const mainStyles = {
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  zIndex: 100
}

const contentWrapperStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4rem',
  width: '100%',
  maxWidth: '1200px',
  padding: '0 2rem'
}

const welcomeSectionStyles = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  textAlign: 'center'
}

const welcomeTextStyles = {
  fontSize: '3.5rem',
  fontWeight: '400',
  fontFamily: '"Unica One", cursive',
  margin: 0,
  color: 'var(--color-onBackground)',
  lineHeight: '1.2',
  letterSpacing: '0.02em'
}

const brandNameStyles = {
  color: 'var(--color-primary)',
  fontWeight: '400',
  fontFamily: '"Unica One", cursive'
}

const contentSectionStyles = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem'
}

const cardStyles = {
  background: 'var(--color-surface)',
  padding: '3rem',
  borderRadius: '16px',
  boxShadow: `
    inset 8px 8px 16px var(--color-darkShadow),
    inset -8px -8px 16px var(--color-lightShadow)
  `,
  textAlign: 'center',
  maxWidth: '500px',
  width: '100%',
  transition: 'all 0.3s ease'
}

const comingSoonStyles = {
  fontSize: '2.5rem',
  fontWeight: '400',
  fontFamily: '"Unica One", cursive',
  color: 'var(--color-primary)',
  marginTop: 0,
  marginBottom: '1.5rem',
  letterSpacing: '0.01em'
}

const descriptionStyles = {
  fontSize: '1.2rem',
  fontFamily: '"Open Sans", sans-serif',
  fontWeight: '400',
  color: 'var(--color-onSurface)',
  lineHeight: '1.6',
  margin: 0
}

export default SimpleSandboxPage

export const Head = () => <title>simple-sandbox | \\ reflux \\</title>
