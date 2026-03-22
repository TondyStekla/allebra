"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import SectionLabel from "./SectionLabel";

const stats = [
  { value: 18, suffix: "+", label: "Projects Delivered" },
  { value: 11, suffix: "+", label: "Years of SAP Expertise" },
  { value: 5, suffix: "", label: "Industries Served" },
];

const clients = [
  { name: "SAP", logo: "/images/clients/sap.png" },
  { name: "EY", logo: "/images/clients/EY.png" },
  { name: "DXC Technology", logo: "/images/clients/dxc.png" },
  { name: "E.ON", logo: "/images/clients/E-on.png" },
  { name: "CEZ Group", logo: "/images/clients/cez.png" },
  { name: "Engie", logo: "/images/clients/Logo-engie.svg" },
  { name: "ZSE", logo: "/images/clients/zse.png" },
  { name: "Teamative", logo: "/images/clients/teamative Logo Forrest Green - Standard 1.png" },
  { name: "Seoyon E-Hwa", logo: "/images/clients/seyon.png" },
  { name: "U. S. Steel", logo: "/images/clients/uss.png" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * value);
      setDisplay(start);
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Clients() {
  return (
    <section className="py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div variants={fadeInUp}>
            <SectionLabel label="Trusted Across Europe" />
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
          >
            Results We Can{" "}
            <span className="gradient-text">Stand Behind.</span>
          </motion.h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-3 gap-8 mb-20 lg:mb-24"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="text-center group cursor-default"
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-2 transition-transform duration-300">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm sm:text-base text-gray-500 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client logos carousel */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <SectionLabel label="Trusted by industry leaders" />
          </motion.div>
          <motion.div variants={fadeInUp} className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="flex animate-scroll">
              {[...clients, ...clients].map((client, i) => (
                <div
                  key={`${client.name}-${i}`}
                  className="flex-shrink-0 flex items-center justify-center px-8 lg:px-12"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={140}
                    height={60}
                    className="h-10 lg:h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
