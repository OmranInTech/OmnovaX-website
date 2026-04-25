import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", active: true },
    { name: "Technology" },
    { name: "Services" },
    { name: "Portfolio" },
    { name: "Blogs" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div
          className={`relative flex items-center justify-between w-full max-w-7xl rounded-full transition-all duration-500 ${
            scrolled
              ? "bg-white/85 backdrop-blur-3xl border border-white shadow-2xl px-8 py-4"
              : "bg-white/70 backdrop-blur-2xl border border-white/80 shadow-xl px-8 py-4"
          }`}
        >
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center w-11 h-11 rounded-2xl bg-black text-white shadow-lg"
            >
              <Sparkles size={20} />
            </motion.div>

            <div className="leading-tight">
              <h1 className="text-xl font-bold tracking-tight">
                Omnova<span className="text-neutral-400">X</span>
              </h1>
              <p className="text-[11px] text-neutral-500 uppercase tracking-[0.25em]">
                AI Studio
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {links.map((link) => (
              <motion.a
                key={link.name}
                href="#"
                whileHover={{ y: -2 }}
                className={`relative px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  link.active
                    ? "text-black bg-lime-100"
                    : "text-neutral-600 hover:text-black hover:bg-black/5"
                }`}
              >
                <span className="flex items-center gap-2">
                  {link.name}
                  {(link.name === "Technology" ||
                    link.name === "Services") && (
                    <ChevronDown size={15} className="opacity-60" />
                  )}
                </span>

                {link.active && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 rounded-full bg-lime-100 -z-10"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="group flex items-center gap-3 rounded-full bg-black px-6 py-3 text-sm font-medium text-white shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-black/30">
              Contact Us
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex items-center justify-center w-12 h-12 rounded-full bg-black text-white"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={open ? "close" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.35 }}
            className="fixed top-28 left-4 right-4 z-40 lg:hidden"
          >
            <div className="rounded-[32px] border border-white bg-white/90 backdrop-blur-3xl p-8 shadow-2xl">
              <div className="space-y-2">
                {links.map((link) => (
                  <motion.a
                    key={link.name}
                    href="#"
                    className={`flex items-center justify-between rounded-2xl px-5 py-4 transition-all duration-300 ${
                      link.active
                        ? "bg-lime-100 text-black"
                        : "text-neutral-700 hover:bg-neutral-100"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    <span className="font-medium">{link.name}</span>

                    {(link.name === "Technology" ||
                      link.name === "Services") && (
                      <ChevronDown size={18} />
                    )}
                  </motion.a>
                ))}
              </div>

              <button className="group mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-black py-5 text-white shadow-xl transition-all duration-500 hover:shadow-black/30">
                Contact Us
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}