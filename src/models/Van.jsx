/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: memoov (https://sketchfab.com/movartD)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/fedex-van-554a6a4d30d342f2aca8735aaa69f954
Title: FedEx van
*/

import React, { useRef } from "react";

import vanScene from '../assets/3d/fedex_van.glb'
import { useGLTF } from '@react-three/drei'

const Van = ({...props}) => {
    const {scene, animaitons} = useGLTF(vanScene);
    return (
      <mesh {...props}>
          <primitive object={scene} />
      </mesh>
    )
  }
  
export default Van