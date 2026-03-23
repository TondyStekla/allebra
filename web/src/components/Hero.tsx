"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] opacity-[0.07]">
          <svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="400" cy="400" r="400" fill="url(#hero-grad)" />
            <defs>
              <linearGradient id="hero-grad" x1="0" y1="0" x2="800" y2="800">
                <stop stopColor="#56D69B" />
                <stop offset="1" stopColor="#CAE52C" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-[0.04] translate-y-1/2 -translate-x-1/4">
          <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="300" cy="300" r="300" fill="url(#hero-grad2)" />
            <defs>
              <linearGradient id="hero-grad2" x1="0" y1="0" x2="600" y2="600">
                <stop stopColor="#CAE52C" />
                <stop offset="1" stopColor="#56D69B" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center text-sm font-bold tracking-[0.15em] uppercase text-primary">
              Boutique SAP Consultancy
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-balance"
          >
            SAP Expertise
            <br />
            That Works.{" "}
            <span className="gradient-text">No Noise.</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-8 text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed"
          >
            Allebra is a boutique SAP consultancy built on senior delivery and
            measurable outcomes. We absorb the complexity so your team stays
            focused on the business that matters.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="gradient-bg text-white text-base font-bold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 text-center"
            >
              Talk to an Expert
            </a>
            <a
              href="#how-we-work"
              className="group text-base font-bold px-8 py-4 rounded-full border-2 border-gray-200 text-dark hover:border-primary hover:text-primary transition-all duration-300 text-center"
            >
              See How We Work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
