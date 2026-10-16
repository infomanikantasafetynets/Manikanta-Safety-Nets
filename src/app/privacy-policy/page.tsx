import { Metadata } from "next";
import Link from "next/link";
import { Home, ShieldCheck, Lock, Eye, FileText, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { generateBreadcrumbSchema } from "@/utils/schema";

export const metadata: Metadata = {
  title: "Privacy Policy | Manikanta Safety Solutions - Safety Nets & Invisible Grills Bangalore, Karnataka",
  description:
    "Review Manikanta Safety Solutions' official Privacy Policy. We respect customer data privacy, adhere to zero-data-sharing principles, and ensure transparent quote & inspection booking across Bangalore.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Manikanta Safety Solutions",
    description:
      "Official privacy policy regarding customer inquiries, free site visits, and data protection for Manikanta Safety Solutions across Bangalore.",
    url: "https://manikantasafetysolutions.in/privacy-policy",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Manikanta Safety Solutions Privacy Policy",
      },
    ],
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Privacy Policy", item: "/privacy-policy" },
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
          <span className="text-slate-700 font-bold">Privacy Policy</span>
        </nav>

        {/* Main Content Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/80 shadow-xs">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F0F7F7] text-[#E8972F] text-xs font-bold rounded-full mb-3">
                <ShieldCheck className="w-4 h-4" />
                <span>Transparent &amp; Secure Data Standards</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Effective Date: January 1, 2026 | Last Updated: August 2026
              </p>
            </div>
            <div className="text-right sm:border-l sm:border-slate-100 sm:pl-6 hidden sm:block">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Governing Entity</span>
              <span className="text-sm font-bold text-slate-800">Manikanta Safety Solutions</span>
            </div>
          </div>

          {/* Key Privacy Highlights Card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 bg-[#F0F7F7]/50 border border-[#F2D2BD] rounded-2xl mb-10">
            <div className="flex items-start gap-3">
              <Lock className="w-5 h-5 text-[#E8972F] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-900">Zero Data Selling</h4>
                <p className="text-xs text-slate-600 mt-0.5">We never sell, rent, or trade your contact information with external marketing brokers.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-900">Quote Inquiries Only</h4>
                <p className="text-xs text-slate-600 mt-0.5">Your phone &amp; address details are used exclusively to arrange free inspections and quotes.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Eye className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-900">Google Ads Compliant</h4>
                <p className="text-xs text-slate-600 mt-0.5">Strict adherence to Google Ads customer data protection &amp; consent policies.</p>
              </div>
            </div>
          </div>

          {/* Privacy Document Sections */}
          <div className="space-y-8 text-slate-700 text-sm leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-emerald-50 text-[#E8972F] flex items-center justify-center text-xs font-bold">1</span>
                Introduction &amp; Scope
              </h2>
              <p>
                Manikanta Safety Solutions (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting the privacy and personal data of homeowners, property managers, and commercial clients visiting our website (<strong>https://manikantasafetysolutions.in</strong>) and utilizing our professional safety netting, invisible grills, and bird control services across Bangalore.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-emerald-50 text-[#E8972F] flex items-center justify-center text-xs font-bold">2</span>
                Information We Collect
              </h2>
              <p className="mb-3">
                We only collect minimal, necessary information that you voluntarily provide to us when requesting a free inspection, cost estimate, or customer support:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                <li><strong>Contact Information:</strong> Full name, active mobile number, and optional email address.</li>
                <li><strong>Service Details:</strong> Type of service requested (e.g., balcony safety nets, invisible grills, pigeon spikes, cloth drying hangers), estimated balcony/window dimensions, and specific requirements.</li>
                <li><strong>Location &amp; Address:</strong> City, neighborhood/locality (e.g., Whitefield, Koramangala, Indiranagar, HSR Layout, Electronic City, Jayanagar, Marathahalli), and apartment complex name for dispatching technicians.</li>
                <li><strong>Technical Telemetry:</strong> Anonymized browser type, IP address, page views, and referrer URLs collected automatically via standard analytics to improve website performance.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-emerald-50 text-[#E8972F] flex items-center justify-center text-xs font-bold">3</span>
                How We Use Your Information
              </h2>
              <p className="mb-3">We process your information strictly for legitimate service delivery purposes:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-slate-800 block mb-1">✓ Doorstep Free Site Inspection</strong>
                  Scheduling on-site measurements with our certified local technicians at your preferred date and time.
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-slate-800 block mb-1">✓ Transparent Price Quotes</strong>
                  Calculating accurate, upfront per-square-foot cost breakdowns and sharing official warranty cards.
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-slate-800 block mb-1">✓ Direct Communication</strong>
                  Calling or messaging you via WhatsApp/SMS solely regarding your booking status and service delivery.
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-slate-800 block mb-1">✓ After-Sales Warranty Support</strong>
                  Maintaining installation records to honor our 10-year manufacturer replacement warranty certificates.
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-emerald-50 text-[#E8972F] flex items-center justify-center text-xs font-bold">4</span>
                Zero Third-Party Data Sharing &amp; Anti-Spam Policy
              </h2>
              <p>
                <strong>We have a strict Zero Third-Party Data Monetization policy.</strong> We do not sell, rent, license, or transfer your personal contact details to external marketing agencies, lead brokers, or unrelated third parties. Your information remains strictly within Manikanta Safety Solutions and authorized service technicians dispatched to your location.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-emerald-50 text-[#E8972F] flex items-center justify-center text-xs font-bold">5</span>
                Cookies, Google Analytics &amp; Advertising Compliance
              </h2>
              <p className="mb-2">
                Our website utilizes standard cookies, Google Analytics (GA4), and Google Ads conversion tags to measure campaign efficacy, monitor page load speeds, and optimize user experience.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs">
                <li>Cookies capture non-personally identifiable metrics (such as device screen size, operating system, and session duration).</li>
                <li>You can adjust your browser settings to refuse cookies or alert you when cookies are being sent without affecting core website browsing.</li>
                <li>We comply fully with Google Ads advertising guidelines, ensuring truthful representations and clear user privacy opt-outs.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-emerald-50 text-[#E8972F] flex items-center justify-center text-xs font-bold">6</span>
                Data Security &amp; Retention
              </h2>
              <p>
                We implement industry-standard HTTPS encryption (SSL/TLS) across our entire web infrastructure. Form submissions are transmitted securely to prevent unauthorized interception. Customer inspection data is retained only for the duration of the service contract and warranty support period, after which it is securely archived or purged.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-emerald-50 text-[#E8972F] flex items-center justify-center text-xs font-bold">7</span>
                Your Rights &amp; Data Deletion Requests
              </h2>
              <p>
                Under applicable Indian data protection principles (DPDP Act) and international consumer privacy frameworks, you have the right to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs mt-2">
                <li>Request access to the personal data we hold about your installation inquiry.</li>
                <li>Request correction of inaccurate phone numbers, addresses, or service specifications.</li>
                <li>Request immediate deletion of your contact records from our active customer database by sending an email to our privacy team.</li>
              </ul>
            </section>

            {/* Contact / Grievance Card */}
            <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 mt-10">
              <h3 className="text-base sm:text-lg font-bold mb-2 flex items-center gap-2 text-[#E8972F]">
                <FileText className="w-5 h-5" />
                Contact Our Privacy &amp; Support Team
              </h3>
              <p className="text-xs text-slate-300 mb-6">
                If you have questions regarding this Privacy Policy, wish to exercise your data rights, or want to verify our safety netting certifications, please reach out to our dedicated team:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 text-[#E8972F] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block">Helpline</span>
                    <a href="tel:+919550318183" className="font-bold text-white hover:text-amber-300">
                      +91 95503 18183
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 text-[#E8972F] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block">Email Inquiries</span>
                    <a href="mailto:info.manikantasafetynets@gmail.com" className="font-bold text-white hover:text-amber-300">
                      info.manikantasafetynets@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 text-[#E8972F] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block">Operating Region</span>
                    <span className="font-bold text-white">All Major Cities, Bangalore, Karnataka</span>
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
