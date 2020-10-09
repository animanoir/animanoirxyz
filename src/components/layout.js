import React from "react"
import Navbar from "../components/navbar"

const Layout = props => {
  const { children } = props

  return (
    <main>
      <div id="site-main">{children}</div>
    </main>
  )
}

export default Layout
