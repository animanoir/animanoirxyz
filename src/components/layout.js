import React from "react"
import Navbar from "../components/navbar"

const Layout = props => {
  const { children } = props

  return (
    <div>
      <Navbar />
      <main id="site-main">
        <div id="swup">{children}</div>
      </main>
    </div>
  )
}

export default Layout
