"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative overflow-hidden rounded-3xl gradient-navy px-8 py-16 sm:px-16 sm:py-24 lg:px-24 lg:py-32 text-center"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
            <svg viewBox="0 0 400 400" fill="none">
              <circle cx="200" cy="200" r="200" fill="url(#contact-grad)" />
              <defs>
                <linearGradient id="contact-grad" x1="0" y1="0" x2="400" y2="400">
                  <stop stopColor="#56D69B" />
                  <stop offset="1" stopColor="#CAE52C" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 w-72 h-72 opacity-10 -translate-x-1/3 translate-y-1/3">
            <svg viewBox="0 0 300 300" fill="none">
              <circle cx="150" cy="150" r="150" fill="url(#contact-grad2)" />
              <defs>
                <linearGradient id="contact-grad2" x1="0" y1="0" x2="300" y2="300">
                  <stop stopColor="#CAE52C" />
                  <stop offset="1" stopColor="#56D69B" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="relative z-10">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance"
            >
              Your SAP Shouldn&apos;t
              <br className="hidden sm:block" /> Slow You Down.
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg text-white/70 max-w-xl mx-auto leading-relaxed"
            >
              Tell us where the friction is. One conversation is enough to know
              if we&apos;re the right fit — and what we&apos;d do about it.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-10">
              <a
                href="mailto:info@allebra.com"
                className="inline-flex items-center gap-3 bg-white text-navy text-base font-bold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-black/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 5h14l-7 5-7-5z" />
                  <rect x="2" y="4" width="16" height="12" rx="2" />
                </svg>
                Talk to an Expert
              </a>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
