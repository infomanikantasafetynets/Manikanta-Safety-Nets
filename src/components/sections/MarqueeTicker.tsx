"use client";

import { Shield, PhoneCall, Award, Clock, Wrench, CheckCircle, Sparkles, Percent } from "lucide-react";

export default function MarqueeTicker() {
  const items = [
    { icon: Percent, text: "Limited Period Promotion", highlight: "Flat 20% OFF Everything" },
    { icon: Shield, text: "Official Warranty Assurance", highlight: "10 Years Replacement Card" },
    { icon: Award, text: "Marine-Grade SS316 Invisible Grills", highlight: "100% Rust-Proof Guarantee" },
    { icon: Clock, text: "Doorstep Laser Measurements", highlight: "100% Free Consultation" },
    { icon: Sparkles, text: "Special Bangalore Deal", highlight: "Flat 20% Discount Auto-Applied" },
    { icon: Wrench, text: "Rapid Turnaround in Bangalore", highlight: "Same-Day Installation" },
    { icon: PhoneCall, text: "Call for 20% Discount Code", highlight: "+91 95503 18183" },
    { icon: CheckCircle, text: "High-Tensile Load Rating", highlight: "140kg+ Point Load Certified" },
  ];

  return (
    <div className="bg-[#0D5C5C] text-white py-3.5 overflow-hidden border-y border-[#1B6868] select-none">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-2 mx-6 text-xs sm:text-sm font-semibold">
              <Icon className="w-4 h-4 text-[#E8972F] shrink-0" />
              <span className="text-slate-200">{item.text}:</span>
              <span className="text-[#E8972F] font-black bg-black/30 px-2.5 py-0.5 rounded border border-[#E8972F]/40 shadow-xs">
                {item.highlight}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
