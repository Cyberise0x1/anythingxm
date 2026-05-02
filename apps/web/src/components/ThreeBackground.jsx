import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

function detectWebGL() {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    return !!gl;
  } catch (e) {
    return false;
  }
}

function StaticFallback() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
        background:
          "radial-gradient(ellipse at 20% 20%, rgba(0, 212, 170, 0.18), transparent 55%), radial-gradient(ellipse at 80% 30%, rgba(255, 215, 0, 0.10), transparent 55%), radial-gradient(ellipse at 50% 90%, rgba(0, 212, 170, 0.12), transparent 60%), linear-gradient(180deg, #0A1929 0%, #061220 100%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
          opacity: 0.35,
          mixBlendMode: "overlay",
        }}
      />
    </div>
  );
}

export default function ThreeBackground() {
  const containerRef = useRef(null);
  const [webglSupported, setWebglSupported] = useState(null);

  useEffect(() => {
    const supported = detectWebGL();
    setWebglSupported(supported);
    if (!supported) return;
    if (!containerRef.current) return;

    let renderer;
    let animationId;

    try {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000,
      );
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      containerRef.current.appendChild(renderer.domElement);

      const particleCount = 1500;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

        colors[i * 3] = Math.random() * 0.2 + 0.1;
        colors[i * 3 + 1] = Math.random() * 0.6 + 0.4;
        colors[i * 3 + 2] = Math.random() * 0.3 + 0.1;
      }

      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
        size: 0.15,
        vertexColors: true,
        transparent: true,
        opacity: 1,
        blending: THREE.AdditiveBlending,
      });

      const particles = new THREE.Points(geometry, material);
      scene.add(particles);

      const nodeCount = 50;
      const nodePositions = [];
      for (let i = 0; i < nodeCount; i++) {
        nodePositions.push(
          new THREE.Vector3(
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
          ),
        );
      }

      const linePositions = [];
      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const dist = nodePositions[i].distanceTo(nodePositions[j]);
          if (dist < 4) {
            linePositions.push(
              nodePositions[i].x,
              nodePositions[i].y,
              nodePositions[i].z,
              nodePositions[j].x,
              nodePositions[j].y,
              nodePositions[j].z,
            );
          }
        }
      }

      const lineGeometry = new THREE.BufferGeometry();
      lineGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(linePositions, 3),
      );
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x00d4aa,
        transparent: true,
        opacity: 0.6,
      });
      const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
      scene.add(lines);

      camera.position.z = 5;

      const animate = () => {
        animationId = requestAnimationFrame(animate);
        particles.rotation.y += 0.0005;
        particles.rotation.x += 0.0002;
        lines.rotation.y -= 0.0003;
        renderer.render(scene, camera);
      };

      animate();

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        if (animationId) cancelAnimationFrame(animationId);
        if (renderer) {
          renderer.dispose();
          if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
            containerRef.current.removeChild(renderer.domElement);
          }
        }
      };
    } catch (e) {
      console.warn("ThreeBackground: WebGL initialization failed, using static fallback.", e.message);
      setWebglSupported(false);
    }
  }, []);

  if (webglSupported === false) {
    return <StaticFallback />;
  }

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
}
