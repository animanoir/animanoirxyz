import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import PageLayout from '../components/PageLayout'
import SEO from '../components/seo'
import photo from '../../content/assets/oamm.gif'
import '../utils/normalize.css'
import '../utils/css/pages/about.css'
import { keywordsArray } from '../utils/keywordsArray'

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <>
      <PageLayout title={siteTitle}>
        <SEO title="About" keywords={keywordsArray} />
        <article className="page-template">
          <div className="about-container">
            <img
              className="about-img"
              src={photo}
              alt="Animanoir Óscar A. Montiel Animation"
            ></img>
          </div>
        </article>
      </PageLayout>
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
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
