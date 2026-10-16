import { Metadata } from "next";
import Link from "next/link";
import { Home, ShieldCheck, Award, HeartHandshake, CheckCircle2, Clock, FileCheck, Phone, Mail, MapPin } from "lucide-react";
import { generateBreadcrumbSchema } from "@/utils/schema";

export const metadata: Metadata = {
  title: "Terms & Conditions | Manikanta Safety Solutions - Safety Nets & Invisible Grills Bangalore, Karnataka",
  description:
    "Official Terms and Conditions for Manikanta Safety Solutions. Review our transparent service pricing, 10-year warranty certificate guidelines, humane bird control standards, and free measurement terms across Bangalore.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
  openGraph: {
    title: "Terms & Conditions | Manikanta Safety Solutions",
    description:
      "Review terms of service, transparent pricing, warranty commitments, and safety installation policies for Manikanta Safety Solutions across Bangalore.",
    url: "https://manikantasafetysolutions.in/terms-and-conditions",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Manikanta Safety Solutions Terms & Conditions",
      },
    ],
  },
};

export default function TermsAndConditionsPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Terms & Conditions", item: "/terms-and-conditions" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 md:py-16">
      {/* Breadcrumbs Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#E8972F] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-700 font-bold">Terms &amp; Conditions</span>
        </nav>

        {/* Main Content Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/80 shadow-xs">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full mb-3">
                <Award className="w-4 h-4" />
                <span>Fair, Transparent &amp; Ethical Service Standards</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Terms &amp; Conditions
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Effective Date: January 1, 2026 | Last Updated: August 2026
              </p>
            </div>
            <div className="text-right sm:border-l sm:border-slate-100 sm:pl-6 hidden sm:block">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Service Guarantee</span>
              <span className="text-sm font-bold text-emerald-600">10-Year Replacement Warranty</span>
            </div>
          </div>

          {/* Key Standards Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 bg-emerald-50/40 border border-emerald-100 rounded-2xl mb-10">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-900">100% Free Site Visits</h4>
                <p className="text-xs text-slate-600 mt-0.5">Free doorstep measurement and material sample demos with zero advance obligation.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <HeartHandshake className="w-5 h-5 text-[#0D5C5C] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-900">Humane &amp; Non-Lethal</h4>
                <p className="text-xs text-slate-600 mt-0.5">100% harmless bird exclusion deterrents complying with wildlife protection laws.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FileCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-900">Official Warranty Card</h4>
                <p className="text-xs text-slate-600 mt-0.5">Written 10-year replacement warranty certificate provided upon installation signoff.</p>
              </div>
            </div>
          </div>

          {/* Terms Content */}
          <div className="space-y-8 text-slate-700 text-sm leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">1</span>
                Agreement to Terms
              </h2>
              <p>
                Welcome to Manikanta Safety Solutions. By visiting our website, submitting an inquiry form, or booking our safety netting, invisible grills, or bird deterrent installation services across Bangalore, you agree to be bound by these Terms and Conditions. These terms ensure a transparent, secure, and professional relationship between Manikanta Safety Solutions (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, or &ldquo;our&rdquo;) and the customer (&ldquo;you&rdquo;).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">2</span>
                Free Site Measurement &amp; Quotation Policy
              </h2>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                <li><strong>No-Obligation Inspections:</strong> We provide 100% complimentary site visits and laser measurements across Whitefield, Koramangala, Indiranagar, HSR Layout, Electronic City, Jayanagar, Marathahalli, and surrounding Bangalore, Karnataka areas.</li>
                <li><strong>Material Demos:</strong> Our technician carries authentic material samples (Garware HDPE nets, SS316 marine-grade cables, polycarbonate bird spikes) so you can inspect material strength before deciding.</li>
                <li><strong>Transparent Written Quotations:</strong> You will receive a written estimate with per-square-foot rates, total area calculations, and material specifications. An inquiry does not bind you until you formally approve the written quote.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">3</span>
                Strict Humane &amp; Ethical Bird Control Commitment
              </h2>
              <p className="mb-2">
                Manikanta Safety Solutions strictly adheres to ethical, non-cruel, and humane pest deterrence standards:
              </p>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 space-y-2">
                <p><strong>✓ Non-Lethal Barrier Only:</strong> Our netting and blunt-tip spikes are engineered solely to prevent birds and pigeons from landing or nesting on balconies and duct shafts. They do not trap, harm, or injure birds.</p>
                <p><strong>✓ Zero Poisons / Glue Boards:</strong> We never use chemical poisons, toxic repellents, or sticky glue traps that could harm birds, domestic pets, or the surrounding environment.</p>
                <p><strong>✓ Wildlife Law Compliance:</strong> All installation methods comply with the Prevention of Cruelty to Animals Act and environmental conservation standards in India.</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">4</span>
                Warranty Terms &amp; Scope of Coverage
              </h2>
              <p className="mb-3">
                Every qualifying installation comes with a written Manufacturer &amp; Workmanship Warranty Certificate:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-emerald-50/50 rounded-xl border border-emerald-100">
                  <strong className="text-emerald-900 block mb-1">What is Covered (10-Year Warranty):</strong>
                  <ul className="list-disc pl-4 space-y-1 text-slate-600">
                    <li>Premature UV degradation or brittleness of HDPE copolymer netting under normal outdoor sunlight.</li>
                    <li>Rust or corrosion on SS316 marine-grade stainless steel cables &amp; anchors.</li>
                    <li>Anchor loosening or cable tension failure during standard domestic usage.</li>
                  </ul>
                </div>
                <div className="p-3 bg-rose-50/50 rounded-xl border border-rose-100">
                  <strong className="text-rose-900 block mb-1">What is Excluded:</strong>
                  <ul className="list-disc pl-4 space-y-1 text-slate-600">
                    <li>Physical damage caused by deliberate cutting with sharp tools, fires, or building demolition.</li>
                    <li>Modifications or re-tensioning attempts by unauthorized third-party handymen.</li>
                    <li>Natural acts of god / force majeure beyond structural design limits.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">5</span>
                Pricing, Invoicing &amp; Payment Terms
              </h2>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-xs">
                <li><strong>No Hidden Costs:</strong> Quotations explicitly include material costs, anchoring hardware (SS hooks / tracks), and skilled labor charges. There are zero unexpected add-on fees.</li>
                <li><strong>Post-Installation Payment:</strong> For standard residential apartments, payment is due upon complete installation and satisfactory customer inspection of the tension and finishing.</li>
                <li><strong>Accepted Payment Modes:</strong> UPI (Google Pay, PhonePe, Paytm), Bank IMPS/NEFT, and Cash upon receipt of payment invoice.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">6</span>
                Installation Site Access &amp; Safety Compliance
              </h2>
              <p className="text-xs text-slate-600">
                The client agrees to provide safe access to balconies, windows, or shafts, and obtain standard residential society permission if required by your apartment association. Our installation technicians are trained in height safety protocols and carry necessary protective equipment to ensure zero structural damage to your building walls.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">7</span>
                Governing Law &amp; Jurisdiction
              </h2>
              <p className="text-xs text-slate-600">
                These terms and any service contracts executed by Manikanta Safety Solutions shall be governed by and construed in accordance with the laws of India. Any disputes arising in connection with our services shall be subject to the exclusive jurisdiction of the competent courts of Bangalore, Karnataka.
              </p>
            </section>

            {/* Quick Contact Box */}
            <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 mt-10">
              <h3 className="text-base sm:text-lg font-bold mb-2 flex items-center gap-2 text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
                Customer Support &amp; Warranty Claims
              </h3>
              <p className="text-xs text-slate-300 mb-6">
                Need to book a warranty inspection, request a re-tensioning visit, or clarify terms? Our customer support desk is available Monday through Sunday:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block">Direct Line</span>
                    <a href="tel:+919550318183" className="font-bold text-white hover:text-emerald-300">
                      +91 95503 18183
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block">Support Email</span>
                    <a href="mailto:info.manikantasafetynets@gmail.com" className="font-bold text-white hover:text-emerald-300">
                      info.manikantasafetynets@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block">Working Hours</span>
                    <span className="font-bold text-white">7:00 AM – 9:00 PM (Daily)</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
