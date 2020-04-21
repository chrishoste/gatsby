const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const indexTemplate = path.resolve('src/templates/indexTemplate.js')

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              language
              path
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: indexTemplate,
        context: {
          language: node.frontmatter.language,
        },
      })
    })
  })
}
