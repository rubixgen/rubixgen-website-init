import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, RoundedBox } from '@react-three/drei';

// Individual cube component - no individual movement
const Cube = ({ position }) => {
  return (
    <RoundedBox 
      position={position}
      args={[0.98, 0.98, 0.98]} // width, height, depth
      radius={0.08} // radius of the rounded corners
      smoothness={4} // smoothness of the rounded corners
    >
      <meshStandardMaterial 
        color="#ffffff" 
        metalness={0.2} 
        roughness={0.9}
        transparent={true}
        opacity={0.9}
      />
    </RoundedBox>
  );
};

// Main Rubik's cube component
const RubiksCubeScene = () => {
  const groupRef = useRef();
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  // Generate positions for 3x3x3 cube - memoized to prevent regeneration
  const cubes = useMemo(() => {
    const cubeArray = [];
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          cubeArray.push({
            position: [x * 1.1, y * 1.1, z * 1.1],
          });
        }
      }
    }
    return cubeArray;
  }, []);

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {cubes.map((cube, index) => (
        <Cube
          key={index}
          position={cube.position}
        />
      ))}
    </group>
  );
};

// Main component wrapper
const RubiksCube = ({ width = "500px", height = "500px" }) => {
  // Inline styles to prevent CSS interference
  const containerStyle = {
    width,
    height,
    background: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    aspectRatio: '1 / 1', // Ensure square aspect ratio
  };

  const canvasStyle = {
    background: 'transparent',
    width: '100%',
    height: '100%',
    display: 'block',
  };

  return (
    <div style={containerStyle}>
      <Canvas
        camera={{ 
          position: [7, 7, 7], 
          fov: 30,
          near: 0.1,
          far: 1000,
          aspect: 1 // Force square aspect ratio
        }}
        style={canvasStyle}
        gl={{ 
          alpha: true, 
          antialias: true,
          preserveDrawingBuffer: true
        }}
        resize={{ scroll: false, debounce: { scroll: 50, resize: 0 } }}
        dpr={[1, 2]} // Device pixel ratio for crisp rendering
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <RubiksCubeScene />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate={false}
          enableDamping={true}
          dampingFactor={0.05}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />
      </Canvas>
    </div>
  );
};

export default RubiksCube; 