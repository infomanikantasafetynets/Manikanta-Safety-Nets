"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageSquare, ArrowRight, ShieldCheck, Award, Clock, Wrench, Globe, CheckCircle2 } from "lucide-react";

interface HeroProps {
  name: string;
  categoryName: string;
  title: string;
  subtitle: string;
  aiOverview: string;
  image: string;
}

export function ServiceHero({ name, categoryName, title, subtitle, aiOverview, image }: HeroProps) {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden py-20 lg:py-32">
      {/* Background Image with darken layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={`Manikanta Safety Solutions - ${name} Installation in Bangalore`}
          fill
          priority
          sizes="100vw"
          className="object-cover filter brightness-105 contrast-105"
        />
        {/* Subtle natural scrim for high image clarity and text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-black/20 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Info */}
          <div className="lg:col-span-7 flex flex-col gap-5 items-start">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-[#E8972F] text-slate-950 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full animate-pulse shadow-md">
                🔥 Flat 20% OFF
              </span>
              <span className="bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
                10 Years Warranty
              </span>
              <span className="bg-[#0D5C5C] text-amber-200 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-teal-500/30">
                {categoryName}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight font-sans tracking-tight">
              {title}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {subtitle}
            </p>

            {/* AI Overview Box */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 max-w-2xl flex flex-col gap-2"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-[#E8972F] tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#E8972F] animate-pulse"></span>
                <span>Manikanta Safety Solutions AI OVERVIEW</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                {aiOverview}
              </p>
            </motion.div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-4 w-full sm:w-auto">
              <a
                href="tel:+919550318183"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#E8972F] text-slate-950 font-black px-6 py-4 rounded-full hover:bg-amber-400 transition-colors shadow-lg hover:shadow-xl text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91 95503 18183 (Save 20%)</span>
              </a>

              <a
                href="https://wa.me/919550318183?text=Hi%20Manikanta%20Safety%20Solutions%2C%20I%20would%20like%20to%20claim%20the%20Flat%2020%25%20Discount%20and%2010%20Years%20Warranty%20for%20safety%20nets%2Finvisible%20grills."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-emerald-600 text-white font-bold px-6 py-4 rounded-full hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl text-sm"
              >
                <MessageSquare className="w-4 h-4 fill-white/10" />
                <span>WhatsApp 20% Quote</span>
              </a>

              <Link
                href="#contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold px-6 py-4 rounded-full transition-all border border-white/30 backdrop-blur-xs text-sm"
              >
                <span>Request Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceStickyBar({ name }: { name: string }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar once user scrolls past hero section
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-2xl border-t border-slate-200 py-3 block"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm font-bold text-slate-800 tracking-tight">
                {name} Installation
              </span>
              <span className="bg-[#E8972F] text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded-full">
                Flat 20% OFF
              </span>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                10 Years Warranty
              </span>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <a
                href="tel:+919550318183"
                className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#E8972F] text-slate-950 font-black px-5 py-3 rounded-full hover:bg-amber-400 text-xs sm:text-sm shadow-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now (20% OFF)</span>
              </a>

              <a
                href="https://wa.me/919550318183?text=Hi%20Manikanta%20Safety%20Solutions%2C%20I%20would%20like%20to%20claim%20the%20Flat%2020%25%20Discount%20and%2010%20Years%20Warranty%20for%20safety%20nets%2Finvisible%20grills."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold px-5 py-3 rounded-full hover:bg-emerald-700 text-xs sm:text-sm shadow-xs transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white/10" />
                <span>WhatsApp</span>
              </a>

              <Link
                href="#contact"
                className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#0D5C5C] hover:bg-[#E8972F] text-white font-bold px-5 py-3 rounded-full text-xs sm:text-sm shadow-xs transition-colors"
              >
                <span>Free Quote</span>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function ServiceTrustBar() {
  const trustBadges = [
    { label: "Flat 20% OFF Deal", icon: <Award className="w-4 h-4 text-[#E8972F]" /> },
    { label: "10-Year Warranty Card", icon: <ShieldCheck className="w-4 h-4 text-[#E8972F]" /> },
    { label: "Professional Installation", icon: <Wrench className="w-4 h-4 text-[#E8972F]" /> },
    { label: "Fast Same-Day Service", icon: <Clock className="w-4 h-4 text-[#E8972F]" /> },
    { label: "Bangalore-Wide Coverage", icon: <Globe className="w-4 h-4 text-[#E8972F]" /> },
    { label: "4.96/5 Star Reviews", icon: <CheckCircle2 className="w-4 h-4 text-[#E8972F]" /> },
  ];

  return (
    <div className="bg-slate-100 py-6 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {trustBadges.map((badge, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 p-2 bg-white rounded-xl shadow-xs border border-slate-200/50 hover:shadow-sm transition-shadow justify-center md:justify-start"
            >
              <div className="p-1.5 bg-[#F0F7F7] rounded-lg shrink-0">
                {badge.icon}
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-slate-700 truncate">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
