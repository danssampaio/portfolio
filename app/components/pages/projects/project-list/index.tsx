import Link from "next/link";
import { ProjectCard } from "./project-card";

export const ProjectsList = () => {
  return (
    <section className="container py-16 grid grid-col-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      <Link href="/projects/PROEX">
        <ProjectCard />
      </Link>
    </section>
  );
};
