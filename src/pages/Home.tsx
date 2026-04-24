import Navbar from "../components/Navbar";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-black">

      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.06),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(0,0,0,0.05),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(0,0,0,0.04),transparent_40%)]" />

      {/* Floating blur orbs */}
      <div className="absolute w-[600px] h-[600px] bg-black/5 rounded-full blur-3xl top-[-200px] left-[-200px]" />
      <div className="absolute w-[500px] h-[500px] bg-black/5 rounded-full blur-3xl bottom-[-200px] right-[-200px]" />

      {/* Navbar */}
      <Navbar />

      {/* HERO */}
      <div className="relative flex items-center justify-center min-h-screen px-6">

        <motion.div
          style={{
            transform: `translate(${mouse.x * 20}px, ${mouse.y * 20}px)`,
          }}
          className="text-center max-w-4xl transition-transform duration-200"
        >

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-black/10 text-sm text-black/60 mb-8 backdrop-blur-xl bg-white/60"
          >
            ✦ Premium Digital Studio • OmnovaX
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
          >
            Design That Feels.
            <br />
            Experiences That Resonate.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-gray-500 text-lg md:text-xl max-w-2xl mx-auto"
          >
            We blend creativity, emotion, and innovation to create digital worlds that your audience can connect with.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex items-center justify-center gap-4"
          >

            <button className="bg-black text-white px-7 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition shadow-lg">
              Let’s Talk <ArrowRight size={16} />
            </button>

            <button className="border border-black/20 px-7 py-3 rounded-full hover:bg-black hover:text-white transition">
              View Work
            </button>

          </motion.div>

          {/* Vertical premium text */}
          <div className="mt-16 tracking-[0.4em] text-black/40 text-xs uppercase">
            L • E • T • ’ • S &nbsp; T • A • L • K
          </div>

        </motion.div>

      </div>

      {/* bottom subtle line */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-black/40 tracking-widest">
        Crafting emotion through design • OmnovaX Studio
      </div>

    </div>
  );
}