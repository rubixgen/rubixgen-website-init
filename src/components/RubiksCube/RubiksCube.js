import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// Face colors of a Rubik's Cube
const faceColors = [
  "#ffffff", // Right - White
  "#ffff00", // Left - Yellow
  "#0000ff", // Top - Blue
  "#00ff00", // Bottom - Green
  "#ff0000", // Front - Red
  "#ff8000", // Back - Orange
];

// A cube with individual face colors
const ColoredCube = ({ position }) => {
  const materials = faceColors.map((color) => (
    <meshStandardMaterial
      attach="material"
      color={color}
      metalness={0.2}
      roughness={0.5}
      transparent={false}
    />
  ));

  return (
    <mesh position={position}>
      <boxGeometry args={[1, 1, 1]} />
      {materials}
    </mesh>
  );
};

// Main Rubik's Cube 3x3x3
const RubiksCubeScene = () => {
  const groupRef = useRef();

  // Animate entire cube
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
      groupRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      const scale = 1 + 0.02 * Math.sin(state.clock.elapsedTime * 2); // subtle pulse
      groupRef.current.scale.set(scale, scale, scale);
    }
  });

  // Memoized cube positions
  const cubes = useMemo(() => {
    const cubeArray = [];
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          cubeArray.push([x * 1.05, y * 1.05, z * 1.05]);
        }
      }
    }
    return cubeArray;
  }, []);

  return (
    <group ref={groupRef}>
      {cubes.map((position, idx) => (
        <ColoredCube key={idx} position={position} />
      ))}
    </group>
  );
};

const RubiksCube = ({ width = "500px", height = "500px" }) => {
  const containerStyle = {
    width,
    height,
    background: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    aspectRatio: "1 / 1",
  };

  const canvasStyle = {
    background: "transparent",
    width: "100%",
    height: "100%",
    display: "block",
  };

  return (
    <div style={containerStyle}>
      <Canvas
        camera={{
          position: [7, 7, 7],
          fov: 30,
          near: 0.1,
          far: 1000,
          aspect: 1,
        }}
        style={canvasStyle}
        gl={{
          alpha: true,
          antialias: true,
          preserveDrawingBuffer: true,
        }}
        resize={{ scroll: false, debounce: { scroll: 50, resize: 0 } }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <directionalLight position={[-5, 5, 5]} intensity={0.5} />
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
