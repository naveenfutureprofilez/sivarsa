// src/Cube.js
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const Cube = ({ position }) => {
  const mesh = useRef();
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleCubeClick = () => {
    setRotation({
      x: rotation.x + Math.PI / 2,
      y: rotation.y + Math.PI / 2,
    });
  };

  useFrame(() => {
    mesh.current.rotation.x = rotation.x;
    mesh.current.rotation.y = rotation.y;
  });

  return (
    <mesh
      position={position}
      ref={mesh}
      onClick={handleCubeClick}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default Cube;
