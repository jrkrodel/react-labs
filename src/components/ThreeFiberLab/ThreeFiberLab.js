import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import "./three.css";
import Box from "./Box";
import { useSpring, animated } from "@react-spring/three";

export default function ThreeFiberLab() {
  const [selectedBoxPos, setSelectedBoxPos] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const { stageRotation } = useSpring({ stageRotation: -selectedBoxPos.x });

  return (
    <div id="threeContent">
      <Canvas>
        <ambientLight intensity={0.1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-8, -2 - 2]} />

        <animated.group rotation-y={stageRotation}>
          <Box position={[1.2, 1, 0]} setBoxSelected={setSelectedBoxPos} />
          <Box position={[-1, 1, 0]} setBoxSelected={setSelectedBoxPos} />
        </animated.group>

        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1, 0]}
          scale={[200, 20, 20]}
        >
          <planeGeometry />
          <meshStandardMaterial color={"blue"} />
        </mesh>
      </Canvas>
    </div>
  );
}
