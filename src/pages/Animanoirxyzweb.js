import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import aos from 'aos'
import 'aos/dist/aos.css'
import PageLayout from '../components/PageLayout'
import SEO from '../components/seo'
import '../utils/css/main.css'

const Animanoirxyz = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  useEffect(() => {
    aos.init({
      duration: 1000,
    })
  }, [])

  return (
    <PageLayout title={siteTitle}>
      <SEO title="Animanoir.xyz" />
      <h1 className="page-title fade-in">Animanoir.xyz</h1>
      <div className="page-iframe-container">
        <iframe
          className="page-iframe"
          title="static_html"
          src="https://animanoir.com/"
        ></iframe>
      </div>
      <div data-aos={'fade-up'} className="page-txt-container">
        <h2 className="page-subtitle">Evolution of this website.</h2>
        <p className="page-p">More info soon...</p>
      </div>
    </PageLayout>
  )
}

export default Animanoirxyz

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
