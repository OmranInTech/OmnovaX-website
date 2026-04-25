import Navbar from "../components/Navbar";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import {
  Rocket,
  Zap,
  Brain,
  ShieldCheck,
  Sparkles,
  Cpu,
} from "lucide-react";
import { useState } from "react";

export default function About() {
  const [index, setIndex] = useState(0);

  // Fake scroll handler (simple + stable)
  const handleWheel = (e: any) => {
    if (e.deltaY > 0) {
      setIndex((prev) => Math.min(3, prev + 1));
    } else {
      setIndex((prev) => Math.max(0, prev - 1));
    }
  };

  const pages = [
    {
      title: "About OmnovaX",
      subtitle: "Where vision becomes experience",
      desc:
        "We design and build high-end digital products that combine creativity, engineering, and intelligence into one ecosystem.",
      points: [
        "Premium UI/UX systems",
        "Modern scalable architecture",
        "AI-powered workflows",
      ],
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200",
      icon: Rocket,
    },
    {
      title: "Speed & Execution",
      subtitle: "Built for rapid scaling",
      desc:
        "We deliver fast production-ready systems that help startups and companies scale without friction.",
      points: [
        "Fast development cycles",
        "Optimized performance systems",
        "Clean architecture design",
      ],
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200",
      icon: Zap,
    },
    {
      title: "AI Intelligence",
      subtitle: "Automation at core",
      desc:
        "We integrate AI systems that automate workflows, improve decision-making, and enhance user experience.",
      points: [
        "AI automation systems",
        "Smart workflows",
        "Data-driven architecture",
      ],
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200",
      icon: Brain,
    },
    {
      title: "Engineering Trust",
      subtitle: "Built for reliability",
      desc:
        "We focus on secure, scalable, and production-grade systems used in real-world enterprise environments.",
      points: [
        "Secure backend systems",
        "Enterprise architecture",
        "Scalable infrastructure",
      ],
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200",
      icon: ShieldCheck,
    },
  ];

  const ActiveIcon = pages[index].icon;

  return (
    <div
      className="relative w-full bg-[#f6f7f9] text-black overflow-hidden"
      onWheel={handleWheel}
    >
      <Navbar />

      {/* =========================
          SNAP CONTAINER (400px)
      ========================= */}
      <div className="relative h-[400px] w-full">

        <AnimatePresence mode="wait">

          <motion.div
            key={index}
            initial={{ opacity: 0, x: 80, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -80, scale: 0.98 }}
            transition={{ duration: 0.35 }}
            className="relative flex h-[400px] w-full items-center justify-center px-10"
          >

            {/* BACKGROUND IMAGE */}
            <div className="absolute inset-0">
              <img
                src={pages[index].image}
                className="h-full w-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 to-lime-100/30" />
            </div>

            {/* MAIN CARD */}
            <div className="relative flex h-[400px] w-full max-w-7xl items-center justify-between">

              {/* LEFT CONTENT */}
              <div className="max-w-2xl">

                <div className="flex items-center gap-2 text-emerald-600">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-xs uppercase tracking-[0.4em]">
                    {pages[index].title}
                  </span>
                </div>

                <h2 className="mt-4 text-5xl font-bold leading-tight">
                  {pages[index].subtitle}
                </h2>

                <p className="mt-6 text-lg text-neutral-700">
                  {pages[index].desc}
                </p>

                {/* BULLETS */}
                <div className="mt-6 space-y-3">
                  {pages[index].points.map((p, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      {p}
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT ICON CARD */}
              <div className="relative flex h-48 w-48 items-center justify-center">

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute h-48 w-48 rounded-full border border-emerald-300/40"
                />

                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="absolute h-32 w-32 rounded-full bg-emerald-300/20 blur-xl"
                />

                <div className="flex items-center justify-center rounded-full bg-black p-6 text-white">
                  <ActiveIcon className="h-8 w-8" />
                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

        {/* DOT NAV */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {pages.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-emerald-500" : "w-2 bg-neutral-300"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}