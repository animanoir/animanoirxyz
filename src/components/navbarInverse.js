import React from 'react'
import { Link } from 'gatsby'

const Sidebar = (props) => (
  <nav className="custom-Sidebar fade-in">
    <Link to="/about">
      <span className="links">.about</span>
    </Link>
    <Link to="/">
      <span className="links">.blog (coming soon)</span>
    </Link>
    <Link to="https://animanoir.com">
      <span className="links" target="_blank">
        animanoir.com
      </span>
    </Link>
    <Link to="/">
      <h1 className="title">Animanoir</h1>
    </Link>
  </nav>
)

export default Sidebar
