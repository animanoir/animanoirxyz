import React, { useState, useRef } from 'react'
import { Canvas, useFrame, extend } from 'react-three-fiber'
import '../utils/css/main.css'
import * as THREE from 'three'
import * as meshline from 'three.meshline'

extend(meshline)

const numLines = 100
const lines = new Array(numLines).fill()
const colors = ['#ff0080', '#3eff3f']

function Fatline() {
  const material = useRef()
  const [color] = useState(
    () => colors[parseInt(colors.length * Math.random())]
  )
  const [ratio] = useState(() => 0.3 + 0.3 * Math.random())
  const [width] = useState(() => Math.max(0.01, 0.03 * Math.random()))
  // Calculate wiggly curve
  const [curve] = useState(() => {
    let pos = new THREE.Vector3(
      33 - 60 * Math.random(),
      -5,
      30 - 63 * Math.random()
    )
    return new Array(30)
      .fill()
      .map(() =>
        pos
          .add(
            new THREE.Vector3(
              2 - Math.random() * 4,
              4 - Math.random() * 2,
              5 - Math.random() * 7
            )
          )
          .clone()
      )
  })
  // Hook into the render loop and decrease the materials dash-offset
  useFrame(() => (material.current.uniforms.dashOffset.value -= 0.0005))
  return (
    <mesh>
      {/** MeshLine and CMRCurve are a OOP factories, not scene objects, hence all the imperative code in here :-( */}
      <meshLine onUpdate={(self) => (self.parent.geometry = self.geometry)}>
        <geometry onUpdate={(self) => self.parent.setGeometry(self)}>
          <catmullRomCurve3
            args={[curve]}
            onUpdate={(self) => (self.parent.vertices = self.getPoints(55))}
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
        dashArray={0.7}
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
      0,
      2 * Math.sin(THREE.Math.degToRad((theta += 0.001))),
      2 * Math.sin(THREE.Math.degToRad((theta += 0.001)))
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
    camera={{ position: [-10, 50, 10], fov: 75 }}
  >
    <Scene />
  </Canvas>
)

export default FloatingSouls
