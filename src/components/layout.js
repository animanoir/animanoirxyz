import React from "react"
import Navbar from "./navbar"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faTwitter, faEllo } from "@fortawesome/free-solid-svg-icons"

const Layout = props => {
  const { children } = props
  const [toggleNav] = React.useState(false)

  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <Navbar />
      <main id="site-main" className="site-main">
        <div id="swup">{children}</div>
      </main>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()}{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:omontiel@animanoir.com?subject=❤️"
        >
          Animanoir | <span>Óscar A. Montiel</span> | Site under construction |{" "}
          <span>omontiel@animanoir.com</span>
        </a>
      </footer>
    </div>
  )
}

export default Layout
