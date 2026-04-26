import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import {
  Globe,
  Database,
  Code2,
  Smartphone,
  Bot,
  ArrowRight,
  Check,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "Web Platforms",
      description:
        "We build scalable, high-performance web platforms engineered for real-world business operations and long-term stability.",
      features: [
        "React & Next.js Architecture",
        "Performance Optimization",
        "SEO + Scalability Engineering",
      ],
    },
    {
      icon: Database,
      title: "Data Systems",
      description:
        "Reliable database architecture designed for structured growth, security, and high-volume data processing.",
      features: [
        "PostgreSQL / MySQL Design",
        "Data Modeling",
        "System Optimization",
      ],
    },
    {
      icon: Code2,
      title: "Custom Software",
      description:
        "End-to-end software engineering tailored to business workflows, automation, and operational efficiency.",
      features: [
        "Enterprise Applications",
        "API Development",
        "Workflow Automation",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Systems",
      description:
        "Cross-platform mobile applications designed for performance, usability, and production-grade deployment.",
      features: [
        "iOS & Android Apps",
        "React Native Development",
        "Production Deployment",
      ],
    },
    {
      icon: Bot,
      title: "Automation Systems",
      description:
        "Intelligent automation systems that reduce manual work and improve operational efficiency.",
      features: [
        "AI Workflows",
        "Business Automation",
        "System Integrations",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#f6f7f9] text-black overflow-hidden">

      <Navbar />

      {/* ================= HERO ================= */}
      <section className="px-6 lg:px-12 pt-32 pb-16 text-center max-w-4xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-black tracking-tight"
        >
          Engineering Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-neutral-600 leading-relaxed"
        >
          We design and build production-grade software systems for companies that need reliability, scale, and performance.
        </motion.p>

      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="px-6 lg:px-12 pb-24">
        <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-2 xl:grid-cols-3">

          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3 },
                }}
                className="group relative rounded-3xl border border-black/5 bg-white/70 backdrop-blur-xl p-8 shadow-sm"
              >

                {/* ICON */}
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-black text-white mb-6 shadow-md">
                  <Icon className="w-7 h-7" />
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-bold tracking-tight">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-4 text-neutral-600 leading-relaxed">
                  {service.description}
                </p>

                {/* FEATURES */}
                <div className="mt-6 space-y-3">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm text-neutral-700">
                        {f}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="mt-8 flex items-center gap-2 text-sm font-semibold text-black group-hover:gap-3 transition-all">
                  Explore Service
                  <ArrowRight className="w-4 h-4" />
                </button>

              </motion.div>
            );
          })}

        </div>
      </section>
    </div>
  );
}