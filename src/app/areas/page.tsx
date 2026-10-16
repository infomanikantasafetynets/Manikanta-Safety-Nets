"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Home,
  MapPin,
  Globe,
  ArrowRight,
  Clock,
  CheckCircle2,
  Search,
  Building2,
  Sparkles,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { areasList, AreaDetail } from "@/utils/areasData";
import MapFrame from "@/components/ui/map-frame";
import ServicePromoTicker from "@/components/sections/ServicePromoTicker";

const zoneFilters = [
  { id: "all", name: "All 110+ Areas" },
  { id: "east", name: "East & ITPL / ORR" },
  { id: "south", name: "South & Electronic City" },
  { id: "north", name: "North & Airport Corridor" },
  { id: "west", name: "West & Mysore Road" },
  { id: "central", name: "Central & CBD" },
];

export default function AreasPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeZone, setActiveZone] = useState("all");

  const filteredAreas = useMemo(() => {
    return areasList.filter((area) => {
      const matchesSearch =
        area.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        area.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        area.localities.some((loc) =>
          loc.toLowerCase().includes(searchQuery.toLowerCase())
        );

      if (!matchesSearch) return false;
      if (activeZone === "all") return true;

      const slug = area.slug.toLowerCase();
      if (activeZone === "east") {
        return (
          slug.includes("whitefield") ||
          slug.includes("marathahalli") ||
          slug.includes("indiranagar") ||
          slug.includes("hoodi") ||
          slug.includes("varthur") ||
          slug.includes("kadugodi") ||
          slug.includes("brookefield") ||
          slug.includes("panathur") ||
          slug.includes("bellandur") ||
          slug.includes("mahadevapura") ||
          slug.includes("gunjur") ||
          slug.includes("channasandra") ||
          slug.includes("seegehalli") ||
          slug.includes("k-r-puram") ||
          slug.includes("ramamurthy") ||
          slug.includes("tc-palya") ||
          slug.includes("kaggadasapura") ||
          slug.includes("gm-palya") ||
          slug.includes("doddanekundi") ||
          slug.includes("munnekolala") ||
          slug.includes("kundalahalli")
        );
      }
      if (activeZone === "south") {
        return (
          slug.includes("koramangala") ||
          slug.includes("hsr") ||
          slug.includes("electronic") ||
          slug.includes("jayanagar") ||
          slug.includes("jp-nagar") ||
          slug.includes("bannerghatta") ||
          slug.includes("sarjapur") ||
          slug.includes("btm") ||
          slug.includes("kasavanahalli") ||
          slug.includes("haralur") ||
          slug.includes("kudlu") ||
          slug.includes("singasandra") ||
          slug.includes("bommanahalli") ||
          slug.includes("begur") ||
          slug.includes("hulimavu") ||
          slug.includes("arekere") ||
          slug.includes("gottigere") ||
          slug.includes("kanakapura") ||
          slug.includes("banashankari") ||
          slug.includes("padmanabhanagar") ||
          slug.includes("kumaraswamy") ||
          slug.includes("uttarahalli") ||
          slug.includes("hosa-road") ||
          slug.includes("chandapura") ||
          slug.includes("attibele") ||
          slug.includes("jigani") ||
          slug.includes("dommasandra") ||
          slug.includes("madiwala") ||
          slug.includes("ejipura")
        );
      }
      if (activeZone === "north") {
        return (
          slug.includes("hebbal") ||
          slug.includes("yelahanka") ||
          slug.includes("rt-nagar") ||
          slug.includes("thanisandra") ||
          slug.includes("hennur") ||
          slug.includes("horamavu") ||
          slug.includes("kalyan") ||
          slug.includes("kammanahalli") ||
          slug.includes("devanahalli") ||
          slug.includes("bagalur") ||
          slug.includes("kogilu") ||
          slug.includes("jakkur") ||
          slug.includes("sahakarnagar") ||
          slug.includes("kodigehalli") ||
          slug.includes("rachenahalli") ||
          slug.includes("nagavara") ||
          slug.includes("hrbr") ||
          slug.includes("hbr") ||
          slug.includes("kothanur") ||
          slug.includes("byrathi") ||
          slug.includes("doddaballapur") ||
          slug.includes("budigere") ||
          slug.includes("jalahalli") ||
          slug.includes("vidyaranyapura") ||
          slug.includes("mathikere") ||
          slug.includes("sanjaynagar") ||
          slug.includes("nelamangala")
        );
      }
      if (activeZone === "west") {
        return (
          slug.includes("rajarajeshwari") ||
          slug.includes("kengeri") ||
          slug.includes("nagarbhavi") ||
          slug.includes("vijayanagar") ||
          slug.includes("basaveshwaranagar") ||
          slug.includes("rajajinagar") ||
          slug.includes("malleshwaram") ||
          slug.includes("yeshwanthpur") ||
          slug.includes("peenya") ||
          slug.includes("bidadi")
        );
      }
      if (activeZone === "central") {
        return (
          slug.includes("mg-road") ||
          slug.includes("brigade") ||
          slug.includes("richmond") ||
          slug.includes("shanthi") ||
          slug.includes("wilson") ||
          slug.includes("basavanagudi") ||
          slug.includes("vv-puram") ||
          slug.includes("cooke") ||
          slug.includes("frazer") ||
          slug.includes("benson") ||
          slug.includes("cox") ||
          slug.includes("austin") ||
          slug.includes("vivek") ||
          slug.includes("neelasandra") ||
          slug.includes("domlur") ||
          slug.includes("ulsoor") ||
          slug.includes("sadashivanagar") ||
          slug.includes("banaswadi") ||
          slug.includes("lingarajapuram") ||
          slug.includes("cv-raman")
        );
      }
      return true;
    });
  }, [searchQuery, activeZone]);

  return (
    <div className="bg-slate-50 min-h-screen py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#E8972F] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-[#0D5C5C] font-bold">Bangalore Service Directory</span>
        </nav>

        {/* Hero Header */}
        <div className="bg-gradient-to-r from-[#063333] via-[#0D5C5C] to-[#1B6868] text-white rounded-3xl p-8 sm:p-12 mb-8 shadow-xl border border-white/10 relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-300/30 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" /> Complete Bangalore Coverage • 110+ Locations
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider animate-pulse shadow-md">
                🔥 Flat 20% OFF Deal
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-4">
              Doorstep Safety Net &amp; Invisible Grill Services Across All Bangalore Localities
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6">
              Manikanta Safety Solutions operates mobile rigger squads across 110+ Bangalore neighborhoods. Enjoy 100% free doorstep laser measurements, genuine SS316 marine-grade cables, virgin UV-treated HDPE polymer nets, <strong className="text-white">official 10-year replacement warranty</strong>, and <strong className="text-amber-300">Flat 20% Discount</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E8972F]" />
                <span>Zero-Cost Inspection</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>10-Year Written Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Flat 20% Discount Applied</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#E8972F]" />
                <span>Same-Day Installation</span>
              </div>
            </div>
          </div>
        </div>

        {/* High-Converting 20% Discount & 10 Years Warranty Scrolling Ticker */}
        <div className="mb-10">
          <ServicePromoTicker />
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm mb-10 space-y-5">
          {/* Live Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your Bangalore locality (e.g. Whitefield, HSR Layout, Electronic City, Bellandur, Kanakapura Road)..."
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-900 focus:outline-hidden focus:border-[#0D5C5C] focus:ring-2 focus:ring-[#0D5C5C]/20 transition-all placeholder:text-slate-400 font-medium"
            />
          </div>

          {/* Zone Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-100">
            {zoneFilters.map((zone) => (
              <button
                key={zone.id}
                onClick={() => setActiveZone(zone.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeZone === zone.id
                    ? "bg-[#0D5C5C] text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {zone.name}
              </button>
            ))}
          </div>
        </div>

        {/* Areas Directory Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 110+ Area Cards Grid */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Showing {filteredAreas.length} of {areasList.length} Verified Bangalore Areas
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="group flex flex-col justify-between p-5 bg-white hover:bg-[#F0F7F7] border border-slate-200 hover:border-[#E8972F] hover:shadow-md rounded-2xl transition-all duration-300 relative overflow-hidden"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-[#0D5C5C]/10 group-hover:bg-[#0D5C5C] flex items-center justify-center transition-colors">
                        <MapPin className="w-4 h-4 text-[#0D5C5C] group-hover:text-[#E8972F] transition-colors shrink-0" />
                      </div>
                      <h3 className="text-base font-black text-[#0D5C5C] group-hover:text-[#0D5C5C] transition-colors">
                        {area.name}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-3 line-clamp-2">
                      {area.tagline}
                    </p>

                    {/* Localities Preview Tag */}
                    <div className="flex flex-wrap gap-1 mb-2">
                      {area.localities.slice(0, 3).map((loc, i) => (
                        <span
                          key={i}
                          className="bg-slate-100 text-slate-600 text-[10px] font-semibold px-2 py-0.5 rounded-md"
                        >
                          {loc}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-100 text-xs font-bold text-[#0D5C5C]">
                    <span className="flex items-center gap-1 text-slate-500 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#E8972F]" />
                      <span>Same-Day Visit</span>
                    </span>
                    <span className="flex items-center gap-1 group-hover:translate-x-1 group-hover:text-[#E8972F] transition-all">
                      <span>View Services</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#E8972F]" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {filteredAreas.length === 0 && (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
                <Building2 className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-base font-bold text-slate-900 mb-1">No matching Bangalore areas found</h3>
                <p className="text-xs text-slate-500 mb-4">
                  We cover all surrounding Bangalore localities. Call us directly for immediate doorstep service.
                </p>
                <a
                  href="tel:+919550318183"
                  className="inline-flex items-center gap-2 bg-[#E8972F] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 95503 18183</span>
                </a>
              </div>
            )}
          </div>

          {/* Right: Map & Direct Booking Box */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                Bangalore Service Coverage Map
              </h3>
              <MapFrame areaName="Bangalore, Karnataka" />
            </div>

            <div className="bg-[#0D5C5C] text-white rounded-3xl p-6 border border-[#1B6868] shadow-lg">
              <span className="text-xs font-extrabold text-[#E8972F] uppercase tracking-wider block mb-1">
                Fast Doorstep Response
              </span>
              <h3 className="text-lg font-black mb-2">Can&apos;t Find Your Exact Layout?</h3>
              <p className="text-xs text-slate-200 leading-relaxed mb-4">
                We service all high-rises, gated villa societies, and residential townships across greater Bangalore. Call for immediate dispatch of our inspection team.
              </p>
              <div className="space-y-2">
                <a
                  href="tel:+919550318183"
                  className="w-full flex items-center justify-center gap-2 bg-[#E8972F] hover:bg-[#F5B054] text-slate-900 font-black py-3 rounded-xl transition-colors text-xs shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call 95503 18183</span>
                </a>
                <a
                  href="https://wa.me/919550318183?text=Hi%20Manikanta%20Safety%20Solutions,%20I%20need%20a%20free%20inspection%20in%20Bangalore."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-emerald-600 text-white font-bold py-3 rounded-xl transition-colors text-xs shadow-md"
                >
                  <span>WhatsApp Booking</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
