import React, { useState, useRef } from 'react'
import { Canvas, useFrame, extend } from 'react-three-fiber'
import '../utils/css/main.css'
import * as THREE from 'three'
import * as meshline from 'three.meshline'

extend(meshline)

const colors = [
  '#FF6633',
  '#FFB399',
  '#FF33FF',
  '#FFFF99',
  '#00B3E6',
  '#E6B333',
  '#3366E6',
  '#999966',
  '#99FF99',
  '#B34D4D',
  '#80B300',
  '#809900',
  '#E6B3B3',
  '#6680B3',
  '#66991A',
  '#FF99E6',
  '#CCFF1A',
  '#FF1A66',
  '#E6331A',
  '#33FFCC',
  '#66994D',
  '#B366CC',
  '#4D8000',
  '#B33300',
  '#CC80CC',
  '#66664D',
  '#991AFF',
  '#E666FF',
  '#4DB3FF',
  '#1AB399',
  '#E666B3',
  '#33991A',
  '#CC9999',
  '#B3B31A',
  '#00E680',
  '#4D8066',
  '#809980',
  '#E6FF80',
  '#1AFF33',
  '#999933',
  '#FF3380',
  '#CCCC00',
  '#66E64D',
  '#4D80CC',
  '#9900B3',
  '#E64D66',
  '#4DB380',
  '#FF4D4D',
  '#99E6E6',
  '#6666FF',
]

const numLines = 250
const lines = new Array(numLines).fill()
// const colors = ['#fd4c4c', '#fffffff3']

function Fatline() {
  const material = useRef()
  const [color] = useState(
    () => colors[parseInt(colors.length * Math.random())]
  )
  const [ratio] = useState(() => 0.5 + 0.3 * Math.random())
  const [width] = useState(() => Math.max(0.02, 0.03 * Math.random()))
  // Calculate wiggly curve
  const [curve] = useState(() => {
    let pos = new THREE.Vector3(
      10 - 100 * Math.random(),
      10 - 100 * Math.random(),
      10 - 100 * Math.random()
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
        dashArray={Math.random() * 0.9}
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
      14,
      -15 * Math.sin(THREE.Math.degToRad((theta += 0.0001)))
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
    camera={{ position: [20, 2, 50], fov: 100 }}
  >
    <Scene />
  </Canvas>
)

export default FloatingSouls
