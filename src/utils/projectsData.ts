import { SpecItem } from "./servicesData";

export interface ProjectDetail {
  slug: string;
  name: string;
  category: "safety-nets" | "invisible-grills" | "cloth-hangers";
  service: string;
  serviceName: string;
  location: string;
  locationSlug: string;
  date: string;
  description: string;
  problem: string;
  solution: string;
  materialsUsed: string[];
  process: string[];
  image: string;
  gallery: string[];
  beforeImage: string;
  afterImage: string;
  specs: SpecItem[];
}

export const projectsData: Record<string, ProjectDetail> = {
  "balcony-safety-nets-whitefield": {
    slug: "balcony-safety-nets-whitefield",
    name: "High-Altitude Balcony Fall Protection at Prestige Palms, Whitefield",
    category: "safety-nets",
    service: "balcony-safety-nets",
    serviceName: "Balcony Safety Nets",
    location: "Whitefield, Bangalore",
    locationSlug: "whitefield",
    date: "Completed May 2026",
    description: "Full perimeter containment netting engineered for 14th and 15th story double-balcony apartments facing the tech park corridor in Whitefield.",
    problem: "The resident moved into a 14th-floor high-rise with toddlers and an indoor cat. The modern open horizontal railing design presented high fall risks, while urban pigeons continuously nested on top of the AC outdoor compressor.",
    solution: "Manikanta Safety Solutions deployed certified high-tenacity UV-stabilized copolymer netting with custom stainless steel eyebolt anchoring spaced every 15cm along the concrete ceiling and floor parapet, achieving a rock-solid, child-safe safety barrier with zero view impairment.",
    materialsUsed: [
      "Virgin UV-Stabilized HDPE Copolymer 1.5mm Knotted Webbing",
      "Marine Grade 304 Stainless Steel Expansion Eye-Bolts",
      "High-Tension Braided Perimeter Core Ropes",
      "Non-Corrosive Flush Anchoring Sleeves",
    ],
    process: [
      "Conducted complimentary laser measurement of the three-sided balcony perimeter.",
      "Drilled precision anchor sockets using low-vibration diamond core bits.",
      "Interlaced heavy perimeter boundary cord through the HDPE safety mesh.",
      "Tensioned all anchor points to verify a minimum 120kg point-load capacity.",
      "Cleaned drilling residue with HEPA vacuum and delivered official 10-year warranty card.",
    ],
    image: "/images/materials/Balconynetwork.jpeg",
    gallery: [
      "/images/materials/Balconynetwork.jpeg",
      "/images/services/child.webp",
      "/images/materials/FactoryNets.jpeg",
    ],
    beforeImage: "/images/gallery/before_balcony.webp",
    afterImage: "/images/materials/Balconynetwork.jpeg",
    specs: [
      { label: "Mesh Specification", value: "30mm x 30mm Copolymer HDPE" },
      { label: "Anchor Pitch", value: "15cm interval precision spacing" },
      { label: "Static Load Resistance", value: "Over 140 kg per knot point" },
      { label: "Warranty Issued", value: "10 Years Direct Replacement Guarantee" },
    ],
  },

  "invisible-grills-koramangala": {
    slug: "invisible-grills-koramangala",
    name: "Marine-Grade SS316 Invisible Grills at Raheja Residency, Koramangala",
    category: "invisible-grills",
    service: "balcony-invisible-grills",
    serviceName: "Balcony Invisible Grills",
    location: "Koramangala, Bangalore",
    locationSlug: "koramangala",
    date: "Completed June 2026",
    description: "Panoramic view invisible grill installation across expansive high-rise balconies in a luxury apartment complex in Koramangala.",
    problem: "A homeowner residing on the 10th floor needed robust security for their active pet. Traditional mild-steel grills suffered severe rusting and blocked natural light and breeze.",
    solution: "Manikanta Safety Solutions engineered a marine-grade SS316 cable invisible grill system with transparent DuPont nylon sheathing, secured by anodized structural aluminium guide channels to guarantee lifelong rust resistance and unobstructed 180-degree skyline views.",
    materialsUsed: [
      "SS316 Marine-Grade Multi-Strand Stainless Steel Wire Core (7x7)",
      "High-Elasticity Clear DuPont Nylon Extrusion Coating",
      "Structural Grade T6 Powder-Coated Aluminium Mounting Profiles",
      "Tamper-Proof Internal Stainless Lock-Bush Fasteners",
    ],
    process: [
      "Assessed balcony structural slab and wind load variables.",
      "Securely anchored heavy aluminium base tracks into reinforced ceiling and floor slabs.",
      "Fed SS316 marine cables continuously through precision-spaced nylon roller tracks.",
      "Applied calibrated hydraulic tensioning across all vertical lines (3-inch pitch).",
      "Performed acoustic resonance and tension stability verification.",
    ],
    image: "/images/services/shyambalconygrills.jpg",
    gallery: [
      "/images/services/shyambalconygrills.jpg",
      "/images/services/shyamchildreninvisiblegrills.jpg",
      "/images/services/Shayamstaircase-grills.jpg",
    ],
    beforeImage: "/images/gallery/before_balcony.webp",
    afterImage: "/images/services/shyambalconygrills.jpg",
    specs: [
      { label: "Cable Composition", value: "SS316 Marine Stainless (Bite & Rust Proof)" },
      { label: "Cable Pitch", value: "75mm (3 Inches) Architectural Spacing" },
      { label: "Breaking Force", value: "400+ kg tensile limit per cable" },
      { label: "Corrosion Protection", value: "100% Weather Resistant" },
      { label: "Warranty Issued", value: "10+ Years Anti-Rust & Tension Guarantee" },
    ],
  },

  "ceiling-hangers-indiranagar": {
    slug: "ceiling-hangers-indiranagar",
    name: "Space-Maximizing Pulley Cloth Drying System at Defence Colony, Indiranagar",
    category: "cloth-hangers",
    service: "ceiling-cloth-hangers",
    serviceName: "Ceiling Cloth Hangers",
    location: "Indiranagar, Bangalore",
    locationSlug: "indiranagar",
    date: "Completed July 2026",
    description: "Installation of a 6-pipe independent dual-pulley drying hoist system inside a compact apartment utility balcony in Indiranagar.",
    problem: "A family living in a 3-BHK apartment struggled with heavy metal folding drying stands that consumed the entire balcony walkway, blocked airflow, and hindered access to the washing machine.",
    solution: "Manikanta Safety Solutions custom-mounted a heavy-duty 6-rod SS304 ceiling pulley drying system, allowing the homeowner to lower rods individually to chest level and hoist heavy wet laundry to the ceiling effortlessly.",
    materialsUsed: [
      "SS304 Rustproof Seamless Stainless Steel Drying Tubes",
      "Ultra-Smooth Low-Friction Nylon Pulley Wheels",
      "High-Tensile Braided Nylon Hoist Cords",
      "Wall-Mounted Heavy-Duty Locking Cleat Plate",
    ],
    process: [
      "Mapped ceiling electrical and plumbing runs to establish safe anchor points.",
      "Bolted dual-bearing ceiling pulley brackets firmly into concrete ceiling slab.",
      "Threaded tangle-free nylon cords and secured stainless steel rods at custom intervals.",
      "Calibrated individual cord locks and tested with 25kg wet laundry weight.",
      "Demonstrated effortless daily operation to the homeowner.",
    ],
    image: "/images/materials/clothhangerwork.jpeg",
    gallery: [
      "/images/materials/clothhangerwork.jpeg",
      "/images/main-images/clothhangerwork2.jpg",
    ],
    beforeImage: "/images/gallery/before_balcony.webp",
    afterImage: "/images/materials/clothhangerwork.jpeg",
    specs: [
      { label: "Rod Configuration", value: "6 Independent SS304 Tubes (6 ft each)" },
      { label: "Total Drying Span", value: "36 Linear Feet of Heavy Drying Capacity" },
      { label: "Pulley Hardware", value: "Sealed Heavy Nylon Bearings" },
      { label: "Warranty Issued", value: "3 Years Operational Warranty" },
    ],
  },
};
