import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const Matrix = () => {
  var array = [];
  for (let i = -1.5; i < 5; i++) {
    for (let j = -2; j < 3; j++) {
      array.push(<Box key={i * 10 + j} position={[i * 1.3, j * 1.3, 0]} />);
    }
  }
  return array;
};

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() =>
    hovered
      ? mesh.current.rotation.x < 1.5
        ? (mesh.current.rotation.x += 0.04)
        : null
      : mesh.current.rotation.x > 0.0
      ? (mesh.current.rotation.x -= 0.002)
      : null
  );

  useFrame(() => (mesh.current.rotation.z += 0.001));

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={1}
      onClick={(event) => {
        setActive(!active);
      }}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 0.15]} />
      <meshStandardMaterial color={hovered ? "#1C2833" : "#17202A"} />
    </mesh>
  );
}

const Solids = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Matrix />
    </Canvas>
  );
};

export default Solids;
