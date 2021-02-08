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
      <h1 className="page-title fade-in">ZeYX Lab</h1>
      <div className="fade-in page-txt-container">
        <h2 className="page-subtitle">Third-dimension web creation.</h2>
        <p className="page-p">
          <a href="https://zeyxlab.com/">ZeYX Lab</a> is an on-going experiment
          teamed up by{' '}
          <a
            href="https://www.instagram.com/salvador_herrera_art/"
            target="_blank"
            rel="noreferrer"
          >
            Salvador Herrera
          </a>
          , Emmanuel Martínez and myself where we try to expand the notion of
          art in the cyberspace, focused in 3D experimentation.
        </p>

        <p className="page-p">
          Mostly using libraries such <b>Three.js</b>, <b>A-Frame</b> and alike,
          plus technology that let´s us imagine, we try to deform the mind of
          the cyber-voyagers.
        </p>
      </div>
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
