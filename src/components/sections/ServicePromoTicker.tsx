"use client";

import { Shield, Sparkles, PhoneCall, Percent, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ServicePromoTickerProps {
  serviceName?: string;
  className?: string;
}

export default function ServicePromoTicker({ serviceName, className = "" }: ServicePromoTickerProps) {
  const promoItems = [
    {
      badge: "Flat 20% OFF",
      text: serviceName ? `Special 20% Discount on ${serviceName}` : "Flat 20% Discount on All Safety Solutions",
      highlight: "Coupon: SAVE20",
    },
    {
      badge: "10 Years Warranty",
      text: "Comprehensive Direct Replacement Warranty Included",
      highlight: "100% Stamped Card",
    },
    {
      badge: "Free Visit",
      text: "Zero-Cost Doorstep Inspection & Laser Measurement",
      highlight: "Bangalore Wide",
    },
    {
      badge: "Same-Day",
      text: "Certified Rope-Access Installation by Verified Experts",
      highlight: "Quick Setup",
    },
    {
      badge: "Best Price",
      text: "Lowest Price Guarantee on SS316 & UV-Stabilized Nets",
      highlight: "Save Flat 20%",
    },
  ];

  return (
    <div className={`overflow-hidden rounded-2xl bg-gradient-to-r from-[#0D5C5C] via-[#094747] to-[#0D5C5C] text-white py-3 px-2 shadow-lg border border-[#E8972F]/30 my-6 select-none ${className}`}>
      <div className="flex items-center">
        {/* Left Fixed Badge */}
        <div className="hidden sm:flex items-center gap-2 bg-[#E8972F] text-slate-950 font-black px-3.5 py-1.5 rounded-xl text-xs uppercase tracking-wider shrink-0 mr-4 shadow-sm">
          <Percent className="w-4 h-4" />
          <span>Special 20% OFF</span>
        </div>

        {/* Scrolling Marquee Content */}
        <div className="flex whitespace-nowrap animate-marquee">
          {[...promoItems, ...promoItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 mx-6 text-xs sm:text-sm font-semibold">
              <span className="bg-[#E8972F]/20 text-[#E8972F] border border-[#E8972F]/40 px-2 py-0.5 rounded-md text-[11px] font-black uppercase">
                {item.badge}
              </span>
              <span className="text-white font-medium">{item.text}</span>
              <span className="text-[#E8972F] font-bold bg-black/30 px-2 py-0.5 rounded text-xs border border-white/10">
                {item.highlight}
              </span>
              <span className="text-white/30">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
