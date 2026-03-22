"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyAllebra from "@/components/WhyAllebra";
import HowWeWork from "@/components/HowWeWork";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyAllebra />
        <HowWeWork />
        <Services />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
