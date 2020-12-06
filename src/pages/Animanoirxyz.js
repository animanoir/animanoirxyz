import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import aos from 'aos'
import 'aos/dist/aos.css'
import PageLayout from '../components/PageLayout'
import SEO from '../components/seo'
import '../utils/css/main.css'
import img1 from '../../content/assets/projects/zeyx/zeyx-img1.jpeg'
import img2 from '../../content/assets/projects/zeyx/zeyx-img2.jpeg'
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
        <h2 className="page-subtitle">Evolución 2 de Animanoir en la web</h2>
        <p className="page-p">
          "El Templo de Obsidiana es un eEspacio1 eArquitectónico donde se
          invoca a una red de narrativas hipermediales para dar presencia a la
          inteligencia colectiva, en un IPoliedro2 vasto y elástico de
          profundidad inconmensurable y de una oscuridad tal que al adentrarse
          se reconfigura el propio reflejo.
        </p>
        <p className="page-p">
          Se desarrollo un <a href="https://hiperoraculo.glitch.me/">oráculo</a>{' '}
          cuya base de datos almacena Twitter donde se alimenta de las
          respuestas que nosotros, humanos, le damos...
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
