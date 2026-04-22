import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Globe from "./Globe";

const messages = [
  "BUILDING DIGITAL FUTURES",
  "DESIGN MEETS ENGINEERING",
  "INNOVATION NEVER STOPS",
  "WELCOME TO OMNOVAX",
];

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [loadingDone, setLoadingDone] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);

  // 🎧 Optional sound intro (UNCHANGED)
  useEffect(() => {
    const audio = new Audio("/intro.mp3");
    audio.volume = 0.4;

    audio.play().catch(() => {});
  }, []);

  // 📊 Loading simulation (UNCHANGED)
  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.random() * 8;

      if (value >= 100) {
        value = 100;
        clearInterval(interval);

        setTimeout(() => setLoadingDone(true), 600);
      }

      setProgress(Math.floor(value));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // 🌍 messages (UNCHANGED)
  useEffect(() => {
    if (!loadingDone) return;

    const timer = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages.length);
    }, 1500);

    return () => clearInterval(timer);
  }, [loadingDone]);

  return (
    <div className="fixed inset-0 bg-black overflow-hidden">

      {/* 🌌 STARFIELD BACKGROUND (UNCHANGED) */}
      <div className="absolute inset-0">
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-50"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s infinite`,
            }}
          />
        ))}
      </div>

      {/* 🎬 LOADING STAGE (UNCHANGED — DO NOT TOUCH) */}
      {!loadingDone && (
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-white tracking-[0.4em] mb-6">
            LOADING
          </h1>

          <div className="w-[60%] h-[2px] bg-white/20 overflow-hidden">
            <motion.div
              className="h-full bg-white"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
            />
          </div>

          <p className="text-white/40 mt-4 text-sm">
            {progress}%
          </p>
        </motion.div>
      )}

      {/* 🌍 FIXED CINEMATIC GLOBE SCENE */}
      {loadingDone && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >

          {/* 🌍 CENTER WRAPPER (IMPORTANT FIX FOR VISIBILITY) */}
          <div className="flex items-center justify-center w-full h-full">

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative z-10"
            >
              <Globe />
            </motion.div>

          </div>

          {/* 🧭 COMPANY NAME */}
          <motion.h1
            className="absolute top-10 text-white tracking-[0.6em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            OMNOVAX
          </motion.h1>

          {/* 💬 MESSAGES */}
          <motion.h2
            key={msgIndex}
            className="absolute bottom-20 text-white text-sm tracking-[0.3em]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {messages[msgIndex]}
          </motion.h2>

        </motion.div>
      )}

    </div>
  );
}