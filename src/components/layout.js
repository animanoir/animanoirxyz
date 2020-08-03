import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faTwitter, faEllo } from "@fortawesome/free-solid-svg-icons"

const phrases = [
  "animanoir",
  "computers",
  "digital death",
  "fantasma en la máquina",
  "ghost in the machine",
  "irrefacto",
  "apoptosis",
  "goecia",
  "autoscopia",
  "anoxia",
  "disforia",
  "escólex",
  "noesis",
  "taenia",
  "etérico",
  "liminal",
  "histerésis",
  "autopoiesis",
  "infatuación",
  "3D",
  "interacción",
  "imaginación",
]
var i = 0

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  const [index, setIndex] = useState(0)

  const handleWordChange = () => {
    let index = Math.floor(Math.random() * phrases.length)
    while (index === 0) {
      index = Math.floor(Math.random() * phrases.length)
    }
    setIndex(index)
  }

  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <main id="site-main" className="site-main">
        <div id="swup">{children}</div>
      </main>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()}{" "}
        <a target="_blank" href="mailto:omontiel@animanoir.com?subject=❤️">
          Animanoir | <span>Óscar A. Montiel</span> | Working on it |{" "}
          <span>omontiel@animanoir.com</span>
        </a>
      </footer>
    </div>
  )
}

export default Layout
