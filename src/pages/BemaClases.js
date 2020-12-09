import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import aos from 'aos'
import 'aos/dist/aos.css'
import PageLayout from '../components/PageLayout'
import SEO from '../components/seo'
import '../utils/css/main.css'
import img1 from '../../content/assets/projects/bema/bemabg.webp'

const Bema = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  useEffect(() => {
    aos.init({
      duration: 1000,
    })
  }, [])

  return (
    <PageLayout title={siteTitle}>
      <SEO title="BEMA | teaching programming" />
      <h1 className="page-title fade-in">BEMA | teaching programming</h1>
      <div className="page-img-container">
        <img
          data-aos={'fade-left'}
          className="page-img-left"
          src={img1}
          alt="ZeYX Lab Animanoir"
        />
      </div>
      <div data-aos={'fade-up'} className="page-txt-container">
        <h2 className="page-subtitle">
          Me gusta enseñar, o al menos lo intento
        </h2>
        <p className="page-p">
          Por satisfacción, he impartido algunos cursos enfocados a programar
          "arte", en ambos casos usando{' '}
          <a href="https://processing.org/">Processing</a>. El último fue
          realizado dentro de{' '}
          <a href="https://www.facebook.com/bema.space">BEMA</a>.
        </p>
      </div>
    </PageLayout>
  )
}

export default Bema

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
