import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Services",
    "Blogs",
    "Careers",
    "Contact",
  ];

  return (
    <nav className="fixed top-6 left-0 w-full flex justify-center z-50">
      
      {/* Glass Container */}
      <div className="backdrop-blur-2xl bg-white/70 border border-black/10 shadow-xl px-6 py-3 rounded-full flex items-center justify-between w-[92%] max-w-6xl">

        {/* Logo */}
        <div className="font-bold text-black tracking-wide text-lg">
          Omnova<span className="text-gray-500">X</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-black/70 font-medium tracking-wide">
          {links.map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-black transition duration-300 relative group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button className="hidden md:flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-black/80 transition">
          Let’s Talk <ArrowRight size={16} />
        </button>

        {/* Mobile menu */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-20 w-[92%] max-w-6xl bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl flex flex-col gap-4 text-black">
          {links.map((item) => (
            <a key={item} href="#" className="py-2 border-b border-black/10">
              {item}
            </a>
          ))}

          <button className="mt-2 bg-black text-white py-3 rounded-xl flex items-center justify-center gap-2">
            Let’s Talk <ArrowRight size={16} />
          </button>
        </div>
      )}
    </nav>
  );
}