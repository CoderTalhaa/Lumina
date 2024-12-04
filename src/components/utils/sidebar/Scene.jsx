import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import React, { Suspense, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { AnimatePresence } from "framer-motion";

export default function Scene({ hoveredNode }) {
  return (
    <Canvas dpr={[1, 1.5]} gl={{ antialias: true }}>
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        <Model scale={[0.1, 0.1, 0.1]} hoveredNode={hoveredNode} />
        <Environment preset="city" />
        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={1} levels={7} intensity={1} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}

function Model({ hoveredNode, ...props }) {
  const { nodes } = useGLTF("/models/wire.glb");
  const modelRef = useRef(null);

  useFrame((_, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta;
    }
  });

  const opacity = {
    hidden: {
      opacity: 0,
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
    },
    visible: {
      opacity: 1,
    },
  };

  const scale = {
    initial: {
      scale: 0,
    },
    hidden: {
      scale: 0.001,
      transition: { duration: 0.2, ease: [0.76, 0, 0.24, 1] },
    },
    visible: {
      scale: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <group {...props} dispose={null} ref={modelRef}>
      <group name="Scene">
        <AnimatePresence>
          {Object.keys(nodes).map((nodeKey, i) => (
            <motion.mesh
              key={i}
              name={nodeKey}
              castShadow
              receiveShadow
              geometry={nodes[nodeKey].geometry}
              variants={scale}
              initial="initial"
              animate={hoveredNode === nodeKey ? "visible" : "hidden"}
            >
              <motion.meshStandardMaterial
                color={"#FF4D00"}
                opacity={opacity}
                variants={opacity}
                initial="hidden"
                animate={hoveredNode === nodeKey ? "visible" : "hidden"}
              />
            </motion.mesh>
          ))}
        </AnimatePresence>
      </group>
    </group>
  );
}

useGLTF.preload("/models/wire.glb");
