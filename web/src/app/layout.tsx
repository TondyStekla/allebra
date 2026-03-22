import type { Metadata } from "next";
import { Sen, Barlow } from "next/font/google";
import "./globals.css";

const sen = Sen({
  subsets: ["latin"],
  variable: "--font-sen",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Allebra — Boutique SAP Consultancy | Senior-Led by Design",
  description:
    "Allebra is a boutique SAP consultancy built on senior delivery and measurable outcomes. SAP Development, Consulting, and Support across Europe.",
  keywords: [
    "SAP consulting",
    "SAP development",
    "ABAP",
    "S/4HANA",
    "SAP Fiori",
    "SAP support",
    "SAP optimization",
    "boutique consultancy",
    "Europe",
  ],
  openGraph: {
    title: "Allebra — SAP Expertise That Works. No Noise.",
    description:
      "Boutique SAP consultancy built on senior delivery and measurable outcomes.",
    type: "website",
    locale: "en_US",
    siteName: "Allebra",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sen.variable} ${barlow.variable}`}>
      <body>{children}</body>
    </html>
  );
}
