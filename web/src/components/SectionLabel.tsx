"use client";

interface SectionLabelProps {
  label: string;
}

export default function SectionLabel({ label }: SectionLabelProps) {
  return (
    <span className="inline-block text-sm font-bold tracking-[0.2em] uppercase text-primary mb-4">
      {label}
    </span>
  );
}
