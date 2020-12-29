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
        <div className="blog-feed-container fade-in">
          <h1 className="main-p-title">
            Animanoir | Creative development. Interactive design. Multimedia
            wizardry.
          </h1>
          <h2 className="main-p" style={{ fontStyle: 'initial' }}>
            Homesite for works&personal projects by{' '}
            <b>
              <Link
                className="main-blog-link"
                to="/Acerca"
                style={{ fontStyle: 'italic' }}
              >
                Óscar A. Montiel [ frontend & creative developer ]
              </Link>
            </b>
            .
          </h2>
          <h2
            className="main-p"
            style={{ fontWeight: 'bold', marginBottom: '1rem' }}
          >
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
                  <li className="main-p-alt">
                    <span
                      style={{ fontStyle: 'initial' }}
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
        <h2
          className="main-p"
          style={{ fontWeight: 'bold', marginBottom: '1rem' }}
        >
          Proyects:
        </h2>
        <div className="page-feed">
          <Pagecard title="Zeyx Lab" link="/zeyxlab" bgImage={zeyxLabbg} />
          <Pagecard
            title="Jardines [VR Experience]"
            link="/jardines"
            bgImage={jardinesBg}
          />
          <Pagecard
            title="INMERSIVA [+twitterbot]"
            link="/Inmersiva"
            bgImage={inmersivaBg}
          />
          <Pagecard
            title="Animanoir.xyz"
            link="/Animanoirxyzweb"
            bgImage={animanoirxyzBg}
          />
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
