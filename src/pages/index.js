import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Pagecard from '../components/Pagecard'
import '../utils/normalize.css'
import '../utils/css/main.css'

import { Link } from 'gatsby'

import zeyxLabbg from '../../content/assets/projects/zeyx/zeyxCard.jpeg'
import bemaBg from '../../content/assets/projects/bema/bemabg.jpg'
import inmersivaBg from '../../content/assets/projects/inmersiva/oraculobg.jpg'
import jardinesBg from '../../content/assets/projects/jardines/jardinesBg.jpg'
import animanoirxyzBg from '../../content/assets/projects/animanoirxyz/animanoirxyzBg.jpg'

import { keywordsArray } from '../utils/keywordsArray'

const Index = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0

  return (
    <React.Fragment>
      <SEO
        title={siteTitle}
        canonical="https://animanoir.xyz"
        keywords={keywordsArray}
      />
      <Layout title={siteTitle}>
        <div className="page-feed">
          <Pagecard title="Zeyx Lab" link="/zeyxlab" bgImage={zeyxLabbg} />
          <Pagecard
            title="Jardines [VR Experience]"
            link="/zeyxlab"
            bgImage={jardinesBg}
          />
          <Pagecard
            title="BEMA [programming course]"
            link="/bema"
            bgImage={bemaBg}
          />
          <Pagecard
            title="INMERSIVA [+twitterbot]"
            link="/bema"
            bgImage={inmersivaBg}
          />
          <Pagecard
            title="Animanoir.xyz"
            link="/bema"
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
