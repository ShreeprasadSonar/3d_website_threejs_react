import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react' //
import Loader from '../components/Loader'

import Earth from '../models/earth';
import Sky from '../models/sky';
import Plane from '../models/Plane';



      {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        PopUP
      </div> */}

const Home = () => {
  const [isRotating, setIsRotating] = useState(false)

  const adjustEarthForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -1, 2];
    let rotation = [0.3, 0, 0];

    if(window.innerWidth < 768) {
      screenScale = [0.8, 0.8, 0.8];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if(window.innerWidth < 768) {
      screenScale = [0.004, 0.004, 0.004];
      screenPosition = [0, 0, 4];
    } else {
      screenScale = [0.005, 0.005, 0.005];
      screenPosition = [[0, 0, 4]];
    }

    return [screenScale, screenPosition]
  }

  const [earthScale, earthPosition, earthRotation] = adjustEarthForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();
  return (
    <section className='w-full h-screen relative'>
      {/* Canvas is a component from react-three/fiber that allows us to create 3D objects */}
      <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{near: 0.1, far: 1000}}
        >
          {/* Used for rendering the loading screen while 3d model is being loaded */}
          <Suspense fallback={<Loader />}>
            <directionalLight position={[1,10,1]} intensity={2}/>
            <ambientLight intensity={0.5}/>
            {/* <pointLight /> */}
            {/* <spotLight /> */}
            <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity="1"/>
            <Sky />
            <Earth 
              position={earthPosition}
              scale={earthScale}
              rotation={earthRotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
            />
            <Plane
              position={planePosition}
              scale={planeScale}
              isRotating={isRotating}
              rotation={[Math.PI/6, Math.PI, 0]}
            />
          </Suspense>
      </Canvas>
    </section>
  )
}

export default Home