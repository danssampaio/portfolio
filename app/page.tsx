"use client";

import { HeroSection } from "./components/pages/home/hero-section";
import { KnowTechs } from "./components/pages/home/know-techs";

export default function Home() {
  return (
    <>
    <div className="bg-hero-image bg-fixed">
      <HeroSection />
      <KnowTechs />
    </div>
    </>
  );
}
