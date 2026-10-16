"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Hammer, CheckCircle } from "lucide-react";

interface GalleryItem {
  id: number;
  image: string;
  caption: string;
}

const teamWorkGallery: GalleryItem[] = [
  {
    id: 1,
    image: "/images/materials/Balconynetwork.jpeg",
    caption: "High-Altitude Balcony Mesh Anchoring",
  },
  {
    id: 2,
    image: "/images/main-images/Balcony-Grills.jpg",
    caption: "SS316 Marine Wire Hydraulic Tensioning",
  },
  {
    id: 3,
    image: "/images/main-images/clothhanger-work.jpg",
    caption: "Precision Ceiling Pulley Track Mounting",
  },
  {
    id: 4,
    image: "/images/main-images/Duct-Area-3.jpg",
    caption: "Vertical Duct Shaft & Industrial Netting",
  },
  {
    id: 5,
    image: "/images/services/Shayamstaircase-grills.jpg",
    caption: "Duplex Staircase Safety Wire Inspection",
  },
  {
    id: 6,
    image: "/images/materials/BoxCricketnet.jpeg",
    caption: "Terrace Sports Cage & Turf Rigging",
  },
];

export default function Team() {
  return (
    <section className="bg-white py-24 scroll-mt-12" id="team-at-work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0D5C5C] bg-[#F0F7F7] border border-[#B2DCDC] px-3.5 py-1.5 rounded-full inline-block self-center">
            On-Site Craftsmanship
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D5C5C] tracking-tight leading-tight">
            Certified High-Altitude Rigging Crew
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Our experienced in-house technicians are trained in high-rise building safety, rope access, and precision structural anchoring.
          </p>
        </div>

        {/* Visual Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamWorkGallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-[20px] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.10)] border border-[#E5E7EB] hover:border-[#0D5C5C] transition-all duration-300 h-80"
            >
              {/* Technician Image */}
              <Image
                src={item.image}
                alt={`Manikanta Safety Solutions - ${item.caption} in Bangalore`}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                quality={75}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#063333]/90 via-[#0D5C5C]/30 to-transparent"></div>

              {/* Floating Content Badge */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between z-10">
                <div className="flex flex-col gap-1 text-white">
                  <span className="text-sm font-bold tracking-wide">{item.caption}</span>
                  <span className="text-[10px] text-slate-200 font-semibold uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Real Site Installation</span>
                  </span>
                </div>
                <div className="bg-[#0D5C5C] p-2.5 rounded-full text-white shadow-md">
                  <Hammer className="w-4 h-4 text-[#E8972F]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
