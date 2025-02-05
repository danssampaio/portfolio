"use client";

import { HeroSection } from "./components/pages/home/hero-section";
import { HighlightedProjects } from "./components/pages/home/highlighted-projects";
import { KnowTechs } from "./components/pages/home/know-techs";
import { WorkExperience } from "./components/pages/home/work-experience";

export default function Home() {
  return (
    <>
      <div className="bg-hero-image bg-fixed">
        <HeroSection />
        <KnowTechs />
        <HighlightedProjects />
        <WorkExperience />
      </div>
    </>
  );
}
