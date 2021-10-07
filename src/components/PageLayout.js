import React from 'react'
import FloatingLogo from '../components/FloatingLogo'

const PageLayout = (props) => {
  const { children } = props

  return (
    <main>
      <div className="foreground" />
      <FloatingLogo />
      <div className="page-full"> {children} </div>
    </main>
  )
}

export default PageLayout
