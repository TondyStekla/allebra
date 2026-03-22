"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import SectionLabel from "./SectionLabel";

export default function WhyAllebra() {
  return (
    <section id="why-allebra" className="py-24 lg:py-36 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp}>
            <SectionLabel label="Why Allebra" />
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance"
          >
            We Exist Because Most SAP Projects{" "}
            <span className="gradient-text">Fail People.</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-8 text-lg text-gray-600 leading-relaxed"
          >
            SAP complexity is a drag on every organisation that hasn&apos;t
            solved it — and most never fully do. We built Allebra because we
            believe businesses deserve senior expertise from day one, not after
            a chain of handoffs and escalations.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg text-gray-600 leading-relaxed"
          >
            Every engagement we take on starts with a simple conviction: your
            people should be driving growth, not managing system friction.
            That&apos;s the only reason we exist — and it shapes every decision
            we make.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
