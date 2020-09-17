import React from "react"
import Navbar from "../components/navbar"

const Layout = props => {
  const { children } = props
  const [toggleNav] = React.useState(false)

  return (
    <div className={"site-wrapper"}>
      <main id="site-main">
        <div id="swup">{children}</div>
      </main>
      <Navbar />
    </div>
  )
}

export default Layout
