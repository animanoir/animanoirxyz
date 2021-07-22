import React, { useEffect } from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import Pagecard from '../components/Pagecard'
import zeyxLabbg from '../../content/assets/projects/zeyx/zeyxCard.webp'
import inmersivaBg from '../../content/assets/projects/inmersiva/oraculobg.webp'
import animanoirxyzBg from '../../content/assets/projects/animanoirxyz/animanoirxyzBg.webp'
import jardinesBg from '../../content/assets/projects/jardines/jardinesbg.webp'
import { keywordsArray } from '../utils/keywordsArray'
import oammGifBW from '../../content/assets/yo.gif'
import oammGifRed from '../../content/assets/animav3.gif'
import FloatingName from '../components/FloatingName'
import LastFmData from '../components/LastFmData'
import cv2021 from '../../content/assets/C.V.Ó.A.M.2021v1.pdf'
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

        <div className="page-content">
          <div style={{ position: 'relative' }} className="hero fade-in-quick">
            <img
              className="about-img centrar"
              src={oammGifBW}
              style={{ zIndex: '10' }}
              alt="Animanoir Óscar A. Montiel Animation"
            />
            <marquee scrollamount="8" style={{ zIndex: '11' }}>
              <FloatingName />
            </marquee>
          </div>
          <div className="hero">
            <img
              className="about-img centrar img-detras"
              src={oammGifRed}
              alt="Animanoir Óscar A. Montiel Animation"
            />
          </div>
          <div style={{ position: 'relative' }} className="hero hero-info">
            <div className="about-social">
              <h3 className="about-social_title">
                Site in construction (July 2021)
              </h3>
              <h3 className="about-social_title">
                {' '}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:omontiel@animanoir.xyz"
                >
                  omontiel@animanoir.xyz
                </a>
              </h3>
              <h3 className="about-social_title">
                {' '}
                <a target="_blank" rel="noreferrer" href={cv2021}>
                  FULL C.V.
                </a>
              </h3>
            </div>
            <LastFmData />
            <div className="about-links">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://linktr.ee/animanoir"
              >
                <svg
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                >
                  <path
                    d="M13.5 13.5H10m3.5 0V10m0 3.5l-4-4m.5-8h3.5m0 0V5m0-3.5l-4 4M5 1.5H1.5m0 0V5m0-3.5l4 4m-4 4.5v3.5m0 0H5m-3.5 0l4-4"
                    stroke="currentColor"
                  ></path>
                </svg>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/oscaramontiel/"
              >
                <svg
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                >
                  <path
                    d="M4.5 6v5m6 0V8.5a2 2 0 10-4 0V11 6M4 4.5h1M1.5.5h12a1 1 0 011 1v12a1 1 0 01-1 1h-12a1 1 0 01-1-1v-12a1 1 0 011-1z"
                    stroke="currentColor"
                  ></path>
                </svg>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/animanoir"
              >
                <svg
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                >
                  <path
                    d="M5.65 12.477a.5.5 0 10-.3-.954l.3.954zm-3.648-2.96l-.484-.128-.254.968.484.127.254-.968zM9 14.5v.5h1v-.5H9zm.063-4.813l-.054-.497a.5.5 0 00-.299.852l.352-.354zM12.5 5.913h.5V5.91l-.5.002zm-.833-2.007l-.466-.18a.5.5 0 00.112.533l.354-.353zm-.05-2.017l.456-.204a.5.5 0 00-.319-.276l-.137.48zm-2.173.792l-.126.484a.5.5 0 00.398-.064l-.272-.42zm-3.888 0l-.272.42a.5.5 0 00.398.064l-.126-.484zM3.383 1.89l-.137-.48a.5.5 0 00-.32.276l.457.204zm-.05 2.017l.354.353a.5.5 0 00.112-.534l-.466.181zM2.5 5.93H3v-.002l-.5.002zm3.438 3.758l.352.355a.5.5 0 00-.293-.851l-.06.496zM5.5 11H6l-.001-.037L5.5 11zM5 14.5v.5h1v-.5H5zm.35-2.977c-.603.19-.986.169-1.24.085-.251-.083-.444-.25-.629-.49a4.8 4.8 0 01-.27-.402c-.085-.139-.182-.302-.28-.447-.191-.281-.473-.633-.929-.753l-.254.968c.08.02.184.095.355.346.082.122.16.252.258.412.094.152.202.32.327.484.253.33.598.663 1.11.832.51.168 1.116.15 1.852-.081l-.3-.954zm4.65-.585c0-.318-.014-.608-.104-.878-.096-.288-.262-.51-.481-.727l-.705.71c.155.153.208.245.237.333.035.105.053.254.053.562h1zm-.884-.753c.903-.097 1.888-.325 2.647-.982.78-.675 1.237-1.729 1.237-3.29h-1c0 1.359-.39 2.1-.892 2.534-.524.454-1.258.653-2.099.743l.107.995zM13 5.91a3.354 3.354 0 00-.98-2.358l-.707.706c.438.44.685 1.034.687 1.655l1-.003zm-.867-1.824c.15-.384.22-.794.21-1.207l-1 .025a2.12 2.12 0 01-.142.82l.932.362zm.21-1.207a3.119 3.119 0 00-.27-1.195l-.913.408c.115.256.177.532.184.812l1-.025zm-.726-.99c.137-.481.137-.482.136-.482h-.003l-.004-.002a.462.462 0 00-.03-.007 1.261 1.261 0 00-.212-.024 2.172 2.172 0 00-.51.054c-.425.091-1.024.317-1.82.832l.542.84c.719-.464 1.206-.634 1.488-.694a1.2 1.2 0 01.306-.03l-.008-.001a.278.278 0 01-.01-.002l-.006-.002h-.003l-.002-.001c-.001 0-.002 0 .136-.482zm-2.047.307a8.209 8.209 0 00-4.14 0l.252.968a7.209 7.209 0 013.636 0l.252-.968zm-3.743.064c-.797-.514-1.397-.74-1.822-.83a2.17 2.17 0 00-.51-.053 1.259 1.259 0 00-.241.03l-.004.002h-.003l.136.481.137.481h-.001l-.002.001-.003.001a.327.327 0 01-.016.004l-.008.001h.008a1.19 1.19 0 01.298.03c.282.06.769.23 1.488.694l.543-.84zm-2.9-.576a3.12 3.12 0 00-.27 1.195l1 .025a2.09 2.09 0 01.183-.812l-.913-.408zm-.27 1.195c-.01.413.06.823.21 1.207l.932-.362a2.12 2.12 0 01-.143-.82l-1-.025zm.322.673a3.354 3.354 0 00-.726 1.091l.924.38c.118-.285.292-.545.51-.765l-.708-.706zm-.726 1.091A3.354 3.354 0 002 5.93l1-.003c0-.31.06-.616.177-.902l-.924-.38zM2 5.93c0 1.553.458 2.597 1.239 3.268.757.65 1.74.88 2.64.987l.118-.993C5.15 9.09 4.416 8.89 3.89 8.438 3.388 8.007 3 7.276 3 5.928H2zm3.585 3.404c-.5.498-.629 1.09-.584 1.704L6 10.963c-.03-.408.052-.683.291-.921l-.705-.709zM5 11v3.5h1V11H5zm5 3.5V13H9v1.5h1zm0-1.5v-2.063H9V13h1z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
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
