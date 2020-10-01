import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav className="custom-navbar">
      <Link to="/">
        <h1 className="title">Animanoir</h1>
      </Link>
      <Link to="/about">
        <span className="links">.about</span>
      </Link>
      <Link to="/">
        <span className="links">.blog</span>
      </Link>
      <Link to="https://animanoir.com">
        <span className="links" target="_blank">
          animanoir.com
        </span>
      </Link>
    </nav>
  )
}

export default Navbar
