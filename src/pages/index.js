import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/postCard"
import "../utils/normalize.css"
import "../utils/css/main.css"
import { keywordsArray } from "../utils/keywordsArray"
import logo from "../../content/assets/favicons/animanoir-logo.svg"

const Index = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const siteDescription = data.site.siteMetadata.description
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0

  return (
    <React.Fragment>
      <Layout title={siteTitle}>
        <SEO
          title={siteTitle}
          canonical="https://animanoir.xyz"
          keywords={keywordsArray}
        />
        <div className="inner-main">
          <div className="custom-sidebar">
            <img className="main-logo" src={logo} />
            <nav>
              <ul>
                <li>.contact</li>
                <li>.about</li>
                <li>.blog</li>
              </ul>
            </nav>
          </div>
          <div className="page">
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
          </div>
        </div>
      </Layout>
    </React.Fragment>
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
