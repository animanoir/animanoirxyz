import React, { useRef, useState } from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import photo from "../../content/assets/oamm.gif"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="About"
        keywords={[
          `animanoir`,
          `blog`,
          `Óscar A. Montiel`,
          `animación`,
          `animation`,
          "interactive",
          "creative",
          "developer",
          "3d",
          "2d",
          "idm",
          "unity",
          "three js",
          "aphex twin",
          "art",
          "ghosts",
          "fantasmas",
          "arte digital",
          "digital art",
          "interacción",
          "frontend",
          "react",
          "html 5",
          "web developer",
          "creative agencies",
          "web developer portafolio",
          "website developer",
          "creative studio",
          "web design",
          "graphic designers",
          "interactive design",
          "freelance web developer",
          "desarrollo web",
          "diseño interactivo",
          "web interactiva",
          "programador",
          "animador",
        ]}
      />

      <article className="post-content page-template no-image">
        <center>
          <div className="post-content-body">
            <div id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-"></div>
            <h4>
              <img src={photo}></img>
              <p className="about__subtitle">
                Creative development | Interactive designer | Multimedia
              </p>
              <div className="about__links">
                <a href="https://www.linkedin.com/in/oscaramontiel/">
                  linkedin
                </a>
                <a href="https://animanoir.com">
                  animanoir.com (old site, still cool)
                </a>
                <a href="https://twitter.com/geosminu">twitter</a>
                <a href="https://github.com/animanoir">github</a>
              </div>
            </h4>
          </div>
        </center>
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
