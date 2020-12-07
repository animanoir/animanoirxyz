import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import photo from '../../content/assets/oamm.gif'
import '../utils/normalize.css'
import '../utils/css/pages/about.css'
import { keywordsArray } from '../utils/keywordsArray'

const Acerca = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <>
      <Layout title={siteTitle}>
        <SEO title="About" keywords={keywordsArray} />
        <article>
          <div className="about-container"></div>
          <h1 className="page-subtitle">Óscar A. Montiel</h1>
          <p className="page-p">
            Software developer, (tryhard) multimedia artist
          </p>
          <div className="page-p">
            <p>
              <b>Current interests:</b>
            </p>
            <p>
              3D in web, virtuality, philosophy, JS, general computing
              knowledge.
            </p>
          </div>
          <img
            className="about-img"
            src={photo}
            alt="Animanoir Óscar A. Montiel Animation"
          />
        </article>
      </Layout>
    </>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default (props) => (
  <StaticQuery
    query={indexQuery}
    render={(data) => (
      <Acerca location={props.location} data={data} {...props} />
    )}
  />
)
