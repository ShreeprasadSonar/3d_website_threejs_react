import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react' //
import Loader from '../components/Loader'

import Earth from '../models/earth';
import Plane from '../models/Plane';
import Van from '../models/Van';
import HomeInfo from '../components/HomeInfo';

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustEarthForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, 0, 0];
    let rotation = [0.13, 4.2, 0];

    if(window.innerWidth < 768) {
      screenScale = [0.33, 0.33, 0.33];
    } else {
      screenScale = [0.34, 0.34, 0.34];
    }

    return [screenScale, screenPosition, rotation];
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if(window.innerWidth < 768) {
      screenScale = [0.02, 0.02, 0.02];
      screenPosition = [-3,9, 1.5];
    } else {
      screenScale = [0.02, 0.02, 0.02];
      screenPosition = [-3,9, 1.5];
    }

    return [screenScale, screenPosition]
  }

  const adjustVanForScreenSize = () => {
    let screenScale, screenPosition, screenRotation;
    screenRotation = [0, Math.PI/2, 0];

    if(window.innerWidth < 768) {
      screenScale = [0.07, 0.07, 0.07];
      screenPosition = [0,-0.45,4];
    } else {
      screenScale = [0.08, 0.08, 0.08];
      screenPosition = [0,-0.52,4];
    }

    return [screenScale, screenPosition, screenRotation]
  }

  const [earthScale, earthPosition, earthRotation] = adjustEarthForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();
  const [vanScale, vanPosition, vanRotation] = adjustVanForScreenSize();
  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      {/* Canvas is a component from react-three/fiber that allows us to create 3D objects */}
      <Canvas 
        className={`w-full h-screen gradient-background ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{near: 0.1, far: 1000}}
        shadows
        >
          {/* Used for rendering the loading screen while 3d model is being loaded */}
          <Suspense fallback={<Loader />}>
            <directionalLight position={[5,10,1]} intensity={0.8} castShadow />
            <ambientLight intensity={0.4}/>
            {/* <pointLight /> */}
            {/* <spotLight /> */}
            <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity="2"/>
            <Plane
              position={planePosition}
              scale={planeScale}
              isRotating={isRotating}
            />
            {/* <Sky 
              position={[0, 0, 0]}
              isRotating={isRotating}
            /> */}
            <Earth 
              position={earthPosition}
              scale={earthScale}
              rotation={earthRotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage}
            />
            <Van 
              position={vanPosition}
              scale={vanScale}
              rotation={vanRotation}
              castShadow
            />
          </Suspense>
      </Canvas>
    </section>
  )
}

export default Home