import React, { useState, useEffect } from "react";
import { 
  Activity, 
  BarChart2, 
  Box, 
  ChevronRight, 
  Clock, 
  Cpu, 
  DollarSign, 
  Globe, 
  Hash, 
  Lock, 
  MapPin, 
  RefreshCw, 
  ShieldCheck, 
  Terminal, 
  TrendingUp, 
  Zap 
} from "lucide-react";
import { motion } from "motion/react";

export default function AssetTerminalPage() {
  const [currency, setCurrency] = useState("USD");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 800);
  };

  const properties = [
    {
      id: "ASSET-01",
      name: "Semi-Detached Duplex",
      location: "Abuja Central",
      beds: 4,
      priceNgn: 350000000,
      priceUsd: 420000,
      status: "VERIFIED",
      capRate: "8.4%",
      occupancy: "100%",
      hash: "0x8F9C...3A12",
      image: "/images/v/terminal/duplex.png",
      metrics: [
        { label: "YIELD (PROJ)", value: "12.5%" },
        { label: "IRR (5YR)", value: "18.2%" },
        { label: "SQM", value: "450" }
      ]
    },
    {
      id: "ASSET-02",
      name: "Executive Terraces",
      location: "Maitama District",
      beds: 5,
      priceNgn: 520000000,
      priceUsd: 620000,
      status: "COMING_SOON",
      capRate: "7.9%",
      occupancy: "N/A",
      hash: "PENDING_MINT",
      image: "/images/v/terminal/terraces.png",
      metrics: [
        { label: "YIELD (PROJ)", value: "14.1%" },
        { label: "IRR (5YR)", value: "21.0%" },
        { label: "SQM", value: "680" }
      ]
    },
    {
      id: "ASSET-03",
      name: "Blockchain Villa",
      location: "Asokoro Layout",
      beds: 6,
      priceNgn: 850000000,
      priceUsd: 1020000,
      status: "TOKENIZED",
      capRate: "9.2%",
      occupancy: "LEASED",
      hash: "0x4B2E...9F88",
      image: "/images/v/terminal/villa.png",
      metrics: [
        { label: "YIELD (PROJ)", value: "11.8%" },
        { label: "IRR (5YR)", value: "16.5%" },
        { label: "SQM", value: "1200" }
      ]
    }
  ];

  const formatPrice = (ngn, usd) => {
    if (currency === "USD") {
      return "$" + usd.toLocaleString();
    }
    return "NGN " + ngn.toLocaleString();
  };

  return (
    <div className="min-h-[100dvh] bg-[#050505] text-[#00ff41] font-mono selection:bg-[#00ff41] selection:text-black overflow-x-hidden flex flex-col relative">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        
        body {
          margin: 0;
          font-family: 'Space Mono', monospace;
          background-color: #050505;
        }

        .crt::before {
          content: " ";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          z-index: 2;
          background-size: 100% 2px, 3px 100%;
          pointer-events: none;
        }

        .scanline {
          width: 100%;
          height: 100px;
          z-index: 10;
          position: absolute;
          pointer-events: none;
          background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,255,65,0.1) 50%, rgba(0,0,0,0) 100%);
          opacity: 0.1;
          animation: scanline 10s linear infinite;
        }

        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }

        .terminal-scroll::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .terminal-scroll::-webkit-scrollbar-track {
          background: #050505;
          border-left: 1px solid #003300;
        }
        .terminal-scroll::-webkit-scrollbar-thumb {
          background: #00ff41;
        }
        .terminal-scroll::-webkit-scrollbar-thumb:hover {
          background: #00cc33;
        }

        .glitch {
          animation: glitch 1s linear infinite;
        }

        @keyframes glitch {
          2%, 64% { transform: translate(2px,0) skew(0deg); }
          4%, 60% { transform: translate(-2px,0) skew(0deg); }
          62% { transform: translate(0,0) skew(5deg); }
        }
      `}} />

      <div className="crt fixed inset-0 pointer-events-none z-50"></div>
      <div className="scanline fixed inset-0 pointer-events-none z-40"></div>

      {/* HEADER */}
      <header className="border-b border-[#00ff41]/30 p-2 md:p-4 bg-[#0a0a0a] flex flex-col md:flex-row justify-between items-start md:items-center gap-4 z-10">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="w-10 h-10 bg-[#00ff41] text-black flex items-center justify-center font-bold text-xl">
            XM
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold tracking-widest uppercase">ASSET_TERMINAL<span className="animate-pulse">_</span></h1>
            <div className="flex items-center gap-2 text-xs opacity-70">
              <Globe className="w-3 h-3" />
              <span>ABUJA_NG</span>
              <span className="mx-2">|</span>
              <Activity className="w-3 h-3" />
              <span>SYS.ONLINE</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between w-full md:w-auto gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="opacity-50">CURR:</span>
            <button 
              onClick={() => setCurrency(currency === "USD" ? "NGN" : "USD")}
              className="bg-[#003300] hover:bg-[#00ff41] hover:text-black transition-colors px-2 py-1 border border-[#00ff41]/50 cursor-pointer"
            >
              [{currency}]
            </button>
          </div>
          
          <div className="flex items-center gap-2 tabular-nums">
            <Clock className="w-4 h-4 opacity-50" />
            {currentTime.toISOString().split('T')[0]} {currentTime.toTimeString().split(' ')[0]} Z
          </div>

          <button 
            onClick={handleRefresh}
            className="hover:text-white transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-2 md:p-4 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 z-10 overflow-y-auto terminal-scroll">
        
        {/* LEFT COLUMN - OVERVIEW */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          <section className="border border-[#00ff41]/30 bg-[#0a0a0a]/80 backdrop-blur-sm p-4">
            <div className="border-b border-[#00ff41]/30 pb-2 mb-4 flex items-center justify-between">
              <h2 className="text-sm font-bold opacity-70">PORTFOLIO_SUMMARY</h2>
              <BarChart2 className="w-4 h-4 opacity-50" />
            </div>
            
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-end border-b border-[#00ff41]/10 pb-2">
                <span className="opacity-60">AUM (TARGET)</span>
                <span className="text-lg font-bold">{formatPrice(1720000000, 2060000)}</span>
              </div>
              <div className="flex justify-between items-end border-b border-[#00ff41]/10 pb-2">
                <span className="opacity-60">AVG_CAP_RATE</span>
                <span className="text-lg font-bold">8.5%</span>
              </div>
              <div className="flex justify-between items-end border-b border-[#00ff41]/10 pb-2">
                <span className="opacity-60">VERIFIED_ASSETS</span>
                <span className="text-lg font-bold">3/3</span>
              </div>
              <div className="flex justify-between items-end border-b border-[#00ff41]/10 pb-2">
                <span className="opacity-60">NETWORK</span>
                <span className="text-lg font-bold">ETHEREUM_L2</span>
              </div>
            </div>

            <div className="mt-6 border border-[#00ff41]/20 p-3 bg-[#001100]">
              <div className="text-xs opacity-60 mb-2">SYSTEM_MSG:</div>
              <div className="text-xs leading-relaxed">
                "FIRST OF MANY INVESTMENTS." Capital allocation portal online. All title deeds cryptographically verified.
              </div>
            </div>
          </section>

          <section className="border border-[#00ff41]/30 bg-[#0a0a0a]/80 backdrop-blur-sm p-4 flex-1">
            <div className="border-b border-[#00ff41]/30 pb-2 mb-4 flex items-center justify-between">
              <h2 className="text-sm font-bold opacity-70">MARKET_DATA</h2>
              <TrendingUp className="w-4 h-4 opacity-50" />
            </div>
            
            <div className="relative aspect-video mb-4 border border-[#00ff41]/30 overflow-hidden group">
              <div className="absolute inset-0 bg-[#00ff41]/10 mix-blend-overlay z-10 pointer-events-none group-hover:opacity-0 transition-opacity"></div>
              <img src="/images/v/terminal/market.png" alt="Abuja Market" loading="lazy" decoding="async" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute top-2 left-2 bg-black/80 px-2 py-1 text-xs border border-[#00ff41]/50 z-20">
                ABUJA_MACRO
              </div>
            </div>

            <div className="space-y-2 text-xs tabular-nums">
              <div className="grid grid-cols-3 border-b border-[#00ff41]/20 pb-1">
                <span>INDICATOR</span>
                <span className="text-right">VAL</span>
                <span className="text-right">Δ(7D)</span>
              </div>
              <div className="grid grid-cols-3">
                <span className="opacity-70">ABJ_PRIME_IDX</span>
                <span className="text-right">142.5</span>
                <span className="text-right text-green-400">+1.2%</span>
              </div>
              <div className="grid grid-cols-3">
                <span className="opacity-70">NGN/USD_RATE</span>
                <span className="text-right">833.3</span>
                <span className="text-right text-red-400">-0.4%</span>
              </div>
              <div className="grid grid-cols-3">
                <span className="opacity-70">DEMAND_SCORE</span>
                <span className="text-right">88/100</span>
                <span className="text-right text-green-400">+4.0%</span>
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN - ASSET LIST */}
        <div className="lg:col-span-9 flex flex-col gap-4">
          <div className="border border-[#00ff41]/30 bg-[#0a0a0a]/80 backdrop-blur-sm p-4 overflow-x-auto">
            <div className="min-w-[800px]">
              <div className="grid grid-cols-12 gap-4 border-b border-[#00ff41]/50 pb-2 mb-4 text-xs font-bold opacity-70 uppercase">
                <div className="col-span-1">ID</div>
                <div className="col-span-3">ASSET_NAME // LOCATION</div>
                <div className="col-span-2 text-right">VALUATION</div>
                <div className="col-span-2 text-center">METRICS</div>
                <div className="col-span-2 text-center">PROVENANCE</div>
                <div className="col-span-2 text-right">ACTION</div>
              </div>

              <div className="space-y-4">
                {properties.map((prop, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.15 }}
                    key={prop.id} 
                    className="grid grid-cols-12 gap-4 items-center border border-[#00ff41]/10 bg-[#001100]/30 hover:bg-[#002200]/50 hover:border-[#00ff41]/50 p-2 transition-all group"
                  >
                    <div className="col-span-1 text-xs opacity-50">
                      {prop.id}
                    </div>
                    
                    <div className="col-span-3 flex gap-3 items-center">
                      <div className="w-12 h-12 border border-[#00ff41]/30 overflow-hidden relative flex-shrink-0">
                        <div className="absolute inset-0 bg-[#00ff41]/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity"></div>
                        <img src={prop.image} alt={prop.name} loading="lazy" decoding="async" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
                      </div>
                      <div>
                        <div className="font-bold text-sm truncate">{prop.name}</div>
                        <div className="text-xs opacity-60 flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {prop.location}
                        </div>
                      </div>
                    </div>

                    <div className="col-span-2 text-right font-bold tabular-nums">
                      {formatPrice(prop.priceNgn, prop.priceUsd)}
                    </div>

                    <div className="col-span-2 text-xs space-y-1">
                      <div className="flex justify-between">
                        <span className="opacity-60">CAP:</span>
                        <span>{prop.capRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="opacity-60">OCC:</span>
                        <span>{prop.occupancy}</span>
                      </div>
                    </div>

                    <div className="col-span-2 flex flex-col items-center justify-center gap-1 text-xs">
                      <div className={`px-2 py-0.5 border ${
                        prop.status === 'VERIFIED' ? 'border-[#00ff41] text-[#00ff41] bg-[#00ff41]/10' : 
                        prop.status === 'TOKENIZED' ? 'border-[#00ff41] text-[#00ff41] bg-[#00ff41]/20' : 
                        'border-yellow-400 text-yellow-400 bg-yellow-400/10'
                      }`}>
                        {prop.status}
                      </div>
                      <div className="opacity-50 font-mono text-[10px] truncate w-full text-center" title={prop.hash}>
                        {prop.hash}
                      </div>
                    </div>

                    <div className="col-span-2 flex justify-end">
                      <a 
                        href="https://wa.me/2349038507913" 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-1 bg-[#00ff41]/10 hover:bg-[#00ff41] hover:text-black border border-[#00ff41]/50 px-3 py-1.5 text-xs transition-colors"
                      >
                        ACQUIRE <ChevronRight className="w-3 h-3" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
            <section className="border border-[#00ff41]/30 bg-[#0a0a0a]/80 backdrop-blur-sm p-4 flex flex-col">
              <div className="border-b border-[#00ff41]/30 pb-2 mb-4 flex items-center justify-between">
                <h2 className="text-sm font-bold opacity-70">EXECUTION_NODE</h2>
                <Terminal className="w-4 h-4 opacity-50" />
              </div>
              
              <div className="flex-1 bg-black border border-[#00ff41]/20 p-4 font-mono text-xs overflow-y-auto relative terminal-scroll">
                <div className="text-opacity-50 text-[#00ff41] mb-2">Initialize secure connection to XM Registry...</div>
                <div className="text-opacity-50 text-[#00ff41] mb-2">[OK] Connection established.</div>
                <div className="text-opacity-50 text-[#00ff41] mb-2">Fetching Title Deeds...</div>
                <div className="mb-1"><span className="text-blue-400">INFO</span>: ASSET-01 (Abuja Central) Title verified via Oracle.</div>
                <div className="mb-1"><span className="text-yellow-400">WARN</span>: ASSET-02 (Maitama) Development phase. Forward contracts available.</div>
                <div className="mb-4"><span className="text-blue-400">INFO</span>: ASSET-03 (Asokoro) SPV tokenization complete. Smart contracts active.</div>
                
                <div className="flex items-center gap-2 mt-auto">
                  <span className="opacity-70">root@xm-terminal:~#</span>
                  <span className="w-2 h-4 bg-[#00ff41] animate-pulse"></span>
                </div>
              </div>
            </section>

            <section className="border border-[#00ff41]/30 bg-[#0a0a0a]/80 backdrop-blur-sm p-4 flex flex-col">
              <div className="border-b border-[#00ff41]/30 pb-2 mb-4 flex items-center justify-between">
                <h2 className="text-sm font-bold opacity-70">ALLOCATE_CAPITAL</h2>
                <ShieldCheck className="w-4 h-4 opacity-50" />
              </div>
              
              <div className="flex-1 flex flex-col justify-center items-center text-center p-6 border border-[#00ff41]/10 bg-[#001100]/20">
                <Lock className="w-8 h-8 mb-4 opacity-50" />
                <h3 className="text-lg font-bold mb-2">SECURE OTC DESK</h3>
                <p className="text-xs opacity-70 mb-6 max-w-[250px]">
                  Direct communication channel established for institutional allocations and private wealth mandates.
                </p>
                <a 
                  href="https://wa.me/2349038507913" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full max-w-[200px] flex items-center justify-center gap-2 bg-[#00ff41] text-black font-bold py-3 hover:bg-white transition-colors"
                >
                  <Box className="w-4 h-4" />
                  INITIATE_CONTACT
                </a>
              </div>
            </section>
          </div>
        </div>

      </main>
    </div>
  );
}