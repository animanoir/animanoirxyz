import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faTwitter, faEllo } from "@fortawesome/free-solid-svg-icons"

const phrases = [
  "animanoir",
  "computers",
  "digital death",
  "fantasma en la máquina",
  "ghost in the machine",
  "irrefacto",
  "apoptosis",
  "goecia",
  "autoscopia",
  "anoxia",
  "disforia",
  "escólex",
  "noesis",
  "taenia",
  "etérico",
  "liminal",
  "histerésis",
  "autopoiesis",
  "infatuación",
  "3D",
  "interacción",
  "imaginación",
]
var i = 0

const Navbar = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  const [index, setIndex] = useState(0)

  const handleWordChange = () => {
    let index = Math.floor(Math.random() * phrases.length)
    while (index === 0) {
      index = Math.floor(Math.random() * phrases.length)
    }
    setIndex(index)
  }

  return (
    <nav className='custom-navbar'>
      <Link to='/'><h1 className='title'>Animanoir</h1></Link>
      <Link to='/about'><p className='links'>.about</p></Link>
      <Link to='/'><p className='links'>.blog (coming soon)</p></Link>
    </nav>
  )
}

export default Navbar
