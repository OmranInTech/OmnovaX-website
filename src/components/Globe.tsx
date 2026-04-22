import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Globe() {
  const ref = useRef<HTMLDivElement>(null);
  const hasMounted = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    if (hasMounted.current) return;
    hasMounted.current = true;

    const width = 500;
    const height = 500;

    // 🌌 Scene
    const scene = new THREE.Scene();

    // 📷 Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      width / height,
      0.1,
      1000
    );
    camera.position.z = 3.2;

    // 🎥 Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);

    ref.current.innerHTML = "";
    ref.current.appendChild(renderer.domElement);

    // 🌍 REAL EARTH TEXTURE GLOBE
    const textureLoader = new THREE.TextureLoader();

    const earthTexture = textureLoader.load(
      "https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg"
    );

    const globe = new THREE.Mesh(
      new THREE.SphereGeometry(1.2, 64, 64),
      new THREE.MeshStandardMaterial({
        map: earthTexture,
        roughness: 0.8,
        metalness: 0.1,
      })
    );

    scene.add(globe);

    // 🔵 BLUE GLOW ATMOSPHERE
    const glow = new THREE.Mesh(
      new THREE.SphereGeometry(1.28, 64, 64),
      new THREE.MeshBasicMaterial({
        color: 0x3b82f6,
        transparent: true,
        opacity: 0.12,
        side: THREE.BackSide,
      })
    );

    scene.add(glow);

    // 💡 LIGHTS
    scene.add(new THREE.AmbientLight(0xffffff, 1.2));

    const light = new THREE.DirectionalLight(0xffffff, 1.5);
    light.position.set(5, 3, 5);
    scene.add(light);

    // 🎬 ANIMATION LOOP (SMOOTH + PREMIUM)
    let frameId: number;

    const animate = () => {
      globe.rotation.y += 0.0012;
      globe.rotation.x += 0.0003;

      glow.rotation.y += 0.0008;

      // ✨ subtle breathing glow effect
      const pulse = 1 + Math.sin(Date.now() * 0.001) * 0.02;
      glow.scale.set(pulse, pulse, pulse);

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    // 🧹 CLEANUP
    return () => {
      cancelAnimationFrame(frameId);
      renderer.dispose();

      if (ref.current) {
        ref.current.innerHTML = "";
      }

      hasMounted.current = false;
    };
  }, []);

  return (
    <div
      style={{
        width: "520px",
        height: "520px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      ref={ref}
    />
  );
}