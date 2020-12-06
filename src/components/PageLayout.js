import React from 'react'
import Sidebar from '../components/Sidebar'
import '../utils/normalize.css'
import '../utils/css/main.css'

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
