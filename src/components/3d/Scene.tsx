import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

function AnimatedSphere({ color }: { color: string }) {
  const meshRef = useRef<Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.z = t * 0.2;
    meshRef.current.rotation.x = t * 0.2;
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={1.8}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.4}
        metalness={0.8}
      />
    </Sphere>
  );
}

export function Scene({ color }: { color: string }) {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <AnimatedSphere color={color} />
    </Canvas>
  );
}
