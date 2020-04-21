import './heroHeader.scss'
import React from 'react'

import { useStaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

const HeroHeader = () => {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: { eq: "heroImage.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      Tag="section"
      className="hero-header"
      fluid={data.image.childImageSharp.fluid}
      backgroundColor={`#040e18`}
    >
      <h1>Some Text 2</h1>
    </BackgroundImage>
  )
}

export default HeroHeader
