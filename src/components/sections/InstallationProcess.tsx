"use client";

import { motion } from "framer-motion";
import { PhoneCall, Ruler, Wrench, ShieldCheck, Sparkles } from "lucide-react";

interface Step {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    id: 1,
    icon: <PhoneCall className="w-6 h-6 text-[#E8972F]" />,
    title: "1. Rapid Booking & Consultation",
    description: "Connect via phone or WhatsApp. We assign a dedicated local technician for a complimentary site evaluation at your preferred time.",
  },
  {
    id: 2,
    icon: <Ruler className="w-6 h-6 text-[#E8972F]" />,
    title: "2. Precision Laser Evaluation",
    description: "Our rigging specialists examine masonry anchor substrates, record exact laser dimensions, and present physical wire/mesh samples.",
  },
  {
    id: 3,
    icon: <Wrench className="w-6 h-6 text-[#E8972F]" />,
    title: "3. Calibrated Anchor & Cable Mounting",
    description: "Using low-vibration diamond core drilling, we anchor stainless fixtures, tension cables or netting hydraulically, and seal perimeters cleanly.",
  },
  {
    id: 4,
    icon: <ShieldCheck className="w-6 h-6 text-[#E8972F]" />,
    title: "4. Load Verification & Handover",
    description: "We conduct multi-point load resistance tests, vacuum all drilling dust with HEPA extractors, and hand over your stamped 5-to-10 year warranty card.",
  },
];

export default function InstallationProcess() {
  return (
    <section className="bg-white py-24 scroll-mt-12" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0D5C5C] bg-[#F0F7F7] border border-[#B2DCDC] px-3.5 py-1.5 rounded-full inline-block self-center">
            <Sparkles className="w-3.5 h-3.5 inline mr-1 text-[#E8972F]" />
            Rigging &amp; Execution Protocol
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D5C5C] tracking-tight leading-tight">
            Our 4-Stage Precision Installation Methodology
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            From initial measurement to structural load verification and immaculate dust cleanup, discover how Manikanta Safety Solutions ensures flawless execution on every Bangalore high-rise.
          </p>
        </div>

        {/* Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[32px] left-[12%] right-[12%] h-0.5 bg-[#E2E8F0] -z-0 rounded-full"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col items-center text-center group relative z-10"
            >
              {/* Step Circle */}
              <div className="w-16 h-16 rounded-2xl bg-[#0D5C5C] group-hover:bg-[#1B6868] text-[#E8972F] flex items-center justify-center shadow-lg transition-colors duration-300 mb-6 shrink-0 relative border border-[#1B6868]">
                {step.icon}
                {/* Step micro-badge */}
                <div className="absolute -top-1.5 -right-1.5 bg-[#E8972F] text-slate-900 text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-xs transition-colors duration-300">
                  {step.id}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-base font-bold text-[#0D5C5C] mb-2.5 group-hover:text-[#E8972F] transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
