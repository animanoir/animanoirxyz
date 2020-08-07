import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import Navbar from "./navbar"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faTwitter, faEllo } from "@fortawesome/free-solid-svg-icons"

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  const [index, setIndex] = useState(0)

  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <Navbar />
      <main id="site-main" className="site-main">
        <div id="swup">{children}</div>
      </main>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()}{" "}
        <a target="_blank" href="mailto:omontiel@animanoir.com?subject=❤️">
          Animanoir | <span>Óscar A. Montiel</span> | Site under construction |{" "}
          <span>omontiel@animanoir.com</span>
        </a>
      </footer>
    </div>
  )
}

export default Layout
