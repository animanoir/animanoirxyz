import React from 'react'
import FloatingLogo from '../components/FloatingLogo'
import LeftSidebar from '../components/LeftSidebar'
import FloatingSouls from '../components/FloatingSouls'

const Layout = ({ children, className }) => {
  return (
    <main>
      <div className="foreground" />
      <div className="fixed-frame fade-in">
        <FloatingSouls />
        <LeftSidebar />
        <FloatingLogo />
      </div>
      <div className={className}> {children} </div>
    </main>
  )
}

export default Layout
