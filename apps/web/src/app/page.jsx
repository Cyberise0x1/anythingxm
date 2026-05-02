"use client";

import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import {
  ChevronDown,
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  ArrowRight,
  Check,
  Volume2,
  VolumeX,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useMutation } from "@tanstack/react-query";

import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";

const ThreeBackground = lazy(() => import("@/components/ThreeBackground"));
const ComingSoonModal = lazy(() => import("@/components/ComingSoonModal"));

const properties = [
  {
    id: 1,
    title: "Semi-Detached Duplex",
    gradient: "from-[#0d2137] via-[#122538] to-[#0a1929]",
    tag: "Verified",
    beds: 4,
    location: "Abuja Central",
    priceNgn: "₦350M",
    priceUsd: "$420K",
    verified: true,
  },
  {
    id: 2,
    title: "Executive Terraces",
    gradient: "from-[#0d1f33] via-[#0a2040] to-[#0A1929]",
    tag: "Coming Soon",
    beds: 5,
    location: "Maitama District",
    priceNgn: "₦520M",
    priceUsd: "$620K",
    verified: false,
    soon: true,
  },
  {
    id: 3,
    title: "Blockchain Villa",
    gradient: "from-[#0d2137] via-[#0d1f33] to-[#061220]",
    tag: "Tokenized",
    beds: 6,
    location: "Asokoro Layout",
    priceNgn: "₦850M",
    priceUsd: "$1.02M",
    verified: false,
    tokenized: true,
  },
];

export default function RealEstatePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNaira, setIsNaira] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    // Hard safety cap: no matter what, splash hides after 1200ms. The progress
    // bar is now a pure CSS animation so it cannot get out of sync with React
    // state during hydration / client re-render.
    const t = window.setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const inquiryMutation = useMutation({
    mutationFn: async (formData) => {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Submission failed");
      return response.json();
    },
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      fullName: form[0].value,
      email: form[1].value,
      whatsappNumber: form[2].value,
      investmentInterest: form[3].value,
      message: form[4].value,
    };
    try {
      await inquiryMutation.mutateAsync(formData);
      alert(
        "Inquiry received! Our team will contact you via WhatsApp shortly.",
      );
      form.reset();
    } catch {
      alert("Failed to submit inquiry. Please try again.");
    }
  };

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/2349038507913?text=Hi%20XM%20Team,%20I%27m%20interested%20in%20your%20blockchain%20properties.",
      "_blank",
    );
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <main className="relative min-h-screen text-white font-sans selection:bg-[#00D4AA] selection:text-black">
      <AnimatePresence>
        {loading && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-[10002] bg-[#0A1929] flex flex-col items-center justify-center"
          >
            <h1 className="font-display text-3xl font-bold bg-gradient-to-r from-[#00D4AA] to-[#FFD700] bg-clip-text text-transparent mb-6">
              XM REAL ESTATE
            </h1>
            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#00D4AA] to-[#FFD700] xm-splash-fill"
                style={{ willChange: "transform" }}
              />
            </div>
            <style>{`
              @keyframes xm-splash-fill-kf {
                from { transform: translateX(-100%); }
                to   { transform: translateX(0%); }
              }
              .xm-splash-fill {
                width: 100%;
                transform: translateX(-100%);
                animation: xm-splash-fill-kf 1.1s linear forwards;
              }
            `}</style>
          </motion.div>
        )}
      </AnimatePresence>

      <Suspense fallback={null}>
        <ThreeBackground />
      </Suspense>
      <Cursor />

      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#00D4AA] to-[#FFD700] z-[9999] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar onOpenComingSoon={() => setIsModalOpen(true)} />
      {isModalOpen && (
        <Suspense fallback={null}>
          <ComingSoonModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </Suspense>
      )}

      {/* Hero Section */}
      <section
        id="home"
        className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-12 pt-24 pb-16 overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-4 py-1.5 rounded-full bg-white/5 border border-white/20 text-[10px] font-bold tracking-widest uppercase backdrop-blur-md mb-8 text-emerald-400"
        >
          🌍 The First of Many Investments
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display text-[clamp(2rem,8vw,6rem)] leading-[1.1] font-bold max-w-5xl mb-6 sm:mb-8"
        >
          <span className="block">Blockchain Properties</span>
          <span className="bg-gradient-to-r from-[#00D4AA] via-[#00FFD0] to-[#FFD700] bg-clip-text text-transparent">
            Reimagining Ownership
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10"
        >
          Luxury real estate in Abuja, verified on-chain. Tokenized ownership,
          instant allocation, and seamless liquidity. Powered by XM Trading
          Academy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() =>
              document
                .getElementById("properties")
                .scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-black font-bold text-base sm:text-lg hover:scale-105 transition-transform shadow-lg shadow-emerald-500/30 min-h-[44px]"
          >
            Explore Properties
          </button>
          <button
            onClick={() =>
              document
                .getElementById("blockchain")
                .scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md font-bold text-base sm:text-lg hover:bg-white/10 transition-all text-white min-h-[44px]"
          >
            How Blockchain Works
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 sm:mt-16 w-full max-w-4xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative bg-black aspect-video"
        >
          <video
            ref={videoRef}
            src="https://ucarecdn.com/5d5a4c10-d76e-4d43-8335-a3eb6cc0c7eb/"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929] via-transparent to-transparent pointer-events-none" />
          <button
            onClick={toggleMute}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/80 hover:border-emerald-500/50 transition-all group pointer-events-auto z-10"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 group-hover:text-emerald-400 transition-colors" />
            ) : (
              <Volume2 className="w-5 h-5 text-emerald-400" />
            )}
          </button>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10"
        >
          <ChevronDown className="w-6 h-6 text-gray-500" />
        </motion.div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Featured{" "}
              <span className="bg-gradient-to-r from-[#00D4AA] to-[#FFD700] bg-clip-text text-transparent">
                Luxury Developments
              </span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
              Premium properties in Abuja with transparent, blockchain-verified
              ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {properties.map((prop, index) => (
              <motion.div
                key={prop.id}
                whileHover={{ y: -8 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-[24px] p-5 sm:p-6 group hover:border-emerald-500/30 transition-all cursor-pointer"
              >
                {/* Property Image Area */}
                <div className={`h-48 bg-gradient-to-br ${prop.gradient} rounded-2xl mb-6 border border-white/5 group-hover:border-emerald-500/20 transition-colors overflow-hidden relative`}>
                  <div className="absolute inset-0 flex items-end p-4">
                    <div className="w-full h-[1px] bg-gradient-to-r from-emerald-500/30 via-[#00D4AA]/20 to-transparent" />
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-emerald-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-400/60" />
                  </div>
                </div>

                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-xl font-bold">
                    {prop.title}
                  </h3>
                  <span
                    className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider ${
                      prop.verified
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/20"
                        : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/20"
                    }`}
                  >
                    {prop.tag}
                  </span>
                </div>

                <p className="text-gray-400 text-sm mb-6">
                  {prop.beds} Beds • Modern Amenities • {prop.location}
                </p>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xl font-bold text-white">
                      {isNaira ? prop.priceNgn : prop.priceUsd}
                    </p>
                    <p className="text-[10px] text-gray-500 font-mono uppercase">
                      {isNaira ? "Naira Allocation" : "USD Valuation"}
                    </p>
                  </div>
                  <button
                    onClick={
                      prop.soon || prop.tokenized
                        ? () => setIsModalOpen(true)
                        : openWhatsApp
                    }
                    className="flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    {prop.soon || prop.tokenized ? "Pre-Register" : "Inquire"}{" "}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
              <span
                className={`text-xs font-bold transition-colors ${isNaira ? "text-emerald-400" : "text-gray-500"}`}
              >
                NGN
              </span>
              <button
                onClick={() => setIsNaira(!isNaira)}
                className="w-12 h-6 bg-gray-700 rounded-full relative p-1"
              >
                <div
                  className={`w-4 h-4 bg-emerald-500 rounded-full transition-all ${isNaira ? "translate-x-0" : "translate-x-6"}`}
                />
              </button>
              <span
                className={`text-xs font-bold transition-colors ${!isNaira ? "text-emerald-400" : "text-gray-500"}`}
              >
                USD
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Blockchain Section */}
      <section id="blockchain" className="relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-black/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
              Why{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Blockchain Properties?
              </span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
              Traditional real estate is slow, opaque, and fragmented. XM Real
              Estate integrates blockchain technology to bring transparency,
              fractional ownership, and instant liquidity to luxury property
              investments in Nigeria.
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Tokenized Ownership",
                  desc: "Own a fraction of premium Abuja properties from ₦500K",
                },
                {
                  title: "On-Chain Verification",
                  desc: "Every deed and transaction immutably recorded",
                },
                {
                  title: "Instant Liquidity",
                  desc: "Trade property tokens seamlessly on partner platforms",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">
                      {item.desc}{" "}
                      <span className="text-yellow-500/80 text-[10px] font-bold uppercase ml-2 px-2 py-0.5 border border-yellow-500/30 rounded-full">
                        Coming Soon
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-[32px] p-5 sm:p-8 relative overflow-hidden backdrop-blur-xl shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[60px] rounded-full" />
            <div className="space-y-4 sm:space-y-6 relative z-10">
              {[
                { label: "Blockchain Network", value: "Polygon (MATIC)" },
                { label: "Token Standard", value: "ERC-721 / ERC-20" },
                { label: "Smart Contract", value: "Audited & Verified" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center gap-3 p-4 sm:p-5 bg-white/5 border border-white/10 rounded-2xl"
                >
                  <div className="min-w-0">
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">
                      {item.label}
                    </p>
                    <p className="text-base sm:text-lg font-bold text-white truncate">{item.value}</p>
                  </div>
                  <span className="shrink-0 text-[9px] font-bold text-emerald-400 border border-emerald-400/30 px-2 py-1 rounded-full uppercase">
                    Locked
                  </span>
                </div>
              ))}
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-gray-400 font-bold text-sm hover:bg-white/10 transition-all flex justify-between gap-3 px-4 sm:px-6 min-h-[44px]"
              >
                <span>View Smart Contract Explorer</span>
                <span className="text-yellow-500 shrink-0">Coming Soon</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Academy Section */}
      <section id="academy" className="relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#122538] to-[#0A1929] border border-yellow-500/20 rounded-3xl sm:rounded-[40px] p-6 sm:p-10 lg:p-12 text-center relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-yellow-500/5 blur-[80px] rounded-full" />
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4 relative z-10">
            Powered by{" "}
            <span className="text-yellow-400">XM Trading Academy</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-10 relative z-10">
            Learn Crypto. Build Skills. Trade Smarter. Now applied to Real World
            Assets.
          </p>
          <a
            href="https://xmacademy.net"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-yellow-500/20 border border-yellow-500/50 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all font-bold relative z-10 min-h-[44px]"
          >
            Visit Trading Academy <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h3 className="font-display text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
              Ready to Own the Future?
            </h3>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
              Connect with our Abuja-based investment team. Secure allocations,
              blockchain verification, and premium property tours.
            </p>
            <div className="space-y-6 sm:space-y-8">
              {[
                { icon: MapPin, text: "Abuja, Nigeria (Headquarters)" },
                { icon: Mail, text: "invest@xmrealestate.ng" },
                { icon: Phone, text: "+234 903 850 7913" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400">
                    <item.icon size={24} />
                  </div>
                  <span className="text-base sm:text-lg text-gray-300 font-medium break-words min-w-0">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleFormSubmit}
            className="space-y-5 sm:space-y-6 bg-white/5 border border-white/10 p-5 sm:p-8 rounded-2xl sm:rounded-[32px] backdrop-blur-md"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                  Full Name
                </label>
                <input
                  required
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-emerald-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  placeholder="email@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-emerald-500 outline-none transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                WhatsApp Number
              </label>
              <input
                placeholder="+234 ..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-emerald-500 outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                Investment Interest
              </label>
              <select
                required
                defaultValue=""
                className="w-full bg-[#0A1929] border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-emerald-500 outline-none transition-all appearance-none cursor-pointer"
              >
                <option value="" disabled>
                  Select Interest
                </option>
                <option>4-Bed Semi-Detached Duplex</option>
                <option>Executive Terraces</option>
                <option>Blockchain Villa (Asokoro)</option>
                <option>Token Allocation (Fractional Ownership)</option>
                <option>Academy Partnership</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                Message (Optional)
              </label>
              <textarea
                placeholder="Your message..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-emerald-500 outline-none transition-all min-h-[120px] resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={inquiryMutation.isPending}
              className="w-full py-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-bold text-lg hover:shadow-xl hover:shadow-emerald-600/20 transition-all disabled:opacity-50"
            >
              {inquiryMutation.isPending ? "Submitting..." : "Submit Inquiry"}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-10 sm:py-12 px-4 sm:px-6 lg:px-12 text-center border-t border-white/10 bg-black/20">
        <p className="text-gray-500 font-medium text-sm sm:text-base break-words">
          © 2026 XM Real Estate & Properties. All rights reserved.
        </p>
        <p className="mt-2 text-[10px] sm:text-xs text-gray-600 uppercase tracking-widest font-bold break-words">
          Verified on Polygon • Built for Nigeria's Future
        </p>
      </footer>

      {/* WhatsApp Float */}
      <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-[9997]">
        <button
          onClick={openWhatsApp}
          aria-label="Chat with our team on WhatsApp"
          className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-600/40 transition-all hover:scale-110 active:scale-95 group min-h-[44px]"
        >
          <MessageCircle
            size={22}
            className="group-hover:rotate-12 transition-transform"
          />
          <span className="hidden sm:inline font-bold text-sm tracking-wide">
            Chat with Team
          </span>
        </button>
      </div>

      <style jsx global>{`
        :root {
          --font-sans: 'Sora', 'Inter', system-ui, -apple-system, sans-serif;
          --font-display: 'Sora', 'Inter', system-ui, -apple-system, sans-serif;
        }
        html { background: #0A1929; }
        body { font-family: var(--font-sans); cursor: none; background: transparent; }
        .font-display { font-family: var(--font-display); }
        @media (max-width: 768px) { html, body { cursor: auto; } }
      `}</style>
    </main>
  );
}
