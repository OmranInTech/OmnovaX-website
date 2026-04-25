import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Star,
  Layers3,
  Bot,
  Workflow,
} from "lucide-react";

export default function Home() {
  const stats = [
    { value: "250+", label: "Projects Delivered" },
    { value: "80+", label: "Global Clients" },
    { value: "99%", label: "Client Satisfaction" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f6f7f9] text-black">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 4, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-72 -right-72 h-[1100px] w-[1100px] rounded-full bg-white blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, -6, 0],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-96 -left-96 h-[1300px] w-[1300px] rounded-full bg-white blur-3xl"
        />

        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-70 blur-3xl" />

        <motion.div
          animate={{
            rotate: [0, 6, 0, -6, 0],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
        >
          <Layers3 className="h-[520px] w-[520px] text-black" strokeWidth={1} />
        </motion.div>
      </div>

      <Navbar />

      <section className="relative z-10 flex min-h-screen items-center px-6 pt-28 lg:px-12">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">

          {/* Left Side */}
          <div className="max-w-2xl lg:-translate-x-20">
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-neutral-500"
            >
              Premium Digital Studio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-5xl font-bold leading-[1.05] tracking-[-0.05em] sm:text-6xl lg:text-7xl"
            >
              Build Digital Products That
              <br />
              <span className="text-neutral-700">
                Move Business
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-600 line-clamp-2"
            >
              We design and build premium websites, mobile applications,
              custom software, and next-generation AI systems that help companies scale faster.
            </motion.p>

            {/* Buttons (kept unchanged) */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-12 flex flex-col gap-4 sm:flex-row"
            >
              <button className="group flex items-center justify-center gap-3 rounded-full bg-black px-8 py-5 text-white shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-black/25">
                Start a Project
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>

              <button className="group flex items-center justify-center gap-3 rounded-full border border-neutral-300 bg-white/80 px-8 py-5 backdrop-blur-xl transition-all duration-500 hover:border-black hover:bg-white">
                <Play className="h-5 w-5 fill-current" />
                Explore Work
              </button>
            </motion.div>

            {/* Stats (kept) */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="mt-16 grid grid-cols-3 gap-8"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <h3 className="text-3xl font-bold lg:text-4xl">
                    {stat.value}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side (smaller + bottom-right refined) */}
          <div className="relative flex items-end justify-end lg:items-end lg:justify-end">

            <motion.div
              initial={{ opacity: 0, x: 80, y: 40 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
                type: "spring",
                stiffness: 80,
              }}
              className="relative w-full max-w-[360px] translate-y-32 lg:translate-x-40"
            >
              <div className="rounded-[32px] border border-white/70 bg-white/85 p-4 shadow-[0_35px_90px_rgba(0,0,0,0.10)] backdrop-blur-3xl">

                {/* Header */}
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-neutral-500">
                      OmnovaX Studio
                    </p>
                    <h3 className="text-lg font-semibold">
                      Digital Intelligence
                    </h3>
                  </div>

                  <div className="rounded-2xl bg-black p-2.5 text-white">
                    <Workflow className="h-5 w-5" />
                  </div>
                </div>

                {/* Center (reduced height) */}
                <div className="relative flex h-56 items-center justify-center overflow-hidden rounded-[28px] bg-gradient-to-br from-neutral-50 to-neutral-100">

                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute h-56 w-56 rounded-full border border-neutral-200"
                  />

                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 22,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute h-40 w-40 rounded-full border border-neutral-300"
                  />

                  <motion.div
                    animate={{
                      y: [0, -12, 0],
                      rotate: [0, 8, 0, -8, 0],
                    }}
                    transition={{
                      y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                      rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                    }}
                    className="relative flex h-28 w-28 items-center justify-center rounded-[28px] bg-gradient-to-br from-white to-neutral-200 shadow-xl"
                  >
                    <Bot className="h-12 w-12 text-neutral-800" />
                  </motion.div>
                </div>

                {/* Bottom */}
                <div className="mt-5 rounded-2xl bg-neutral-50 p-4">
                  <p className="text-xs text-neutral-500">
                    Enterprise Solutions Delivered
                  </p>

                  <div className="mt-2 flex items-end justify-between">
                    <span className="text-4xl font-bold">250+</span>

                    <div className="flex items-center gap-2 rounded-full bg-lime-100 px-3 py-1.5 text-xs font-medium">
                      <Star className="h-3.5 w-3.5 fill-current" />
                      Premium
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card (kept) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -12, 0],
                }}
                transition={{
                  opacity: { delay: 0.8 },
                  scale: { delay: 0.8 },
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute -left-16 top-16 hidden rounded-3xl border border-white/80 bg-white/90 p-4 shadow-2xl backdrop-blur-2xl xl:block"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-neutral-100 p-2.5">
                    <Bot className="h-5 w-5" />
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold">AI Automation</h4>
                    <p className="text-xs text-neutral-500">Smart workflows</p>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}