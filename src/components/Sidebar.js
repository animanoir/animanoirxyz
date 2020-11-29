import React from 'react'
import { Link } from 'gatsby'
import logo from '../../content/assets/favicons/animanoir-logo.svg'

const Sidebar = () => {
  return (
    <nav className="custom-sidebar">
      <div>
        <Link className="logo-link" to="/">
          <img className="main-logo" src={logo} />
        </Link>
      </div>
      <ul className="custom-menu">
        <li className="custom-link">
          <Link to="/about">about</Link>
        </li>
        <li className="custom-link">
          <Link to="/contact">contact</Link>
        </li>
        <li className="custom-link">
          <Link to="/blog">blog</Link>
        </li>
        <li className="custom-link">
          <Link>stuff</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
