import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import aos from 'aos'
import 'aos/dist/aos.css'
import PageLayout from '../components/PageLayout'
import SEO from '../components/seo'
import '../utils/css/main.css'

import img1 from '../../content/assets/projects/zeyx/zeyx-img1.webp'
import img2 from '../../content/assets/projects/zeyx/zeyx-img2.webp'
import img3 from '../../content/assets/projects/zeyx/zeyx-img3.webp'

const ZeyxLab = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  useEffect(() => {
    aos.init({
      duration: 1000,
    })
  }, [])

  return (
    <PageLayout title={siteTitle}>
      <SEO title="ZeYX Lab" />
      <div className="page-img-container">
        <img
          data-aos={'fade-right'}
          className="page-img"
          src={img1}
          alt="ZeYX Lab Animanoir"
        />
        <img
          data-aos={'fade-left'}
          className="page-img-left"
          src={img2}
          alt="ZeYX Lab Animanoir"
        />
      </div>
      <h1 className="page-title fade-in">ZeYX Lab</h1>
      <div data-aos={'fade-up'} className="page-txt-container">
        <h2 className="page-subtitle">Experimentos con 3D</h2>
        <p className="page-p">
          ZeYX Lab is an on-going experiment teamed up by{' '}
          <a
            href="https://www.instagram.com/salvador_herrera_art/"
            target="_blank"
            rel="noreferrer"
          >
            Salvador Herrera
          </a>
          , Emmanuel Martínez and myself where we try to expand the notion of
          art into the cyberspace, focused in 3D modelling.
        </p>
      </div>
      <div className="page-img-container-ind">
        <img
          data-aos={'fade-up'}
          className="page-img"
          src={img3}
          alt="ZeYX Lab Animanoir"
        />
      </div>
      <div data-aos={'fade-up'} className="page-txt-container">
        <p className="page-p">
          Using a variety of JavaScript frameworks (three.js, A-Frame, etc.) we
          invite artists to join this project, a dream of an android during
          apotheosis.
        </p>
      </div>
    </PageLayout>
  )
}

export default ZeyxLab

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
