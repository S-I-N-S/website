const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

// Add slug field to markdown nodes
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'blog' })
    createNodeField({
      node,
      name: 'slug',
      value: `/blog${slug}`
    })
  }
}

// Create blog post pages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  const result = await graphql(`
    query {
      allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        limit: 1000
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)
  
  if (result.errors) {
    throw result.errors
  }
  
  const posts = result.data.allMarkdownRemark.edges
  const blogPostTemplate = path.resolve('./src/templates/blog-post.js')
  
  // Create blog post pages
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    
    createPage({
      path: post.node.fields.slug,
      component: blogPostTemplate,
      context: {
        id: post.node.id,
        previous,
        next
      }
    })
  })
}

