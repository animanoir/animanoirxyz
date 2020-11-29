import React from 'react'

const Footer = () => (
  <footer className="site-foot">
    &copy; {new Date().getFullYear()}{' '}
    <a
      target="_blank"
      rel="noreferrer"
      href="mailto:omontiel@animanoir.com?subject=❤️"
    >
      Animanoir | <span>Óscar A. Montiel</span> | Site under construction |{' '}
      <span>omontiel@animanoir.com</span>
    </a>
  </footer>
)

export default Footer
