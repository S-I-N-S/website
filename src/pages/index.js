import * as React from "react"
import { useState, useEffect, useRef } from "react"
import GameDayLogo from "../components/GameDayLogo"
import BlogSection from "../components/BlogSection"

// Sandbox Logo Component (inline to avoid import issues)
const SandboxLogo = ({ size = 24, color = 'currentColor' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect 
      x="3" 
      y="8" 
      width="18" 
      height="12" 
      rx="2" 
      stroke={color} 
      strokeWidth="1.5" 
      fill="none"
    />
    <circle cx="7" cy="14" r="1" fill={color} opacity="0.6" />
    <circle cx="12" cy="16" r="1" fill={color} opacity="0.8" />
    <circle cx="17" cy="13" r="1" fill={color} opacity="0.6" />
    <circle cx="9" cy="17" r="0.5" fill={color} opacity="0.4" />
    <circle cx="15" cy="15" r="0.5" fill={color} opacity="0.4" />
    <path 
      d="M12 3L16 5V9C16 11.5 14 13.5 12 14C10 13.5 8 11.5 8 9V5L12 3Z" 
      stroke={color} 
      strokeWidth="1.5" 
      fill="none"
      opacity="0.7"
    />
  </svg>
)

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
    
    // Neomorphic shadows - improved contrast
    lightShadow: '#ffffff',
    darkShadow: '#c8c7c9',
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
    
    // Neomorphic shadows - improved contrast
    lightShadow: '#3d403f',
    darkShadow: '#252626',
    primaryDarkShadow: '#80c499',
    primaryLightShadow: '#aeffcf'
  }
}

const IndexPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isGlitching, setIsGlitching] = useState(false)
  const [isGameDayHovered, setIsGameDayHovered] = useState(false)
  const [isSandboxHovered, setIsSandboxHovered] = useState(false)
  const [currentSection, setCurrentSection] = useState(0) // 0 for solutions, 1 for blog
  
  const solutionsRef = useRef(null)
  const blogRef = useRef(null)
  const containerRef = useRef(null)
  
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
  
  // Scroll detection to update current section
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      
      const scrollTop = containerRef.current.scrollTop
      const viewportHeight = window.innerHeight
      
      // Determine which section is in view
      if (scrollTop < viewportHeight / 2) {
        setCurrentSection(0)
      } else {
        setCurrentSection(1)
      }
    }
    
    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  // Navigation functions
  const scrollToSection = (sectionIndex) => {
    const targetRef = sectionIndex === 0 ? solutionsRef : blogRef
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  
  return (
    <div style={containerStyles}>
      {/* CSS Keyframes */}
      <style dangerouslySetInnerHTML={{ __html: keyframeStyles }} />
      
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
      
      {/* Navigation Arrow */}
      <button
        style={currentSection === 0 ? scrollArrowDownStyles : scrollArrowUpStyles}
        onClick={() => scrollToSection(currentSection === 0 ? 1 : 0)}
        aria-label={currentSection === 0 ? 'Scroll to blog' : 'Scroll to solutions'}
      >
        {currentSection === 0 ? '↓' : '↑'}
      </button>
      
      {/* Scroll container with snap points */}
      <div ref={containerRef} style={scrollContainerStyles}>
        {/* Solutions Section */}
        <section ref={solutionsRef} style={snapSectionStyles}>
          <main style={mainStyles}>
            <div style={contentWrapperStyles}>
              <section style={welcomeSectionStyles}>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                  <h1 
                    style={{...welcomeTextStyles, ...(isGlitching ? hackersGlitchStyles : {})}}
                    onMouseEnter={() => setIsGlitching(true)}
                    onMouseLeave={() => setIsGlitching(false)}
                  >
                    \\ <span style={brandNameStyles}>reflux</span> \\
                  </h1>
                  {/* Glitch overlay elements */}
                  {isGlitching && (
                    <>
                      <div style={glitchOverlay1} />
                      <div style={glitchOverlay2} />
                      <div style={glitchOverlay3} />
                    </>
                  )}
                </div>
              </section>
              
              {/* Solutions Section */}
              <section style={solutionsSectionStyles}>
                <h2 style={sectionTitleStyles}>Our Solutions</h2>
                <div style={solutionsGridStyles}>
                  {/* GameDay Card */}
                  <div 
                    style={isGameDayHovered ? solutionCardHoverStyles : solutionCardStyles}
                    onMouseEnter={() => setIsGameDayHovered(true)}
                    onMouseLeave={() => setIsGameDayHovered(false)}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                      <GameDayLogo size={32} color="var(--color-primary)" />
                    </div>
                    <h3 style={solutionTitleStyles}>GameDay</h3>
                    <p style={solutionDescriptionStyles}>
                      Fast and Easy to use football stats and visualization platform
                    </p>
                    <button 
                      style={solutionButtonStyles}
                      onClick={() => window.open('https://gameday.reflux.cloud', '_blank')}
                    >
                      &gt;
                    </button>
                  </div>
                  
                  {/* Simple Sandbox Card */}
                  <div 
                    style={isSandboxHovered ? solutionCardHoverStyles : solutionCardStyles}
                    onMouseEnter={() => setIsSandboxHovered(true)}
                    onMouseLeave={() => setIsSandboxHovered(false)}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                      <SandboxLogo size={32} color="var(--color-primary)" />
                    </div>
                    <h3 style={solutionTitleStyles}>simple-sandbox</h3>
                    <p style={solutionDescriptionStyles}>
                      Interactive malware analysis sandbox for secure threat investigation
                    </p>
                    <button 
                      style={solutionButtonStyles}
                      onClick={() => window.open('/simple-sandbox', '_blank')}
                    >
                      &gt;
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </section>
        
        {/* Blog Section */}
        <section ref={blogRef} style={snapSectionStyles}>
          <main style={mainStyles}>
            <BlogSection />
          </main>
        </section>
      </div>
    </div>
  )
}

// CSS Keyframes - Updated with Hackers-style glitch
const keyframeStyles = `
  @keyframes hackersGlitch {
    0%, 100% { 
      transform: translate(0);
      filter: hue-rotate(0deg);
    }
    10% { 
      transform: translate(-2px, 0);
      filter: hue-rotate(90deg) saturate(3);
    }
    20% { 
      transform: translate(2px, 0);
      filter: hue-rotate(180deg) saturate(2);
    }
    30% { 
      transform: translate(-1px, 0);
      filter: hue-rotate(270deg) saturate(4);
    }
    40% { 
      transform: translate(1px, 0);
      filter: hue-rotate(360deg) saturate(1);
    }
    50% { 
      transform: translate(-3px, 0);
      filter: hue-rotate(45deg) saturate(5) brightness(2);
    }
    60% { 
      transform: translate(3px, 0);
      filter: hue-rotate(135deg) saturate(3) brightness(0.5);
    }
    70% { 
      transform: translate(-1px, 0);
      filter: hue-rotate(225deg) saturate(4) brightness(1.5);
    }
    80% { 
      transform: translate(1px, 0);
      filter: hue-rotate(315deg) saturate(2) brightness(0.8);
    }
    90% { 
      transform: translate(0);
      filter: hue-rotate(0deg) saturate(6) brightness(3);
    }
  }

  @keyframes scanlines {
    0% { top: -100%; }
    100% { top: 100%; }
  }

  @keyframes rgbShift {
    0% { transform: translate(0); }
    33% { transform: translate(-1px, 0); }
    66% { transform: translate(1px, 0); }
    100% { transform: translate(0); }
  }
  
  @keyframes gradientShift {
    0% { background-position: 0% 50% }
    50% { background-position: 100% 50% }
    100% { background-position: 0% 50% }
  }
`

// Hackers-style glitch effect
const hackersGlitchStyles = {
  animation: 'hackersGlitch 0.6s ease-in-out',
  position: 'relative',
  textShadow: `
    2px 0 #ff00ff,
    -2px 0 #00ffff,
    0 2px #ffff00,
    0 -2px #ff0000
  `
}

// Glitch overlay elements for scanlines and RGB shift
const glitchOverlay1 = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(255, 0, 255, 0.1) 2px,
    rgba(255, 0, 255, 0.1) 4px
  )`,
  animation: 'scanlines 0.1s linear infinite',
  pointerEvents: 'none',
  zIndex: 1
}

const glitchOverlay2 = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `repeating-linear-gradient(
    90deg,
    transparent,
    transparent 1px,
    rgba(0, 255, 255, 0.05) 1px,
    rgba(0, 255, 255, 0.05) 2px
  )`,
  animation: 'rgbShift 0.1s linear infinite',
  pointerEvents: 'none',
  zIndex: 2
}

const glitchOverlay3 = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `linear-gradient(
    45deg,
    rgba(255, 255, 0, 0.1) 0%,
    transparent 25%,
    rgba(255, 0, 255, 0.1) 50%,
    transparent 75%,
    rgba(0, 255, 255, 0.1) 100%
  )`,
  animation: 'hackersGlitch 0.3s ease-in-out',
  pointerEvents: 'none',
  zIndex: 3
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
  overflow: 'hidden'
}

const themeToggleStyles = {
  background: 'var(--color-background)',
  border: 'none',
  color: 'var(--color-onBackground)',
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
    6px 6px 12px var(--color-darkShadow),
    -6px -6px 12px var(--color-lightShadow)
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

// Solutions Section Styles
const solutionsSectionStyles = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem'
}

const sectionTitleStyles = {
  fontSize: '2.2rem',
  fontWeight: '400',
  fontFamily: '"Unica One", cursive',
  color: 'var(--color-onBackground)',
  textAlign: 'center',
  margin: 0,
  letterSpacing: '0.01em'
}

const solutionsGridStyles = {
  display: 'flex',
  justifyContent: 'center',
  gap: '2rem',
  flexWrap: 'wrap'
}

const solutionCardStyles = {
  background: 'var(--color-background)',
  padding: '2rem',
  borderRadius: '16px',
  boxShadow: `
    inset 9px 9px 18px var(--color-darkShadow),
    inset -9px -9px 18px var(--color-lightShadow)
  `,
  textAlign: 'center',
  maxWidth: '350px',
  width: '100%',
  transition: 'all 0.3s ease',
  cursor: 'pointer'
}

const solutionCardHoverStyles = {
  background: 'var(--color-background)',
  padding: '2rem',
  borderRadius: '16px',
  boxShadow: `
    9px 9px 18px var(--color-darkShadow),
    -9px -9px 18px var(--color-lightShadow)
  `,
  textAlign: 'center',
  maxWidth: '350px',
  width: '100%',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  transform: 'translateY(-4px)'
}

const solutionTitleStyles = {
  fontSize: '1.6rem',
  fontWeight: '400',
  fontFamily: '"Unica One", cursive',
  color: 'var(--color-primary)',
  marginTop: 0,
  marginBottom: '1rem',
  letterSpacing: '0.01em'
}

const solutionDescriptionStyles = {
  fontSize: '1rem',
  fontFamily: '"Open Sans", sans-serif',
  fontWeight: '400',
  color: 'var(--color-onSurface)',
  lineHeight: '1.6',
  marginBottom: '1.5rem'
}

const solutionButtonStyles = {
  background: 'var(--color-primary)',
  color: 'var(--color-onPrimary)',
  border: 'none',
  padding: '0.75rem 1.5rem',
  borderRadius: '12px',
  cursor: 'pointer',
  fontSize: '1rem',
  fontFamily: '"Open Sans", sans-serif',
  fontWeight: '500',
  transition: 'all 0.2s ease'
}

// Scroll container with snap points
const scrollContainerStyles = {
  height: '100vh',
  width: '100vw',
  overflowY: 'scroll',
  overflowX: 'hidden',
  scrollSnapType: 'y mandatory',
  scrollBehavior: 'smooth',
  position: 'relative'
}

// Each section takes full viewport height and is a snap point
const snapSectionStyles = {
  minHeight: '100vh',
  width: '100%',
  scrollSnapAlign: 'start',
  scrollSnapStop: 'always',
  position: 'relative'
}

// Navigation arrow styles - down arrow at bottom center
const scrollArrowDownStyles = {
  position: 'fixed',
  bottom: '1.5rem',
  left: '50%',
  transform: 'translateX(-50%)',
  background: 'var(--color-background)',
  border: 'none',
  color: 'var(--color-onBackground)',
  padding: '0.75rem',
  borderRadius: '50%',
  cursor: 'pointer',
  fontSize: '1.5rem',
  fontFamily: '"Open Sans", sans-serif',
  width: '3.5rem',
  height: '3.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `
    6px 6px 12px var(--color-darkShadow),
    -6px -6px 12px var(--color-lightShadow)
  `,
  transition: 'all 0.3s ease',
  zIndex: 999
}

// Navigation arrow styles - up arrow at top center
const scrollArrowUpStyles = {
  position: 'fixed',
  top: '1.5rem',
  left: '50%',
  transform: 'translateX(-50%)',
  background: 'var(--color-background)',
  border: 'none',
  color: 'var(--color-onBackground)',
  padding: '0.75rem',
  borderRadius: '50%',
  cursor: 'pointer',
  fontSize: '1.5rem',
  fontFamily: '"Open Sans", sans-serif',
  width: '3.5rem',
  height: '3.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `
    6px 6px 12px var(--color-darkShadow),
    -6px -6px 12px var(--color-lightShadow)
  `,
  transition: 'all 0.3s ease',
  zIndex: 999
}

export default IndexPage

export const Head = () => <title>\\ reflux \\</title>