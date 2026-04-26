import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Users,
  Briefcase,
  Database,
  Globe,
} from "lucide-react";

export default function About() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // ================= PREMIUM COUNTER =================
  // FIX: Parameter types specified
  const useCounter = (end: number, trigger: boolean) => {
    const [value, setValue] = useState<number>(0);

    useEffect(() => {
      if (!trigger) return;

      let startTime: number = performance.now();
      const duration: number = 1400;

      // FIX: now parameter typed
      const animate = (now: number) => {
        const progress: number = Math.min((now - startTime) / duration, 1);
        const easeOut: number = 1 - Math.pow(1 - progress, 3);

        setValue(Math.floor(easeOut * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [trigger, end]);

    return value;
  };

  const customers = useCounter(120, isInView);
  const projects = useCounter(85, isInView);
  const systems = useCounter(40, isInView);
  const reliability = useCounter(99, isInView);

  // ================= ANIMATION =================
  const left = {
    hidden: { opacity: 0, x: -60 },
    show: {
      opacity: 1,
      x: 0,
      // FIX: ease property now uses a supported Framer Motion string ("easeOut")
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 25, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      // FIX: ease property updated here as well
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const hover = {
    y: -8,
    scale: 1.03,
    transition: { type: "spring", stiffness: 260, damping: 18 },
  };

  const items = [
    {
      icon: Users,
      value: customers + "+",
      label: "Active Customers",
    },
    {
      icon: Briefcase,
      value: projects + "+",
      label: "Projects Delivered",
    },
    {
      icon: Database,
      value: systems + "+",
      label: "Systems Built",
    },
    {
      icon: Globe,
      value: reliability + "%",
      label: "Reliability Focus",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative w-full bg-lime-100 py-24 px-6 lg:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT SIDE (RESTORED + CLEAN) ================= */}
        <motion.div
          variants={left}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >

          <p className="text-sm uppercase tracking-[0.3em] text-neutral-600">
            About OmnovaX
          </p>

          <h1 className="mt-4 text-6xl md:text-7xl font-black tracking-tight">
            OmnovaX
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-neutral-800 font-medium leading-relaxed">
            We are a technology company building reliable digital systems for modern businesses.
          </p>

          <p className="mt-5 text-lg text-neutral-700 leading-relaxed">
            Our focus is designing and engineering scalable software products,
            enterprise platforms, and long-term digital infrastructure that companies can depend on.
          </p>

          <p className="mt-4 text-base text-neutral-700 leading-relaxed">
            We don’t just build applications — we build systems that are designed to last, scale,
            and perform under real-world production environments.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 px-10 py-4 rounded-full bg-black text-white font-semibold shadow-lg"
          >
            Learn More →
          </motion.button>

        </motion.div>

        {/* ================= RIGHT SIDE (APPLE KPI CARDS) ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-2 gap-6"
        >
          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                variants={card}
                whileHover={hover}
                className="relative rounded-3xl p-6 bg-white/60 backdrop-blur-2xl border border-black/5 shadow-md overflow-hidden"
              >
                {/* glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-lime-200/20 to-transparent" />

                {/* ICON */}
                <div className="relative w-12 h-12 flex items-center justify-center rounded-2xl bg-white/70 border border-black/10 shadow-sm mb-5">
                  <div className="absolute inset-0 rounded-2xl bg-lime-300/30 blur-md animate-pulse" />
                  <Icon className="w-6 h-6 text-black relative z-10" />
                </div>

                {/* VALUE */}
                <h3 className="text-4xl font-black text-black">
                  {item.value}
                </h3>

                {/* LABEL */}
                <p className="text-sm text-neutral-600 mt-2">
                  {item.label}
                </p>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}