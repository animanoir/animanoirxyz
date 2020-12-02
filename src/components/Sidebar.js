import React from 'react'
import { Link } from 'gatsby'
import logo from '../../content/assets/favicons/animanoir-logo.svg'

const Sidebar = () => {
  return (
    <nav className="custom-sidebar">
      <div className="main-logo">
        <Link to="/">
          <img src={logo} alt="Animanoir Logo" />
        </Link>
      </div>
    </nav>
  )
}

export default Sidebar
