/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Jacobs Development (https://sketchfab.com/Jacobs_Development)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-planet-earth-7b1dc4f802a54a6297e7a46888a85f77
Title: Low Poly Planet Earth
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import earthScene from "../assets/3d/low_poly_planet_earth.glb";
import { a } from "@react-spring/three";

const Earth = ({isRotating, setIsRotating, ...props}) => {
  const earthRef = useRef();

  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(earthScene);

  const lastx = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePoniterDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    lastx.current = clientX;
  }

  const handlePoniterUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  }

  const handlePoniterMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if(isRotating){
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;

        const delta = (clientX - lastX.current) / viewport.width;
    
        earthRef.current.rotation.y += delta * Math.PI * 0.01;
        lastX.current = clientX;
        rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  }

  const handleKeyDown = (e) => {
    if(e.key === 'ArrowLeft') {
      if(!isRotating) setIsRotating(true);
      earthRef.current.position.y += 0.01 * Math.PI;
    } else if(e.key === 'ArrowRight') {
      if(!isRotating) setIsRotating(true);
      earthRef.current.position.y -= 0.01 * Math.PI;
    }
  }

  const handleKeyUp = (e) => {
    if(e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      setIsRotating(false);
    }
  }

  useFrame(() => {
    if(!isRotating) {
      rotationSpeed.current *= dampingFactor;
      if(Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }
      earthRef.current.rotation.y += rotationSpeed.current;
    } else {
      const rotation = earthRef.current.rotation.y;

    //   * Normalize the rotation value to ensure it stays within the range [0, 2* Math.PI]. 
    //   * The goal is to ensure that the rotation value remains within a specific range to
    //   * prevent potential issues with very large or negative rotation values.
    //   * Here's a step-by-step explanation of what this code does:
    //   1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when dividedby 2
    //   * Math.PI. This essentially wraps the rotation value around once it reaches a full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI. 
    //   2. (rotation % (2* Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1. This is done to ensure that the value remains positive and within the range of 0 to 2
    //   * Math.PI even if it was negative after the modulo operation in step 1.
    //   3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another modulo operation to the value obtained in step 2. This step guarantees that the value always stays within the range of 0 to 2 
    //   * Math.PI, which is equivalent to a full circle in radians.

      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  })

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener('pointerdown', handlePoniterDown);
    canvas.addEventListener('pointerup', handlePoniterUp);
    canvas.addEventListener('pointermove', handlePoniterMove);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      canvas.removeEventListener('pointerdown', handlePoniterDown);
      canvas.removeEventListener('pointerup', handlePoniterUp);
      canvas.removeEventListener('pointermove', handlePoniterMove)
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    }
  }, [gl, handlePoniterDown, handlePoniterUp, handlePoniterMove]);

  return (
    <a.group ref={earthRef} {...props}>
      <mesh {...props}
        geometry={nodes.Object_Planet_0.geometry}
        material={materials.Planet}
        position={[-0.045, 1.247, 0.066]}
        rotation={[Math.PI, 0, Math.PI]}
      />
    </a.group>
  );
}

export default Earth;

