"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, MapPin } from "lucide-react";
import MasonryGrid from "@/components/ui/masonry-grid";
import LightboxGallery from "@/components/ui/lightbox-gallery";

interface GalleryPhoto {
  image: string;
  category: "safety-nets" | "invisible-grills" | "cloth-hangers" | "projects" | "team" | "materials" | "apartment";
  categoryLabel: string;
  location: string;
  serviceName: string;
  description: string;
}

const galleryData: GalleryPhoto[] = [
  {
    image: "/images/hero/balconysafetynet.jpg",
    category: "apartment",
    categoryLabel: "Apartment Installations",
    location: "Whitefield, Bangalore, Karnataka",
    serviceName: "Balcony Safety Nets",
    description: "High-rise balcony safety netting installed securely across concrete pillars.",
  },
  {
    image: "/images/main-images/Balcony-Grills.jpg",
    category: "invisible-grills",
    categoryLabel: "Invisible Grills",
    location: "Koramangala, Bangalore, Karnataka",
    serviceName: "Balcony Invisible Grills",
    description: "Elegant SS316 steel wire invisible grills offering panoramic coastal views.",
  },
  {
    image: "/images/materials/clothhangerwork.jpeg",
    category: "cloth-hangers",
    categoryLabel: "Cloth Hangers",
    location: "Indiranagar, Bangalore, Karnataka",
    serviceName: "Ceiling Cloth Hangers",
    description: "Dual-pipe ceiling pulley hanger system drying clothes space-efficiently.",
  },
  {
    image: "/images/materials/Balconynetwork.jpeg",
    category: "team",
    categoryLabel: "Team",
    location: "HSR Layout, Bangalore, Karnataka",
    serviceName: "Manikanta Safety Solutions Technicians",
    description: "Insured field technicians securing brackets at high floor structures.",
  },
  {
    image: "/images/hero/balconysafetynet.jpg",
    category: "materials",
    categoryLabel: "Materials",
    location: "Bangalore, Karnataka Central",
    serviceName: "HDPE Nylon Nets",
    description: "Close-up of UV-stabilized double-locked HDPE safety netting mesh.",
  },
  {
    image: "/images/materials/BoxCricketnet.jpeg",
    category: "safety-nets",
    categoryLabel: "Safety Nets",
    location: "Electronic City, Bangalore, Karnataka",
    serviceName: "Sports Safety Nets",
    description: "Cricket practice pitches netting boundary cage installation.",
  },
  {
    image: "/images/services/child.webp",
    category: "apartment",
    categoryLabel: "Apartment Installations",
    location: "Marathahalli, Bangalore, Karnataka",
    serviceName: "Children Safety Nets",
    description: "Reinforced kid-safe boundary mesh tied securely around open railings.",
  },
  {
    image: "/images/hero/windowgrill.webp",
    category: "invisible-grills",
    categoryLabel: "Invisible Grills",
    location: "Jayanagar, Bangalore, Karnataka",
    serviceName: "Window Invisible Grills",
    description: "SS316 safety wire grids replacing dark iron rods.",
  },
  {
    image: "/images/main-images/cloth-Hangers3.jpg",
    category: "cloth-hangers",
    categoryLabel: "Cloth Hangers",
    location: "Whitefield, Bangalore, Karnataka",
    serviceName: "Balcony Wall Hangers",
    description: "Folding accordion-style wall hangers collapsing flat against the frames.",
  },
  {
    image: "/images/hero/constructionnet.webp",
    category: "projects",
    categoryLabel: "Projects",
    location: "Koramangala, Bangalore, Karnataka",
    serviceName: "Construction Safety Nets",
    description: "Heavy-duty fall protection nets wrapped around concrete pillars.",
  },
  {
    image: "/images/main-images/Duct-Area-3.jpg",
    category: "safety-nets",
    categoryLabel: "Safety Nets",
    location: "Indiranagar, Bangalore, Karnataka",
    serviceName: "Duct Area Safety Nets",
    description: "Open building duct ventilation shaft sealed cleanly to block birds.",
  },
  {
    image: "/images/hero/pigeonnet.jpg",
    category: "safety-nets",
    categoryLabel: "Safety Nets",
    location: "Electronic City, Bangalore, Karnataka",
    serviceName: "Anti-Bird Nets",
    description: "Anti-bird netting secured around building exteriors to protect against pigeons.",
  },
  {
    image: "/images/main-images/monkey-safety.webp",
    category: "safety-nets",
    categoryLabel: "Safety Nets",
    location: "Kanakapura Road, Bangalore, Karnataka",
    serviceName: "Monkey Safety Nets",
    description: "Heavy-duty reinforced monkey defense netting installed around open terrace and balconies.",
  },
  {
    image: "/images/services/mosquito-net.jpg",
    category: "safety-nets",
    categoryLabel: "Safety Nets",
    location: "HSR Layout, Bangalore, Karnataka",
    serviceName: "Mosquito Nets for Windows",
    description: "Magnetic fine mesh mosquito screens custom-fitted for sliding windows and UPVC frames.",
  },
  {
    image: "/images/services/building-duct-pigeon-netting.jpg",
    category: "apartment",
    categoryLabel: "Apartment Installations",
    location: "Sarjapur Road, Bangalore, Karnataka",
    serviceName: "High-Rise Building Facade & Duct Netting",
    description: "Complete 5-story apartment facade and plumbing shaft netting installation.",
  },
  {
    image: "/images/services/balcony-work-real.jpg",
    category: "apartment",
    categoryLabel: "Apartment Installations",
    location: "Bellandur, Bangalore, Karnataka",
    serviceName: "Balcony Fall Protection Netting",
    description: "Heavy-duty UV-stabilized copolymer netting anchored on multi-story apartment balcony.",
  },
  {
    image: "/images/services/cricket-practice-net.jpg",
    category: "projects",
    categoryLabel: "Projects",
    location: "Marathahalli, Bangalore, Karnataka",
    serviceName: "Cricket Practice Box Nets",
    description: "Turf pitch practice netting cage with boundary containment cords.",
  },
  {
    image: "/images/services/bird-spikes-real.jpg",
    category: "safety-nets",
    categoryLabel: "Safety Nets",
    location: "Whitefield, Bangalore, Karnataka",
    serviceName: "Anti-Bird Stainless Spikes",
    description: "SS304 blunt-tip bird deterrent spikes installed along AC outdoor ledges.",
  },
  {
    image: "/images/services/ceiling-cloth-hangers-1.jpg",
    category: "cloth-hangers",
    categoryLabel: "Cloth Hangers",
    location: "Koramangala, Bangalore, Karnataka",
    serviceName: "Dual-Pulley Ceiling Cloth Hangers",
    description: "6-rod independent stainless ceiling drying hoist system freeing 100% balcony space.",
  },
  {
    image: "/images/services/pet-safetynets-real.jpeg",
    category: "safety-nets",
    categoryLabel: "Safety Nets",
    location: "Electronic City, Bangalore, Karnataka",
    serviceName: "Claw-Proof Pet Safety Nets",
    description: "Reinforced scratch-resistant pet netting protecting cats and dogs on high-rise balconies.",
  },
  {
    image: "/images/services/window-grills-real.webp",
    category: "invisible-grills",
    categoryLabel: "Invisible Grills",
    location: "Hebbal, Bangalore, Karnataka",
    serviceName: "Window Invisible Grills",
    description: "Vertical SS316 marine stainless cable invisible grills with maximum light transmission.",
  },
];

const filters = [
  { value: "all", label: "All Photos" },
  { value: "safety-nets", label: "Safety Nets" },
  { value: "invisible-grills", label: "Invisible Grills" },
  { value: "cloth-hangers", label: "Cloth Hangers" },
  { value: "projects", label: "Projects" },
  { value: "team", label: "Team" },
  { value: "materials", label: "Materials" },
  { value: "apartment", label: "Apartments" },
];

export default function GalleryFilterClient() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);

  const filteredPhotos = galleryData.filter(
    (photo) => activeFilter === "all" || photo.category === activeFilter
  );

  const imagesList = filteredPhotos.map((p) => p.image);

  return (
    <div className="flex flex-col gap-10">
      {/* Category Filter Toolbar */}
      <div className="flex flex-wrap gap-2.5 bg-white p-5 rounded-3xl border border-slate-200 shadow-xs justify-center sm:justify-start">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`text-xs sm:text-sm font-bold px-4.5 py-2.5 rounded-full cursor-pointer transition-all ${
              activeFilter === filter.value
                ? "bg-[#0D5C5C] text-white shadow-xs"
                : "bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <MasonryGrid>
        {filteredPhotos.map((photo, index) => (
          <div
            key={index}
            onClick={() => setPhotoIndex(index)}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-md border border-slate-200 transition-all duration-300 cursor-pointer w-full"
          >
            {/* Image */}
            <div className="relative w-full h-64 md:h-80 bg-slate-200">
              <Image
                src={photo.image}
                alt={`Manikanta Safety Solutions - ${photo.serviceName} - ${photo.description}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-103"
              
              loading="lazy"
              quality={75}
            />
              {/* Zoom hover glass overlay */}
              <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/90 p-3 rounded-full text-slate-800 backdrop-blur-xs scale-90 group-hover:scale-100 transition-all duration-300">
                  <Maximize2 className="w-4.5 h-4.5" />
                </div>
              </div>
            </div>

            {/* Meta Footer */}
            <div className="p-5 border-t border-slate-100">
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-slate-500 font-bold uppercase mb-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#E8972F]" />
                <span>{photo.location}</span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-800 mb-1 group-hover:text-[#E8972F] transition-colors">
                {photo.serviceName}
              </h3>
              <p className="text-slate-500 text-[11px] leading-relaxed line-clamp-2">
                {photo.description}
              </p>
            </div>
          </div>
        ))}
      </MasonryGrid>

      {/* Lightbox Trigger Modal */}
      {photoIndex !== null && (
        <LightboxGallery
          images={imagesList}
          serviceName={filteredPhotos[photoIndex].serviceName}
        />
      )}
    </div>
  );
}
