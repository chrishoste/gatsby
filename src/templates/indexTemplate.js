import React from 'react'
import { graphql } from 'gatsby'

// Components import
import NavBar from '../components/NavBar/navbar'

export default function Template({
  data, // Injected by grapQL query
}) {
  const { allMarkdownRemark: indices } = data
  const { markdownRemark: currentIndex } = data
  const { translationsJson: translation } = data

  return (
    <div>
      <NavBar indices={indices.nodes} currentIndex={currentIndex} />
      <div className="content">
        <h1>{translation.index.heading}</h1>
      </div>
    </div>
  )
}

export const indexQuery = graphql`
  query IndexByType($language: String!) {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          path
          language
        }
      }
    }
    markdownRemark(
      frontmatter: { language: { eq: $language }, type: { eq: "index" } }
    ) {
      frontmatter {
        language
      }
    }
    translationsJson(language: { eq: $language }) {
      index {
        heading
      }
    }
  }
`
