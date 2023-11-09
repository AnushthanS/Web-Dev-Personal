import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const orbit = useGLTF('./orbit/model.gltf');
  return (
    <mesh>
      <ambientLight intensity={1.5} />
      <pointLight intensity={1.0} position={[-4, 0, 0]} />
      <hemisphereLight intensity={3.0} groundColor="black" position={[-4, -1, -1]} />
      <spotLight
        angle={0.12}
        penumbra={1}
        intensity={1
          .0}
        castShadow
        shadow-mapSize={1024}
        position={[-2, 4, 4]}
      />

      <primitive
        object={orbit.scene}
        scale={isMobile ? 0.55 : 1.0}
        position={isMobile ? [-2, -2, -2] : [-4, -2, -2]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(max-width: 500px)`
    );
    setIsMobile(mediaQuery.matches);
    
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
    >

      <Suspense fallback={<CanvasLoader />} >
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />

    </Canvas>
  );
}

export default ComputersCanvas;