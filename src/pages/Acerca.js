import React, { useState } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import LastFmData from '../components/LastFmData'
import SEO from '../components/seo'
import photo from '../../content/assets/oamm.gif'
import '../utils/normalize.css'
import '../utils/css/pages/about.css'
import { keywordsArray } from '../utils/keywordsArray'
import cv2021 from '../../content/assets/C.V.Ó.A.M.2020.pdf'

const colores = [
  '#FF6633',
  '#FFB399',
  '#FF33FF',
  '#FFFF99',
  '#00B3E6',
  '#E6B333',
  '#3366E6',
  '#999966',
  '#99FF99',
  '#B34D4D',
  '#80B300',
  '#809900',
  '#E6B3B3',
  '#6680B3',
  '#66991A',
  '#FF99E6',
  '#CCFF1A',
  '#FF1A66',
  '#E6331A',
  '#33FFCC',
  '#66994D',
  '#B366CC',
  '#4D8000',
  '#B33300',
  '#CC80CC',
  '#66664D',
  '#991AFF',
  '#E666FF',
  '#4DB3FF',
  '#1AB399',
  '#E666B3',
  '#33991A',
  '#CC9999',
  '#B3B31A',
  '#00E680',
  '#4D8066',
  '#809980',
  '#E6FF80',
  '#1AFF33',
  '#999933',
  '#FF3380',
  '#CCCC00',
  '#66E64D',
  '#4D80CC',
  '#9900B3',
  '#E64D66',
  '#4DB380',
  '#FF4D4D',
  '#99E6E6',
  '#6666FF',
]

const Acerca = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const [colorO, setColorO] = useState()
  const [colorS, setColorS] = useState()
  const [colorC, setColorC] = useState()
  const [colorA, setColorA] = useState()
  const [colorR, setColorR] = useState()
  const [colorM, setColorM] = useState()
  const [colorN, setColorN] = useState()
  const [colorT, setColorT] = useState()
  const [colorI, setColorI] = useState()
  const [colorE, setColorE] = useState()
  const [colorL, setColorL] = useState()

  const randomColor = () => colores[Math.floor(Math.random() * colores.length)]

  return (
    <>
      <Layout title={siteTitle} className="about-page">
        <SEO title="About" keywords={keywordsArray} />
        <main className="fade-in centrar">
          <div className="acerca-contenedor">
            <div className="about-contact">
              <h1 className="main-p-title">
                <span
                  className="letra-interactiva"
                  onMouseEnter={() => setColorO(randomColor)}
                  style={{ color: colorO }}
                >
                  Ó
                </span>
                <span
                  className="letra-interactiva"
                  onMouseEnter={() => setColorS(randomColor)}
                  style={{ color: colorS }}
                >
                  s
                </span>
                <span
                  className="letra-interactiva"
                  onMouseEnter={() => setColorC(randomColor)}
                  style={{ color: colorC }}
                >
                  c
                </span>
                <span
                  className="letra-interactiva"
                  onMouseEnter={() => setColorA(randomColor)}
                  style={{ color: colorA }}
                >
                  a
                </span>
                <span
                  className="letra-interactiva"
                  onMouseEnter={() => setColorR(randomColor)}
                  style={{ color: colorR }}
                >
                  r
                </span>{' '}
                <span
                  className="letra-interactiva"
                  onMouseEnter={() => setColorA(randomColor)}
                  style={{ color: colorA }}
                >
                  A
                </span>
                .{' '}
                <span
                  className="letra-interactiva"
                  onMouseEnter={() => setColorM(randomColor)}
                  style={{ color: colorM }}
                >
                  M
                </span>
                <span
                  className="letra-interactiva"
                  onMouseEnter={() => setColorO(randomColor)}
                  style={{ color: colorO }}
                >
                  o
                </span>
                <span
                  className="letra-interactiva"
                  onMouseEnter={() => setColorN(randomColor)}
                  style={{ color: colorN }}
                >
                  n
                </span>
                <span
                  className="letra-interactiva"
                  onMouseEnter={() => setColorT(randomColor)}
                  style={{ color: colorT }}
                >
                  t
                </span>
                <span
                  className="letra-interactiva"
                  onMouseEnter={() => setColorI(randomColor)}
                  style={{ color: colorI }}
                >
                  i
                </span>
                <span
                  className="letra-interactiva"
                  onMouseEnter={() => setColorE(randomColor)}
                  style={{ color: colorE }}
                >
                  e
                </span>
                <span
                  className="letra-interactiva"
                  onMouseEnter={() => setColorL(randomColor)}
                  style={{ color: colorL }}
                >
                  l
                </span>
                , MX
              </h1>
              <div></div>
              <LastFmData />
              <div className="about-links">
                <a
                  target="_blank"
                  href="https://twitter.com/intent/user?screen_name=geosminu"
                >
                  <svg
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                  >
                    <path
                      d="M14.478 1.5l.5-.033a.5.5 0 00-.871-.301l.371.334zm-.498 2.959a.5.5 0 10-1 0h1zm-6.49.082h-.5.5zm0 .959h.5-.5zm-6.99 7V12a.5.5 0 00-.278.916L.5 12.5zm.998-11l.469-.175a.5.5 0 00-.916-.048l.447.223zm3.994 9l.354.353a.5.5 0 00-.195-.827l-.159.474zm7.224-8.027l-.37.336.18.199.265-.04-.075-.495zm1.264-.94c.051.778.003 1.25-.123 1.606-.122.345-.336.629-.723 1l.692.722c.438-.42.776-.832.974-1.388.193-.546.232-1.178.177-2.006l-.998.066zm0 3.654V4.46h-1v.728h1zm-6.99-.646V5.5h1v-.959h-1zm0 .959V6h1v-.5h-1zM10.525 1a3.539 3.539 0 00-3.537 3.541h1A2.539 2.539 0 0110.526 2V1zm2.454 4.187C12.98 9.503 9.487 13 5.18 13v1c4.86 0 8.8-3.946 8.8-8.813h-1zM1.03 1.675C1.574 3.127 3.614 6 7.49 6V5C4.174 5 2.421 2.54 1.966 1.325l-.937.35zm.021-.398C.004 3.373-.157 5.407.604 7.139c.759 1.727 2.392 3.055 4.73 3.835l.317-.948c-2.155-.72-3.518-1.892-4.132-3.29-.612-1.393-.523-3.11.427-5.013l-.895-.446zm4.087 8.87C4.536 10.75 2.726 12 .5 12v1c2.566 0 4.617-1.416 5.346-2.147l-.708-.706zm7.949-8.009A3.445 3.445 0 0010.526 1v1c.721 0 1.37.311 1.82.809l.74-.671zm-.296.83a3.513 3.513 0 002.06-1.134l-.744-.668a2.514 2.514 0 01-1.466.813l.15.989zM.222 12.916C1.863 14.01 3.583 14 5.18 14v-1c-1.63 0-3.048-.011-4.402-.916l-.556.832z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/animaxyzyxnoir/"
                >
                  <svg
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                  >
                    <path
                      d="M11 3.5h1M4.5.5h6a4 4 0 014 4v6a4 4 0 01-4 4h-6a4 4 0 01-4-4v-6a4 4 0 014-4zm3 10a3 3 0 110-6 3 3 0 010 6z"
                      stroke="currentColor"
                    ></path>
                  </svg>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/oscaramontiel/"
                >
                  <svg
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                  >
                    <path
                      d="M4.5 6v5m6 0V8.5a2 2 0 10-4 0V11 6M4 4.5h1M1.5.5h12a1 1 0 011 1v12a1 1 0 01-1 1h-12a1 1 0 01-1-1v-12a1 1 0 011-1z"
                      stroke="currentColor"
                    ></path>
                  </svg>
                </a>
                <a target="_blank" href="https://github.com/animanoir">
                  <svg
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                  >
                    <path
                      d="M5.65 12.477a.5.5 0 10-.3-.954l.3.954zm-3.648-2.96l-.484-.128-.254.968.484.127.254-.968zM9 14.5v.5h1v-.5H9zm.063-4.813l-.054-.497a.5.5 0 00-.299.852l.352-.354zM12.5 5.913h.5V5.91l-.5.002zm-.833-2.007l-.466-.18a.5.5 0 00.112.533l.354-.353zm-.05-2.017l.456-.204a.5.5 0 00-.319-.276l-.137.48zm-2.173.792l-.126.484a.5.5 0 00.398-.064l-.272-.42zm-3.888 0l-.272.42a.5.5 0 00.398.064l-.126-.484zM3.383 1.89l-.137-.48a.5.5 0 00-.32.276l.457.204zm-.05 2.017l.354.353a.5.5 0 00.112-.534l-.466.181zM2.5 5.93H3v-.002l-.5.002zm3.438 3.758l.352.355a.5.5 0 00-.293-.851l-.06.496zM5.5 11H6l-.001-.037L5.5 11zM5 14.5v.5h1v-.5H5zm.35-2.977c-.603.19-.986.169-1.24.085-.251-.083-.444-.25-.629-.49a4.8 4.8 0 01-.27-.402c-.085-.139-.182-.302-.28-.447-.191-.281-.473-.633-.929-.753l-.254.968c.08.02.184.095.355.346.082.122.16.252.258.412.094.152.202.32.327.484.253.33.598.663 1.11.832.51.168 1.116.15 1.852-.081l-.3-.954zm4.65-.585c0-.318-.014-.608-.104-.878-.096-.288-.262-.51-.481-.727l-.705.71c.155.153.208.245.237.333.035.105.053.254.053.562h1zm-.884-.753c.903-.097 1.888-.325 2.647-.982.78-.675 1.237-1.729 1.237-3.29h-1c0 1.359-.39 2.1-.892 2.534-.524.454-1.258.653-2.099.743l.107.995zM13 5.91a3.354 3.354 0 00-.98-2.358l-.707.706c.438.44.685 1.034.687 1.655l1-.003zm-.867-1.824c.15-.384.22-.794.21-1.207l-1 .025a2.12 2.12 0 01-.142.82l.932.362zm.21-1.207a3.119 3.119 0 00-.27-1.195l-.913.408c.115.256.177.532.184.812l1-.025zm-.726-.99c.137-.481.137-.482.136-.482h-.003l-.004-.002a.462.462 0 00-.03-.007 1.261 1.261 0 00-.212-.024 2.172 2.172 0 00-.51.054c-.425.091-1.024.317-1.82.832l.542.84c.719-.464 1.206-.634 1.488-.694a1.2 1.2 0 01.306-.03l-.008-.001a.278.278 0 01-.01-.002l-.006-.002h-.003l-.002-.001c-.001 0-.002 0 .136-.482zm-2.047.307a8.209 8.209 0 00-4.14 0l.252.968a7.209 7.209 0 013.636 0l.252-.968zm-3.743.064c-.797-.514-1.397-.74-1.822-.83a2.17 2.17 0 00-.51-.053 1.259 1.259 0 00-.241.03l-.004.002h-.003l.136.481.137.481h-.001l-.002.001-.003.001a.327.327 0 01-.016.004l-.008.001h.008a1.19 1.19 0 01.298.03c.282.06.769.23 1.488.694l.543-.84zm-2.9-.576a3.12 3.12 0 00-.27 1.195l1 .025a2.09 2.09 0 01.183-.812l-.913-.408zm-.27 1.195c-.01.413.06.823.21 1.207l.932-.362a2.12 2.12 0 01-.143-.82l-1-.025zm.322.673a3.354 3.354 0 00-.726 1.091l.924.38c.118-.285.292-.545.51-.765l-.708-.706zm-.726 1.091A3.354 3.354 0 002 5.93l1-.003c0-.31.06-.616.177-.902l-.924-.38zM2 5.93c0 1.553.458 2.597 1.239 3.268.757.65 1.74.88 2.64.987l.118-.993C5.15 9.09 4.416 8.89 3.89 8.438 3.388 8.007 3 7.276 3 5.928H2zm3.585 3.404c-.5.498-.629 1.09-.584 1.704L6 10.963c-.03-.408.052-.683.291-.921l-.705-.709zM5 11v3.5h1V11H5zm5 3.5V13H9v1.5h1zm0-1.5v-2.063H9V13h1z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="about-contenido">
                <h3 className="about-contenido_title">
                  {' '}
                  <a target="_blank" href="mailto:omontiel@animanoir.xyz">
                    omontiel@animanoir.xyz
                  </a>
                </h3>
                <h3 className="about-contenido_title">
                  {' '}
                  <a target="_blank" href={cv2021}>
                    FULL C.V.
                  </a>
                </h3>
              </div>
            </div>
            <img
              className="about-img"
              src={photo}
              alt="Animanoir Óscar A. Montiel Animation"
            />
          </div>
        </main>
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

// <h3 className="about-contenido_title">+ WORKS:</h3>
// <h3
//   style={{ fontSize: '1.5rem', marginBottom: '-.7rem' }}
//   className="about-contenido_title"
// >
//   2020
// </h3>
// <ul className="about-work">
//   <li className="about-work">
//     <p>Programming teacher · BEMA</p>
//   </li>
//   <li className="about-work">
//     <p>
//       {' '}
//       <a href="https://twitter.com/neofilosofias">
//         @neofilosofias
//       </a>
//       · (twitter bot which discovers new philosophies even
//       before they exist [¿what exists, anyways?)
//     </p>
//   </li>
// </ul>
// <h3
//   style={{ fontSize: '1.5rem', marginBottom: '-.7rem' }}
//   className="about-contenido_title"
// >
//   2015
// </h3>
// <ul className="about-work">
//   <li className="about-work">
//     <p>
//       Essay{' '}
//       <a
//         target="_blank"
//         href="https://www.researchgate.net/publication/344676841_Homo_Techno_Sapiens"
//       >
//         <i>Homo techno sapiens</i>
//       </a>{' '}
//       · Facultad de Bellas Artes | UAQ
//     </p>
//   </li>
// </ul>
// <h3
//   style={{ fontSize: '1.5rem', marginBottom: '-.7rem' }}
//   className="about-contenido_title"
// >
//   2014
// </h3>
// <ul className="about-work">
//   <li className="about-work">
//     <p>
//       Content writer · CutOut Fest | Animation and digital art
//       festival
//     </p>
//   </li>
// </ul>
