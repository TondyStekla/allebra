"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import SectionLabel from "./SectionLabel";

const services = [
  {
    title: "SAP Development",
    description:
      "Custom ABAP development, SAP Fiori/UI5 applications, system integrations, and bespoke reporting solutions. We extend your SAP landscape to meet the most demanding business requirements.",
  },
  {
    title: "SAP Consulting",
    description:
      "End-to-end project guidance — from greenfield implementations and S/4HANA migrations to module-specific optimizations. Our certified consultants bring deep cross-industry expertise to every engagement.",
  },
  {
    title: "SAP Support & Optimization",
    description:
      "Proactive system monitoring, performance tuning, and continuous improvement services. We ensure your SAP environment operates at peak efficiency with minimal downtime.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-36 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div variants={fadeInUp}>
            <SectionLabel label="Our Expertise" />
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
          >
            Comprehensive{" "}
            <span className="gradient-text">SAP Solutions</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            From strategy to execution — we deliver measurable results across
            the entire SAP lifecycle
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              className="group relative bg-white rounded-2xl p-8 lg:p-10 border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
            >
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Bottom gradient accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 gradient-bg rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
