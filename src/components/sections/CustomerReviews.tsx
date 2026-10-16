"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Quote, Sparkles } from "lucide-react";

export default function CustomerReviews() {
  const testimonials = [
    {
      name: "Rohit & Neha Sengupta",
      locality: "Whitefield, Bangalore",
      service: "Balcony Invisible Grills",
      rating: 5,
      date: "June 2026",
      comment:
        "We shifted to a 17th floor high-rise in Whitefield and were terrified about balcony safety for our 3-year-old daughter. Manikanta Safety Solutions installed SS316 marine-grade invisible grills. The view is completely open and the wire tension is rock solid. Best decision for our home!",
    },
    {
      name: "Harish Varma",
      locality: "Electronic City Phase 1, Bangalore",
      service: "Children Safety Nets",
      rating: 5,
      date: "May 2026",
      comment:
        "Extremely responsive and professional. The rigging team arrived within hours of our inquiry in Electronic City, performed precision concrete anchoring, and vacuum-cleaned all drilling dust before handing over the 10-year replacement warranty card.",
    },
    {
      name: "Meera Chandrasekhar",
      locality: "Indiranagar, Bangalore",
      service: "Pigeon Safety Nets & Spikes",
      rating: 5,
      date: "July 2026",
      comment:
        "Pigeons were nesting on top of our AC outdoor units and balcony ledges. Manikanta Safety Solutions fitted durable translucent netting and stainless steel spikes. Our balcony is clean, fresh, and bird-free without any ugly mesh obstruction.",
    },
    {
      name: "Gautam & Swati Hegde",
      locality: "HSR Layout Sector 3, Bangalore",
      service: "Ceiling Cloth Drying Hangers",
      rating: 5,
      date: "April 2026",
      comment:
        "The 6-rod stainless steel ceiling hoist rack completely transformed our compact utility balcony. Lowering and raising rods with the smooth dual-pulley line is effortless even with wet heavy blankets. Superb build quality!",
    },
    {
      name: "Col. Sanjeev Bakshi (Retd.)",
      locality: "Hebbal, Bangalore",
      service: "Balcony Invisible Grills",
      rating: 5,
      date: "June 2026",
      comment:
        "Living near Hebbal Lake with high wind gusts, we wanted structural reliability. The diamond-drilled tracks and certified SS316 cables with transparent nylon wrap look magnificent and keep our Golden Retriever completely safe.",
    },
    {
      name: "Kavitha Ranganathan",
      locality: "Koramangala 4th Block, Bangalore",
      service: "Window Invisible Grills",
      rating: 5,
      date: "May 2026",
      comment:
        "We replaced dark, prison-like iron bars with Manikanta Safety Solutions invisible grills. Our bedrooms receive glorious natural breeze and light, with zero compromise on child protection. Highly recommend proprietor Manikanta and his crew!",
    },
  ];

  return (
    <section className="py-24 bg-[#063333] text-white scroll-mt-12" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#E8972F]/20 border border-[#E8972F]/40 text-[#F5B054] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#E8972F]" />
            <span>Verified Bangalore Homeowner Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Real Stories from High-Rise Residents Across Bangalore
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Discover why hundreds of families, pet owners, and apartment associations trust Manikanta Safety Solutions for dependable high-altitude perimeter safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="p-7 rounded-3xl bg-[#094747] border border-[#1B6868]/60 flex flex-col justify-between hover:border-[#E8972F] transition-all shadow-md group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#E8972F]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#1B6868] group-hover:text-[#E8972F] transition-colors" />
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6 italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#1B6868]/60 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{review.name}</h4>
                  <div className="flex items-center gap-1 text-slate-400 text-[11px] mt-0.5">
                    <MapPin className="w-3 h-3 text-[#E8972F]" />
                    <span>{review.locality}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-[#E8972F] bg-[#E8972F]/10 px-2 py-1 rounded-md block">
                    {review.service}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
