"use client";

import React, { useState, useEffect, useRef } from "react";
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

import ThreeBackground from "@/components/ThreeBackground";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import ComingSoonModal from "@/components/ComingSoonModal";

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
  const [loadProgress, setLoadProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);
    return () => clearInterval(timer);
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
            className="fixed inset-0 z-[10002] bg-[#0A1929] flex flex-col items-center justify-center"
          >
            <h1 className="font-display text-3xl font-bold bg-gradient-to-r from-[#00D4AA] to-[#FFD700] bg-clip-text text-transparent mb-6"></h1>
            <div className="w-64 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-1 bg-gradient-to-r from-[#00D4AA] to-[#FFD700] transition-all duration-300"
                style={{ width: `${loadProgress}%` }}
              ></div>
            </div>
            <p className="text-gray-400 mt-4 text-sm">{Math.round(loadProgress)}%</p>
          </motion.div>
        )}
      </AnimatePresence>

      <ThreeBackground />
      <Cursor />
      <Navbar setIsModalOpen={setIsModalOpen} />

      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: loading ? 0 : 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-block px-4 py-2 bg-[#00D4AA]/10 border border-[#00D4AA]/30 rounded-full mb-8">
            <span className="text-[#00D4AA] text-sm font-medium">
              ✦ THE FIRST REAL ESTATE ON BLOCKCHAIN
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Blockchain</span>
            <br />
            <span className="bg-gradient-to-r from-[#00D4AA] via-[#00D4AA] to-[#FFD700] bg-clip-text text-transparent">
              Properties
            </span>
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Reinvagining Property Ownership on-chain
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3 bg-[#00D4AA] text-black font-semibold rounded-lg hover:bg-[#00D4AA]/90 transition-all duration-300 inline-flex items-center gap-2"
            >
              Explore Properties <ArrowRight size={20} />
            </button>
            <button
              onClick={openWhatsApp}
              className="px-8 py-3 border border-[#00D4AA]/50 text-[#00D4AA] font-semibold rounded-lg hover:bg-[#00D4AA]/10 transition-all duration-300"
            >
              How Blockchain Works
            </button>
          </div>

          <div className="text-gray-400 text-sm max-w-xl mx-auto">
            <p>
              Quintessential real estate in Abuja, verified on-chain, tokenized
              ownership, instant allocation, and seamless liquidity. Powered by
              XM Trading Academy.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Featured Properties
            </h2>
            <p className="text-gray-300 text-lg">
              Curated blockchain properties for investors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property, idx) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`rounded-xl overflow-hidden border border-gray-700/50 hover:border-[#00D4AA]/50 transition-all duration-300 bg-gradient-to-br ${property.gradient}`}
              >
                <div className="aspect-square bg-gray-800/50 relative overflow-hidden flex items-center justify-center group">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2 group-hover:scale-105 transition-transform">
                      {property.title}
                    </h3>
                    <p className="text-gray-300">{property.beds} Bedrooms</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-[#00D4AA]/20 text-[#00D4AA] text-xs font-semibold rounded-full">
                      {property.tag}
                    </span>
                    {property.verified && <Check size={16} className="text-[#00D4AA]" />}
                  </div>

                  <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                  <div className="flex items-center gap-2 text-gray-300 mb-4">
                    <MapPin size={16} />
                    <span className="text-sm">{property.location}</span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">NGN</span>
                      <span className="font-bold text-[#00D4AA]">
                        {property.priceNgn}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">USD</span>
                      <span className="font-bold text-[#FFD700]">
                        {property.priceUsd}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={
                      property.soon ? () => setIsModalOpen(true) : openWhatsApp
                    }
                    className="w-full py-2 px-4 bg-[#00D4AA] text-black font-semibold rounded-lg hover:bg-[#00D4AA]/90 transition-all duration-300"
                  >
                    {property.soon ? "Coming Soon" : "Inquire Now"}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-[#00D4AA]/10 to-[#FFD700]/10 border border-[#00D4AA]/30 rounded-2xl p-8 sm:p-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Blockchain Properties?
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-3">
                <Check className="text-[#00D4AA] flex-shrink-0 mt-1" />
                <span>Transparent ownership records on immutable ledgers</span>
              </li>
              <li className="flex gap-3">
                <Check className="text-[#00D4AA] flex-shrink-0 mt-1" />
                <span>24/7 global market access and fractional ownership</span>
              </li>
              <li className="flex gap-3">
                <Check className="text-[#00D4AA] flex-shrink-0 mt-1" />
                <span>Instant settlement and reduced transaction costs</span>
              </li>
              <li className="flex gap-3">
                <Check className="text-[#00D4AA] flex-shrink-0 mt-1" />
                <span>Smart contract compliance and automated conditions</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              How to Get Started
            </h2>
            <p className="text-gray-300 text-lg">
              Join thousands of investors in blockchain real estate
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Verify Your Details",
                desc: "Complete KYC verification to access exclusive opportunities",
              },
              {
                step: "02",
                title: "Choose Your Property",
                desc: "Browse our curated selection of tokenized properties",
              },
              {
                step: "03",
                title: "Own On-Chain",
                desc: "Complete your purchase and receive digital deed",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-[#00D4AA] mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Invest?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join our exclusive community of blockchain real estate investors.
              Limited opportunities available.
            </p>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 max-w-2xl mx-auto">
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#00D4AA] transition-colors"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#00D4AA] transition-colors"
                  required
                />
                <input
                  type="tel"
                  placeholder="WhatsApp Number"
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#00D4AA] transition-colors"
                  required
                />
                <select
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-[#00D4AA] transition-colors"
                  required
                >
                  <option>Select Investment Interest</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Mixed-Use</option>
                  <option>Not Sure</option>
                </select>
                <textarea
                  placeholder="Message (Optional)"
                  rows="4"
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#00D4AA] transition-colors resize-none"
                />
                <button
                  type="submit"
                  disabled={inquiryMutation.isPending}
                  className="w-full py-3 bg-gradient-to-r from-[#00D4AA] to-[#FFD700] text-black font-bold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {inquiryMutation.isPending ? "Submitting..." : "Submit Inquiry"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <ComingSoonModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <footer className="border-t border-gray-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-[#00D4AA]">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00D4AA]">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00D4AA]">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-[#00D4AA]">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00D4AA]">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00D4AA]">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-[#00D4AA]">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00D4AA]">
                  Terms
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-[#00D4AA]">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00D4AA]">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00D4AA]">
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; 2024 XM Real Estate. All rights reserved. Blockchain-powered
            real estate investing.
          </p>
        </div>
      </footer>

      <button
        onClick={openWhatsApp}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-[#00D4AA] to-[#FFD700] text-black rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center gap-2"
      >
        <span className="font-bold text-sm tracking-wide">
          Chat with Team
        </span>
      </button>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap');
        :root {
          --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
          --font-display: 'Space Grotesk', sans-serif;
        }
        html { background: #0A1929; }
        body { font-family: var(--font-sans); cursor: none; background: transparent; }
        .font-display { font-family: var(--font-display); }
        @media (max-width: 768px) { html, body { cursor: auto; } }
      `}</style>
    </main>
  );
}
