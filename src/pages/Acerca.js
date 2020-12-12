import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import LastFmData from '../components/LastFmData'
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
          <div className="about-container">
            <h1 className="about-title">Óscar A. Montiel</h1>
            <p>
              Creative Multimedia .Interactive Design .Web/Software Development
            </p>
            <div>
              <LastFmData />
              <div className="about-contenido">
                <h3 className="about-contenido_title">WORKS</h3>
                <h3
                  style={{ fontSize: '1.5rem' }}
                  className="about-contenido_title"
                >
                  2020
                </h3>
                <ul className="about-work">
                  <li className="about-work">
                    <p>[can't disclose it] · Application Developer</p>
                    <p style={{ color: 'rgba(255, 255, 255, 0.308)' }}>
                      React | Jest
                    </p>
                  </li>
                  <li className="about-work">
                    <p>NUU Group · Frontend/Product Developer</p>
                    <p style={{ color: 'rgba(255, 255, 255, 0.308)' }}>
                      React | Webflow
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <img
              className="about-img"
              src={photo}
              alt="Animanoir Óscar A. Montiel Animation"
            />
          </div>
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
