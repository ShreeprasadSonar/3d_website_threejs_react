import { useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'

import planeScene from '../assets/3d/fedex_plane.glb'
import { useFrame } from '@react-three/fiber';

const Plane = ({...props}) => {
  const planeRef = useRef();
  const {scene, animations} = useGLTF(planeScene); 
  const { actions } = useAnimations(animations, planeRef);

  useEffect(() => {
    // actions['Landing Gear + Engines'].play();
  }, []);

  useFrame(({clock, camera}) => {
    planeRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    if(planeRef.current.position.x > camera.position.x + 9){
      planeRef.current.rotation.y = 0;
    } else if(planeRef.current.position.x < camera.position.x - 9){
      planeRef.current.rotation.y = Math.PI;
    }

    if(planeRef.current.rotation.y === 0){
      planeRef.current.position.x -= 0.022;
      planeRef.current.position.z += 0.01;
    } else {
      planeRef.current.position.x += 0.022;
      planeRef.current.position.z -= 0.01;
    }
  });

  return (
    <mesh
      {...props}
      rotation={[0.4, 3.5, 0]}
      ref={planeRef}>
        <primitive object={scene} />
    </mesh>
  );
}

export default Plane
