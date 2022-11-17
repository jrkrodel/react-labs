import { useRef } from "react";

export default function Box(props) {
  const mesh = useRef();

  return (
    <mesh
      {...props}
      ref={mesh}
      onClick={(e) => props.setBoxSelected(mesh.current.position)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"yellow"} />
    </mesh>
  );
}
