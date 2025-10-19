import * as React from "react"
import { useState } from "react"
import { useStaticQuery, graphql, navigate } from "gatsby"

const BlogSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null)
  
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              author
              excerpt
            }
            excerpt
          }
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.edges

  return (
    <section style={blogSectionStyles}>
      <h2 style={sectionTitleStyles}>latest from our blog</h2>
      <div style={blogGridStyles}>
        {posts.map(({ node }) => (
          <article 
            key={node.id} 
            style={hoveredCard === node.id ? blogCardHoverStyles : blogCardStyles}
            onMouseEnter={() => setHoveredCard(node.id)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => navigate(node.fields.slug)}
          >
            <div style={blogContentStyles}>
              <h3 style={blogTitleStyles}>{node.frontmatter.title}</h3>
              <div style={blogMetaStyles}>
                <span style={blogDateStyles}>{node.frontmatter.date}</span>
                <span style={blogAuthorStyles}>by {node.frontmatter.author}</span>
              </div>
              <p style={blogExcerptStyles}>
                {node.frontmatter.excerpt || node.excerpt}
              </p>
              <button style={readMoreButtonStyles}>
                Read More →
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

// Styles
const blogSectionStyles = {
  width: '100%',
  maxWidth: '1200px',
  padding: '0 2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '3rem'
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

const blogGridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: '2rem',
  width: '100%'
}

const blogCardStyles = {
  background: 'var(--color-background)',
  padding: '2rem',
  borderRadius: '16px',
  boxShadow: `
    inset 9px 9px 18px var(--color-darkShadow),
    inset -9px -9px 18px var(--color-lightShadow)
  `,
  transition: 'all 0.3s ease',
  cursor: 'pointer'
}

const blogCardHoverStyles = {
  background: 'var(--color-background)',
  padding: '2rem',
  borderRadius: '16px',
  boxShadow: `
    9px 9px 18px var(--color-darkShadow),
    -9px -9px 18px var(--color-lightShadow)
  `,
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  transform: 'translateY(-4px)'
}

const blogContentStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
}

const blogTitleStyles = {
  fontSize: '1.4rem',
  fontWeight: '400',
  fontFamily: '"Unica One", cursive',
  color: 'var(--color-primary)',
  margin: 0,
  letterSpacing: '0.01em'
}

const blogMetaStyles = {
  display: 'flex',
  gap: '1rem',
  fontSize: '0.85rem',
  color: 'var(--color-onSurfaceVariant)',
  fontFamily: '"Open Sans", sans-serif'
}

const blogDateStyles = {
  fontWeight: '500'
}

const blogAuthorStyles = {
  fontWeight: '400',
  opacity: '0.8'
}

const blogExcerptStyles = {
  fontSize: '0.95rem',
  fontFamily: '"Open Sans", sans-serif',
  color: 'var(--color-onBackground)',
  lineHeight: '1.6',
  margin: 0
}

const readMoreButtonStyles = {
  background: 'var(--color-primary)',
  color: 'var(--color-onPrimary)',
  border: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '0.9rem',
  fontFamily: '"Open Sans", sans-serif',
  fontWeight: '500',
  alignSelf: 'flex-start',
  transition: 'all 0.2s ease'
}

export default BlogSection

