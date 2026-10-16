"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Home,
  Star,
  MessageSquare,
  MapPin,
  CheckCircle2,
  Phone,
  Sparkles,
  Filter,
} from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  date: string;
  category: "safety-nets" | "invisible-grills" | "cloth-hangers";
  serviceName: string;
  comment: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Dr. K. Srinivasan",
    location: "ITPL Road, Whitefield",
    rating: 5,
    date: "July 2026",
    category: "invisible-grills",
    serviceName: "Balcony Invisible Grills",
    comment:
      "Manikanta Safety Solutions installed SS316 marine-grade invisible grills across our 15th-floor balcony in Whitefield. The sweeping panorama of Bangalore skyline remains completely unhindered while keeping our grandchildren safe. Exceptional engineering and neat finishing!",
  },
  {
    id: 2,
    name: "Cdr. (Retd.) Rajesh Nair",
    location: "4th Block, Koramangala",
    rating: 5,
    date: "June 2026",
    category: "safety-nets",
    serviceName: "Balcony Safety Nets",
    comment:
      "Balcony safety in a multi-story apartment was our top priority. Manikanta Safety Solutions fitted heavy UV-stabilized copolymer netting with high-grade stainless anchors. Zero sagging even during heavy Bangalore monsoon gusts.",
  },
  {
    id: 3,
    name: "Padmavathi Krishnan",
    location: "100 Feet Road, Indiranagar",
    rating: 5,
    date: "June 2026",
    category: "safety-nets",
    serviceName: "Pigeon Safety Nets",
    comment:
      "Pigeons used to soil our drying laundry and balcony plants daily. Manikanta Safety Solutions set up discreet translucent anti-bird nets and an easy 6-pipe ceiling clothes drying system in a single afternoon. Our balcony is finally spotless!",
  },
  {
    id: 4,
    name: "N. Venkatesh",
    location: "Neeladri Nagar, Electronic City",
    rating: 5,
    date: "June 2026",
    category: "safety-nets",
    serviceName: "Monkey Safety Nets",
    comment:
      "Our gated society bordering the green zone frequently faced monkey raids that destroyed plants. Manikanta Safety Solutions installed heavy-gauge monkey proof nets with steel expansion fasteners. It safely keeps them out without harming them.",
  },
  {
    id: 5,
    name: "Anand & Priya Joshi",
    location: "Sector 2, HSR Layout",
    rating: 5,
    date: "May 2026",
    category: "invisible-grills",
    serviceName: "Children Invisible Grills",
    comment:
      "Having young toddlers on a high-floor apartment made open balconies terrifying. The 2-inch wire spacing of Manikanta Safety Solutions child-safe invisible grills eliminated our worries completely without feeling like a cage.",
  },
  {
    id: 6,
    name: "S. Murugesan",
    location: "Kundalahalli Gate, Marathahalli",
    rating: 5,
    date: "May 2026",
    category: "cloth-hangers",
    serviceName: "Ceiling Cloth Hangers",
    comment:
      "Our utility area is compact, and traditional folding stands blocked the washing machine. The ceiling pulley system installed by Manikanta Safety Solutions is sturdy, smooth, and reclaimed 100% of our balcony floor space.",
  },
  {
    id: 7,
    name: "Vikramaditya Rao",
    location: "4th Block, Jayanagar",
    rating: 5,
    date: "May 2026",
    category: "invisible-grills",
    serviceName: "Window Invisible Grills",
    comment:
      "Replaced old rusty iron grilles with sleek SS316 wire grills on our bedroom windows. The rooms feel brighter, airier, and significantly larger. Top-tier service from Manikanta and his team.",
  },
  {
    id: 8,
    name: "Dr. Shalini Deshmukh",
    location: "Judicial Layout, Yelahanka",
    rating: 5,
    date: "April 2026",
    category: "safety-nets",
    serviceName: "Pet Safety Nets",
    comment:
      "Our Persian cat loves sitting by the balcony edge. Manikanta Safety Solutions fitted claw-resistant, high-tensile knotted netting that gives our cat fresh air and gives us total peace of mind.",
  },
  {
    id: 9,
    name: "Raghavendra Hegde",
    location: "Phase 7, JP Nagar",
    rating: 5,
    date: "April 2026",
    category: "invisible-grills",
    serviceName: "Staircase Invisible Grills",
    comment:
      "We needed safety for our duplex open stairwell. Manikanta Safety Solutions designed vertical floor-to-ceiling invisible wire cables that look like a luxury design feature while making the staircase 100% childproof.",
  },
  {
    id: 10,
    name: "Girish Sharma",
    location: "Hulimavu, Bannerghatta Road",
    rating: 5,
    date: "March 2026",
    category: "safety-nets",
    serviceName: "Cricket Practice Nets",
    comment:
      "Constructed a rooftop cricket practice enclosure for our sports academy. The impact-absorbing twine takes hard leather ball hits effortlessly. Highly skilled riggers and prompt delivery.",
  },
  {
    id: 11,
    name: "Deepa Ramachandran",
    location: "Kaikondrahalli, Sarjapur Road",
    rating: 5,
    date: "March 2026",
    category: "safety-nets",
    serviceName: "Anti-Bird Spikes",
    comment:
      "Installed polycarbonate-base stainless bird spikes on our window sills and AC outdoor ledges. Pigeons stopped perching immediately. Very neat installation.",
  },
  {
    id: 12,
    name: "Col. Sanjeev Bakshi",
    location: "Hebbal Kempapura, Hebbal",
    rating: 5,
    date: "February 2026",
    category: "safety-nets",
    serviceName: "Duct Area Safety Nets",
    comment:
      "Our apartment owners association hired Manikanta Safety Solutions to seal all 4 building duct shafts. Their certified rope-access riggers executed the multi-story rigging flawlessly in 2 days.",
  },
];

export default function TestimonialsClient() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredTestimonials =
    activeCategory === "all"
      ? testimonialsData
      : testimonialsData.filter((t) => t.category === activeCategory);

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb navigation */}
        <nav
          className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-[#0D5C5C] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold">Customer Testimonials</span>
        </nav>

        {/* Page Hero Heading */}
        <div className="text-left max-w-3xl mb-12 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0D5C5C] bg-[#F0F7F7] px-3.5 py-1.5 rounded-full inline-block self-start border border-[#B2DCDC]">
            Verified Resident Feedback
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Client Testimonials Across Bangalore
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Read unedited reviews from homeowners, gated societies, parents, and pet lovers who rely on Manikanta Safety Solutions for high-altitude fall protection and bird containment.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-slate-200">
          {[
            { id: "all", label: "All Reviews (12)" },
            { id: "safety-nets", label: "Safety Nets (6)" },
            { id: "invisible-grills", label: "Invisible Grills (5)" },
            { id: "cloth-hangers", label: "Cloth Hangers (1)" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#0D5C5C] text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredTestimonials.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-[#E8972F] transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-[#E8972F]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {review.date}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{review.name}</h4>
                  <div className="flex items-center gap-1 text-slate-400 text-[11px] mt-0.5">
                    <MapPin className="w-3 h-3 text-[#E8972F]" />
                    <span>{review.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-[#0D5C5C] bg-[#F0F7F7] px-2.5 py-1 rounded-md border border-[#B2DCDC]/50 block">
                    {review.serviceName}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="rounded-3xl bg-[#0D5C5C] text-white p-8 sm:p-12 mb-16 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8972F] bg-[#E8972F]/10 border border-[#E8972F]/30 px-3 py-1 rounded-full inline-block mb-3">
              Complimentary Doorstep Inspection
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Ready to Safeguard Your High-Rise Home in Bangalore?
            </h2>
            <p className="text-slate-200 text-xs sm:text-sm">
              Schedule a free laser measurement visit with physical sample demonstration. Written quote with 5 to 10 year warranty.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="tel:+919550318183"
              className="bg-[#E8972F] hover:bg-[#F5B054] text-slate-900 font-bold px-6 py-3.5 rounded-full text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 95503 18183</span>
            </a>
            <a
              href="https://wa.me/919550318183?text=Hi%20Manikanta%20Safety%20Solutions%2C%20I%20would%20like%20to%20request%20a%20free%20quote%20for%20safety%20nets%2Finvisible%20grills."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-6 py-3.5 rounded-full text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>

        {/* Lead Form */}
        <ContactForm />
      </div>
    </div>
  );
}
