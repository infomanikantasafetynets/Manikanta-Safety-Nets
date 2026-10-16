"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, ShieldAlert } from "lucide-react";

export default function BeforeAfter() {
  return (
    <section className="bg-[#F8FAFC] py-24 scroll-mt-12" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0D5C5C] bg-[#F0F7F7] border border-[#B2DCDC] px-3.5 py-1.5 rounded-full inline-block self-center">
            Before &amp; After Transformations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D5C5C] tracking-tight leading-tight">
            Real Visual Impact: Total Protection with Zero Clutter
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            See how our precision netting and invisible grill installations eliminate fall hazards and bird roosting while preserving full panoramic sunlight.
          </p>
        </div>

        {/* Before / After Split Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Before Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 flex flex-col"
          >
            <div className="relative h-72 sm:h-96 w-full">
              <Image
                src="/images/gallery/before_balcony.webp"
                alt="Unprotected high-rise balcony with dangerous open railing gaps in Bangalore"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover filter grayscale opacity-90"
              />
              <div className="absolute top-4 left-4 bg-red-600/90 text-white text-xs font-bold uppercase px-3 py-1.5 rounded-md shadow-md flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>UNPROTECTED HAZARD</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-base font-bold text-slate-800 mb-2">Before Installation</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Open railing gaps pose constant fall risks for toddlers and pets, while pigeon roosting creates foul droppings and bacterial hazards.
              </p>
            </div>
          </motion.div>

          {/* After Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 flex flex-col"
          >
            <div className="relative h-72 sm:h-96 w-full">
              <Image
                src="/images/main-images/Balcony-Grills.jpg"
                alt="Protected high-rise balcony with Manikanta Safety Solutions safety netting and invisible grills"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#E8972F] text-white text-xs font-black uppercase px-3 py-1.5 rounded-md shadow-md flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 fill-[#0D5C5C]" />
                <span>MANIKANTA SAFETY SOLUTIONS CERTIFIED</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-base font-bold text-slate-800 mb-2">After Precision Rigging &amp; Tensioning</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Seamless, high-tensile safety barriers secured with stainless steel anchors. Full peace of mind with 100% natural breeze and panoramic view.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
