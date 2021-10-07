import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import aos from 'aos'
import 'aos/dist/aos.css'
import PageLayout from '../components/PageLayout'
import SEO from '../components/seo'
import '../utils/css/main.css'

const ZeyxLab = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  useEffect(() => {
    aos.init({
      duration: 1000,
    })
  }, [])

  return (
    <PageLayout title={siteTitle}>
      <SEO title="Inmersiva | Twitter bot" />
      <h1 className="page-title fade-in">El Templo de Obsidiana</h1>
      <div data-aos={'fade-up'} className="page-txt-container">
        <h2 className="page-subtitle">El Templo de Obsidiana</h2>
        <p className="page-p">
          <i>
            "El Templo de Obsidiana es un eEspacio1 eArquitectónico donde se
            invoca a una red de narrativas hipermediales para dar presencia a la
            inteligencia colectiva, en un IPoliedro2 vasto y elástico de
            profundidad inconmensurable y de una oscuridad tal que al adentrarse
            se reconfigura el propio reflejo".
          </i>
        </p>
        <p className="page-p">
          I developed a{' '}
          <a href="https://hiperoraculo.glitch.me/">Twitter bot</a> which
          receives outside input and creates new phrases that get posted into
          the Oracle´s account. You can access the 3D project in{' '}
          <a href="https://zeyxlab.com/inmersiva/index.html">Hiperoráculo</a>.
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
