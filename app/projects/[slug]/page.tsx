import { ProjectDetails } from "@/app/components/pages/project/project-details";
import { ProjectSections } from "@/app/components/pages/project/project-sections";
import { ProjectPageData } from "@/app/types/pages-info";
import { fetchHygraphQuery } from "@/app/utils/fetch-hygraph-query";
import { notFound } from "next/navigation";

type ProjectProps = {
  params: {
    slug: string;
  };
};

const getPageDetails = async (slug: string): Promise<ProjectPageData> => {
  const query = `
    query ProjectQuery {
      project(where: {slug: "${slug}"}) {
        pageThumbnail {
          url
        }
        thumbnail {
          url
        }
        sections {
          title
          description
          image {
            url
          }
        }
        title
        shortDescription
        description {
          raw
          text
        }
        technologies {
          name
        }
        liveProjectUrl
        githubUrl
      }
    }
    `;

  return fetchHygraphQuery(query, 1000 * 60 * 60 * 24);
};

export default async function Project({ params: {slug} }: ProjectProps) {
  const { project } = await getPageDetails(slug);
  
  if (!project?.title) return notFound()

  return (
    <>
      <ProjectDetails project={project}/>
      <ProjectSections projectSections={project.sections}/>
    </>
  );
}
