import React from 'react'
import Sidebar from '../components/Sidebar'

const Layout = ({ children, className }) => {
  return (
    <main>
      <div className="foreground" />
      <div className={className}> {children} </div>
      <Sidebar />
    </main>
  )
}

export default Layout
