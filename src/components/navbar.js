import React from "react"
import { Link } from "gatsby"

const Navbar = props => (
  <nav className="custom-navbar">
    <Link to="/">
      <h1 className="title">Animanoir</h1>
    </Link>
    <Link to="/about">
      <p className="links">.about</p>
    </Link>
    <Link to="/">
      <p className="links">.blog (coming soon)</p>
    </Link>
  </nav>
)

export default Navbar
