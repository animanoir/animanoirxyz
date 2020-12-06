import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Pagecard from '../components/Pagecard'
import '../utils/normalize.css'
import '../utils/css/main.css'
import zeyxLabbg from '../../content/assets/projects/zeyx/zeyxCard.jpeg'
import bemaBg from '../../content/assets/projects/bema/bemabg.jpg'
import inmersivaBg from '../../content/assets/projects/inmersiva/oraculobg.jpg'
import animanoirxyzBg from '../../content/assets/projects/animanoirxyz/animanoirxyzBg.jpg'
import jardinesBg from '../../content/assets/projects/jardines/jardinesbg.jpg'

import { keywordsArray } from '../utils/keywordsArray'

const emojiArray = ['💔', '💀', '👻', '👹', '👽', '😃']

const Index = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <React.Fragment>
      <SEO
        title={siteTitle}
        description={data.site.siteMetadata.description}
        canonical="https://animanoir.xyz"
        keywords={keywordsArray}
      />
      <Layout title={siteTitle}>
        <div className="page-feed">
          <Pagecard title="Zeyx Lab" link="/zeyxlab" bgImage={zeyxLabbg} />
          <Pagecard
            title="Jardines [VR Experience]"
            link="/jardines"
            bgImage={jardinesBg}
          />
          <Pagecard
            title="BEMA [programming course]"
            link="/BemaClases"
            bgImage={bemaBg}
          />
          <Pagecard
            title="INMERSIVA [+twitterbot]"
            link="/Inmersiva"
            bgImage={inmersivaBg}
          />
          <Pagecard
            title="Animanoir.xyz"
            link="/Animanoirxyz"
            bgImage={animanoirxyzBg}
          />
        </div>
        <div id="blog-section" className="blog-feed-container">
          <h2 className="main-p">Blog Posts:</h2>
          {posts.map(({ node }) => {
            return (
              <ul>
                <Link className="main-blog-link" to={node.fields.slug}>
                  <li className="main-p-alt" key={node.fields.slug}>
                    💔 {node.frontmatter.title}
                  </li>
                </Link>
              </ul>
            )
          })}
          <Link className="main-blog-link" to="/about">
            <h2 className="main-p">Acerca</h2>
          </Link>
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
          }
        }
      }
    }
  }
`

export default (props) => (
  <StaticQuery
    query={indexQuery}
    render={(data) => (
      <Index location={props.location} props data={data} {...props} />
    )}
  />
)

// {posts.map(({ node }) => {
//   postCounter++
//   return (
//     <PostCard
//       key={node.fields.slug}
//       count={postCounter}
//       node={node}
//       postClass={`post`}
//     />
//   )
// })}
