import React from "react"

const Layout = props => {
  const { children } = props
  const [toggleNav] = React.useState(false)

  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <main id="site-main">
        <div id="swup">{children}</div>
      </main>
    </div>
  )
}

export default Layout
