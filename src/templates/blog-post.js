import * as React from "react"
import { useState, useEffect } from "react"
import { graphql, Link } from "gatsby"
import "../styles/global.css"

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext
  const [activeHeading, setActiveHeading] = useState('')
  const [isDarkMode, setIsDarkMode] = useState(false)
  
  // Extract headings for table of contents
  const headings = post.headings || []
  
  // Load theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark')
    } else {
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
  }, [])
  
  // Apply theme
  useEffect(() => {
    const theme = isDarkMode ? themes.dark : themes.light
    Object.entries(theme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--color-${key}`, value)
    })
    document.body.style.backgroundColor = theme.background
    document.body.style.color = theme.onBackground
  }, [isDarkMode])
  
  // Scroll spy for active heading
  useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings.map(h => 
        document.getElementById(h.id)
      ).filter(Boolean)
      
      let current = ''
      for (const el of headingElements) {
        if (el.offsetTop <= window.scrollY + 150) {
          current = el.id
        }
      }
      setActiveHeading(current)
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [headings])
  
  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }
  
  const scrollToHeading = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
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
      
      {/* Theme toggle */}
      <button 
        style={themeToggleStyles}
        onClick={toggleTheme}
        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>
      
      {/* Back to home */}
      <Link to="/" style={backButtonStyles}>
        ← Home
      </Link>
      
      <div style={contentContainerStyles}>
        {/* Table of Contents - Left Side */}
        {headings.length > 0 && (
          <aside style={tocContainerStyles}>
            <nav style={tocStyles}>
              <h3 style={tocTitleStyles}>On This Page</h3>
              <ul style={tocListStyles}>
                {headings.map((heading) => (
                  <li 
                    key={heading.id}
                    style={{
                      ...tocItemStyles,
                      ...(heading.depth === 3 ? tocItemIndentStyles : {}),
                      ...(activeHeading === heading.id ? tocItemActiveStyles : {})
                    }}
                    onClick={() => scrollToHeading(heading.id)}
                  >
                    {heading.value}
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        )}
        
        {/* Main Content */}
        <main style={mainStyles}>
          <article style={articleStyles}>
            {/* Article Header */}
            <header style={headerStyles}>
              <h1 style={titleStyles}>{post.frontmatter.title}</h1>
              <div style={metaStyles}>
                <span style={dateStyles}>{post.frontmatter.date}</span>
                <span style={authorStyles}>by {post.frontmatter.author}</span>
              </div>
            </header>
            
            {/* Article Body */}
            <div 
              className="blog-content"
              style={bodyStyles}
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            
            {/* Navigation */}
            <nav style={navStyles}>
              <div style={navLinksStyles}>
                {previous && (
                  <Link to={previous.fields.slug} style={navLinkStyles}>
                    ← {previous.frontmatter.title}
                  </Link>
                )}
                {next && (
                  <Link to={next.fields.slug} style={navLinkStyles}>
                    {next.frontmatter.title} →
                  </Link>
                )}
              </div>
            </nav>
          </article>
        </main>
      </div>
    </div>
  )
}

// Theme colors
const themes = {
  light: {
    primary: '#7C3AED',
    primaryContainer: '#C3AEE6',
    onPrimary: '#FFFFFF',
    onPrimaryContainer: '#1B0C33',
    secondary: '#3AED7C',
    secondaryContainer: '#AEE6C3',
    onSecondary: '#FFFFFF',
    onSecondaryContainer: '#0C331B',
    tertiary: '#ED7C3A',
    tertiaryContainer: '#E6C3AE',
    onTertiary: '#FFFFFF',
    onTertiaryContainer: '#331B0C',
    background: '#fcfbfc',
    onBackground: '#323133',
    surface: '#fcfbfc',
    onSurface: '#323133',
    surfaceVariant: '#dfdae6',
    onSurfaceVariant: '#5c5666',
    outline: '#8a8299',
    shadow: '#d6d5d6',
    lightShadow: '#ffffff',
    darkShadow: '#c8c7c9',
    primaryDarkShadow: '#6931c9',
    primaryLightShadow: '#8f43ff'
  },
  dark: {
    primary: '#97E6B4',
    primaryContainer: '#186635',
    onPrimary: '#124C28',
    onPrimaryContainer: '#AEE6C3',
    secondary: '#B497E6',
    secondaryContainer: '#351866',
    onSecondary: '#28124C',
    onSecondaryContainer: '#C3AEE6',
    tertiary: '#E6B497',
    tertiaryContainer: '#663518',
    onTertiary: '#4C2812',
    onTertiaryContainer: '#E6C3AE',
    background: '#313332',
    onBackground: '#e3e6e4',
    surface: '#313332',
    onSurface: '#e3e6e4',
    surfaceVariant: '#56665c',
    onSurfaceVariant: '#d6e6dc',
    outline: '#a1b3a8',
    shadow: '#2a2b2b',
    lightShadow: '#3d403f',
    darkShadow: '#252626',
    primaryDarkShadow: '#80c499',
    primaryLightShadow: '#aeffcf'
  }
}

// Styles
const containerStyles = {
  minHeight: '100vh',
  backgroundColor: 'var(--color-background)',
  color: 'var(--color-onBackground)',
  fontFamily: '"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  transition: 'background-color 0.3s ease, color 0.3s ease',
  position: 'relative'
}

const themeToggleStyles = {
  position: 'fixed',
  bottom: '2rem',
  right: '2rem',
  background: 'var(--color-background)',
  border: 'none',
  color: 'var(--color-onBackground)',
  padding: '0.5rem',
  borderRadius: '50%',
  cursor: 'pointer',
  fontSize: '1.2rem',
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
  zIndex: 1000
}

const backButtonStyles = {
  position: 'fixed',
  top: '2rem',
  left: '2rem',
  background: 'var(--color-background)',
  color: 'var(--color-primary)',
  textDecoration: 'none',
  padding: '0.75rem 1.5rem',
  borderRadius: '12px',
  fontSize: '0.95rem',
  fontFamily: '"Open Sans", sans-serif',
  fontWeight: '500',
  boxShadow: `
    6px 6px 12px var(--color-darkShadow),
    -6px -6px 12px var(--color-lightShadow)
  `,
  transition: 'all 0.2s ease',
  zIndex: 1000
}

const contentContainerStyles = {
  display: 'flex',
  maxWidth: '1400px',
  margin: '0 auto',
  padding: '6rem 2rem 2rem 2rem',
  gap: '3rem',
  '@media (max-width: 1024px)': {
    flexDirection: 'column'
  }
}

const tocContainerStyles = {
  flex: '0 0 250px',
  position: 'sticky',
  top: '6rem',
  height: 'fit-content',
  maxHeight: 'calc(100vh - 8rem)',
  overflowY: 'auto',
  '@media (max-width: 1024px)': {
    position: 'static',
    flex: '1',
    maxHeight: 'none'
  }
}

const tocStyles = {
  background: 'var(--color-background)',
  padding: '1.5rem',
  borderRadius: '12px',
  boxShadow: `
    inset 6px 6px 12px var(--color-darkShadow),
    inset -6px -6px 12px var(--color-lightShadow)
  `
}

const tocTitleStyles = {
  fontSize: '1rem',
  fontWeight: '600',
  fontFamily: '"Unica One", cursive',
  color: 'var(--color-primary)',
  margin: '0 0 1rem 0'
}

const tocListStyles = {
  listStyle: 'none',
  padding: 0,
  margin: 0
}

const tocItemStyles = {
  fontSize: '0.85rem',
  padding: '0.5rem 0',
  color: 'var(--color-onBackground)',
  cursor: 'pointer',
  transition: 'color 0.2s ease',
  opacity: 0.7
}

const tocItemIndentStyles = {
  paddingLeft: '1rem',
  fontSize: '0.8rem'
}

const tocItemActiveStyles = {
  color: 'var(--color-primary)',
  opacity: 1,
  fontWeight: '500'
}

const mainStyles = {
  flex: '1',
  minWidth: 0
}

const articleStyles = {
  background: 'var(--color-background)',
  padding: '3rem',
  borderRadius: '16px',
  boxShadow: `
    inset 9px 9px 18px var(--color-darkShadow),
    inset -9px -9px 18px var(--color-lightShadow)
  `
}

const headerStyles = {
  marginBottom: '2rem',
  paddingBottom: '2rem',
  borderBottom: `2px solid var(--color-surfaceVariant)`
}

const titleStyles = {
  fontSize: '2.5rem',
  fontWeight: '400',
  fontFamily: '"Unica One", cursive',
  color: 'var(--color-primary)',
  margin: '0 0 1rem 0',
  lineHeight: '1.2'
}

const metaStyles = {
  display: 'flex',
  gap: '1.5rem',
  fontSize: '0.95rem',
  color: 'var(--color-onSurfaceVariant)'
}

const dateStyles = {
  fontWeight: '500'
}

const authorStyles = {
  opacity: 0.8
}

const bodyStyles = {
  fontSize: '1.05rem',
  lineHeight: '1.8',
  color: 'var(--color-onBackground)'
}

const navStyles = {
  marginTop: '3rem',
  paddingTop: '2rem',
  borderTop: `2px solid var(--color-surfaceVariant)`
}

const navLinksStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '2rem'
}

const navLinkStyles = {
  color: 'var(--color-primary)',
  textDecoration: 'none',
  fontSize: '0.95rem',
  fontWeight: '500',
  transition: 'opacity 0.2s ease'
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      headings {
        id
        value
        depth
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
      }
    }
  }
`

export default BlogPostTemplate

export const Head = ({ data }) => <title>{data.markdownRemark.frontmatter.title} | reflux</title>

