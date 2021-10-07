import React from 'react'

export const FloatingName = () => {
  const buildLastFmData = () => {
    return (
      <div className="floating-name">
        <p className="actualmente-escuchando">Animanoir</p>
        <p className="artista">
          Art · Software
          <span className="actualmente-escuchando"> · Human · </span> Machine
        </p>
      </div>
    )
  }
  return buildLastFmData()
}

export default FloatingName
