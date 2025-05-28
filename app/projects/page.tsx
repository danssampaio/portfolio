import { ProjectsPageData } from "../types/pages-info";
import { fetchHygraphQuery } from "../utils/fetch-hygraph-query";
import { lazy, Suspense } from "react";

export const metadata = {
  title: "Projetos",
  description:
    "Explore os projetos desenvolvidos, com foco em tecnologias modernas e soluções criativas para diversos desafios. Veja descrições, imagens e stacks utilizadas.",
};

const getPageData = async (): Promise<ProjectsPageData> => {
  const query = `
    query ProjectsQuery {
      projects {
        shortDescription
        slug
        title
        thumbnail {
          url
        }
        technologies {
          name
        }
      }
    }
    `;

  return fetchHygraphQuery(query, 1000 * 60 * 60 * 24);
};

const PageIntroduction = lazy(
  () => import("../components/pages/projects/page-introduction")
);
const ProjectsList = lazy(
  () => import("../components/pages/projects/project-list")
);

export default async function Projects() {
  const { projects } = await getPageData();

  return (
    <>
      <Suspense fallback={<p>Carregando Componente...</p>}>
        <PageIntroduction />
      </Suspense>
      <Suspense fallback={<p>Carregando Componente...</p>}>
        <ProjectsList projects={projects} />
      </Suspense>
    </>
  );
}
