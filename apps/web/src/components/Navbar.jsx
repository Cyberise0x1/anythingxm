import React, { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar({ onOpenComingSoon }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Properties", id: "properties" },
    { name: "Blockchain", id: "blockchain" },
    { name: "Academy", id: "academy" },
    { name: "Contact", id: "contact" },
  ];

  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const handleNavClick = (link) => {
    setMenuOpen(false);
    if (link.href) {
      window.location.href = link.href;
    } else {
      setTimeout(() => smoothScroll(link.id), 100);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 px-6 transition-all duration-300 backdrop-blur-xl border-b border-white/10 ${
          scrolled ? "py-2 bg-[#0A1929]/90" : "py-4 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00D4AA] to-[#FFD700] flex items-center justify-center font-display font-bold text-xl text-black shrink-0">
              XM
            </div>
            <span className="font-display font-semibold tracking-wide hidden sm:block text-white">
              REAL ESTATE & PROPERTIES
            </span>
          </div>

          <div className="hidden md:flex gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className="relative text-gray-300 hover:text-white transition-colors group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00D4AA] transition-all group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenComingSoon}
              className="px-5 py-2 rounded-full bg-[#00D4AA]/20 border border-[#00D4AA]/50 text-[#00D4AA] hover:bg-[#00D4AA] hover:text-black transition-all duration-300 font-medium text-sm"
            >
              Invest Now
            </button>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.18 }}
            className="fixed top-[65px] left-0 right-0 z-40 md:hidden bg-[#0A1929]/97 backdrop-blur-xl border-b border-white/10 px-6 py-4"
          >
            <div className="flex flex-col gap-1 max-w-7xl mx-auto">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link)}
                  className="w-full text-left px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all font-medium text-base"
                >
                  {link.name}
                </button>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <button
                onClick={() => { setMenuOpen(false); onOpenComingSoon(); }}
                className="w-full px-4 py-3 rounded-xl bg-[#00D4AA]/20 border border-[#00D4AA]/40 text-[#00D4AA] font-bold text-base text-left hover:bg-[#00D4AA]/30 transition-all"
              >
                Invest Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
