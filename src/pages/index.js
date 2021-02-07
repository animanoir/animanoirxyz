import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import Pagecard from '../components/Pagecard'

import zeyxLabbg from '../../content/assets/projects/zeyx/zeyxCard.webp'
import inmersivaBg from '../../content/assets/projects/inmersiva/oraculobg.webp'
import animanoirxyzBg from '../../content/assets/projects/animanoirxyz/animanoirxyzBg.webp'
import jardinesBg from '../../content/assets/projects/jardines/jardinesbg.webp'
import { keywordsArray } from '../utils/keywordsArray'
import FloatingSouls from '../components/FloatingSouls'

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
      <Layout title={siteTitle} className="page">
        <FloatingSouls />
        <div className="fade-in">
          <div className="main-index-container ">
            <div style={{ backgroundColor: 'rgba(0,0,0,.5)', padding: '1rem' }}>
              <h1 className="index-title">
                <b>Animanoir</b>{' '}
                <span style={{ color: 'rgba(255,255,255,.8)' }}>
                  {' '}
                  | Creative development. Interactive design. Multimedia
                  wizardry.
                </span>
              </h1>
              <h2 className="index-p" style={{ fontStyle: 'initial' }}>
                <b>
                  <Link className="main-blog-link" to="/About">
                    『 Óscar A. Montiel 』
                  </Link>
                </b>
                〘 Multimedia Developer, Front-end and Software Engineer 〙
              </h2>
            </div>
          </div>
        </div>
        <h2 className="index-p" style={{ marginBottom: '1rem' }}>
          Projects:
        </h2>
        <div className="page-feed">
          <Pagecard title="Zeyx Lab" link="/Zeyxlab" bgImage={zeyxLabbg} />
          <Pagecard
            title="Jardines [VR Experience]"
            link="/Jardines"
            bgImage={jardinesBg}
          />
          <Pagecard
            title="INMERSIVA [+twitterbot]"
            link="/Inmersiva"
            bgImage={inmersivaBg}
          />
        </div>
        <div
          className="index-postContainer"
          style={{ backgroundColor: 'rgba(0,0,0,.5)', padding: '1rem' }}
        >
          <div className="index-about">
            <h3>Óscar A. Montiel, MX</h3>
            <b>Multimedia Developer</b>, <b>Front-end</b> and{' '}
            <b>Software Engineer</b> focused in the creation of digital
            experiences to make life analogous again.{' '}
            <p>
              <Link to="/About">Contact + Links</Link>
            </p>
            <h2 className="index-p" style={{ marginBottom: '1rem' }}>
              Blog posts (in spanish) :
            </h2>
            <ul>
              {posts.map(({ node }) => {
                return (
                  <Link
                    key={node.fields.slug}
                    className="main-blog-link"
                    to={node.fields.slug}
                  >
                    <li className="index-p-alt">
                      <span
                        style={{ fontStyle: 'initial', fontSize: '2rem' }}
                        className="emoji"
                        role="img"
                        aria-label="Ésto rompe mi corazón :("
                      >
                        💔
                      </span>{' '}
                      {node.frontmatter.title}
                    </li>
                  </Link>
                )
              })}
            </ul>
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
