import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Globe() {
  const ref = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (!ref.current || initialized.current) return;
    initialized.current = true;

    const width = 520;
    const height = 520;

    // ==============================
    // 🌌 SCENE (NO BACKGROUND)
    // ==============================
    const scene = new THREE.Scene();

    // ==============================
    // 📷 CAMERA
    // ==============================
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6;

    // ==============================
    // 🎥 RENDERER
    // ==============================
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    ref.current.innerHTML = "";
    ref.current.appendChild(renderer.domElement);

    // ==============================
    // 🌍 WIREFRAME EARTH (CLEAN VECTOR)
    // ==============================
    const globe = new THREE.Mesh(
      new THREE.SphereGeometry(1.25, 64, 64),
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      })
    );

    scene.add(globe);

    // ==============================
    // 🔵 GLOW ATMOSPHERE
    // ==============================
    const glow = new THREE.Mesh(
      new THREE.SphereGeometry(1.38, 64, 64),
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.08,
        side: THREE.BackSide,
      })
    );

    scene.add(glow);

    // ==============================
    // 🌌 STARFIELD (SUBTLE)
    // ==============================
    const starsGeometry = new THREE.BufferGeometry();
    const starCount = 250;

    const starPositions = [];

    for (let i = 0; i < starCount; i++) {
      starPositions.push(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
    }

    starsGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starPositions, 3)
    );

    const stars = new THREE.Points(
      starsGeometry,
      new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.015,
      })
    );

    scene.add(stars);

    // ==============================
    // 📡 FEW CLEAN NODES (12 MAX)
    // ==============================
    const nodes: THREE.Mesh[] = [];

    for (let i = 0; i < 12; i++) {
      const node = new THREE.Mesh(
        new THREE.SphereGeometry(0.02, 10, 10),
        new THREE.MeshBasicMaterial({ color: 0xffffff })
      );

      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI * 0.9;
      const r = 1.28;

      node.position.set(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta)
      );

      scene.add(node);
      nodes.push(node);
    }

    // ==============================
    // ✈️ MINIMAL FLIGHT PATHS (4 ONLY)
    // ==============================
    const curveMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.18,
    });

    for (let i = 0; i < 4; i++) {
      const start = nodes[Math.floor(Math.random() * nodes.length)];
      const end = nodes[Math.floor(Math.random() * nodes.length)];

      const mid = new THREE.Vector3(
        (start.position.x + end.position.x) / 2,
        (start.position.y + end.position.y) / 2 + 0.4,
        (start.position.z + end.position.z) / 2
      );

      const curve = new THREE.QuadraticBezierCurve3(
        start.position,
        mid,
        end.position
      );

      const points = curve.getPoints(35);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);

      const line = new THREE.Line(geometry, curveMaterial);
      scene.add(line);
    }

    // ==============================
    // 💡 LIGHTS
    // ==============================
    scene.add(new THREE.AmbientLight(0xffffff, 1.4));

    const light = new THREE.DirectionalLight(0xffffff, 1.2);
    light.position.set(5, 3, 5);
    scene.add(light);

    // ==============================
    // 🖱️ MOUSE INTERACTION
    // ==============================
    let mouseX = 0;

    const handleMouse = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouse);

    // ==============================
    // 🎬 ANIMATION LOOP
    // ==============================
    let frameId: number;

    const animate = () => {
      camera.position.z += (3.2 - camera.position.z) * 0.02;

      const speed = 0.0012 + mouseX * 0.002;

      globe.rotation.y += speed;
      glow.rotation.y += speed * 0.8;
      stars.rotation.y += 0.0002;

      const pulse = 1 + Math.sin(Date.now() * 0.001) * 0.03;
      glow.scale.set(pulse, pulse, pulse);

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    // ==============================
    // 🧹 CLEANUP
    // ==============================
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handleMouse);

      renderer.dispose();
      if (ref.current) ref.current.innerHTML = "";

      initialized.current = false;
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