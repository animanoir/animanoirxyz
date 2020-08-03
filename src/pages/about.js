import React, { useRef, useState } from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="About"
        keywords={[`Óscar A. Montiel`, `threejs`, `javascript`, `react`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <div id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-"></div>
          <h3 id="dynamic-styles">Óscar A. Montiel</h3>
          <h4>
            <center>
              {" "}
              <p>Front-end // Interacción // Animación // Multimedia</p>
            </center>
          </h4>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    fotoAcerca: file(relativePath: { eq: "acerca-de-oamm.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
