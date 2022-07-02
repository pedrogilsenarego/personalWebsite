import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const Solids = () => {
  function Box(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef();
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    const [color, setColor] = useState(23);
    const [rotationDir, setRotationDir] = useState(0.001);
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

    useFrame(() => (mesh.current.rotation.z += rotationDir));

    const sleep = (time) => {
      return new Promise((resolve) => setTimeout(resolve, time));
    };

    const doSomething = async (value) => {
      for (
        let i = color;
        value === "up" ? i < 60 : i > 23;
        value === "up" ? (i += 1) : (i -= 1)
      ) {
        await sleep(50);
        setColor(i);
      }
    };

    useEffect(() => {
      if (hovered) {
        if (color < 50) doSomething("up");
        else doSomething("down");
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hovered]);

    return (
      <mesh
        {...props}
        ref={mesh}
        scale={1}
        onClick={(event) => {
          setActive(!active);
          setRotationDir(rotationDir * -1);
        }}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        <boxGeometry args={[0.9, 0.9, 0.12]} />
        <meshStandardMaterial color={`rgb(${color}, 32, 42)`} />
      </mesh>
    );
  }

  const Matrix = () => {
    var array = [];
    for (let i = -1.5; i < 5; i++) {
      for (let j = -2; j < 3; j++) {
        array.push(<Box key={i * 10 + j} position={[i * 1.3, j * 1.3, 0]} />);
      }
    }
    return array;
  };
  return (
    <Canvas style={{ zIndex: 2 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Matrix />
    </Canvas>
  );
};

export default Solids;
