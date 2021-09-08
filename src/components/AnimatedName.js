import React, { useState } from 'react'

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

const AnimatedName = () => {
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
    <div className="page-FloatingLogo">
      <h1 className="about-title">
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
      </h1>
    </div>
  )
}

export default AnimatedName
