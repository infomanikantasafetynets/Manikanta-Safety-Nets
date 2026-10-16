"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Phone, Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { trackFormSubmit } from "@/utils/analytics";

// Zod Validation Schema matching Indian format rules
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().regex(/^[6-9]\d{9}$/, {
    message: "Enter a valid 10-digit Indian mobile number (starts with 6-9).",
  }),
  area: z.string().min(2, { message: "Please specify your Bangalore, Karnataka neighborhood." }),
  service: z.string().min(1, { message: "Please select a service category." }),
  message: z.string().optional(),
  botfield: z.string().optional(), // Honeypot spam block field
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

const servicesList = [
  { value: "balcony-safety-nets", label: "Balcony Safety Nets" },
  { value: "children-safety-nets", label: "Children Safety Nets" },
  { value: "pet-safety-nets", label: "Pet Safety Nets" },
  { value: "pigeon-safety-nets", label: "Pigeon Safety Nets" },
  { value: "sports-nets", label: "Sports Nets" },
  { value: "construction-safety-nets", label: "Construction Safety Nets" },
  { value: "duct-area-safety-nets", label: "Duct Area Safety Nets" },
  { value: "monkey-safety-nets", label: "Monkey Safety Nets" },
  { value: "cricket-practice-nets", label: "Cricket Practice Nets" },
  { value: "anti-bird-spikes", label: "Anti-Bird Spikes" },
  { value: "balcony-invisible-grills", label: "Balcony Invisible Grills" },
  { value: "children-invisible-grills", label: "Children Invisible Grills" },
  { value: "pet-invisible-grills", label: "Pet Invisible Grills" },
  { value: "window-invisible-grills", label: "Window Invisible Grills" },
  { value: "staircase-invisible-grills", label: "Staircase Invisible Grills" },
  { value: "commercial-invisible-grills", label: "Commercial Invisible Grills" },
  { value: "ceiling-cloth-hangers", label: "Ceiling Cloth Hangers" },
  { value: "balcony-cloth-hangers", label: "Balcony Cloth Hangers" },
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      area: "",
      service: "",
      message: "",
      botfield: "",
    },
  });

  const onSubmit = async (data: ContactFormInputs) => {
    // Honeypot spam check - silently reject bots without hitting server
    if (data.botfield) {
      console.warn("Spam bot submission blocked via Honeypot.");
      setStatus("success"); // Confuse the bot into thinking it succeeded
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          location: data.area, // map data.area to API's expected 'location' field
          service: data.service,
          message: data.message,
        }),
      });

      if (response.ok) {
        // Track successful submission inside dataLayer
        trackFormSubmit(data.service, data.area);

        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-[#0D5C5C] text-white py-24 scroll-mt-12" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-black uppercase tracking-widest text-slate-950 bg-[#E8972F] px-3.5 py-1.5 rounded-full inline-block self-start animate-pulse shadow-md">
                🔥 Flat 20% OFF • 10 Years Warranty Included
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Request a Free On-Site Measurement & Pricing Quote
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Fill out the form to schedule a site measurement visit. Our technician will visit your location in Bangalore with material catalogs and share an accurate quotation.
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-xs p-5 rounded-2xl border border-white/10 hover:border-[#E8972F]/50 hover:shadow-md transition-all">
                <div className="p-3 bg-[#E8972F] text-white rounded-xl shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold text-slate-300 block tracking-wider">
                    Direct Phone / Call Booking
                  </span>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <a href="tel:+919550318183" className="text-sm sm:text-base font-bold text-white hover:text-[#E8972F] transition-colors">
                      +91 95503 18183 <span className="text-[10px] font-normal text-slate-300">(Primary)</span>
                    </a>
                    <span className="text-slate-400">|</span>
                    <a href="tel:+917013818183" className="text-sm sm:text-base font-bold text-slate-200 hover:text-[#E8972F] transition-colors">
                      +91 70138 18183 <span className="text-[10px] font-normal text-slate-400">(Alt)</span>
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="mailto:info.manikantasafetynets@gmail.com"
                className="flex items-center gap-4 bg-white/10 backdrop-blur-xs p-5 rounded-2xl border border-white/10 hover:border-[#E8972F]/50 hover:shadow-md transition-all group"
              >
                <div className="p-3 bg-[#E8972F] text-white rounded-xl shrink-0 group-hover:bg-[#F5B054] transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-300 block tracking-wider">
                    Email Inquiry
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#E8972F] transition-colors truncate block max-w-[240px] sm:max-w-none">
                    info.manikantasafetynets@gmail.com
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7 bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-100">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 flex flex-col items-center justify-center gap-4"
              >
                <div className="p-4 bg-emerald-50 rounded-full text-success-green">
                  <CheckCircle2 className="w-16 h-16" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Booking Request Received!</h3>
                <p className="text-slate-500 text-sm max-w-md leading-relaxed">
                  Thank you for reaching out to Manikanta Safety Solutions. Our team will contact you shortly to schedule your free site measurement and share quotation details.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 bg-primary-700 hover:bg-accent-orange hover:bg-accent-hover text-white text-xs font-bold px-6 py-3 rounded-full cursor-pointer transition-colors"
                >
                  Submit Another Request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6" noValidate>
                {status === "error" && (
                  <div className="p-4 bg-red-50 border border-red-100 text-red-700 rounded-xl text-xs flex items-center gap-3" role="alert">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>Something went wrong. Please call us directly or try submitting again.</span>
                  </div>
                )}

                {/* Honeypot Spam Shield Input - Hidden from human eyes */}
                <input
                  type="text"
                  autoComplete="off"
                  {...register("botfield")}
                  className="hidden"
                  tabIndex={-1}
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-slate-700 tracking-wide">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="e.g. Anand Kumar"
                      aria-required="true"
                      aria-invalid={errors.name ? "true" : "false"}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      {...register("name")}
                      className={`w-full bg-slate-50 border px-4 py-3 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#E8972F]/30 transition-all ${
                        errors.name ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-[#E8972F]"
                      }`}
                    />
                    {errors.name && (
                      <span id="name-error" className="text-[10px] text-red-500 font-semibold" role="alert">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-bold text-slate-700 tracking-wide">
                      Mobile Number (WhatsApp Preferred) *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="e.g. 98765 43210"
                      aria-required="true"
                      aria-invalid={errors.phone ? "true" : "false"}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      {...register("phone")}
                      className={`w-full bg-slate-50 border px-4 py-3 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#E8972F]/30 transition-all ${
                        errors.phone ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-[#E8972F]"
                      }`}
                    />
                    {errors.phone && (
                      <span id="phone-error" className="text-[10px] text-red-500 font-semibold" role="alert">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Area in Bangalore */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="area" className="text-xs font-bold text-slate-700 tracking-wide">
                      Your City or Locality in Bangalore *
                    </label>
                    <input
                      type="text"
                      id="area"
                      placeholder="e.g. Whitefield, Koramangala, Indiranagar, Electronic City, HSR Layout..."
                      aria-required="true"
                      aria-invalid={errors.area ? "true" : "false"}
                      aria-describedby={errors.area ? "area-error" : undefined}
                      {...register("area")}
                      className={`w-full bg-slate-50 border px-4 py-3 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#E8972F]/30 transition-all ${
                        errors.area ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-[#E8972F]"
                      }`}
                    />
                    {errors.area && (
                      <span id="area-error" className="text-[10px] text-red-500 font-semibold" role="alert">
                        {errors.area.message}
                      </span>
                    )}
                  </div>

                  {/* Service Selection */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="service" className="text-xs font-bold text-slate-700 tracking-wide">
                      Select Safety Service *
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        aria-required="true"
                        aria-invalid={errors.service ? "true" : "false"}
                        aria-describedby={errors.service ? "service-error" : undefined}
                        {...register("service")}
                        className={`w-full bg-slate-50 border px-4 py-3 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#E8972F]/30 transition-all appearance-none cursor-pointer ${
                          errors.service ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-[#E8972F]"
                        }`}
                      >
                        <option value="">-- Choose Installation --</option>
                        {servicesList.map((item) => (
                          <option key={item.value} value={item.value}>
                            {item.label}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                    {errors.service && (
                      <span id="service-error" className="text-[10px] text-red-500 font-semibold" role="alert">
                        {errors.service.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-slate-700 tracking-wide">
                    Additional Message or Specific Dimensions (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Describe your requirement (e.g. balcony size, pulley hanger rods preference, open windows count etc.)"
                    {...register("message")}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#E8972F] px-4 py-3 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#E8972F]/30 transition-all resize-y"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[#E8972F] hover:bg-[#F5B054] text-white font-black py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-sm focus:outline-hidden focus:ring-2 focus:ring-[#E8972F] focus:ring-offset-2"
                >
                  {status === "loading" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[#0D5C5C] border-t-transparent rounded-full animate-spin" aria-hidden="true"></div>
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Request Free Site Visit & Quote</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
