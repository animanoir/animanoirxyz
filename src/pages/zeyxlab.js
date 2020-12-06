import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import aos from 'aos'
import 'aos/dist/aos.css'
import PageLayout from '../components/PageLayout'
import SEO from '../components/seo'
import '../utils/css/main.css'
import FloatingSouls from '../components/FloatingSouls'

import img1 from '../../content/assets/projects/zeyx/zeyx-img1.jpeg'
import img2 from '../../content/assets/projects/zeyx/zeyx-img2.jpeg'

const ZeyxLab = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  useEffect(() => {
    aos.init({
      duration: 1000,
    })
  }, [])

  return (
    <PageLayout title={siteTitle}>
      <FloatingSouls />
      <SEO title="ZeYX Lab" />
      <h1 className="page-title fade-in">ZeYX Lab</h1>
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
      <div data-aos={'fade-up'} className="page-txt-container">
        <h2 className="page-subtitle">Experimentos con 3D</h2>
        <p className="page-p">
          ZeYX Lab es un proyecto desarrollado entre Salvador Herrera, Emmanuel
          Martínez y yo, donde exploramos las posibilidades post-2020 de
          apreciar arte en un mundo cada vez más virtualizado.
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
