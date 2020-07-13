import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faEllo } from "@fortawesome/free-solid-svg-icons"

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" className="site-head-left">
            <ul className="nav" role="menu">
              <li className="nav-home nav-current" role="menuitem">
                <Link className="site-head-logo" to={`/`}>
                  animanoir.xyz
                </Link>
              </li>
              <li>
                <a
                  href="https://animanoir.com"
                  title="Animanoir's presentation card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  portfolio
                </a>
              </li>
              <li className="nav-about" role="menuitem">
                <Link to={`/about`}>about</Link>
              </li>
              <li className="nav-tags" role="menuitem">
                <Link to={`/tags`}>post-tags</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup">{children}</div>
      </main>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()}{" "}
        <a
          target="_blank"
          href="mailto:omontiel@animanoir.com?subject=¡Hagamos un proyecto juntos ❤️!"
        >
          omontiel@animanoir.com
        </a>
      </footer>
    </div>
  )
}

export default Layout
