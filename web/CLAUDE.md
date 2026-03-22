# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server**: `npm run dev` (Next.js 16 with Turbopack)
- **Build**: `npm run build` (standalone output)
- **Start**: `npm run start`
- **Lint**: `npm run lint`

## Tech Stack

- **Next.js 16** with Turbopack, standalone output mode
- **React 19**, all page components are client components (`"use client"`)
- **TypeScript** with strict mode, path alias `@/*` → `./src/*`
- **Tailwind CSS v4** via `@tailwindcss/postcss` (modern CSS variables approach in `globals.css`)
- **Framer Motion** for scroll-triggered and interactive animations

## Architecture

Single-page marketing site. `page.tsx` composes all sections in order:
Navbar → Hero → WhyAllebra → HowWeWork → Services → Clients → Contact → Footer

- `src/app/layout.tsx` — server component, handles metadata/SEO and font loading (Sen + Barlow via `next/font/google`)
- `src/app/page.tsx` — client component composing all sections
- `src/components/` — one file per section, all client components
- `src/lib/animations.ts` — shared Framer Motion variants (`fadeInUp`, `staggerContainer`)
- `src/components/SectionLabel.tsx` — reusable uppercase section label component

## Assets

- `src/app/icon.png` & `src/app/apple-icon.png` — favicon (Allebra color piktogram, auto-detected by Next.js)
- `public/images/logo-color.png`, `logo-white.png`, `logo-black.png` — Allebra logo variants
- `public/images/clients/` — customer logos (PNG + SVG), used in the infinite-scroll carousel in `Clients.tsx`
- Source logos live in repo root: `Logo/` (Allebra) and `customers/` (client logos) — sync to `public/images/` when updated

## Design System (globals.css)

Key color tokens defined as Tailwind v4 CSS variables:
- `--color-primary`: `#56D69B` (green)
- `--color-lime`: `#CAE52C` (accent)
- `--color-navy`: `#023955` (dark blue, used in CTA/footer backgrounds)
- `--color-dark`: `#1A1A1A`

Utility classes: `.gradient-text`, `.gradient-bg`, `.gradient-bg-reverse`, `.gradient-navy`

Custom animations in `globals.css`: `.animate-scroll` (infinite horizontal scroll for logo carousel, pauses on hover)

Fonts: Sen (body, `--font-sen`) and Barlow (secondary, `--font-barlow`)

## Patterns

- All sections use `whileInView` with `staggerContainer`/`fadeInUp` animation variants
- Interactive hover animations via Framer Motion `whileHover` (e.g. stats scale on hover)
- Responsive: mobile-first with `sm:`, `md:`, `lg:` breakpoints
- Container pattern: `max-w-7xl mx-auto px-6 lg:px-8`
- No component library — pure Tailwind styling
- `SectionLabel` used consistently for all section sub-labels (uppercase, green, tracked)

## External Links

- Instagram: `https://www.instagram.com/allebra_it`
- LinkedIn: see `Footer.tsx` for current URL
