"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Clock, Wrench, Shield, CheckCircle, Sparkles, Hammer } from "lucide-react";

export default function WhyChooseUs() {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "Virgin Polymers & SS316 Marine Metallurgy",
      desc: "We exclusively source certified 100% virgin HDPE copolymer netting and marine-grade SS316 stainless cables with molybdenum cores that never rust, discolor, or degrade under Bangalore's sun and rains.",
    },
    {
      icon: Award,
      title: "Official 10-Year Replacement Warranty",
      desc: "Every installation includes a genuine stamped 10-year warranty card covering mesh tensile integrity, anchor tension stability, and corrosion immunity for complete homeowner peace of mind.",
    },
    {
      icon: Clock,
      title: "Complimentary Doorstep Laser Inspection",
      desc: "Our technical rigging advisors visit your apartment with calibrated laser distance meters and physical material demonstration kits, providing itemized quotes with zero booking fee.",
    },
    {
      icon: Wrench,
      title: "Certified High-Rise Rigging Technicians",
      desc: "Our installation personnel are certified in high-altitude rope access, structural wall anchoring, and dust-controlled drilling to guarantee safe, clean, and vibration-free mounting.",
    },
    {
      icon: Shield,
      title: "140kg+ Dynamic Impact Resistance",
      desc: "Each safety net and invisible cable system is calibrated to absorb high dynamic impact forces, completely preventing toddler falls, pet slips, and object drops from elevated balconies.",
    },
    {
      icon: Hammer,
      title: "Rapid Same-Day & Weekend Mobilization",
      desc: "With localized mobile rigging teams stationed across Bangalore's major tech corridors and residential hubs, we execute prompt appointments with comprehensive clean-up before handover.",
    },
  ];

  return (
    <section className="py-24 bg-white scroll-mt-12" id="advantage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0D5C5C]/10 text-[#0D5C5C] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#E8972F]" />
            <span>Flat 20% OFF Deal • 10-Year Warranty</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0D5C5C] tracking-tight">
            What Sets Our High-Rise Safety Installations Apart
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            From tech park condominiums in Whitefield and Electronic City to luxury residences in Koramangala, Indiranagar, and Hebbal, we deliver engineered safety that protects your family with <strong className="text-[#0D5C5C]">Flat 20% Discount and 10 Years Warranty</strong> on every installation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="p-8 rounded-3xl bg-[#FAFAFA] border border-slate-200/80 hover:border-[#E8972F] hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#0D5C5C] group-hover:bg-[#E8972F] flex items-center justify-center text-[#E8972F] group-hover:text-white transition-colors mb-6 shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#0D5C5C] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
