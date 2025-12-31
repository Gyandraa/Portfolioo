import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menus = ["Home", "Skills", "Projects", "Contact"];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all
        ${
          scroll
            ? "bg-black/50 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          Gyandra<span className="text-indigo-400">.</span>
        </h1>

        {/* Desktop */}
        <ul className="hidden md:flex gap-10 text-sm">
          {menus.map((m) => (
            <li
              key={m}
              className="cursor-pointer text-gray-300 hover:text-white relative group"
            >
              <a href={`#${m.toLowerCase()}`}>{m}</a>
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-indigo-400 group-hover:w-full transition-all"></span>
            </li>
          ))}
        </ul>

        <button className="hidden md:block px-5 py-2 bg-indigo-600 rounded-xl hover:bg-indigo-700 transition shadow-lg shadow-indigo-600/30">
          Hire Me
        </button>

        {/* Mobile */}
        <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/70 backdrop-blur-xl border-t border-white/10">
          <ul className="flex flex-col gap-6 px-6 py-8">
            {menus.map((m) => (
              <li key={m}>
                <a
                  href={`#${m.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-gray-300 hover:text-indigo-400"
                >
                  {m}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
