import { SectionTitle } from "@/app/components/section-title";
import { ExperienceItem } from "./experience-item";

export const WorkExperience = () => {
  return (
    <section className="container flex flex-col md:flex-row py-16 gap-10 md:gap-4 lg:gap-16">
      <div className="max-w-[420px]">
        <SectionTitle
          subtitle="experiências"
          title="Experiência Profissional"
        />
        <p className="text-neutral-400 mt-6 text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
          omnis voluptatum dolores sit dignissimos, culpa cumque ut obcaecati
          delectus at magnam quia minima sapiente iste quam? Sit odio architecto
          perferendis.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <ExperienceItem />
        <ExperienceItem />
      </div>
    </section>
  );
};
