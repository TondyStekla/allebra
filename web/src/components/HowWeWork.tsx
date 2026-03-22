"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import SectionLabel from "./SectionLabel";

const principles = [
  {
    title: "Senior by Design",
    description:
      "Every engagement is led and delivered by certified SAP specialists. No juniors learning on your budget, no account managers standing between you and the people doing the work.",
  },
  {
    title: "Tailored, Not Templated",
    description:
      "We don't recycle playbooks. Before we propose anything, we understand your system landscape, your constraints, and what success looks like for your organisation — specifically.",
  },
  {
    title: "Direct. Accountable. Clear.",
    description:
      "You always know who owns your engagement, what's being delivered, and where things stand. We set clear expectations upfront and hold ourselves to them.",
  },
  {
    title: "Built for the Long Run",
    description:
      "We work with clients who want a trusted partner, not a vendor rotation. The deeper we understand your SAP environment, the more value we create — and we invest accordingly.",
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl mx-auto text-center mb-16 lg:mb-20"
        >
          <motion.div variants={fadeInUp}>
            <SectionLabel label="How We Work" />
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
          >
            Principles,{" "}
            <span className="gradient-text">Not Promises.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {principles.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeInUp}
              className="group relative p-8 lg:p-10 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
            >
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                {p.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {p.description}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 gradient-bg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
