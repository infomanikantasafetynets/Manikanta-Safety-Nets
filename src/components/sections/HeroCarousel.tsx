"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Shield, ChevronLeft, ChevronRight, Phone, MessageSquare, Award, ArrowRight, CheckCircle2 } from "lucide-react";

interface Slide {
  id: number;
  title: string;
  highlight: string;
  subtitle: string;
  image: string;
  altText: string;
  ctaText: string;
  ctaLink: string;
  badge: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Next-Generation High-Rise Safety &",
    highlight: "SS316 Architectural Invisible Grills",
    subtitle: "Safeguard your loved ones with structural-grade stainless steel wire systems and certified safety netting tailored for Bangalore's high-rise towers.",
    image: "/images/main-images/Balcony-Grills.jpg",
    altText: "Manikanta Safety Solutions custom SS316 marine-grade invisible balcony grills overlooking Bangalore skyline",
    ctaText: "Explore Invisible Grills (20% OFF)",
    ctaLink: "/services/balcony-invisible-grills",
    badge: "10-Year Warranty • Flat 20% OFF • 100% Unobstructed Views",
  },
  {
    id: 2,
    title: "Engineered Child Fall Protection &",
    highlight: "Heavy-Duty Balcony Safety Nets",
    subtitle: "High-density UV-stabilized polymer nets secured with precision concrete anchoring to prevent toddler and pet mishaps without blocking fresh air.",
    image: "/images/services/balcony-work-real.jpg",
    altText: "Manikanta Safety Solutions heavy-duty childproof balcony fall protection netting in Bangalore apartment",
    ctaText: "Discover Safety Nets (20% OFF)",
    ctaLink: "/services/balcony-safety-nets",
    badge: "10-Year Warranty • Flat 20% OFF • Tested 140kg+ Load",
  },
  {
    id: 3,
    title: "Humane Bird Control &",
    highlight: "Zero-Visibility Pigeon Netting",
    subtitle: "Stop pigeon nesting, foul droppings, and health hazards across balcony ledges and AC units with long-lasting, weather-resistant translucent mesh.",
    image: "/images/hero/pigeonnet.jpg",
    altText: "Manikanta Safety Solutions translucent anti-pigeon netting installed across residential utility balcony in Bangalore",
    ctaText: "Pigeon Netting Solutions (20% OFF)",
    ctaLink: "/services/pigeon-safety-nets",
    badge: "10-Year Warranty • Flat 20% OFF • Humane Bird Barrier",
  },
  {
    id: 4,
    title: "Multi-Story Building Protection &",
    highlight: "Duct Shaft Safety Nets",
    subtitle: "Full vertical enclosure of internal ventilation shafts, plumbing chaseways, and open courtyards with certified industrial rigging.",
    image: "/images/services/building-duct-pigeon-netting.jpg",
    altText: "Manikanta Safety Solutions industrial duct area and building shaft safety net rigging in Bangalore",
    ctaText: "Duct Area Netting (20% OFF)",
    ctaLink: "/services/duct-area-safety-nets",
    badge: "10-Year Warranty • Flat 20% OFF • Certified Riggers",
  },
  {
    id: 5,
    title: "Effortless Ceiling Hoist Systems &",
    highlight: "Stainless Cloth Drying Hangers",
    subtitle: "Smooth dual-pulley SS304 drying rods that lift heavy laundry up to ceiling level, freeing up 100% of your usable balcony floor space.",
    image: "/images/services/ceiling-cloth-hangers-1.jpg",
    altText: "Manikanta Safety Solutions ceiling-mounted stainless steel pulley cloth drying rack in Bangalore home",
    ctaText: "Explore Cloth Hangers (20% OFF)",
    ctaLink: "/services/ceiling-cloth-hangers",
    badge: "10-Year Warranty • Flat 20% OFF • Reclaims Full Space",
  },
  {
    id: 6,
    title: "100% Insect & Mosquito Defense &",
    highlight: "Magnetic Window Mosquito Nets",
    subtitle: "Keep your home dengue-free and well-ventilated with premium fiberglass and SS mosquito screens custom-fitted for Bangalore apartments.",
    image: "/images/services/mosquito-net.jpg",
    altText: "Manikanta Safety Solutions magnetic mosquito nets for windows and balconies in Bangalore",
    ctaText: "Explore Mosquito Nets (20% OFF)",
    ctaLink: "/services/mosquito-nets",
    badge: "10-Year Warranty • Flat 20% OFF • 100% Bug-Free Breeze",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const prevSlide = () => {
    setIsAutoPlay(false);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setIsAutoPlay(false);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[current];

  return (
    <section className="relative min-h-[580px] sm:min-h-[640px] md:min-h-[700px] bg-slate-950 overflow-hidden flex items-center">
      {/* Background Image Carousel with Smooth Fade & Zero Color Tint */}
      {slides.map((s, idx) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-100 z-0" : "opacity-0 pointer-events-none -z-10"
          }`}
        >
          <Image
            src={s.image}
            alt={s.altText}
            fill
            priority={idx === 0}
            loading={idx === 0 ? "eager" : "lazy"}
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover object-center"
            quality={75}
          />
          {/* Clean Natural Scrim Overlay: Eliminates heavy green/teal tint so real installations are crisp and visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent sm:via-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Hero Copy (Left) */}
          <div className="lg:col-span-8 flex flex-col gap-5 text-left">
            {/* Top Badges: Flat 20% OFF + 10-Year Warranty */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-1.5 bg-[#E8972F] text-slate-950 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-md animate-pulse">
                <span>🔥 Flat 20% OFF Today</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-black/40 hover:bg-black/50 backdrop-blur-md border border-white/20 text-white px-3.5 py-1 rounded-full text-xs font-semibold shadow-sm transition-colors">
                <Award className="w-4 h-4 text-[#E8972F]" />
                <span>10-Year Replacement Warranty • Guaranteed</span>
              </div>
            </div>

            {/* Dynamic Main Headline */}
            <div className="flex flex-col gap-1 transition-all duration-300">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] drop-shadow-md">
                {slide.title}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8972F] via-[#F5B054] to-amber-200">
                  {slide.highlight}
                </span>
              </h1>
            </div>

            {/* Subtitle Description */}
            <p className="text-slate-100 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed drop-shadow-sm font-normal">
              {slide.subtitle}
            </p>

            {/* Key Value Propositions with 10 Years Warranty & 20% OFF */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-white/95 text-xs sm:text-sm font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E8972F] shrink-0" />
                <span>Zero-Cost Inspection</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E8972F] shrink-0" />
                <span className="font-bold text-amber-200">10 Years Warranty</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#E8972F] shrink-0" />
                <span className="font-bold text-amber-300">Flat 20% Discount</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-4">
              {/* Primary Action Button */}
              <Link
                href={slide.ctaLink}
                className="bg-gradient-to-r from-[#E8972F] to-[#F5B054] hover:from-[#F5B054] hover:to-[#E8972F] text-slate-950 font-black px-7 py-3.5 rounded-full text-sm sm:text-base transition-all duration-300 shadow-[0_10px_25px_rgba(232,151,47,0.35)] hover:shadow-[0_15px_30px_rgba(232,151,47,0.5)] flex items-center gap-2 group cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Claim 20% OFF &amp; Book Free Visit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Direct Phone Call Button */}
              <a
                href="tel:+919550318183"
                className="bg-white/15 hover:bg-white/25 text-white font-bold px-6 py-3.5 rounded-full text-sm sm:text-base backdrop-blur-md border border-white/25 transition-all duration-300 flex items-center gap-2 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 text-[#E8972F]" />
                <span>Call +91 95503 18183</span>
              </a>

              {/* WhatsApp Quick Quote */}
              <a
                href="https://wa.me/919550318183?text=Hi%20Manikanta%20Safety%20Solutions%2C%20I%20would%20like%20to%20claim%20the%20Flat%2020%25%20Discount%20and%2010%20Years%20Warranty%20for%20safety%20nets%2Finvisible%20grills."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold p-3.5 rounded-full text-sm transition-all duration-300 shadow-md hover:scale-105 active:scale-95 flex items-center justify-center"
                aria-label="WhatsApp Inquiry"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
              </a>
            </div>
          </div>

          {/* Quick Floating Metrics & Trust Indicator (Right Column Desktop) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col gap-4">
            <div className="bg-slate-900/65 backdrop-blur-xl border border-white/15 p-6 rounded-3xl text-white shadow-2xl flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/10 border border-white/10 rounded-2xl text-[#E8972F]">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Certified Protection</h3>
                  <p className="text-xs text-slate-300">Bangalore High-Rise Rigging Specialist</p>
                </div>
              </div>

              {/* Special Discount & Warranty Callout in Card */}
              <div className="bg-[#E8972F]/20 border border-[#E8972F]/50 rounded-2xl p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="bg-[#E8972F] text-slate-950 font-black text-[10px] px-2 py-0.5 rounded-full uppercase">
                    Limited Deal
                  </span>
                  <span className="text-xs font-bold text-amber-200">Flat 20% OFF</span>
                </div>
                <span className="text-xs font-black text-[#E8972F]">10-Yr Warranty</span>
              </div>

              <div className="border-t border-white/10 pt-4 flex flex-col gap-2.5 text-xs text-slate-200">
                <div className="flex justify-between items-center">
                  <span>Completed Installations</span>
                  <span className="font-bold text-[#E8972F] text-sm">3,850+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Warranty Coverage</span>
                  <span className="font-bold text-[#E8972F] text-sm">10 Years Direct</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Customer Satisfaction</span>
                  <span className="font-bold text-[#E8972F] text-sm">4.96 / 5.0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Coverage Scope</span>
                  <span className="font-bold text-[#E8972F] text-sm">Entire Bangalore</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="w-full text-center bg-[#E8972F] hover:bg-[#F5B054] text-slate-950 font-extrabold text-xs py-3 rounded-xl transition-all shadow-md hover:shadow-lg"
              >
                Book Doorstep Measurement (Save 20%)
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Navigation Arrows */}
      <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-20 flex items-center gap-3">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/20 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/20 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Indicator Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:left-10 sm:translate-x-0 z-20 flex items-center gap-2">
        {slides.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => {
              setIsAutoPlay(false);
              setCurrent(idx);
            }}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              idx === current ? "w-8 bg-[#E8972F]" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
