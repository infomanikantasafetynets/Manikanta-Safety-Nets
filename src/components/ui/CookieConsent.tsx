"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("ram_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("ram_cookie_consent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("ram_cookie_consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50 bg-[#0D5C5C] text-white p-5 rounded-2xl shadow-2xl border border-[#1B6868] backdrop-blur-md animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-[#E8972F] shrink-0 mt-0.5" />
        <div className="text-xs text-slate-300 leading-relaxed">
          <p className="font-bold text-white mb-1">Privacy &amp; Cookie Policy</p>
          <p>
            We use cookies to improve your browsing experience, analyze local traffic in Bangalore, and enhance security.
            Read our{" "}
            <Link href="/privacy-policy" className="text-[#F5B054] hover:underline font-semibold">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2.5 mt-4 pt-3 border-t border-[#1B6868]">
        <button
          onClick={declineCookies}
          className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          Decline
        </button>
        <button
          onClick={acceptCookies}
          className="px-4 py-1.5 rounded-lg text-xs font-bold bg-[#E8972F] hover:bg-[#F5B054] text-white transition-colors shadow-sm cursor-pointer"
        >
          Accept Cookies
        </button>
      </div>
    </div>
  );
}
