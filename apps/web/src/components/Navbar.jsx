import React, { useState, useEffect } from "react";

export default function Navbar({ onOpenComingSoon }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleNavClick = (link) => {
    if (link.href) {
      window.location.href = link.href;
    } else {
      smoothScroll(link.id);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-6 transition-all duration-300 backdrop-blur-xl border-b border-white/10 ${scrolled ? "py-2 bg-[#0A1929]/80" : "py-4 bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00D4AA] to-[#FFD700] flex items-center justify-center font-display font-bold text-xl text-black">
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

        <button
          onClick={onOpenComingSoon}
          className="px-5 py-2 rounded-full bg-[#00D4AA]/20 border border-[#00D4AA]/50 text-[#00D4AA] hover:bg-[#00D4AA] hover:text-black transition-all duration-300 font-medium text-sm"
        >
          Invest Now
        </button>
      </div>
    </nav>
  );
}
