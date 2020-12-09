import React, { useState } from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import Pagecard from '../components/Pagecard'
import '../utils/normalize.css'
import '../utils/css/main.css'
import zeyxLabbg from '../../content/assets/projects/zeyx/zeyxCard.webp'
import bemaBg from '../../content/assets/projects/bema/bemabg.webp'
import inmersivaBg from '../../content/assets/projects/inmersiva/oraculobg.webp'
import animanoirxyzBg from '../../content/assets/projects/animanoirxyz/animanoirxyzBg.webp'
import jardinesBg from '../../content/assets/projects/jardines/jardinesbg.webp'
import { keywordsArray } from '../utils/keywordsArray'

const colores = [
  '#FF6633',
  '#FFB399',
  '#FF33FF',
  '#FFFF99',
  '#00B3E6',
  '#E6B333',
  '#3366E6',
  '#999966',
  '#99FF99',
  '#B34D4D',
  '#80B300',
  '#809900',
  '#E6B3B3',
  '#6680B3',
  '#66991A',
  '#FF99E6',
  '#CCFF1A',
  '#FF1A66',
  '#E6331A',
  '#33FFCC',
  '#66994D',
  '#B366CC',
  '#4D8000',
  '#B33300',
  '#CC80CC',
  '#66664D',
  '#991AFF',
  '#E666FF',
  '#4DB3FF',
  '#1AB399',
  '#E666B3',
  '#33991A',
  '#CC9999',
  '#B3B31A',
  '#00E680',
  '#4D8066',
  '#809980',
  '#E6FF80',
  '#1AFF33',
  '#999933',
  '#FF3380',
  '#CCCC00',
  '#66E64D',
  '#4D80CC',
  '#9900B3',
  '#E64D66',
  '#4DB380',
  '#FF4D4D',
  '#99E6E6',
  '#6666FF',
]

const Index = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const [colorI, setColorI] = useState()
  const [colorN, setColorN] = useState()
  const [colorT, setColorT] = useState()
  const [colorE, setColorE] = useState()
  const [colorR, setColorR] = useState()
  const [colorA, setColorA] = useState()
  const [colorC, setColorC] = useState()
  const [colorV, setColorV] = useState()

  const randomColor = () => colores[Math.floor(Math.random() * colores.length)]

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
            link="/Animanoirxyzweb"
            bgImage={animanoirxyzBg}
          />
        </div>
        <div id="blog-section" className="blog-feed-container">
          <h1 className="main-p-title">
            Animanoir | Creative development.
            <span
              className="letra-interactiva"
              onMouseEnter={() => setColorI(randomColor)}
              style={{ color: colorI }}
            >
              {' '}
              I
            </span>
            <span
              className="letra-interactiva"
              onMouseEnter={() => setColorN(randomColor)}
              style={{ color: colorN }}
            >
              n
            </span>
            <span
              className="letra-interactiva"
              onMouseEnter={() => setColorT(randomColor)}
              style={{ color: colorT }}
            >
              t
            </span>
            <span
              className="letra-interactiva"
              onMouseEnter={() => setColorE(randomColor)}
              style={{ color: colorE }}
            >
              e
            </span>
            <span
              className="letra-interactiva"
              onMouseEnter={() => setColorR(randomColor)}
              style={{ color: colorR }}
            >
              r
            </span>
            <span
              className="letra-interactiva"
              onMouseEnter={() => setColorA(randomColor)}
              style={{ color: colorA }}
            >
              a
            </span>
            <span
              className="letra-interactiva"
              onMouseEnter={() => setColorC(randomColor)}
              style={{ color: colorC }}
            >
              c
            </span>
            <span
              className="letra-interactiva"
              onMouseEnter={() => setColorT(randomColor)}
              style={{ color: colorT }}
            >
              t
            </span>
            <span
              className="letra-interactiva"
              onMouseEnter={() => setColorI(randomColor)}
              style={{ color: colorI }}
            >
              i
            </span>
            <span
              className="letra-interactiva"
              onMouseEnter={() => setColorV(randomColor)}
              style={{ color: colorV }}
            >
              v
            </span>
            <span
              className="letra-interactiva"
              onMouseEnter={() => setColorE(randomColor)}
              style={{ color: colorE }}
            >
              e{' '}
            </span>
            design. Multimedia wizardry.
          </h1>
          <Link className="main-blog-link" to="/Acerca">
            <h2 className="main-p">Acerca</h2>
          </Link>
          <h2 className="main-p">Blog posts:</h2>
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
                      class="emoji"
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
    allMarkdownRemark {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
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
