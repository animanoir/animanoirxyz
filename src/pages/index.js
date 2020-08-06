import React, { useRef, useState } from "react"
import { graphql, StaticQuery } from "gatsby"
// import Img from 'gatsby-image'
import temporalPhoto from "../../content/assets/animanoir.jpg"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Bio from "../components/bio"
import PostCard from "../components/postCard"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"
//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template

const Index = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const siteDescription = data.site.siteMetadata.description
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0

  return (
    <Layout title={siteTitle}>
      <SEO
        title={siteDescription}
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
      <div className="post-feed">
        {posts.map(({ node }) => {
          postCounter++
          return (
            <PostCard
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          )
        })}
      </div>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            description
            tags
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <Index location={props.location} props data={data} {...props} />
    )}
  />
)
