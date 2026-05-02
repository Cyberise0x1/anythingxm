import React, { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, MapPin, Phone, ShieldCheck } from "lucide-react";

export default function EditorialEstatePage() {
  const [currency, setCurrency] = useState("NGN"); // NGN or USD

  useEffect(() => {
    // Inject fonts
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const formatPrice = (ngn, usd) => {
    if (currency === "NGN") {
      return `₦${ngn}M`;
    }
    return `$${usd}K`;
  };

  const properties = [
    {
      id: 1,
      name: "Semi-Detached Duplex",
      location: "Abuja Central",
      beds: 4,
      priceNgn: 350,
      priceUsd: 420,
      status: "Verified",
      image: "/images/v/editorial/property-1.png",
      description: "A masterclass in spatial economy. This four-bedroom residence in the heart of the capital offers uncompromising privacy with generous communal volumes."
    },
    {
      id: 2,
      name: "Executive Terraces",
      location: "Maitama District",
      beds: 5,
      priceNgn: 520,
      priceUsd: 620,
      status: "Coming Soon",
      image: "/images/v/editorial/property-2.png",
      description: "Defining the new standard for vertical living in Maitama. Five bedrooms spread across considered floorplates, culminating in a private rooftop terrace."
    },
    {
      id: 3,
      name: "Blockchain Villa",
      location: "Asokoro Layout",
      beds: 6,
      priceNgn: 850,
      priceUsd: 1020,
      status: "Tokenized",
      image: "/images/v/editorial/property-3.png",
      description: "An architectural statement piece in Asokoro. Six bedrooms of expansive luxury, seamlessly integrating modern aesthetics with absolute permanence."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9F8F5] text-[#1A1C19] font-sans selection:bg-[#1A1C19] selection:text-[#F9F8F5]">
      <style dangerouslySetInnerHTML={{__html: `
        :root {
          --font-serif: 'Playfair Display', serif;
          --font-sans: 'Inter', sans-serif;
        }
        .font-serif {
          font-family: var(--font-serif);
        }
        .font-sans {
          font-family: var(--font-sans);
        }
        .editorial-border {
          border-color: rgba(26, 28, 25, 0.15);
        }
      `}} />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F9F8F5]/90 backdrop-blur-md border-b editorial-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <div className="font-serif text-xl tracking-wide font-semibold">XM.</div>
          
          <div className="flex items-center gap-8">
            <button 
              onClick={() => setCurrency(currency === "NGN" ? "USD" : "NGN")}
              className="font-sans text-xs uppercase tracking-widest font-medium flex items-center gap-2 hover:opacity-70 transition-opacity"
            >
              <span className={currency === "NGN" ? "text-[#1A1C19]" : "text-[#1A1C19]/40"}>₦ NGN</span>
              <span className="text-[#1A1C19]/20">/</span>
              <span className={currency === "USD" ? "text-[#1A1C19]" : "text-[#1A1C19]/40"}>$ USD</span>
            </button>
            <a 
              href="https://wa.me/2349038507913" 
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex items-center gap-2 font-sans text-xs uppercase tracking-widest border border-[#1A1C19] px-5 py-2.5 hover:bg-[#1A1C19] hover:text-[#F9F8F5] transition-colors"
            >
              <span>Inquire</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          <div className="lg:col-span-8">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-8">
              The Architecture <br />
              <span className="italic font-light">of Permanence.</span>
            </h1>
            <p className="font-sans text-lg md:text-xl font-light max-w-xl leading-relaxed text-[#1A1C19]/80">
              Curated luxury real estate in Abuja's most prestigious districts. Quietly verified on-chain. First of many investments.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end pb-2">
            <div className="inline-flex items-center gap-2 border editorial-border px-4 py-2 rounded-full mb-4">
              <ShieldCheck className="w-4 h-4 text-[#1A1C19]/70" strokeWidth={1.5} />
              <span className="font-sans text-xs tracking-widest uppercase text-[#1A1C19]/80">Verified Title</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-32">
        <div className="w-full aspect-[16/9] bg-[#EAE8E3] overflow-hidden">
          <img 
            src="/images/v/editorial/hero.png" 
            alt="Luxury modern villa in Abuja" 
            className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-[2s] ease-out"
          />
        </div>
        <div className="mt-4 flex justify-between items-center text-xs font-sans tracking-widest uppercase text-[#1A1C19]/60">
          <span>Plate 01</span>
          <span>Abuja, Nigeria</span>
        </div>
      </section>

      {/* Properties Collection */}
      <section className="py-24 border-t editorial-border bg-[#F4F3ED]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl mb-4">The Collection</h2>
              <p className="font-sans font-light text-[#1A1C19]/70 max-w-md">An edited selection of exceptional residences, distinguished by their design and guaranteed by immutable records.</p>
            </div>
            <div className="font-sans text-sm tracking-widest uppercase text-[#1A1C19]/50">
              Volume I
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
            {properties.map((property, idx) => (
              <article key={property.id} className="group cursor-pointer">
                <div className="aspect-[3/4] bg-[#EAE8E3] overflow-hidden mb-6 relative">
                  <img 
                    src={property.image} 
                    alt={property.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute top-4 right-4 bg-[#F9F8F5] px-3 py-1.5 text-[10px] uppercase tracking-widest font-sans font-medium flex items-center gap-1.5">
                    {property.status === "Verified" && <div className="w-1.5 h-1.5 rounded-full bg-green-800" />}
                    {property.status === "Tokenized" && <div className="w-1.5 h-1.5 rounded-full bg-blue-800" />}
                    {property.status === "Coming Soon" && <div className="w-1.5 h-1.5 rounded-full bg-orange-800" />}
                    {property.status}
                  </div>
                </div>
                
                <div className="border-b editorial-border pb-6 mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-2xl group-hover:italic transition-all">{property.name}</h3>
                  </div>
                  <div className="flex items-center gap-1 text-[#1A1C19]/60 font-sans text-sm mb-4">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="tracking-wide">{property.location}</span>
                  </div>
                  <div className="flex justify-between items-center font-sans">
                    <span className="text-sm tracking-widest uppercase text-[#1A1C19]/60">{property.beds} Bedrooms</span>
                    <span className="text-lg font-medium">{formatPrice(property.priceNgn, property.priceUsd)}</span>
                  </div>
                </div>
                
                <p className="font-sans text-sm font-light leading-relaxed text-[#1A1C19]/70 mb-6">
                  {property.description}
                </p>

                <a 
                  href="https://wa.me/2349038507913" 
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest hover:opacity-60 transition-opacity"
                >
                  Request Dossier <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* The Protocol / Blockchain subtle section */}
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t editorial-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl mb-8">Trust, codified.</h2>
            <div className="space-y-6 font-sans font-light text-[#1A1C19]/80 leading-relaxed text-lg">
              <p>
                In real estate, certainty is the ultimate luxury. We have reimagined the title verification process for the modern era.
              </p>
              <p>
                Every property in the XM portfolio is rigorously vetted by our legal partners, then anchored to the blockchain. No complex terminology, no digital wallets required—simply an immutable public record that guarantees ownership and provenance.
              </p>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-0.5 text-[#1A1C19]" strokeWidth={1.5} />
                <div>
                  <h4 className="font-serif text-lg mb-1">Legal Fidelity</h4>
                  <p className="font-sans text-sm text-[#1A1C19]/60">Traditional due diligence completed by top-tier Abuja firms.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 mt-0.5 text-[#1A1C19]" strokeWidth={1.5} />
                <div>
                  <h4 className="font-serif text-lg mb-1">Cryptographic Proof</h4>
                  <p className="font-sans text-sm text-[#1A1C19]/60">Ownership verified and publicly auditable on-chain.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#EAE8E3] p-12 flex items-center justify-center aspect-square">
            <div className="text-center">
              <div className="w-24 h-24 border border-[#1A1C19] rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8" strokeWidth={1} />
              </div>
              <h3 className="font-serif text-2xl italic mb-2">Verified Registry</h3>
              <p className="font-sans text-sm tracking-widest uppercase text-[#1A1C19]/50">XM Protocol</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1C19] text-[#F9F8F5] pt-24 pb-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
            <div className="lg:col-span-2">
              <div className="font-serif text-3xl font-semibold mb-6">XM.</div>
              <p className="font-sans font-light text-[#F9F8F5]/60 max-w-sm mb-8">
                Curated luxury real estate. Immutable provenance. First of many investments.
              </p>
              <a 
                href="https://wa.me/2349038507913" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 font-sans text-sm border border-[#F9F8F5]/30 px-6 py-3 hover:bg-[#F9F8F5] hover:text-[#1A1C19] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Contact Private Office</span>
              </a>
            </div>
            
            <div>
              <h4 className="font-sans text-xs tracking-widest uppercase text-[#F9F8F5]/40 mb-6">Portfolio</h4>
              <ul className="space-y-4 font-serif text-lg text-[#F9F8F5]/80">
                <li><a href="#" className="hover:text-[#F9F8F5] hover:italic transition-all">Abuja Central</a></li>
                <li><a href="#" className="hover:text-[#F9F8F5] hover:italic transition-all">Maitama District</a></li>
                <li><a href="#" className="hover:text-[#F9F8F5] hover:italic transition-all">Asokoro Layout</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-sans text-xs tracking-widest uppercase text-[#F9F8F5]/40 mb-6">Offices</h4>
              <ul className="space-y-4 font-sans font-light text-sm text-[#F9F8F5]/60">
                <li>Abuja, Nigeria</li>
                <li>London, UK (Representative)</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-[#F9F8F5]/10 flex flex-col md:flex-row justify-between items-center gap-4 font-sans text-xs text-[#F9F8F5]/40 tracking-widest uppercase">
            <p>© {new Date().getFullYear()} XM Real Estate. All rights reserved.</p>
            <p>Verified on-chain.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
