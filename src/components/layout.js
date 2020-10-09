import React from "react"
import Sidebar from "../components/Sidebar"

const Layout = (props) => {
  const { children } = props

  return (
    <main>
      <div id="site-main">
        <Sidebar />
        <div className="inner-main">
          <div className="page">{children}</div>
        </div>
      </div>
    </main>
  )
}

export default Layout
