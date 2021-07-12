import React, { useState, useRef } from 'react'
import { Canvas, useFrame, extend } from 'react-three-fiber'
import '../utils/css/main.css'
import * as THREE from 'three'
import * as meshline from 'three.meshline'

extend(meshline)

const colors = ['#821A26', '#700423', '#4C0524', '#ff0000']

const numLines = 600
const lines = new Array(numLines).fill()

function Fatline() {
  const material = useRef()
  const [color] = useState(
    () => colors[parseInt(colors.length * Math.random())]
  )
  const [ratio] = useState(() => 20 * Math.random())
  const [width] = useState(() => Math.max(0.2 * Math.random()))
  // Calculate wiggly curve
  const [curve] = useState(() => {
    let pos = new THREE.Vector3(
      10 - 2 * Math.random(),
      10 - 2 * Math.random(),
      10 - 2 * Math.random()
    )
    return new Array(50)
      .fill()
      .map(() =>
        pos
          .add(
            new THREE.Vector3(
              2 - Math.random() * 20,
              4 - Math.random() * 100,
              5 - Math.random() * 20
            )
          )
          .clone()
      )
  })
  // Hook into the render loop and decrease the materials dash-offset
  useFrame(() => (material.current.uniforms.dashOffset.value -= 0.0002))
  return (
    <mesh>
      {/** MeshLine and CMRCurve are a OOP factories, not scene objects, hence all the imperative code in here :-( */}
      <meshLine onUpdate={(self) => (self.parent.geometry = self.geometry)}>
        <geometry onUpdate={(self) => self.parent.setGeometry(self)}>
          <catmullRomCurve3
            args={[curve]}
            onUpdate={(self) => (self.parent.vertices = self.getPoints(69))}
          />
        </geometry>
      </meshLine>
      {/** MeshLineMaterial on the other hand is a regular material, so we can just attach it */}
      <meshLineMaterial
        attach="material"
        ref={material}
        transparent
        depthTest={false}
        lineWidth={width}
        color={color}
        dashArray={Math.random() * 20}
        dashRatio={ratio}
      />
    </mesh>
  )
}

function Scene() {
  let group = useRef()
  let theta = 0
  // Hook into the render loop and rotate the scene a bit
  useFrame(() =>
    group.current.rotation.set(
      20,
      20,
      Math.sin(THREE.Math.degToRad((theta += 0.0001)))
    )
  )
  return (
    <group ref={group}>
      {lines.map((_, index) => (
        <Fatline key={index} />
      ))}
    </group>
  )
}

const FloatingSouls = () => (
  <Canvas
    className="custom-canvas fade-in-slow"
    camera={{ position: [-10, 20, 50], fov: 20 }}
  >
    <Scene />
  </Canvas>
)

export default FloatingSouls
