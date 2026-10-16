"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

export default function SideFloatingContact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const sentinel = document.getElementById("complete-header-sentinel");

    if (sentinel && typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        ([entry]) => {
          // When sentinel is intersecting, the header area is still in view at top of page.
          // Once sentinel leaves viewport (isIntersecting === false), header has scrolled past.
          setIsVisible(!entry.isIntersecting);
        },
        {
          root: null,
          threshold: 0,
          rootMargin: "0px",
        }
      );
      observer.observe(sentinel);
    } else {
      // Fallback scroll listener
      const handleScrollFallback = () => {
        setIsVisible(window.scrollY > 110);
      };
      window.addEventListener("scroll", handleScrollFallback, { passive: true });
      handleScrollFallback();
      return () => window.removeEventListener("scroll", handleScrollFallback);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, x: -20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.6, x: -20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed left-3 sm:left-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2.5 sm:gap-3 items-center pointer-events-auto select-none"
          role="region"
          aria-label="Quick contact side buttons"
        >
          {/* CALL BUTTON (Golden-orange branding with periodic gentle shake loop) */}
          <motion.a
            href="tel:+919550318183"
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Call Manikanta Safety Solutions at +91 95503 18183"
            title="Call +91 95503 18183"
            className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#E8972F] hover:bg-[#F5B054] text-white shadow-lg shadow-[#E8972F]/35 transition-colors duration-200 relative group animate-shake-loop-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#E8972F] focus:ring-offset-2"
          >
            <Phone className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-white" />
            {/* Desktop Tooltip pointing to the right */}
            <span className="hidden md:block absolute left-13 sm:left-14 bg-[#0D5C5C] text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              Call +91 95503 18183
            </span>
          </motion.a>

          {/* WHATSAPP BUTTON (Official WhatsApp Green with staggered periodic gentle shake loop) */}
          <motion.a
            href="https://wa.me/919550318183?text=Hi%20Manikanta%20Safety%20Solutions%2C%20I%20would%20like%20to%20request%20a%20free%20quote%20for%20safety%20nets%2Finvisible%20grills."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Chat on WhatsApp with Manikanta Safety Solutions"
            title="Chat on WhatsApp"
            className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-[#25D366]/35 transition-colors duration-200 relative group animate-shake-loop-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
          >
            <svg
              className="w-4.5 h-4.5 sm:w-5 sm:h-5 fill-current text-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.005 5.277 5.282 0 11.782 0c3.148.001 6.107 1.227 8.331 3.454 2.224 2.227 3.447 5.189 3.445 8.34-.005 6.505-5.282 11.783-11.784 11.783-2.001-.001-3.973-.513-5.733-1.488L0 24zm6.49-4.22c1.674.993 3.328 1.52 5.232 1.522 5.344 0 9.69-4.346 9.693-9.693.002-2.593-1.002-5.029-2.827-6.856-1.825-1.826-4.26-2.83-6.853-2.83-5.348 0-9.695 4.345-9.698 9.692-.001 1.954.513 3.619 1.547 5.247l-.99 3.614 3.738-.98l.161.096zm12.39-7.142c-.27-.135-1.597-.788-1.848-.88-.25-.091-.433-.135-.615.135-.183.27-.707.88-.867 1.064-.16.183-.32.206-.59.072-1.353-.679-2.355-1.196-3.149-2.55-.213-.364.213-.338.61-.1.356.208.4.27.6.4.2.13.1.25.05.35-.05.1-.515 1.24-.635 1.53-.12.285-.24.3-.51.185-.27-.135-1.144-.421-2.18-1.346-.806-.717-1.35-1.605-1.508-1.876-.158-.27-.017-.417.118-.551.121-.12.27-.315.405-.473.134-.158.18-.27.27-.45.09-.18.045-.337-.023-.472-.067-.135-.615-1.485-.84-2.03-.22-.53-.443-.457-.615-.466-.16-.008-.344-.01-.527-.01-.183 0-.482.068-.733.338-.25.27-.954.934-.954 2.279s.977 2.639 1.114 2.82c.137.18 1.921 2.934 4.654 4.114.65.28 1.157.447 1.554.573.653.208 1.248.179 1.718.109.523-.078 1.598-.654 1.825-1.254.227-.6.227-1.114.159-1.224-.069-.11-.25-.18-.52-.315z" />
            </svg>
            {/* Desktop Tooltip pointing to the right */}
            <span className="hidden md:block absolute left-13 sm:left-14 bg-[#0D5C5C] text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              WhatsApp Us
            </span>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
