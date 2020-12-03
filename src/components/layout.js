import React from 'react'
import Sidebar from '../components/Sidebar'

const Layout = (props) => {
  const { children } = props

  return (
    <main>
      <div className="foreground" />
      <div className="page"> {children} </div>
      <Sidebar />
    </main>
  )
}

export default Layout
