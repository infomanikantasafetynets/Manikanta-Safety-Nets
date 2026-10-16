"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  CheckCircle2,
  PhoneCall,
  MessageSquare,
  ShieldCheck,
  Zap,
  Sparkles,
  Award,
} from "lucide-react";

interface ServiceOption {
  id: string;
  name: string;
  pricePerSqFt: number;
  unit: string;
  warranty: string;
}

const serviceOptions: ServiceOption[] = [
  { id: "balcony-net", name: "Balcony Safety Nets (HDPE)", pricePerSqFt: 18, unit: "sq. ft.", warranty: "10 Years" },
  { id: "pigeon-net", name: "Pigeon & Anti-Bird Nets", pricePerSqFt: 16, unit: "sq. ft.", warranty: "10 Years" },
  { id: "invisible-grill", name: "SS316 Marine Invisible Grills", pricePerSqFt: 140, unit: "sq. ft.", warranty: "10 Years" },
  { id: "pet-net", name: "Claw-Proof Pet Safety Nets", pricePerSqFt: 22, unit: "sq. ft.", warranty: "10 Years" },
  { id: "children-net", name: "High-Rise Child Safety Nets", pricePerSqFt: 20, unit: "sq. ft.", warranty: "10 Years" },
  { id: "sports-net", name: "Heavy Sports & Cricket Nets", pricePerSqFt: 25, unit: "sq. ft.", warranty: "10 Years" },
  { id: "mosquito-net", name: "Mosquito Nets for Windows & Balconies", pricePerSqFt: 35, unit: "sq. ft.", warranty: "10 Years" },
];

export default function CostCalculator() {
  const [selectedService, setSelectedService] = useState<ServiceOption>(serviceOptions[0]);
  const [areaSqFt, setAreaSqFt] = useState<number>(120);

  // Original standard price calculation
  const rawOriginalCost = Math.round(selectedService.pricePerSqFt * areaSqFt);
  const minOriginal = Math.round(rawOriginalCost * 0.95);
  const maxOriginal = Math.round(rawOriginalCost * 1.05);

  // Flat 20% Discount applied automatically
  const discountedCost = Math.round(rawOriginalCost * 0.80);
  const minCost = Math.round(discountedCost * 0.95);
  const maxCost = Math.round(discountedCost * 1.05);
  const savings = maxOriginal - maxCost;

  const whatsappMessage = encodeURIComponent(
    `Hi Manikanta Safety Solutions, I calculated an estimate with Flat 20% Discount for ${selectedService.name} (~${areaSqFt} ${selectedService.unit}) around ₹${minCost} - ₹${maxCost} with 10 Years Warranty. Please confirm my free doorstep measurement in Bangalore.`
  );

  return (
    <section className="bg-[#F8FAFC] py-20 scroll-mt-12" id="calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0F7F7] text-[#0D5C5C] border border-[#B2DCDC] text-xs font-extrabold uppercase tracking-widest mb-4 shadow-xs">
            <Calculator className="w-4 h-4 text-[#0D5C5C]" /> Instant Budget Estimator • Flat 20% OFF
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0D5C5C] tracking-tight leading-tight mb-4">
            Estimate Your Custom Installation Cost
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Quickly estimate your investment for balcony safety nets, invisible grills, or cloth drying systems in Bangalore. <span className="font-bold text-[#0D5C5C]">Flat 20% Discount Auto-Applied + 10 Years Warranty + Free Laser Measurement.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Box */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 bg-white rounded-[20px] p-6 sm:p-8 border border-[#E5E7EB] shadow-[0_10px_35px_rgba(0,0,0,0.05)] space-y-6"
          >
            {/* Step 1: Select Service */}
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                1. Choose Your Safety Setup
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceOptions.map((srv) => {
                  const isSelected = selectedService.id === srv.id;
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setSelectedService(srv)}
                      className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? "bg-[#0D5C5C] text-white border-[#0D5C5C] shadow-sm"
                          : "bg-[#F8FAFC] text-slate-800 border-[#E5E7EB] hover:border-[#0D5C5C]"
                      }`}
                    >
                      <span className="truncate pr-2">{srv.name}</span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-[#E8972F] shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Slider for Area / Quantity */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  2. Approximate Area / Dimension
                </label>
                <span className="text-sm font-black text-[#0D5C5C] bg-[#F0F7F7] px-3 py-1 rounded-lg border border-[#B2DCDC]">
                  {areaSqFt} {selectedService.unit}
                </span>
              </div>
              <input
                type="range"
                min="40"
                max="600"
                step="10"
                value={areaSqFt}
                onChange={(e) => setAreaSqFt(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0D5C5C]"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-semibold mt-1">
                <span>Small Balcony (40 sq.ft)</span>
                <span>Standard (120 sq.ft)</span>
                <span>Large Multi-Balcony (600 sq.ft)</span>
              </div>
            </div>

            {/* Included Guarantees */}
            <div className="pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold text-emerald-800">10 Years Warranty</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <Sparkles className="w-4 h-4 text-[#E8972F] shrink-0" />
                <span className="font-semibold text-amber-700">Flat 20% OFF</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <Zap className="w-4 h-4 text-[#0D5C5C] shrink-0" />
                <span>Free Doorstep Visit</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <Award className="w-4 h-4 text-[#0D5C5C] shrink-0" />
                <span>SS304/SS316 Hardware</span>
              </div>
            </div>
          </motion.div>

          {/* Results Summary Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 bg-[#0D5C5C] text-white rounded-[20px] p-6 sm:p-8 border border-[#1B6868] shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-[#E8972F] bg-white/10 px-3 py-1 rounded-full border border-white/15">
                  <Sparkles className="w-3.5 h-3.5" /> Estimated Range
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider text-amber-200 bg-amber-400/20 px-2.5 py-1 rounded-full border border-amber-300/30 animate-pulse">
                  🔥 20% DISCOUNT APPLIED
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{selectedService.name}</h3>
              <p className="text-xs text-slate-300 mb-4">
                Calculated for ~{areaSqFt} {selectedService.unit} across Bangalore.
              </p>

              <div className="bg-[#063333] rounded-2xl p-5 border border-[#1B6868] mb-6 text-center">
                {/* Original price strikethrough */}
                <div className="text-xs text-slate-400 mb-1 flex items-center justify-center gap-2">
                  <span>Regular Price:</span>
                  <span className="line-through decoration-rose-400 text-slate-400 font-semibold">
                    ₹{minOriginal.toLocaleString("en-IN")} - ₹{maxOriginal.toLocaleString("en-IN")}
                  </span>
                </div>

                {/* 20% Discounted Final Price */}
                <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider block mb-1">
                  Special Offer Price (Flat 20% OFF)
                </span>
                <div className="text-3xl sm:text-4xl font-black text-[#E8972F] tracking-tight">
                  ₹{minCost.toLocaleString("en-IN")} - ₹{maxCost.toLocaleString("en-IN")}*
                </div>
                <div className="mt-2 inline-block px-3 py-1 bg-emerald-950/80 text-emerald-300 text-xs font-bold rounded-lg border border-emerald-500/30">
                  🎉 You Save approx. ₹{savings.toLocaleString("en-IN")} Today!
                </div>
                <span className="text-[10px] text-slate-400 block mt-2">
                  *Exact price confirmed on-site after free laser measurement. Includes SS304/SS316 hardware, 10 Years Warranty &amp; installation labor.
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={`https://wa.me/919550318183?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition-all text-xs sm:text-sm cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Claim 20% OFF &amp; Book Free Measurement</span>
              </a>

              <a
                href="tel:+919550318183"
                className="w-full flex items-center justify-center gap-2 bg-[#E8972F] hover:bg-[#F5B054] text-slate-900 font-black py-3.5 px-4 rounded-xl shadow-md transition-all text-xs sm:text-sm cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-slate-900" />
                <span>Call +91 95503 18183 (Save 20%)</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
