import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function CinematicPage() {
  const [currency, setCurrency] = useState("NGN"); // NGN or USD
  
  useEffect(() => {
    // Injecting custom fonts
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Inter:wght@300;400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); }
  }, []);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  const properties = [
    {
      title: "Semi-Detached Duplex",
      location: "Abuja Central",
      beds: 4,
      priceNGN: "₦350M",
      priceUSD: "$420K",
      status: "Verified",
      image: "/images/v/cinematic/hero.webp"
    },
    {
      title: "Executive Terraces",
      location: "Maitama District",
      beds: 5,
      priceNGN: "₦520M",
      priceUSD: "$620K",
      status: "Coming Soon",
      image: "/images/v/cinematic/exterior-2.webp"
    },
    {
      title: "Blockchain Villa",
      location: "Asokoro Layout",
      beds: 6,
      priceNGN: "₦850M",
      priceUSD: "$1.02M",
      status: "Tokenized",
      image: "/images/v/cinematic/blockchain-villa.webp"
    },
    {
      title: "First of Many Investments",
      location: "Quiet Trust",
      beds: null,
      priceNGN: null,
      priceUSD: null,
      status: "On-Chain Title Verified",
      image: "/images/v/cinematic/interior-1.webp",
      isCTA: true
    }
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-[#e5e1d8] overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style dangerouslySetInnerHTML={{__html: `
        .font-serif { font-family: 'Cinzel', serif; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
      
      {/* Header */}
      <header className="fixed top-0 left-0 w-full p-8 md:p-12 z-50 flex justify-between items-start mix-blend-difference">
        <div>
          <h1 className="font-serif text-2xl tracking-widest uppercase text-white/90">XM</h1>
          <p className="text-xs tracking-[0.2em] mt-2 text-white/60 uppercase">Real Estate</p>
        </div>
        <button 
          onClick={() => setCurrency(c => c === "NGN" ? "USD" : "NGN")}
          className="text-xs tracking-widest border border-white/20 px-4 py-2 hover:bg-white/10 transition-colors uppercase"
        >
          {currency === "NGN" ? "₦ NGN" : "$ USD"}
        </button>
      </header>

      {/* Main horizontal scroll container */}
      <div ref={containerRef} className="h-[400vh] bg-[#0a0a0a]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <motion.div style={{ x }} className="flex h-full w-[400vw]">
            {properties.map((prop, idx) => (
              <div key={idx} className="w-[100vw] h-full flex-shrink-0 relative flex items-center justify-center p-8 md:p-24">
                
                {/* Background Image with Parallax-like slow move */}
                <div className="absolute inset-0 z-0">
                  <motion.div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ 
                      backgroundImage: `url('${prop.image}')`,
                      scale: 1.05
                    }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
                </div>

                {/* Content */}
                <div className="relative z-10 w-full max-w-7xl flex flex-col justify-end h-full pb-12 md:pb-24">
                  {prop.isCTA ? (
                    <div className="max-w-2xl">
                      <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.2 }}
                        className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8 text-[#f4ecd8]"
                      >
                        {prop.title}
                      </motion.h2>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.6 }}
                      >
                        <p className="text-xl md:text-2xl text-white/70 mb-12 font-light tracking-wide">
                          {prop.status}
                        </p>
                        <a 
                          href="https://wa.me/2349038507913" 
                          target="_blank" 
                          rel="noreferrer"
                          className="inline-flex items-center gap-6 group border-b border-white/30 pb-4 hover:border-white/80 transition-colors"
                        >
                          <span className="font-serif text-xl tracking-widest uppercase">Pre-Register</span>
                          <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" strokeWidth={1} />
                        </a>
                      </motion.div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
                      <div className="md:col-span-8">
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 1.5 }}
                          className="flex items-center gap-4 mb-6"
                        >
                          <span className="w-12 h-[1px] bg-[#d4af37]/50" />
                          <span className="text-sm tracking-[0.3em] uppercase text-[#d4af37]">
                            {prop.status}
                          </span>
                        </motion.div>
                        <motion.h2 
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 1.5, delay: 0.2 }}
                          className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-4 text-[#f4ecd8]"
                        >
                          {prop.title}
                        </motion.h2>
                        <motion.p
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 1.5, delay: 0.4 }}
                          className="text-2xl font-light text-white/60 tracking-wide"
                        >
                          {prop.location}
                        </motion.p>
                      </div>
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5, delay: 0.6 }}
                        className="md:col-span-4 flex flex-col md:items-end space-y-4 text-left md:text-right"
                      >
                        <div className="text-3xl font-serif text-[#f4ecd8]">
                          {currency === "NGN" ? prop.priceNGN : prop.priceUSD}
                        </div>
                        <div className="text-sm tracking-[0.2em] uppercase text-white/50">
                          {prop.beds} Bedrooms
                        </div>
                      </motion.div>
                    </div>
                  )}
                </div>

                {/* Scroll Indicator */}
                {idx < properties.length - 1 && (
                  <motion.div 
                    className="absolute bottom-12 right-12 md:bottom-24 md:right-24 z-20 flex items-center gap-4 opacity-50"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="text-xs tracking-[0.3em] uppercase hidden md:block">Scroll</span>
                    <ArrowRight className="w-5 h-5" strokeWidth={1} />
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
