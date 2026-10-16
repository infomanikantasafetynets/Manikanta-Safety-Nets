"use client";

import { motion } from "framer-motion";
import { MapPin, Globe, ArrowRight, Clock, Sparkles } from "lucide-react";
import Link from "next/link";
import { areasList } from "@/utils/areasData";

export default function ServiceAreas() {
  const featuredAreas = areasList.slice(0, 12);

  return (
    <section className="bg-[#F8FAFC] py-20 lg:py-24 scroll-mt-12" id="areas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Info Text (Left) */}
          <div className="lg:col-span-4 flex flex-col gap-5 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0D5C5C] bg-white border border-[#E5E7EB] px-3.5 py-1.5 rounded-full self-start shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#E8972F]" />
              <span>110+ Bangalore Localities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0D5C5C] tracking-tight leading-tight">
              Rapid Doorstep Service Across All Bangalore Zones
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We provide free doorstep measurements, sample presentations, and certified safety net &amp; invisible grill installations across 110+ Bangalore neighborhoods and IT corridors.
            </p>
            <div className="flex items-center gap-3 text-[#0D5C5C] text-xs sm:text-sm font-bold mt-1">
              <Globe className="w-4 h-4 text-[#E8972F]" />
              <span>Zero-Advance Free Doorstep Measurement</span>
            </div>
            <div className="pt-2">
              <Link
                href="/areas"
                className="inline-flex items-center gap-2 bg-[#0D5C5C] hover:bg-[#E8972F] text-white text-xs font-bold px-6 py-3 rounded-full transition-all shadow-md group cursor-pointer"
              >
                <span>View All 110+ Bangalore Areas</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Bangalore Localities Cards Grid (Right) */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E5E7EB]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {featuredAreas.map((area, index) => (
                <motion.div
                  key={area.slug}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.2, delay: (index % 4) * 0.04 }}
                >
                  <Link
                    href={`/areas/${area.slug}`}
                    className="flex flex-col justify-between p-4 bg-[#F8FAFC]/80 hover:bg-[#F0F7F7] border border-[#E5E7EB] hover:border-[#E8972F] rounded-2xl transition-all duration-300 group shadow-2xs h-full"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <MapPin className="w-4 h-4 text-[#0D5C5C] group-hover:text-[#E8972F] shrink-0 transition-colors" />
                        <span className="text-sm font-black text-slate-800 group-hover:text-[#0D5C5C] transition-colors">
                          {area.name}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 group-hover:text-slate-800 leading-snug transition-colors line-clamp-2">
                        {area.tagline}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-200/60 text-[11px] font-bold">
                      <span className="flex items-center gap-1 text-slate-500 font-medium">
                        <Clock className="w-3 h-3 text-[#E8972F]" />
                        <span>Same-Day Service</span>
                      </span>
                      <span className="text-[#0D5C5C] group-hover:text-[#E8972F] flex items-center gap-1 transition-colors">
                        <span>View Services</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500 font-medium text-center sm:text-left">
                Plus 98+ more Bangalore localities including Bellandur, Hennur, Varthur, Kanakapura Rd, RR Nagar...
              </span>
              <Link
                href="/areas"
                className="text-xs font-bold text-[#0D5C5C] hover:text-[#E8972F] flex items-center gap-1 shrink-0"
              >
                <span>Browse Full Directory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
