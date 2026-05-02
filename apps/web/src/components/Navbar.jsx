import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar({ onOpenComingSoon }) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef(null);
  const toggleRef = useRef(null);
  const firstLinkRef = useRef(null);

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
    setIsOpen(false);
  };

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    if (isOpen) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [isOpen]);

  // Close on Escape, outside click; focus first link when opened
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll(
          'a, button, [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    const handleClickOutside = (e) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        !toggleRef.current?.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKey);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    const focusTimer = setTimeout(() => {
      firstLinkRef.current?.focus();
    }, 50);

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      clearTimeout(focusTimer);
    };
  }, [isOpen]);

  // Close menu if viewport grows past mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-4 sm:px-6 lg:px-12 transition-all duration-300 backdrop-blur-xl border-b border-white/10 ${scrolled || isOpen ? "py-2 bg-[#0A1929]/90" : "py-4 bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-[#00D4AA] to-[#FFD700] flex items-center justify-center font-display font-bold text-xl text-black">
            XM
          </div>
          <span className="font-display font-semibold tracking-wide hidden sm:block text-white truncate">
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

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenComingSoon}
            className="px-4 sm:px-5 py-2 rounded-full bg-[#00D4AA]/20 border border-[#00D4AA]/50 text-[#00D4AA] hover:bg-[#00D4AA] hover:text-black transition-all duration-300 font-medium text-sm min-h-[44px] flex items-center"
          >
            Invest Now
          </button>

          <button
            ref={toggleRef}
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-panel"
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-panel"
            ref={panelRef}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden mt-3 mx-auto max-w-7xl rounded-2xl border border-white/10 bg-[#0A1929]/95 backdrop-blur-xl shadow-2xl overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            <div className="flex flex-col py-2">
              {navLinks.map((link, i) => (
                <button
                  key={link.id}
                  ref={i === 0 ? firstLinkRef : undefined}
                  onClick={() => handleNavClick(link)}
                  className="w-full text-left px-5 py-4 text-base font-medium text-gray-200 hover:text-white hover:bg-white/5 transition-colors min-h-[44px] border-b border-white/5 last:border-b-0"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
