import React from 'react'

import planeScene from '../assets/3d/fedex_plane.glb'
import { useGLTF } from '@react-three/drei'

const Plane = ({isRotating, ...props}) => {
  const {scene, animaitons} = useGLTF(planeScene);
  return (
    <mesh {...props}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Plane