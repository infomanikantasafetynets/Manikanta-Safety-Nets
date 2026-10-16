"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  Mail,
  ChevronDown,
  Shield,
  Eye,
  Settings,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const safetyNetsServices = [
  { name: "Balcony Safety Nets", href: "/services/balcony-safety-nets" },
  { name: "Children Safety Nets", href: "/services/children-safety-nets" },
  { name: "Pet Safety Nets", href: "/services/pet-safety-nets" },
  { name: "Pigeon Safety Nets", href: "/services/pigeon-safety-nets" },
  { name: "Mosquito Nets for Windows & Balconies", href: "/services/mosquito-nets" },
  { name: "Sports Nets", href: "/services/sports-nets" },
  { name: "Construction Safety Nets", href: "/services/construction-safety-nets" },
  { name: "Duct Area Safety Nets", href: "/services/duct-area-safety-nets" },
  { name: "Monkey Safety Nets", href: "/services/monkey-safety-nets" },
  { name: "Cricket Practice Nets", href: "/services/cricket-practice-nets" },
  { name: "Anti-Bird Spikes", href: "/services/anti-bird-spikes" },
];

const invisibleGrillsServices = [
  { name: "Balcony Invisible Grills", href: "/services/balcony-invisible-grills" },
  { name: "Children Invisible Grills", href: "/services/children-invisible-grills" },
  { name: "Pet Invisible Grills", href: "/services/pet-invisible-grills" },
  { name: "Window Invisible Grills", href: "/services/window-invisible-grills" },
  { name: "Staircase Invisible Grills", href: "/services/staircase-invisible-grills" },
  { name: "Commercial Invisible Grills", href: "/services/commercial-invisible-grills" },
];

const clothHangersServices = [
  { name: "Ceiling Cloth Hangers", href: "/services/ceiling-cloth-hangers" },
  { name: "Balcony Cloth Hangers", href: "/services/balcony-cloth-hangers" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", isMegaMenu: true },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Areas", href: "/areas" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const megaMenuRef = useRef<HTMLDivElement>(null);
  const megaMenuHoverTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside to close mega menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setIsMegaMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnterServices = () => {
    if (megaMenuHoverTimeout.current) clearTimeout(megaMenuHoverTimeout.current);
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeaveServices = () => {
    megaMenuHoverTimeout.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 200);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <>
      {/* PART 1: TOP BAR (Charcoal Black #1F1F1F with Red Accents) */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0D5C5C] text-white text-xs font-medium py-1.5 px-3 sm:px-4 shadow-sm border-b border-[#1B6868]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          {/* Left: Phone number */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="tel:+919550318183"
              className="flex items-center gap-1.5 hover:text-[#E8972F] transition-colors"
              aria-label="Call Manikanta Safety Solutions"
            >
              <Phone className="w-3.5 h-3.5 text-[#E8972F]" />
              <span className="font-bold text-xs sm:text-sm text-white">+91 95503 18183</span>
            </a>
          </div>

          {/* Center: High-Converting Offer Banner */}
          <div className="hidden lg:flex items-center gap-2 text-[11px] font-bold text-white tracking-wide">
            <span className="bg-[#E8972F] text-slate-950 font-black px-2 py-0.5 rounded-full text-[10px] uppercase shadow-xs animate-pulse">
              Flat 20% OFF
            </span>
            <span className="text-amber-200">Limited Period Offer:</span>
            <span className="text-white">10 Years Replacement Warranty on All Installations | Free Doorstep Inspection</span>
          </div>

          {/* Right: Email & Mobile WhatsApp Badge */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <span className="flex sm:hidden items-center gap-1 bg-[#E8972F] text-slate-950 px-2 py-0.5 rounded text-[10px] font-black uppercase">
              20% OFF
            </span>
            <a
              href="https://wa.me/919550318183?text=Hi%20Manikanta%20Safety%20Solutions%2C%20I%20would%20like%20to%20claim%20the%20Flat%2020%25%20Discount%20and%2010%20Years%20Warranty%20for%20safety%20nets%2Finvisible%20grills."
              target="_blank"
              rel="noopener noreferrer"
              className="flex sm:hidden items-center gap-1 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] px-2.5 py-0.5 rounded border border-[#25D366]/40 text-[11px] font-bold transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></span>
              <span>WhatsApp Quote</span>
            </a>

            <a
              href="mailto:info.manikantasafetynets@gmail.com"
              className="hidden sm:flex items-center gap-1.5 hover:text-[#E8972F] transition-colors text-slate-300"
              aria-label="Email Us"
            >
              <Mail className="w-3.5 h-3.5 text-[#E8972F]" />
              <span className="truncate max-w-[200px] md:max-w-none">info.manikantasafetynets@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* PART 2 & 3: MAIN STICKY NAVBAR (White Background with Soft Shadow) */}
      <header
        className={`fixed top-[34px] left-0 right-0 z-40 transition-all duration-300 ease-in-out bg-white border-b border-[#E5E7EB] ${
          isScrolled ? "shadow-md py-2.5" : "py-3.5"
        }`}
        ref={megaMenuRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <div className="flex items-center shrink-0">
              <Image
                src="/images/main-images/Manikanta/manikanta-safety-solutions-logo.webp"
                alt="Manikanta Safety Solutions - Safety Nets and Invisible Grills"
                width={200}
                height={80}
                className="h-10 w-auto object-contain"
                priority
              />
            </div>

            {/* DESKTOP NAVIGATION LINKS WITH THIN RED UNDERLINE ANIMATION */}
            <nav className="hidden xl:flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                if (link.isMegaMenu) {
                  return (
                    <div
                      key={link.label}
                      className="relative py-2 group"
                      onMouseEnter={handleMouseEnterServices}
                      onMouseLeave={handleMouseLeaveServices}
                    >
                      <button
                        onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                        className={`flex items-center gap-1 text-sm font-bold tracking-wide transition-colors cursor-pointer py-1 ${
                          isMegaMenuOpen || pathname?.startsWith("/services")
                            ? "text-[#E8972F]"
                            : "text-[#0D5C5C] hover:text-[#E8972F]"
                        }`}
                        aria-expanded={isMegaMenuOpen}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isMegaMenuOpen ? "rotate-180 text-[#E8972F]" : "text-slate-400 group-hover:text-[#E8972F]"
                          }`}
                        />
                      </button>
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-[#E8972F] transition-all duration-300 ${
                        isMegaMenuOpen || pathname?.startsWith("/services") ? "w-full" : "w-0 group-hover:w-full"
                      }`}></span>

                      {/* DESKTOP MEGA-MENU DROPDOWN PANEL */}
                      <AnimatePresence>
                        {isMegaMenuOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="fixed left-0 right-0 top-[100%] w-full bg-white shadow-2xl border-t border-[#E5E7EB] py-8 px-4 sm:px-8 rounded-b-3xl z-50 pointer-events-auto"
                          >
                            <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 text-left">
                              {/* COLUMN 1: Safety Nets (10 Services) */}
                              <div className="col-span-5 bg-[#F8FAFC] p-6 rounded-2xl border border-[#E5E7EB]">
                                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200">
                                  <Shield className="w-5 h-5 text-[#E8972F]" />
                                  <h3 className="text-base font-extrabold text-[#0D5C5C]">
                                    Safety Nets <span className="text-xs font-semibold text-slate-500">(10 Services)</span>
                                  </h3>
                                </div>
                                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                                  {safetyNetsServices.map((item) => (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      onClick={() => setIsMegaMenuOpen(false)}
                                      className="text-xs font-semibold text-slate-700 hover:text-[#E8972F] hover:translate-x-1 transition-all duration-200 py-1 flex items-center gap-1.5 group"
                                    >
                                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-[#E8972F] transition-colors"></span>
                                      <span className="truncate">{item.name}</span>
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              {/* COLUMN 2: Invisible Grills (6 Services) */}
                              <div className="col-span-4 bg-[#F8FAFC] p-6 rounded-2xl border border-[#E5E7EB]">
                                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200">
                                  <Eye className="w-5 h-5 text-[#E8972F]" />
                                  <h3 className="text-base font-extrabold text-[#0D5C5C]">
                                    Invisible Grills <span className="text-xs font-semibold text-slate-500">(6 Services)</span>
                                  </h3>
                                </div>
                                <div className="flex flex-col gap-2">
                                  {invisibleGrillsServices.map((item) => (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      onClick={() => setIsMegaMenuOpen(false)}
                                      className="text-xs font-semibold text-slate-700 hover:text-[#E8972F] hover:translate-x-1 transition-all duration-200 py-1 flex items-center gap-1.5 group"
                                    >
                                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-[#E8972F] transition-colors"></span>
                                      <span>{item.name}</span>
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              {/* COLUMN 3: Cloth Hangers (2 Services) + Promo Card */}
                              <div className="col-span-3 flex flex-col justify-between">
                                <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-[#E5E7EB] mb-4">
                                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-200">
                                    <Settings className="w-4 h-4 text-[#E8972F]" />
                                    <h3 className="text-sm font-extrabold text-[#0D5C5C]">
                                      Cloth Hangers <span className="text-[11px] font-semibold text-slate-500">(2)</span>
                                    </h3>
                                  </div>
                                  <div className="flex flex-col gap-2">
                                    {clothHangersServices.map((item) => (
                                      <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsMegaMenuOpen(false)}
                                        className="text-xs font-semibold text-slate-700 hover:text-[#E8972F] hover:translate-x-1 transition-all duration-200 py-1 flex items-center gap-1.5 group"
                                      >
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-[#E8972F] transition-colors"></span>
                                        <span>{item.name}</span>
                                      </Link>
                                    ))}
                                  </div>
                                </div>

                                {/* Promo Consultation Card */}
                                <div className="bg-[#F0F7F7] p-5 rounded-2xl border border-[#F2D2BD] flex flex-col gap-2.5">
                                  <span className="text-[10px] font-extrabold text-[#0D5C5C] uppercase tracking-wider">Free Guidance</span>
                                  <h4 className="text-xs font-bold text-[#0D5C5C] leading-snug">Not sure what you need?</h4>
                                  <p className="text-[11px] text-slate-600 leading-tight">Get a free consultation &amp; on-site estimate across Bangalore.</p>
                                  <Link
                                    href="/contact"
                                    onClick={() => setIsMegaMenuOpen(false)}
                                    className="mt-1 bg-[#E8972F] hover:bg-[#F5B054] text-white font-extrabold shadow-md rounded-xl text-xs py-2 px-3 flex items-center justify-center gap-1.5 transition-all"
                                  >
                                    <span>Get Free Quote</span>
                                    <ArrowRight className="w-3 h-3" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <div key={link.label} className="relative py-2 group">
                    <Link
                      href={link.href}
                      className={`text-sm font-bold tracking-wide transition-colors duration-200 py-1 ${
                        isActive ? "text-[#E8972F]" : "text-[#0D5C5C] hover:text-[#E8972F]"
                      }`}
                    >
                      {link.label}
                    </Link>
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-[#E8972F] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}></span>
                  </div>
                );
              })}
            </nav>

            {/* RIGHT SIDE BUTTONS */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Call Now Button (Sky Blue) */}
              <a
                href="tel:+919550318183"
                className="bg-[#E8972F] hover:bg-[#F5B054] text-white font-extrabold flex items-center gap-2 px-5 py-2.5 rounded-full text-xs shadow-md transition-all"
                aria-label="Call Now"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>

              {/* WhatsApp Button (WhatsApp Green) */}
              <a
                href="https://wa.me/919550318183?text=Hi%20Manikanta%20Safety%20Solutions%2C%20I%20would%20like%20to%20request%20a%20free%20quote%20for%20safety%20nets%2Finvisible%20grills."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold px-4 py-2.5 rounded-full shadow-md transition-all text-xs"
                aria-label="WhatsApp Us"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.005 5.277 5.282 0 11.782 0c3.148.001 6.107 1.227 8.331 3.454 2.224 2.227 3.447 5.189 3.445 8.34-.005 6.505-5.282 11.783-11.784 11.783-2.001-.001-3.973-.513-5.733-1.488L0 24zm6.49-4.22c1.674.993 3.328 1.52 5.232 1.522 5.344 0 9.69-4.346 9.693-9.693.002-2.593-1.002-5.029-2.827-6.856-1.825-1.826-4.26-2.83-6.853-2.83-5.348 0-9.695 4.345-9.698 9.692-.001 1.954.513 3.619 1.547 5.247l-.99 3.614 3.738-.98l.161.096zm12.39-7.142c-.27-.135-1.597-.788-1.848-.88-.25-.091-.433-.135-.615.135-.183.27-.707.88-.867 1.064-.16.183-.32.206-.59.072-1.353-.679-2.355-1.196-3.149-2.55-.213-.364.213-.338.61-.1.356.208.4.27.6.4.2.13.1.25.05.35-.05.1-.515 1.24-.635 1.53-.12.285-.24.3-.51.185-.27-.135-1.144-.421-2.18-1.346-.806-.717-1.35-1.605-1.508-1.876-.158-.27-.017-.417.118-.551.121-.12.27-.315.405-.473.134-.158.18-.27.27-.45.09-.18.045-.337-.023-.472-.067-.135-.615-1.485-.84-2.03-.22-.53-.443-.457-.615-.466-.16-.008-.344-.01-.527-.01-.183 0-.482.068-.733.338-.25.27-.954.934-.954 2.279s.977 2.639 1.114 2.82c.137.18 1.921 2.934 4.654 4.114.65.28 1.157.447 1.554.573.653.208 1.248.179 1.718.109.523-.078 1.598-.654 1.825-1.254.227-.6.227-1.114.159-1.224-.069-.11-.25-.18-.52-.315z" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>

            {/* MOBILE MENU TOGGLE BUTTON */}
            <div className="flex xl:hidden items-center gap-2">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl text-[#0D5C5C] hover:bg-[#F8FAFC] transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[90px] left-0 right-0 z-40 bg-white border-b border-[#E5E7EB] shadow-2xl xl:hidden max-h-[calc(100vh-90px)] overflow-y-auto"
          >
            <div className="px-4 py-6 space-y-4">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  if (link.isMegaMenu) {
                    return (
                      <div key={link.label} className="py-1">
                        <button
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className="w-full flex items-center justify-between py-2 text-base font-bold text-[#0D5C5C]"
                        >
                          <span>{link.label}</span>
                          <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? "rotate-180 text-[#E8972F]" : ""}`} />
                        </button>
                        {mobileServicesOpen && (
                          <div className="pl-4 py-2 space-y-3 border-l-2 border-[#E8972F] my-1 bg-[#F8FAFC] rounded-r-xl p-3">
                            <div className="font-bold text-xs text-[#E8972F] uppercase">Safety Nets</div>
                            {safetyNetsServices.map((s) => (
                              <Link key={s.name} href={s.href} onClick={closeMobileMenu} className="block text-xs font-semibold text-slate-700 py-1">
                                {s.name}
                              </Link>
                            ))}
                            <div className="font-bold text-xs text-[#E8972F] uppercase pt-2">Invisible Grills</div>
                            {invisibleGrillsServices.map((s) => (
                              <Link key={s.name} href={s.href} onClick={closeMobileMenu} className="block text-xs font-semibold text-slate-700 py-1">
                                {s.name}
                              </Link>
                            ))}
                            <div className="font-bold text-xs text-[#E8972F] uppercase pt-2">Cloth Hangers</div>
                            {clothHangersServices.map((s) => (
                              <Link key={s.name} href={s.href} onClick={closeMobileMenu} className="block text-xs font-semibold text-slate-700 py-1">
                                {s.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className={`py-2 text-base font-bold transition-colors ${
                        pathname === link.href ? "text-[#E8972F]" : "text-[#0D5C5C]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Actions */}
              <div className="pt-4 border-t border-[#E5E7EB] flex flex-col gap-2.5">
                <a
                  href="tel:+919550318183"
                  className="bg-[#E8972F] hover:bg-[#F5B054] text-white py-3 text-center rounded-full text-sm font-extrabold flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 95503 18183 (Primary)</span>
                </a>
                <a
                  href="tel:+917013818183"
                  className="bg-[#0D5C5C] text-white hover:bg-[#1B6868] py-3 text-center rounded-full text-sm font-extrabold flex items-center justify-center gap-2 transition-colors border border-[#1B6868]"
                >
                  <Phone className="w-4 h-4 text-[#E8972F]" />
                  <span>Call +91 70138 18183 (Alt)</span>
                </a>
                <a
                  href="https://wa.me/919550318183?text=Hi%20Manikanta%20Safety%20Solutions%2C%20I%20would%20like%20to%20request%20a%20free%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white py-3 text-center rounded-full text-sm font-extrabold flex items-center justify-center gap-2"
                >
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href="mailto:info.manikantasafetynets@gmail.com"
                  className="bg-slate-100 hover:bg-slate-200 text-[#0D5C5C] py-3 text-center rounded-full text-sm font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#0D5C5C]" />
                  <span>info.manikantasafetynets@gmail.com</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
