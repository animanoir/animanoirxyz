import React from 'react'
import Sidebar from '../components/Sidebar'

const PageLayout = (props) => {
  const { children } = props

  return (
    <main>
      <div className="foreground" />
      <div className="page-full"> {children} </div>
      <Sidebar />
    </main>
  )
}

export default PageLayout
