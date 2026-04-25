import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  TrendingUp,
  Sparkles,
  Mouse,
  ChevronRight,
  Globe,
  Zap,
  Shield,
  Star,
  BarChart3,
  Cpu,
} from "lucide-react";

export default function Home() {
  const floatingIcons = [
    { Icon: Globe, x: "8%", y: "30%", delay: 0 },
    { Icon: Zap, x: "88%", y: "28%", delay: 0.3 },
    { Icon: Shield, x: "14%", y: "75%", delay: 0.6 },
    { Icon: Cpu, x: "84%", y: "78%", delay: 0.9 },
  ];

  const stats = [
    { label: "Projects Delivered", value: "250+" },
    { label: "Global Clients", value: "80+" },
    { label: "Success Rate", value: "99%" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f5f6f8] text-black">
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large White Organic Shapes */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 4, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -right-40 w-[900px] h-[900px] rounded-full bg-white blur-3xl opacity-90"
        />

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-72 -left-72 w-[1100px] h-[1100px] rounded-full bg-white blur-3xl opacity-95"
        />

        {/* Center 3D Glow */}
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 w-[650px] h-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-white via-gray-100 to-white blur-3xl"
        />

        {/* Floating Icons */}
        {floatingIcons.map(({ Icon, x, y, delay }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              y: [0, -18, 0],
            }}
            transition={{
              opacity: { delay, duration: 1 },
              y: {
                duration: 5 + index,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            style={{ left: x, top: y }}
            className="absolute hidden lg:flex w-14 h-14 rounded-2xl bg-white/80 backdrop-blur-xl border border-white shadow-xl items-center justify-center"
          >
            <Icon className="w-6 h-6 text-neutral-700" />
          </motion.div>
        ))}
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 flex min-h-screen items-center px-6 lg:px-12">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-20 lg:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col justify-center pt-24 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 inline-flex w-fit items-center gap-3 rounded-full border border-lime-200 bg-lime-100 px-5 py-3 text-sm font-medium text-lime-700 shadow-lg"
            >
              <Sparkles className="h-4 w-4" />
              AI Powered Innovation
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.9 }}
              className="text-5xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-8xl"
            >
              AI Powered
              <br />
              <span className="text-neutral-800">Tech Solutions</span>
              <br />
              For Business
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-600 lg:text-xl"
            >
              We craft intelligent digital experiences that automate workflows,
              accelerate growth, and transform ambitious companies into industry
              leaders.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="mt-12 flex flex-col gap-5 sm:flex-row"
            >
              <button className="group flex items-center justify-center gap-3 rounded-full bg-black px-9 py-5 text-white shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-black/30">
                Get Started
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button className="group flex items-center justify-center gap-3 rounded-full border border-neutral-300 bg-white/80 px-9 py-5 backdrop-blur-xl transition-all duration-500 hover:border-black hover:shadow-xl">
                <Play className="h-5 w-5 fill-current" />
                Explore
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-16 grid grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => (
                <div key={index}>
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

          {/* Right Visual */}
          <div className="relative flex items-center justify-center">
            {/* Orbital Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[620px] w-[620px] rounded-full border border-neutral-200"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[480px] w-[480px] rounded-full border border-neutral-100"
            />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[360px] w-[360px] rounded-full border border-neutral-200/80"
            />

            {/* Main Glass Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                delay: 0.35,
                duration: 1,
                type: "spring",
              }}
              className="relative w-full max-w-[580px]"
            >
              <div className="rounded-[40px] border border-white/70 bg-white/80 p-8 shadow-[0_50px_120px_rgba(0,0,0,0.12)] backdrop-blur-3xl">
                {/* Card Header */}
                <div className="mb-10 flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-neutral-500">Enterprise AI</p>
                    <h3 className="text-xl font-semibold">
                      Digital Intelligence
                    </h3>
                  </div>

                  <div className="rounded-2xl bg-lime-100 p-4">
                    <Sparkles className="h-7 w-7 text-lime-700" />
                  </div>
                </div>

                {/* Center 3D Object */}
                <div className="relative flex h-80 items-center justify-center overflow-hidden rounded-[32px] bg-gradient-to-br from-neutral-50 to-neutral-100">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 24,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute h-72 w-72 rounded-full border border-neutral-200"
                  />

                  <motion.div
                    animate={{
                      rotate: [360, 0],
                    }}
                    transition={{
                      duration: 18,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute h-52 w-52 rounded-full border border-neutral-300"
                  />

                  <motion.div
                    animate={{
                      y: [0, -18, 0],
                      rotateY: [0, 180, 360],
                    }}
                    transition={{
                      y: {
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                      rotateY: {
                        duration: 12,
                        repeat: Infinity,
                        ease: "linear",
                      },
                    }}
                    className="relative flex h-40 w-40 items-center justify-center rounded-[38px] bg-gradient-to-br from-white to-neutral-200 shadow-2xl"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <BarChart3 className="h-20 w-20 text-neutral-800" />
                  </motion.div>
                </div>

                {/* Bottom Metrics */}
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="rounded-3xl bg-neutral-50 p-6">
                    <p className="text-sm text-neutral-500">
                      Performance Boost
                    </p>
                    <div className="mt-3 flex items-end gap-3">
                      <span className="text-5xl font-bold">16%</span>
                      <TrendingUp className="mb-2 h-7 w-7" />
                    </div>
                  </div>

                  <div className="rounded-3xl bg-lime-100 p-6">
                    <p className="text-sm text-neutral-600">Client Rating</p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-5xl font-bold">4.9</span>
                      <Star className="h-7 w-7 fill-current" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Mini Cards */}
              <motion.div
                animate={{
                  y: [0, -14, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-12 top-20 hidden rounded-3xl border border-white/80 bg-white/90 p-5 shadow-2xl backdrop-blur-xl lg:block"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-black p-3 text-white">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Automation</p>
                    <p className="text-sm text-neutral-500">
                      Smart workflows
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 16, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-12 bottom-20 hidden rounded-3xl border border-white/80 bg-white/90 p-5 shadow-2xl backdrop-blur-xl lg:block"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-lime-100 p-3">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Security</p>
                    <p className="text-sm text-neutral-500">
                      Enterprise grade
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [0, 12, 0],
          }}
          transition={{
            opacity: { delay: 1.2 },
            y: {
              duration: 2,
              repeat: Infinity,
            },
          }}
          className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 lg:flex flex-col items-center gap-3"
        >
          <span className="text-sm tracking-[0.25em] text-neutral-500 uppercase">
            Scroll
          </span>
          <div className="flex h-14 w-8 justify-center rounded-full border border-neutral-300">
            <motion.div
              animate={{ y: [0, 18, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
              className="mt-2 h-3 w-3 rounded-full bg-black"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}